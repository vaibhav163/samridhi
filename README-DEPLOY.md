# Samridhi Gold Buyers — React (SSG) Build

Vite 5 + React 18, prerendered to real static HTML. Same design, content and
integrations as the previous static site, rebuilt as a React project, with
**clean URLs** (no `.html`) and 14 new keyword pages (42 pages + 404).

## Local par chalana ho to (development)
```
npm install
npm run dev      -> http://localhost:5173  (koi bhi page: /sell-gold, /gold-buyer-near-me ...)
npm run build    -> dist/ dobara banta hai (prerendered, deploy-ready)
npm run preview  -> bane hue dist/ ko local par dekhne ke liye
```
Deploy ke liye source chalane ki zaroorat nahi — ready `dist/` hi upload hota hai.

## Deploy (Option A — no build needed)

1. Upload the **contents of `dist/`** to the root of the hosting repo
   (replacing the old static files). Everything is pre-built: HTML, CSS, JS,
   images, sitemap.xml, robots.txt, llms.txt, vercel.json.
2. That's it — Vercel serves `dist/<page>/index.html` for each clean URL
   (`/sell-gold`, `/gold-buyer-near-me`, …) and `dist/index.html` for `/`.

## Clean URLs + redirects

- All canonicals, sitemap, internal links and schema use clean URLs on
  https://www.samridhigoldbuyers.com (plural "buyers").
- `vercel.json` (inside dist/) contains **301 redirects from every old
  `.html` URL** (e.g. `/sell-gold.html` → `/sell-gold`, `/index.html` → `/`)
  plus the same security/cache headers as before.

## After deploy — indexing (owner's steps)

- Submit the **new** sitemap in Google Search Console:
  `https://www.samridhigoldbuyers.com/sitemap.xml` (42 clean URLs).
- Request indexing for the homepage and the main money pages
  (/sell-gold, /sell-gold-in-gaur-city, /gold-buyer-near-me,
  /instant-cash-for-gold, /gold-rate-today) to speed up the switch.
- The old .html URLs will 301 to the new ones, so their value carries over.

## Enquiry form (unchanged from the static site)

- `public/js/main.js` is the previous site's file, reused as-is: EmailJS
  (key `xLfYDZXLlR6IeQ-C6`, service `service_fkmfynb`,
  template `template_bdjcyq6`) with name, mobile, email "Not Provided",
  message, item and **source_page** (now the clean path, e.g. `sell-gold`;
  the homepage reports `index.html`, as before).
- Success → thank-you overlay + form resets. Failure → WhatsApp fallback
  link (wa.me/919953211815) is shown; WhatsApp never auto-opens.
- dataLayer events kept: `click_call`, `click_whatsapp`, `enquiry_submit`.
- Forms are in the prerendered HTML on: homepage hero, homepage lead popup,
  contact page, and the hero of every service/keyword landing page.
- Verified headlessly with a mocked EmailJS before handover (no real
  enquiry was sent). Do one real test submission after deploy.

## Rebuilding from source (only if content changes)

```bash
npm install
npm run build   # outputs dist/ (client + SSR + prerender + sitemap)
```

- Content lives in `src/` (pages in `src/pages/`, all routes/titles/meta in
  `src/routes.jsx`, business constants in `src/config.js`).
- `KEYWORD-MAP.md` maps each of the 38 target keywords to its page.

## Facts baked in (do not change casually)

- Hours: **10:00 AM – 8:00 PM**, 7 days (schema closes 20:00).
- Address: Shop No. GF-04, Gaur City Centre, Gaur Chowk, Sector 4,
  Greater Noida West, Greater Noida, UP 201318. Geo 28.605222, 77.42766.
- Phone +91 99532 11815 · Email samridhigoldbuyer@gmail.com (singular — correct).
- GTM-KH3G6GMJ and the Google site-verification meta are preserved.


## Form kaise kaam karta hai
Forms React ke andar wired hain (src/lib/enquiry.jsx, @emailjs/browser package) — dev aur production dono me same chalta hai. public/js/main.js me form wiring dobara mat add karna, warna double email jayega.
