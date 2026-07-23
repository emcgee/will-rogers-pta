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
- `css/style.css` — single shared stylesheet, used by both the English and Spanish
  pages. Brand colors are CSS variables at the top, taken from the logo:
  cyan `#12a8c9`, deep teal `#0e7f96`, ink `#093943`, sun-gold `#f5c02e`,
  sage `#7cc6b0`, warm cream `#fff8ec`. Headings: Fredoka (Google Fonts).
  Body: Nunito Sans. Background images in the CSS use paths relative to the
  stylesheet (`../images/...`) so they resolve for both root and `es/` pages.
- `js/site.js` — mobile nav toggle only.
- `images/`, `files/` — assets with human-readable names.

## Bilingual structure (English + Spanish)

- The site is bilingual. English pages live in the repo root; the Spanish
  translations live in `es/` with the **same filenames** (`es/donate.html`, etc.).
- Every page has a language toggle in the header: English pages link to
  `es/<same-file>` (label "Español"); Spanish pages link to `../<same-file>`
  (label "English"). `es/` pages set `<html lang="es">` and reference shared
  assets with `../` (`../css/style.css`, `../images/...`, `../files/...`,
  `../js/site.js`).
- **Keep the two languages in sync**: when you change content, a link, a date, or
  the nav/footer on an English page, make the matching change on its Spanish
  counterpart (and vice-versa). Spanish uses warm, informal (tú) Latin-American
  Spanish; board/officer titles use neutral office nouns (Presidencia, Tesorería…)
  to avoid assuming anyone's gender. A native-speaker volunteer should review new
  translations for local voice.

## Critical invariants

1. **Header and footer are duplicated in every page**, marked by
   `<!-- ===== Site header ... -->` / `<!-- ===== Site footer ... -->` comments.
   Any change to nav or footer must be applied to ALL English `.html` files AND all
   `es/*.html` files (with the Spanish header/footer). Within one language the
   header is identical apart from the `class="active"` marker and the per-page
   language-toggle `href`. Verify with: `grep -c 'site-footer' *.html es/*.html`
   (every page has exactly one).
2. **Never delete `CNAME`** — it binds the custom domain.
3. New pages: copy an existing page, keep the header/footer blocks intact, add the
   page to the nav on every page only if it belongs in the menu. Create the Spanish
   counterpart in `es/` at the same time.
4. Internal links use relative `*.html` hrefs (works locally and on Pages).
   External links use `target="_blank" rel="noopener"`.

## Testing changes

Local preview: `python3 -m http.server -d .` then open http://localhost:8000
(Spanish at `/es/`). Quick regression: check internal hrefs/srcs resolve to files
on disk — for `es/` pages, resolve `../` relative to `es/` — confirm no page
references `wixstatic.com`, and confirm the language toggle points to the matching
page in the other language.

## Deploy

`git push` to `main` = deploy. Nothing else. Live in ~1 minute
(check the repo's Actions tab for the pages-build-deployment run).
