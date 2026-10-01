---
name: Will Rogers PTA
description: A warm, bilingual front porch for the Will Rogers Learning Community, painted in the colors of its logo.
colors:
  pacific-cyan: "#12a8c9"
  lifeguard-teal: "#0e7f96"
  lifeguard-teal-deep: "#0a5f72"
  deep-kelp-ink: "#093943"
  santa-monica-sun: "#f5c02e"
  santa-monica-sun-deep: "#e2a90f"
  cactus-sage: "#7cc6b0"
  porch-cream: "#fff8ec"
  cyan-wash: "#e4f5f9"
  sage-wash: "#e8f5f0"
  sun-wash: "#fdf0cf"
  surface-white: "#ffffff"
  body-text: "#223d43"
  muted-text: "#55707a"
  footer-text: "#cfe6ea"
  footer-legal: "#9fc2c8"
  night-wash: "#0b4450"
typography:
  display:
    fontFamily: "Poppins, Fredoka, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5.5vw, 3.9rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Fredoka, Poppins, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 4vw, 2.8rem)"
    fontWeight: 700
    lineHeight: 1.12
  title:
    fontFamily: "Fredoka, Poppins, system-ui, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 700
    lineHeight: 1.12
  body:
    fontFamily: "Nunito Sans, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Fredoka, Poppins, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
    letterSpacing: "0.16em"
  button:
    fontFamily: "Fredoka, Poppins, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
rounded:
  pill: "999px"
  lg: "22px"
  sm: "14px"
  invite: "28px"
  print: "6px"
  badge: "10px"
spacing:
  gutter: "22px"
  section: "74px"
  stack: "12px"
  grid: "30px"
  columns: "48px"
components:
  button-primary:
    backgroundColor: "{colors.santa-monica-sun}"
    textColor: "{colors.deep-kelp-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.santa-monica-sun-deep}"
    textColor: "{colors.deep-kelp-ink}"
  button-quiet:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.deep-kelp-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 26px"
  button-quiet-hover:
    backgroundColor: "{colors.cyan-wash}"
    textColor: "{colors.deep-kelp-ink}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.surface-white}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 32px"
  button-outline-hover:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.deep-kelp-ink}"
  nav-link:
    textColor: "{colors.deep-kelp-ink}"
    rounded: "{rounded.pill}"
    padding: "9px 12px"
  nav-link-hover:
    backgroundColor: "{colors.cyan-wash}"
    textColor: "{colors.lifeguard-teal-deep}"
  lang-toggle:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.lifeguard-teal-deep}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  lang-toggle-hover:
    backgroundColor: "{colors.lifeguard-teal}"
    textColor: "{colors.surface-white}"
  card:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.muted-text}"
    rounded: "{rounded.lg}"
    padding: "34px 28px 30px"
  event-invitation:
    backgroundColor: "{colors.sun-wash}"
    rounded: "{rounded.invite}"
    padding: "52px 64px 52px 56px"
  flyer-mat:
    backgroundColor: "{colors.cyan-wash}"
    rounded: "{rounded.lg}"
  date-sticker:
    backgroundColor: "{colors.santa-monica-sun}"
    textColor: "{colors.deep-kelp-ink}"
    rounded: "{rounded.pill}"
    size: "78px"
  status-pill:
    backgroundColor: "{colors.deep-kelp-ink}"
    textColor: "{colors.santa-monica-sun}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  chip:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.deep-kelp-ink}"
    rounded: "{rounded.pill}"
    padding: "11px 20px"
  callout:
    backgroundColor: "{colors.surface-white}"
    rounded: "{rounded.lg}"
    padding: "28px 30px"
  page-hero:
    textColor: "{colors.surface-white}"
    padding: "66px 22px 82px"
  footer:
    backgroundColor: "{colors.deep-kelp-ink}"
    textColor: "{colors.footer-text}"
    padding: "64px 0 26px"
---

# Design System: Will Rogers PTA

## Overview

**Creative North Star: "The Front-Porch Invitation"**

