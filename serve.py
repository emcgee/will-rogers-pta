#!/usr/bin/env python3
"""Local preview server for the Will Rogers PTA site.

GitHub Pages serves /pta-meetings from pta-meetings.html (extensionless URLs).
Python's plain `http.server` does NOT, so use this instead when previewing:

    python3 serve.py            # http://localhost:8000  (Spanish at /es/)
    python3 serve.py 8788       # custom port

It serves /foo from foo.html when foo.html exists, and uses 404.html for
missing pages, matching how the live site behaves.
"""
import http.server, os, sys

ROOT = os.path.dirname(os.path.abspath(__file__))


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)

    def translate_path(self, path):
        fs = super().translate_path(path)
        # Extensionless page? Fall back to the matching .html file.
        if not os.path.exists(fs) and not fs.endswith(".html"):
            html = fs + ".html"
            if os.path.exists(html):
                return html
        return fs

    def send_error(self, code, message=None, explain=None):
        if code == 404:
            page = os.path.join(ROOT, "404.html")
            if os.path.exists(page):
                self.error_message_format = open(page, encoding="utf-8").read()
        super().send_error(code, message, explain)


port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
print(f"Serving {ROOT} at http://localhost:{port}  (Spanish at /es/)  — Ctrl+C to stop")
http.server.ThreadingHTTPServer(("", port), Handler).serve_forever()
