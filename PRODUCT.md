# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: current Will Rogers families.** They are parents and caregivers of students at Will Rogers Learning Community, an International Baccalaureate elementary school in Santa Monica, CA. They usually arrive on a phone, often from the Wednesday newsletter, a flyer, or a social post. They want one concrete thing quickly: an event date and time, a sign-up or registration link, a form, a meeting agenda, or the place to join or donate.

A meaningful share of families read in Spanish, and every page has a full Spanish counterpart.

Secondary audiences are teachers and staff, local businesses that sponsor or donate auction items, and prospective families. The secondary audiences are confirmed as real but not primary; design for current families first.

## Product Purpose

The site is the public home of the Will Rogers PTA. It holds the year's events, fundraisers, meetings, forms, and ways to get involved in one reliable place, so the weekly newsletter and flyers can link to it.

Success means four things, all of which matter:

- **Event turnout.** Families find events (Books + Cookies Night, Reflections Art Night, Grown-Ups' Night Out & Auction, etc.) and show up.
- **Fundraising.** Direct donations, Read-A-Thon and Jog-a-thon pledges, and auction bids and item donations.
- **Membership and volunteers.** More $11 PTA members, and more people on committees and sign-ups.
- **Inclusion and belonging.** Every family, including Spanish-speaking and newer ones, feels the PTA is theirs and knows how to take part.

## Positioning

This is the only PTA for this school and this community. It is a 2025–2027 National PTA School of Excellence and a Phoebe Apperson Hearst Family-School Partnership Award of Merit recipient, at an IB World School, and it serves families in English and Spanish. Its tone is a neighbor inviting you in, not an institution issuing notices.

## Operating Context

- The **weekly Wednesday newsletter** drives most visits. The "Latest Links & Sign-Ups" page mirrors it.
- **PTA association meetings** happen monthly on the first Wednesday, in person in the library with a virtual option. Agendas are posted in advance, and members vote there.
- The **school-year cycle** drives content: Read-A-Thon and Books + Cookies in the fall, Reflections art program, Grown-Ups' Night Out & Auction, Jog-a-thon, and officer nominations. Events rotate on and off the homepage all year.
- The **Year-at-a-Glance calendar** is a live Google Doc embedded on the Calendar page.
- External services handle transactions: **Totem** for membership (the only membership path), **Square** for donations (square.link/u/Ys2VhnI6 is the only live donation link), and event-specific platforms such as RallyUp for registration and pledges.
- **Volunteers maintain the site**, mostly by asking Claude in plain English and sometimes by editing HTML on GitHub (see `EDITING.md`). The PTA president currently owns it.

## Capabilities and Constraints

- Plain static HTML/CSS on GitHub Pages with no build step. `CLAUDE.md` governs structure, bilingual sync, duplicated header and footer, extensionless links, and asset versioning.
- Every English page has a Spanish page at `es/<same-file>`, and changes must land in both.
- The site does not process payments, run accounts, or collect form data itself. It links out to Totem, Square, Google Docs and Forms, and sign-up platforms.
- Anything built has to stay editable by a non-programmer volunteer: readable HTML, no tooling to install, and content that is easy to find and change in the page file.
- **Never publish a fundraising goal amount.** No dollar goal for the Will Rogers Fund, the annual giving drive, or any fundraiser appears anywhere on the site. Asks stay open-ended ("any amount helps"). Participation goals (like 100% of families) are fine. Prize thresholds on event pages (e.g. "$20+ raised") are fine.
- **Volunteering starts three ways:** the volunteer-list form, an email to volunteers@willrogerspta.com, or coming to a PTA meeting.
- **Reflections entries are submitted by email** to reflections@willrogerspta.com.
- **Open / pending:** the site is live on GitHub Pages at the custom domain; email routing for the @willrogerspta.com aliases (see `DOMAIN-MIGRATION.md`). The newsletter signup (Mailchimp) has no signup URL yet, so it is currently a mailto link.

## Brand Commitments

- Name: **Will Rogers PTA** (formally Will Rogers Learning Community PTA). The school is **Will Rogers Learning Community**.
- The existing PTA logo (`images/pta-logo.jpg`) and the palette taken from it, as recorded in `CLAUDE.md`.
- **Voice:** warm, celebratory, community-first, and plain-spoken. Exclamation and delight are welcome ("Huzzah!", "There's a place for everyone", "every bit counts"). Invite, don't instruct.
- **Spanish voice:** warm, informal (tú), Latin-American Spanish. Board and officer titles use neutral office nouns (Presidencia, Tesorería…) so they don't assume anyone's gender. A native-speaker volunteer should review new translations.

## Evidence on Hand

- **Awards and affiliations:** 2025–2027 National PTA School of Excellence (`images/pta-school-of-excellence-2025-2027.png`), Phoebe Apperson Hearst Family-School Partnership Award of Merit, IB World School (`images/ib-world-school-logo.svg`), National PTA (`images/pta-national-logo.gif`), and the Santa Monica-Malibu Education Foundation (`images/ed-foundation-logo.png`).
- **Nonprofit facts:** 501(c)(3), tax ID 23-7017326, 2401 14th Street, Santa Monica, CA 90405, communications@willrogerspta.com.
- **Real campus photography** in `images/heroes/`: assembly, ribbon cutting, Earth Day, farm stand, Holi, students, and the School of Excellence celebration.
- **Event graphics and flyers** in `images/`, **PDF forms** in `files/`, and a "where your money goes" graphic.
- **Social:** Facebook (willrogerslc), Instagram (willrogersnews), and a WhatsApp group with no public link. The PTA no longer uses its X/Twitter account; don't link it.
- **Absences:** there are no family testimonials, fundraising totals, or impact numbers beyond what the pages already state. Don't invent quotes, dollar figures, or participation stats.

## Product Principles

1. **Answer the parent's question in one tap.** The date, time, place, and link come first, readable on a phone between pickup and dinner.
2. **Every family, both languages, equal footing.** Spanish is never an afterthought. Anything added in one language exists in the other.
3. **Invitation over obligation.** Joining, giving, and volunteering are framed as belonging, not dues or chores, and there's always a small first step.
4. **Show the real community.** Use actual Will Rogers people, events, and honors rather than generic school imagery or claims.
5. **A volunteer can keep it current.** Anything built must survive year-over-year updates by someone who isn't a developer.