The site should feel like a neighbor on a sunny porch waving you in. The base is warm Porch Cream, never white or gray, and everything on it is painted in the logo's colors: Pacific Cyan and Lifeguard Teal from the wordmark, Santa Monica Sun from the sun, Cactus Sage from the hills. Color is generous but not random. It marks what you can do (sun-gold buttons), where one section ends and the next begins (tinted bands and gradient heroes), and which card is which (rotating accent edges). Most of the feeling comes from the people. Real Will Rogers photography rotates through the homepage hero, and the copy is warm and exclamatory. The homepage leads with what's coming up, and it invites rather than lists: the real event flyers are the art, printed and pinned, and the next event opens as an invitation in its own color. A parent arriving from the Wednesday newsletter sees that invitation, its date and its button in the first phone screen.

Every clickable thing is round, tappable and a little buoyant. Buttons are full pills, cards have soft 22px corners and rest on a teal-tinted shadow, and a button or whole-card link lifts a few pixels when you hover it. Headings are set in Fredoka, which is rounded and friendly without being childish. The biggest titles switch to heavy Poppins so they read as confident rather than bubbly. Body copy is Nunito Sans at a comfortable 17px with airy 1.7 leading, sized for a parent reading on a phone in the pickup line.

The system rejects three things: the **generic Wix template** (stock photos, placeholder blocks, could-be-any-PTA sameness), the **district or institutional** look (gray, bureaucratic notice boards), and **childish clip-art** (crayon fonts, cartoon mascots, rainbow overload). Joyful, but made for grown-ups.

**Key Characteristics:**
- Warm cream canvas with logo-derived color used to signal actions and sections.
- Pill-shaped actions; soft 22px cards; single-target links and buttons lift.
- A 6px four-color stripe (cyan → sage → sun → teal) caps both the header and the footer.
- Flyers as the art: every event shows its real flyer as a white-bordered print, tilted a couple of degrees, with a round date sticker slapped on the corner.
- Real campus photography under a dark-teal spotlight scrim; interior pages open on a field of their own hue with the title, purpose and main action.
- Bilingual at parity: every layout carries Spanish strings as comfortably as English.

## Colors

The palette is the logo's own: ocean cyans and teals, one warm sun gold, and a soft cactus sage, all on a cream porch.

### Primary
- **Santa Monica Sun** (`santa-monica-sun`): the action color. Primary buttons (Join, Donate, Register), the Donate pill in the nav, the featured event's button, the gold underline under section headings, and the active-nav marker. Its deeper variant (`santa-monica-sun-deep`) is the hover state.
- **Pacific Cyan** (`pacific-cyan`): the brand's bright voice as a *graphic* color: the four-color stripe, the language toggle's outline, and the rim of link-hub rows on hover. It never carries text.

### Secondary
- **Lifeguard Teal** (`lifeguard-teal`): the rim of quiet buttons, the `sky` hue's date sticker, the teal link-hub row, and hover fills on the language toggle. The deeper variant (`lifeguard-teal-deep`, the CSS `--link` token) is the color of every link, active nav item, Facts label and small colored text on light backgrounds (6.9:1 on cream).
- **Cactus Sage** (`cactus-sage`): the soft third accent: the `sage` hue's date sticker and the middle of the four-color stripe. Sage Wash is the alternate section band.

### Neutral
- **Deep Kelp Ink** (`deep-kelp-ink`): all headings, text on gold and sage fills, the footer background, and the tint in every shadow. It is the darkest color in the system and the only near-black.
- **Porch Cream** (`porch-cream`): the page background and the color the hero wave fades into. Never replace it with pure white at page level.
- **Surface White** (`surface-white`): cards, callouts, dropdowns, the featured event and the Find-your-place panel. White objects sit on the cream porch.
- **Cyan Wash / Sage Wash / Sun Wash** (`cyan-wash`, `sage-wash`, `sun-wash`): pale tints for alternating section bands (`section-mint`, `section-alt`), card icon tiles and the award band.
- **Body Text** (`body-text`) for paragraphs and **Muted Text** (`muted-text`) for card and event descriptions and secondary lines.
- **Footer Text** (`footer-text`): links and copy on the Deep Kelp Ink footer; **Footer Legal** (`footer-legal`) for the copyright line.

