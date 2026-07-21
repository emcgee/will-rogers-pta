# Moving willrogerspta.com off Wix — one-time runbook

Goal: keep the domain, point it at the new GitHub Pages site, keep all
`@willrogerspta.com` email addresses working, then stop paying Wix.
Total ongoing cost after this: **~$10.50/yr** (domain registration at cost).
Hosting, DNS, SSL, and email forwarding are all free.

**Order matters.** Do the steps in this sequence and the site + email never go down.
Do NOT cancel Wix until step 7.

## 1. Inventory current DNS at Wix (15 min)

In the Wix dashboard: **Domains → willrogerspta.com → Advanced / DNS records.**
Screenshot or copy EVERY record, especially:

- **MX records** — these route email for `@willrogerspta.com` (president@,
  treasurer@, communications@, bookfair@, dei@, reflections@, etc. are all in use
  on the site).
- **TXT records** — SPF/DKIM/verification records.
- Note *how* email works today: Wix email forwarding? Google Workspace?
  (If MX records point at Google, it's Workspace; if at Wix, it's Wix forwarding.)

## 2. Create a free Cloudflare account and add the domain (15 min)

1. Sign up at cloudflare.com (use a PTA-controlled email, e.g.
   communications@willrogerspta.com, so the account survives volunteer turnover —
   store the password wherever the PTA keeps shared credentials).
2. **Add a site → willrogerspta.com → Free plan.** Cloudflare auto-imports most DNS
   records; compare against your step-1 inventory and add anything missing.
3. Cloudflare gives you two nameservers (e.g. `xxx.ns.cloudflare.com`).
4. In Wix: **Domains → Advanced → Nameservers → change** to the two Cloudflare
   nameservers. (Site and email keep working — the records are identical.)
5. Wait for Cloudflare to show the domain as **Active** (minutes to a few hours).

## 3. Point DNS at GitHub Pages (10 min)

In Cloudflare → DNS for willrogerspta.com, replace the Wix A/CNAME records with:

| Type | Name | Content | Proxy |
|---|---|---|---|
| A | `@` | `185.199.108.153` | DNS only (grey cloud) |
| A | `@` | `185.199.109.153` | DNS only |
| A | `@` | `185.199.110.153` | DNS only |
| A | `@` | `185.199.111.153` | DNS only |
| CNAME | `www` | `<github-username-or-org>.github.io` | DNS only |

Leave MX/TXT records untouched. Use "DNS only" (not proxied) so GitHub can issue
the SSL certificate.

Then in the GitHub repo: **Settings → Pages** — custom domain should read
`www.willrogerspta.com` (the `CNAME` file in this repo sets it). Once the DNS check
passes, tick **Enforce HTTPS**.

Verify: https://www.willrogerspta.com and https://willrogerspta.com both load the
new site with a valid certificate.

## 4. Email continuity (15 min — CRITICAL)

- **If email was Wix forwarding:** set up Cloudflare **Email Routing** (free):
  Cloudflare dashboard → Email → Email Routing → enable (it adds its own MX/TXT
  records) → create a route for each alias (president@ → the president's real
  inbox, treasurer@ → …, plus a catch-all if desired). Recreate every alias that
  existed at Wix.
- **If email is Google Workspace:** just confirm the Google MX records survived the
  nameserver move (step 2). Nothing else to do.

Test by emailing 2–3 aliases from an outside account before proceeding.

## 5. Transfer the domain registration to Cloudflare (10 min + up to 5 days waiting)

1. In Wix: **Domains → unlock the domain** (turn off transfer lock) and request the
   **EPP / authorization code**.
2. In Cloudflare: **Domain Registration → Transfer** → willrogerspta.com → paste the
   EPP code → pay (~$10.50, which also *extends registration by one year*).
3. Approve the transfer confirmation email if one arrives. Transfers complete in
   minutes to 5 days. The site and email are unaffected (DNS already moved).

## 6. Set renewal safety nets

- Cloudflare → domain → enable **auto-renew**, and make sure the payment method and
  account email are PTA-controlled (not one parent's personal card if avoidable).
- Add a recurring reminder in the PTA calendar to sanity-check the renewal annually.

## 7. Cancel Wix (only after verifying)

Checklist before cancelling:
- [ ] https://www.willrogerspta.com serves the new site with HTTPS
- [ ] https://willrogerspta.com (no www) redirects/serves correctly
- [ ] Old deep links still work (e.g. willrogerspta.com/pta-meetings)
- [ ] Email to at least 3 aliases delivers
- [ ] Domain transfer shows **completed** at Cloudflare

Then cancel the Wix premium plan (and Wix email forwarding if it was separate).
Keep the Wix account itself for a while in case you need to look something up.

## Open items (need PTA credentials)

- **Google Calendar embed:** `dynamic-calendar.html` contains a placeholder.
  Get the calendar ID from Google Calendar → Settings → "Integrate calendar"
  (looks like `xxxx@group.calendar.google.com`; calendar must be public) and
  replace `CALENDAR_ID_GOES_HERE`.
- **Mailchimp:** the old site's newsletter signup used Mailchimp
  (willrogerspta.us4.list-manage.com). If you want a signup form back, grab the
  hosted signup URL from the Mailchimp account (Audience → Signup forms) and link
  it from `latest-news-announcements.html` and the home page News card.
