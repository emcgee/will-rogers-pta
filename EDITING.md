# How to edit the Will Rogers PTA website

This guide is for PTA volunteers. You do not need to be a programmer.

## The one idea to understand

The website is a folder of files that lives on GitHub (this repository).
**Whatever is on the `main` branch is the live website** — GitHub Pages republishes
it automatically about a minute after any change. There is no separate "publish"
button and no Wix-style editor: change the files, and the site updates.

## Option 1 (easiest): ask Claude

If you have access to [Claude Code](https://claude.com/claude-code) or Claude with
GitHub access, just describe the change in plain English:

> "On the PTA meetings page, change the March meeting date to March 11 and add a
> link to the new agenda: https://docs.google.com/..."

> "Update the Jog-a-thon page for 2027 — the event is March 26, registration link
> is https://go.rallyup.com/willrogers2027"

> "Add a new page for the Book Fair with these details: ..."

Claude will edit the files, show you the change, and push it live. This works well
because every page is simple, readable HTML.

## Option 2: edit directly on GitHub (good for small text fixes)

1. Sign in to GitHub and open this repository.
2. Click the file for the page you want to change (for example `pta-meetings.html`
   — filenames match the page addresses on the site).
3. Click the **pencil icon** (Edit this file).
4. Find the text you want to change (Ctrl/Cmd-F helps) and change it.
5. Click **Commit changes**. The live site updates in about a minute.

Uploading a new PDF or image: open the `files/` or `images/` folder → **Add file →
Upload files** → then link to it from a page (e.g. `files/my-new-form.pdf`).

## The site is bilingual (English + Spanish)

- The **English** pages are the files in the main folder (`donate.html`, etc.). The
  **Spanish** translations are in the **`es/` folder** with the same filenames
  (`es/donate.html`). Visitors switch languages with the **Español / English** button
  in the menu.
- **When you change an English page, change the Spanish one to match** (the date, the
  link, the new paragraph) — and vice-versa. The easiest way by far is to ask Claude:
  *"Update the meeting dates on the PTA meetings page, in both English and Spanish."*
  Claude will keep the two in sync. If you only speak one language, it's fine to ask
  Claude to translate; have a Spanish-speaking parent skim it afterward for tone.

## Things to know

- **Every page contains its own copy of the header (menu) and footer.** If you change
  the menu or footer, make the same change on *every* `.html` file — in **both** the
  main folder and the `es/` folder — or just ask Claude, which does this reliably in
  one step. (The blocks are marked with `<!-- ===== Site header ... -->` comments.)
- **Yearly updates** live in predictable places: meeting dates in `pta-meetings.html`,
  board members in `contact-us.html`, fundraiser goals in `donate.html`, the
  president's letter in `membership.html`, the copyright year in every footer.
- **Event dates keep themselves tidy.** Every dated event carries a start and end date,
  like `data-start="2026-10-09" data-end="2026-10-09"`. Once an event's end date has
  passed it disappears on its own, the next event becomes the big invitation at the
  top, and "Today" / "This week" labels appear automatically. So you only need to
  **add** new events, never delete old ones on time. An event appears in these places,
  so add it to each (and to the matching `es/` file):
  - the homepage (`index.html`) and `events-fundraisers.html`: a flyer block
    (`<li class="event">`) with a color, `data-hue="sun"` (or `sky`, `sage`, `night`),
    and a ~720px-wide flyer in `images/`;
  - `links.html`, `dynamic-calendar.html` and `latest-news-announcements.html`: a
    one-line "Coming up" entry (`<li>` inside `<ul class="up-list">`).

  Keep each list in date order, and write dates out in full ("Fri, Oct 9"), never
  "this Friday". Asking Claude to "add the Book Fair on Nov 12 everywhere" does all of
  this in one step.
- **PTA meeting dates** live in `pta-meetings.html`. Past meetings are marked "Past"
  automatically and the next one is highlighted, so a new school year only needs the
  new list of dates.
- **Never put a fundraising goal amount on the site.** Asks stay open-ended.
- **The calendar page** (`dynamic-calendar.html`) embeds the PTA's Google Calendar.
  To point it at a different calendar, replace the calendar ID inside the `iframe`
  (instructions are in a comment in that file).
- **Don't delete `CNAME`** — that file is what connects willrogerspta.com to this site.
- If something breaks, don't panic: every previous version is saved in git history
  and any change can be reverted (ask Claude to "revert the last change" or use
  GitHub's History → Revert).

## Who can edit

Anyone with write access to this GitHub repository. To add a new volunteer:
repository **Settings → Collaborators → Add people** (they need a free GitHub
account). When someone leaves the PTA, remove them from the same screen.