### Named Rules
**The Sun Is the Button Rule.** Santa Monica Sun means "do this." The most important action in any view is a gold pill with Deep Kelp Ink text. Cyan and sage buttons are the second and third choices, never the main one.

**The Logo-Only Palette Rule.** Every hue comes from the logo. The only exceptions are the social brand accents on the link hub and footer (Instagram, Facebook, WhatsApp). Don't add new hues to decorate.

**The Contrast Floor Rule.** White text only on Lifeguard Teal or darker (4.7:1 and up); on Pacific Cyan it is 2.8:1, so cyan never carries text. Text on Sun or Sage fills is always Deep Kelp Ink (7.4:1 and 6.3:1). Small colored text on cream or white is `lifeguard-teal-deep`. Gold text only on Deep Kelp Ink or gradients that end at `#0a4f5e` or darker. A gradient behind text is judged at its lightest stop.

## Typography

**Display Font:** Poppins 800 (falls back to Fredoka, system-ui)
**Heading & UI Font:** Fredoka 500–700 (falls back to Poppins, system-ui)
**Body Font:** Nunito Sans 400–800 (falls back to Segoe UI, system-ui)

**Character:** Fredoka's rounded terminals carry the friendliness. Poppins steps in at the biggest sizes, where Fredoka would turn bulbous. Nunito Sans is soft enough to sit beside both and still reads well at length. All three come from Google Fonts in one request.

### Hierarchy
- **Display** (Poppins 800, `clamp(2.4rem, 5.5vw, 3.9rem)`, 1.12, -0.015em): the `h1` in the homepage hero and interior page heroes. The same face at 800 sets the invitation's event title, the day number on date stickers, the $11 membership figure (`clamp(4rem, 16vw, 7rem)`) and save-the-date dates.
- **Headline** (Fredoka 700, `clamp(1.9rem, 4vw, 2.8rem)`, 1.12): section `h2`s, usually followed by the gold underline bar.
- **Title** (Fredoka 700, 1.45rem, 1.12): card, event and callout `h3`s. `h4` steps down to 1.2rem.
- **Body** (Nunito Sans 400, 17px, 1.7): all reading text. The hero subhead goes to 1.28rem, and CTA-band copy is 1.15rem, capped near 640–660px wide.
- **Label** (Fredoka 600, 0.9rem, 0.16em tracking, uppercase): Facts labels, footer column headings, date-sticker months (0.72rem, 0.14em) and status pills (0.8rem, 0.06em). Tracking ranges from 0.08em on small pills to 0.22em on save-the-date kickers.
- **Button** (Fredoka 600, 1rem): every button, nav link (500, 0.95rem), chip and link-hub row. Interactive text is always Fredoka.

### Named Rules
**The Three-Voice Rule.** Poppins shouts (hero titles and big numbers only), Fredoka talks (headings, buttons, nav, labels: anything you scan or tap), and Nunito Sans explains (paragraphs). Never set a paragraph in Fredoka or a button in Nunito Sans.

**The Heading-Speaks Rule.** A heading carries its own weight. The site has no uppercase eyebrow labels above headings. Voice that used to live in a kicker ("Huzzah!", "Everyone's welcome") goes into the heading or the intro sentence. Small uppercase labels are allowed only inside data panels (the `dt` labels in Facts).

## Layout

- **Container:** max 1140px, centered, with a 22px side gutter (`spacing.gutter`) on every band, the header and the footer.
- **Vertical rhythm:** sections are 74px top and bottom (`spacing.section`). The first section after a page hero starts at 58px. Full-bleed bands alternate Porch Cream, Sage Wash and Cyan Wash so long pages read as a stack of distinct rooms.
- **Grids:**
  - Card grids are three columns with a 30px gap, dropping to two at ≤900px and one at ≤600px.
  - The homepage flyer wall: the next event is a full-width invitation (flyer up to 390px · words), then "Also coming up" as three flyer posters per row (two at ≤1000px). At ≤700px the invitation puts a 118px flyer beside the title, and the other posters become a sideways-swipe strip (76% wide, scroll-snap) with the next one peeking in.
  - Find your place: one white panel split into three columns by hairlines (Join · Lend a hand · Give), then a three-column row of plain text (Meetings · News · Questions). All stack at ≤860px.
  - Two-up content columns use a 48px gap and stack at ≤820px.
  - The footer is three columns, stacking at ≤820px.
