# Will Rogers PTA Website

The website for the Will Rogers Learning Community PTA (Santa Monica, CA) —
[willrogerspta.com](https://www.willrogerspta.com).

This is a **plain static site**: every page is a standalone `.html` file, styled by one
shared stylesheet. There is no build step, no framework, and nothing to install.
Pushing to the `main` branch automatically publishes the site via GitHub Pages
(live within about a minute).

## How to make changes

See **[EDITING.md](EDITING.md)** — written for PTA volunteers, no coding experience needed.
The short version: describe your change to Claude, or edit the HTML directly on GitHub,
and the site updates itself when the change lands on `main`.

## What's in here

| Path | What it is |
|---|---|
| `index.html` | Home page |
| `*.html` | One file per page (filenames match the site's URLs) |
| `css/style.css` | The one shared stylesheet (colors, fonts, layout) |
| `js/site.js` | Tiny script for the mobile menu — rarely needs touching |
| `images/` | All images, with readable names |
| `files/` | Downloadable PDFs (reimbursement form, etc.) |
| `CNAME` | Tells GitHub Pages our custom domain — do not delete |
| `EDITING.md` | How-to guide for volunteers |
| `DOMAIN-MIGRATION.md` | One-time runbook for moving the domain off Wix |

## History

Migrated from Wix in July 2026. Hosting is free (GitHub Pages); the only recurring
cost is the annual domain registration (~$11/yr at Cloudflare).
