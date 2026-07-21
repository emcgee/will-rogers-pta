# Will Rogers PTA website — conventions for Claude

Plain static HTML site, deployed by GitHub Pages from the `main` branch root.
No build step: the `.html` files in the repo root ARE the site. Live at
https://www.willrogerspta.com.

## Structure

- One standalone `.html` file per page; filenames match live URLs
  (GitHub Pages serves `/pta-meetings` from `pta-meetings.html`, so old Wix-era
  extensionless links keep working). `dynamic-calendar.html` keeps its legacy name
  for this reason — do not rename pages without adding the old name back as a
  redirect stub.
- `css/style.css` — single shared stylesheet. Theme colors are CSS variables at the
  top (gold `#eec631`, teal `#0286a5`, dark teal/ink `#013845`, mint `#cdeae3`).
  Headings: Corben (Google Fonts). Body: Avenir/system stack.
- `js/site.js` — mobile nav toggle only.
- `images/`, `files/` — assets with human-readable names.

## Critical invariants

1. **Header and footer are duplicated in every page**, marked by
   `<!-- ===== Site header ... -->` / `<!-- ===== Site footer ... -->` comments.
   Any change to nav or footer must be applied to ALL `.html` files (they are
   byte-identical apart from the `class="active"` marker on the current page's
   nav link). Use replace-across-files, then verify with:
   `grep -c 'site-footer' *.html` (every page has exactly one).
2. **Never delete `CNAME`** — it binds the custom domain.
3. New pages: copy an existing page, keep the header/footer blocks intact, add the
   page to the nav on every page only if it belongs in the menu.
4. Internal links use relative `*.html` hrefs (works locally and on Pages).
   External links use `target="_blank" rel="noopener"`.

## Testing changes

Local preview: `python3 -m http.server -d .` then open http://localhost:8000.
Quick regression: check internal hrefs/srcs resolve to files on disk, and confirm
no page references `wixstatic.com` (all assets are local).

## Deploy

`git push` to `main` = deploy. Nothing else. Live in ~1 minute
(check the repo's Actions tab for the pages-build-deployment run).