- **Homepage hero (slim):** a full-bleed photo picked at random from `images/heroes/` on each load, under a radial "spotlight" scrim plus a linear teal wash. It holds only the h1 ("Welcome to the Will Rogers PTA"), one line of identity copy, and two small outline pills (Join, Donate) that never stack full-width. A cream SVG wave closes it (64px, 40px on phones), and the invitation overlaps the wave by 30px (18px on phones). On a 390×844 phone the invitation's flyer, title, date and button sit in the first screen.
- **Homepage order:** hero → Coming up (flyer wall) → Find your place → award band (School of Excellence, Hearst, IB) → footer. The page ends on celebration.
- **Interior page intro:** a left-aligned title, purpose line and main action on a field of the page's hue, closed by the cream wave (see Components). It replaced the old centered teal gradient title bar.
- **Header:** sticky, translucent cream (94%) with an 8px backdrop blur, the logo on the left, the School of Excellence seal on the right, and 62px-tall marks. Below 1080px the header row wraps: logo, seal, a visible language pill, and a 44×44 menu button on the first row; the nav opens as a full-width white panel on its own row that scrolls on its own (capped at `100dvh - 130px`). At ≤480px the logo and seal drop to 40/44px; under 370px the seal hides so the language pill always fits.
- **Link hub (`/links`):** a single 620px column of large tappable rows, built for social-bio traffic.

## Elevation & Depth

The system is **lifted**. White surfaces float on a soft, Deep Kelp Ink-tinted shadow above the cream porch, and interactive things rise further on hover. Depth is how the site says "this is an object you can pick up." Tinted section bands and gradient heroes handle large-scale separation. Borders are rare: the only strokes are hairline `rgba(9,57,67,0.08)` dividers under the header and strips, plus colored accent edges on cards.

### Shadow Vocabulary
- **Resting card** (`box-shadow: 0 16px 38px rgba(9, 57, 67, 0.12)`): every card, the event invitation, the Find-your-place panel, callout, meeting item, board card, dropdown, calendar embed, flyer and chip.
- **Lifted card** (`box-shadow: 0 24px 50px rgba(9, 57, 67, 0.22)`): hover state for cards and tappable rows.
- **Sun glow** (`box-shadow: 0 10px 22px rgba(245, 192, 46, 0.36)`, hover `0 16px 30px rgba(245, 192, 46, 0.5)`): under gold buttons. The nav Donate pill uses a smaller `0 6px 16px rgba(245, 192, 46, 0.4)`.
- **Teal glow** (`box-shadow: 0 10px 22px rgba(14, 127, 150, 0.32)`, hover `0 16px 30px` at 0.45): under teal buttons. Sage buttons use the same recipe with the sage color at 0.4.
- **Pinned print** (`box-shadow: 0 14px 30px rgba(9, 57, 67, 0.20), 0 2px 6px rgba(9, 57, 67, 0.10)`): under every flyer, so it reads as paper sitting on the mat. Date stickers use `0 8px 18px rgba(9, 57, 67, 0.22)`. On the dark night mat both switch to plain black (`rgba(0,0,0,0.35)`).
- **Text lift on photos** (`text-shadow: 0 3px 24px rgba(0,0,0,0.55)` on the hero `h1`, `0 2px 14px rgba(0,0,0,0.5)` on the subhead): keeps hero type legible over any photo.

### Named Rules
**The Tinted Shadow Rule.** Shadows are never neutral gray or black. Surfaces cast Deep Kelp Ink at 10–22% opacity, and colored buttons glow in their own fill color.

**The Tap-Lift Rule.** Only an element that *is* a single link or button lifts on hover: buttons rise 3px, whole-card links (social cards, link-hub rows) rise 2–3px, over 0.15s `ease`. A card that merely *contains* links (grid cards, the invitation, callouts, meeting items) keeps its resting shadow and stays still. The one exception is the flyer print: hovering it straightens the tilt and lifts it slightly (0.45s ease-out), because the flyer is itself a link. A lift is a promise that clicking anywhere on it does something. Under `prefers-reduced-motion`, nothing moves.

## Shapes

The form language is round and soft throughout. There are no sharp corners anywhere a visitor looks.

- **Pills (`rounded.pill`):** every button, nav link, status pill, date sticker (a full circle), chip, language toggle, menu button, link-hub row and "New" badge.
- **Invitation corners (`rounded.invite`, 28px):** the event invitation only, the softest shape on the site.
- **Large soft corners (`rounded.lg`, 22px):** cards, flyer mats, the Find-your-place panel, callouts, meeting items, the save-the-date block, the save strip, the calendar embed and flyer images.
- **Small soft corners (`rounded.sm`, 14px):** dropdown menus, the mobile nav panel, the award seal and images nested inside a larger card. Flyer prints use 6px (a print's corner, not a card's). Nested elements always step down from the 22px parent.
- **Badge corners (`rounded.badge`, 10px):** the header seal. 8px on dropdown rows.
- **Hairlines, not colored edges:** panels and lists divide with 1px `rgba(9,57,67,0.12)` hairlines. The thick colored card edges and emoji icon tiles of the old interior pages are retired.
- **Signature marks:** the tilted flyer print with its date sticker, the 64×5px rounded gold bar under section headings, the 6px four-color stripe on the header and footer, and the cream wave at the base of the homepage hero.

## Components

### Buttons
Tactile and buoyant: fat pills that glow in their own color and hop when you point at them.
- **Shape:** full pill (999px) with a 3px transparent border reserved for the outline variant, padding 14px 32px. Compact contexts (event cards, award band, meeting list) use 10–11px × 24px at 0.9rem.
- **Primary:** Santa Monica Sun fill, Deep Kelp Ink text, Fredoka 600, sun glow.
- **Hover:** deepens to `santa-monica-sun-deep`, rises 3px, glow grows. 0.15s ease on transform, shadow and background.
- **Quiet:** white pill with a 2px Lifeguard Teal rim and ink text, no glow; Cyan Wash on hover. The secondary action next to a gold one, so each band keeps a single gold pill.
- **Arrow link:** Fredoka 600 in `lifeguard-teal-deep` with a trailing → that nudges 3px on hover. The tertiary action ("Prizes & details →").
- **Outline:** transparent with an 85%-white 3px border and white text, for photo and gradient backgrounds only. Fills white with ink text on hover.
- **Focus:** every focusable element gets a 3px Deep Kelp Ink outline at 3px offset (Sun gold on dark bands and photos). A gold skip link appears top-left on the first Tab.

### Page Intro (every interior page)
Replaces the old flat teal title bar. A field in the page's hue (`data-hue`: sun, sky, sage or night) closed by the cream wave, holding:
- an optional status pill;
- the h1 in Poppins 800 (up to 3.6rem, 18ch max);
- an optional Fredoka "when" line;
- one sentence on what the page is for (1.2rem, 56ch max);
- the page's main action: at most one gold pill, plus quiet pills or arrow links;
- an optional note (0.95rem, muted) for reassurance such as the tax ID or "takes about a minute".

- **Event pages** (`page-intro--art`) put the real flyer on the right as a tilted print, with a 96px date sticker on its top-left corner. On phones the art drops below the text (230px wide, or 320px for wide art).
- **Self-maintaining:** an event intro carries `data-start` / `data-end`. Once the event ends, `js/site.js` shows its `.ended-note` ("That's a wrap…") and hides the buttons and status pill.
- Sections below the intro sit on alternating cream and Sage Wash bands, each opened by an h2 with the gold underline bar.

### Structures for interior content
No card grids. Content sits in a few quiet, repeatable forms:
- **Facts** (`dl.facts`): a white panel of hairline-divided cells. Each cell has an uppercase `lifeguard-teal-deep` label, a Fredoka 600 value and an optional muted small line. Use it for When / Where / Who at a glance. Stacks on phones.
- **Ways** (`ul.ways`, `--ways: 2|3`): one white panel split into hairline columns, the same form as the homepage's Find Your Place. Each column has an h3, a sentence or short list, and one action. Use it for steps, choices and prize tiers.
- **Rows** (`ul.rows`): hairline-divided list items, with text on the left and one action on the right (a quiet small pill or an arrow link). Use it for forms, "who do I ask", open roles and shortcuts.
- **Timeline** (`ol.timeline`, items with `data-date`): dated rows for meetings. The script:
  - marks past items "Past" in muted type;
  - highlights the next one on Sun Wash with a "Next meeting" pill;
  - copies the next date into any `[data-next-date]` span.
- **Fold** (`details.fold`): a hairline-bordered disclosure with a Fredoka summary, a muted one-line hint and a drawn chevron. Use it for long or rarely needed text: legal rules, category specs, the Ed Foundation explainer, voting rules.
- **Tags** (`ul.tags`): plain white pills with a hairline border and no shadow, so they read as labels rather than buttons.
- **People** (`ul.people`): the directory, in two hairline-divided columns. Each entry shows the role (h3), name, full email address and a muted one-line description. Open roles read "Open: could this be you?" with a link to volunteers@.
- **Coming-up list** (`ul.up-list`): compact tappable rows for dated events on /links, Calendar and News.
  - Each row has a 56px date circle in the event's hue, a title, a when-line and an optional status pill, and lifts 2px on hover.
  - Past items hide themselves, and an `.up-empty` line shows when nothing is left.
- **Flyer grid** (`ul.flyer-grid`): event flyers as tilted prints, each linking to the full-size image.

### Flyer Wall (signature)
The homepage's events section: the events as an invitation and a wall of real flyers, maintained by volunteers in plain HTML.
- **Hue:** each event picks one of four logo hues with `data-hue`: `sun` (Sun Wash mat, gold sticker), `sky` (Cyan Wash mat, teal sticker with white text), `sage` (Sage Wash mat, sage sticker) or `night` (deep teal `#0b4450` mat, ink sticker with gold text). The hue colors that event's mat, sticker and, when it leads, the whole invitation.
- **Flyer print:** the real flyer with an 8px white border and 6px corners, the pinned-print shadow, and a tilt of about -3° to +2° that alternates along the row. On hover it straightens and scales to 1.015 (0.45s ease-out). It links to the event and is hidden from screen readers, since the text repeats it.
- **Date sticker:** a 78px circle (104px on the invitation, 60px on phones) with a 3px white rim, rotated 9°, overlapping the flyer's corner: month in uppercase Fredoka 600 and the day in Poppins 800. Decorative; the full date is always written in the text.
- **Invitation (`.is-next`):** the soonest event in a full-width field of its hue with 28px corners and the resting shadow: the flyer print on the left, then a status pill, a "You're invited to" line in Fredoka 600 `lifeguard-teal-deep` (gold on night), the title in Poppins 800 (up to 3.4rem), a when-line, the description, and the gold primary button. The invite line is written per event so the grammar works in both languages.
- **Posters:** the other events sit under an "Also coming up" heading. Each flyer sits centered on a 4:5 mat in its hue (a size container, so any flyer shape fits), with the sticker in the mat's corner. Below the mat: status pill, title (1.4rem), when-line, a three-line description (two on phones), a quiet button and an arrow link.
- **Status pill:** ink fill, Sun text, uppercase Fredoka 600 at 0.8rem. The script fills it in with "Today", "Tomorrow", "This week", "Last days" or "Happening now" (in Spanish on `/es/`).
- **Self-maintaining:** each item carries `data-start` / `data-end` (YYYY-MM-DD). `js/site.js` hides past events, moves the first remaining one into the invitation spot, shows "Also coming up" only when there is more, and sets the status pills. If nothing is left, a message points to the full calendar. Without JavaScript, every event shows with its full written date and the first one as the invitation.

### Find Your Place
One white panel, three hairline-divided columns: Join the PTA (gold "Join for $11"), Lend a hand (quiet), Give (quiet; states 501(c)(3) and tax-deductible). Each has an h3, one reassuring sentence and one action. Below it, on the Sage Wash band, three plain-text blocks (PTA meetings, News & announcements, Questions?), each ending in an arrow link.

### Navigation
- **Desktop:** Fredoka 500 at 0.95rem, ink text, pill-shaped hit areas with 9px 12px padding. Hover fills Cyan Wash with `lifeguard-teal-deep` text. The active page gets `lifeguard-teal-deep` text and a 3px Sun bar underneath.
- **Dropdowns:** a ▾ caret. The menu is a white 14px-radius panel with the resting shadow, 244px minimum width, opening on hover or focus-within, with an invisible 6px bridge so it never closes mid-move. Items are left-aligned and stretch the full menu width.
- **Donate:** always the last nav item, as a Sun pill with a glow.
- **Language toggle:** a white pill with a 2px cyan outline, 🌐 prefix and `lifeguard-teal-deep` text; it fills Lifeguard Teal with white text on hover. The label is the other language's name ("Español" / "English"). On phones and tablets a twin pill (`.header-lang`) sits in the header row, so the other language is never hidden behind the menu.
- **Mobile (≤1080px):** a 44×44 menu button with a drawn three-line icon that becomes an X. It sets `aria-expanded` and closes on Esc or a tap outside. The nav becomes a full-width white rounded panel below the header row, with dropdowns expanded inline and indented 12px, and Donate stretched full-width.

### Footer
Deep Kelp Ink with the four-color stripe on top, three columns of Footer Text links that turn Sun gold on hover, uppercase Sun column headings (h2s, so page outlines never skip a level), 40px round social icons in 44px tap targets (Facebook, Instagram), and a hairline-divided centered legal line.

## Do's and Don'ts

### Do:
- **Do** make the single most important action a Santa Monica Sun pill with Deep Kelp Ink text (the Sun Is the Button Rule).
- **Do** keep the page background Porch Cream and put white cards on it. The cream-to-white step is part of the porch feel.
- **Do** tint every shadow with Deep Kelp Ink (`rgba(9, 57, 67, …)`) and give colored buttons a glow in their own hue.
- **Do** step corner radius down when nesting: 22px card → 14px inner image or panel → pill for controls.
- **Do** use real Will Rogers photography (`images/heroes/`, event flyers) wherever an image is needed.
- **Do** close section headings with the 64×5px gold underline bar, and let the heading speak without an eyebrow label (the Heading-Speaks Rule).
- **Do** let the real flyers be the art for events, as tilted prints on a mat in the event's hue, never cropped.
- **Do** lead with dates: anything time-bound gets a date sticker plus a full written date ("Wed, Sept 30"), never only a relative one ("this Wednesday").
- **Do** keep one gold pill per band; use quiet pills and arrow links for everything else.
- **Do** let every button, pill and nav item wrap or grow for Spanish strings, which often run longer than the English.
- **Do** keep white text on Lifeguard Teal or darker, and Deep Kelp Ink text on Sun and Sage (the Contrast Floor Rule).

### Don't:
- **Don't** make it look like a **generic Wix template**: no stock photography, no placeholder "Lorem" blocks, no layouts that could belong to any PTA anywhere.
- **Don't** drift into the **district or institutional** look: no gray page backgrounds, no neutral gray shadows, no dense bordered tables of notices, no square-cornered boxes.
- **Don't** tip into **childish clip-art**: no crayon or handwriting fonts, cartoon mascots, clip-art illustrations or rainbow-everything. The four-color stripe is the only place all the accents appear together.
- **Don't** add hues outside the logo palette for decoration (the Logo-Only Palette Rule).
- **Don't** set paragraphs in Fredoka or Poppins, or buttons and nav in Nunito Sans (the Three-Voice Rule).
- **Don't** make informational blocks lift on hover. Lift means "clickable" (the Tap-Lift Rule).
- **Don't** put any text on Pacific Cyan; it is a graphic color only.
- **Don't** build pages out of same-size cards, emoji icon tiles, or boxes with thick colored side or top edges. Use Facts, Ways, Rows, Timeline and Fold.
- **Don't** state a fundraising goal amount anywhere on the site.
