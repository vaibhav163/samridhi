// import { useState, useEffect, useRef } from "react";

// /* ─────────────────────────────────────────────────────────
//    IMAGE SOURCES — all gallery, logo & hero images are
//    pulled LIVE from acegroupindia.com (no download needed).
//    Banner & form-side are local placeholders for you to swap.

//    LOCAL PLACEHOLDERS (assetsc folder — same pattern as your
//    other components):

//      assetsc/
//        ace-banner.jpg          ← hero banner
//        ace-form-side.jpg       ← enquiry section right col
//        ace-master-plan.jpg     ← master plan (optional)
//        ace-tagline-bg.jpg      ← mid-page bg (optional)

//    Import them at the top like:
//      import bannerImg from "../assetsc/ace-banner.jpg";
//    and replace the string paths in IMG below.
//    ───────────────────────────────────────────────────────── */

// const BASE = "https://acegroupindia.com/";

// const IMG = {
//   LOGO:     `${BASE}images/logo.webp`,
//   HERO:     `${BASE}img/slider/ace-estate.webp`,   // live hero
//   QR:       `${BASE}images/qr/estate-qr.webp`,
//   GALLERY: [
//     { src: `${BASE}images/ace-estate/2.webp`,  label: "Bird's Eye View"             },
//     { src: `${BASE}images/ace-estate/3.webp`,  label: "Central Landscape"           },
//     { src: `${BASE}images/ace-estate/4.webp`,  label: "Club Front View"             },
//     { src: `${BASE}images/ace-estate/9.webp`,  label: "Entry Night View"            },
//     { src: `${BASE}images/ace-estate/11.webp`, label: "Lake View"                   },
//     { src: `${BASE}images/ace-estate/14.webp`, label: "Park Aerial View"            },
//     { src: `${BASE}images/ace-estate/17.webp`, label: "Villa Road View"             },
//     { src: `${BASE}images/ace-estate/16.webp`, label: "Seating — Evening"           },
//   ],
//   AMENITY_IMGS: [
//     { src: `${BASE}images/ace-estate/6.webp`,  label: "Club Lobby"                  },
//     { src: `${BASE}images/ace-estate/7.webp`,  label: "Club Side View"              },
//     { src: `${BASE}images/ace-estate/8.webp`,  label: "Drop-off Concourse"         },
//     { src: `${BASE}images/ace-estate/10.webp`, label: "Hammock Trail"               },
//     { src: `${BASE}images/ace-estate/18.webp`, label: "Yoga Deck"                   },
//     { src: `${BASE}images/ace-estate/1.webp`,  label: "Balcony View"                },
//   ],
//   /* ── local placeholders — replace once ready ── */
//   FORM_SIDE:   "assetsc/ace-form-side.jpg",
//   MASTER_PLAN: "assetsc/ace-master-plan.jpg",
// };

// /* ─── CSS ─── */
// const styles = `
//   @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap");
//   @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css");
//   @import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css");
//   @import url("https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.1/swiper-bundle.min.css");
//   @import url("https://unpkg.com/aos@2.3.0/dist/aos.css");

//   :root {
//     --ace-teal:      #1a4d4a;
//     --ace-teal-dark: #0f2e2c;
//     --ace-teal-mid:  #256460;
//     --gold:          #c8973a;
//     --gold-lt:       #e0b760;
//     --cream:         #f5f0e8;
//     --dark:          #0d1f1e;
//     --body:          #2a3a38;
//     --whatsapp:      #25d366;
//     --serif:         "Cinzel", serif;
//     --sans:          "Inter", sans-serif;
//     --teal-gradient: linear-gradient(135deg, #1a4d4a 0%, #256460 100%);
//     --gold-gradient: linear-gradient(135deg, #c8973a 0%, #e0b760 50%, #a67828 100%);
//     --dark-gradient: linear-gradient(135deg, #0d1f1e 0%, #1a4d4a 100%);
//   }
//   *,*::before,*::after { box-sizing:border-box; }
//   html { scroll-behavior:smooth; }
//   body { color:var(--body); font:400 1rem var(--sans); overflow-x:hidden; margin:0; }
//   ul  { padding-left:0; margin:0; list-style:none; }
//   a, a:hover { text-decoration:none; color:inherit; }
//   img { width:100%; display:block; }

//   .img-ph {
//     background:linear-gradient(110deg,#c8dbd9 0%,#e8f2f1 50%,#c8dbd9 100%);
//     background-size:200% 100%; animation:shimmer 1.6s infinite;
//     display:flex; align-items:center; justify-content:center;
//     font:500 0.7rem var(--sans); color:#1a4d4a; letter-spacing:1.5px;
//     text-transform:uppercase; min-height:200px;
//   }
//   @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
//   .img-ph span { background:rgba(255,255,255,0.7); padding:5px 12px; border-radius:20px; }

//   /* ── HEADER ── */
//   .ace-header { width:100%; position:fixed; top:0; left:0; z-index:997;
//     background:linear-gradient(to bottom,rgba(13,31,30,0.88),transparent); transition:all 300ms ease; }
//   .ace-header.scrolled { background:#fff; box-shadow:0 2px 20px rgba(13,31,30,0.12); }
//   .ace-header .hd-inner { display:flex; align-items:center; justify-content:space-between; padding:0 3rem; height:72px; }
//   .ace-logo { width:88px; }
//   .ace-nav { display:flex; gap:2px; }
//   .ace-nav a { color:#fff; padding:8px 12px; font:500 0.72rem var(--sans); text-transform:uppercase;
//     letter-spacing:1.5px; transition:color 200ms; white-space:nowrap; }
//   .ace-header.scrolled .ace-nav a { color:var(--body); }
//   .ace-nav a:hover { color:var(--gold); }
//   .ace-cta { display:flex; gap:8px; align-items:center; }
//   .btn-call-ace { display:flex; align-items:center; gap:6px; background:var(--teal-gradient); color:#fff !important;
//     padding:8px 18px; border-radius:2px; font:600 0.72rem var(--sans); text-transform:uppercase; letter-spacing:1px;
//     transition:all 200ms; border:none; cursor:pointer; }
//   .btn-call-ace:hover { opacity:0.9; transform:translateY(-1px); }
//   .btn-wa-ace { display:flex; align-items:center; gap:6px; background:var(--whatsapp); color:#fff !important;
//     padding:8px 18px; border-radius:2px; font:600 0.72rem var(--sans); text-transform:uppercase; letter-spacing:1px;
//     animation:waPulse 2.5s ease-in-out infinite; }
//   @keyframes waPulse { 0%,100%{box-shadow:0 0 0 0 rgba(37,211,102,0.4);} 50%{box-shadow:0 0 0 8px rgba(37,211,102,0);} }
//   .ham { background:none; border:none; cursor:pointer; padding:4px; display:none; flex-direction:column; gap:5px; }
//   .ham span { display:block; width:24px; height:2px; background:#fff; transition:all 0.4s; }
//   .ace-header.scrolled .ham span { background:var(--dark); }
//   .ham.open span:nth-child(1){ transform:rotate(45deg) translate(5px,5px); }
//   .ham.open span:nth-child(2){ opacity:0; }
//   .ham.open span:nth-child(3){ transform:rotate(-45deg) translate(5px,-5px); }
//   .mob-menu-ace { position:fixed; top:72px; right:14px; width:calc(100% - 28px); max-width:340px;
//     background:var(--dark); padding:1.5rem 2rem; box-shadow:0 16px 40px rgba(0,0,0,0.3); display:none; z-index:990; }
//   .mob-menu-ace.open { display:block; }
//   .mob-menu-ace a { display:block; color:#d4ebe9; font:500 0.95rem var(--sans); padding:0.75rem 0;
//     border-bottom:1px solid rgba(200,151,58,0.18); transition:color 200ms; }
//   .mob-menu-ace a:hover { color:var(--gold); }

//   /* ── HERO ── */
//   .ace-hero { height:100vh; position:relative; overflow:hidden; }
//   .ace-hero img { height:100%; object-fit:cover; }
//   .ace-hero::after { content:''; position:absolute; inset:0; z-index:1;
//     background:linear-gradient(105deg,rgba(13,31,30,0.88) 0%,rgba(13,31,30,0.45) 55%,rgba(13,31,30,0.6) 100%); }
//   .hero-content { position:absolute; left:7%; top:50%; transform:translateY(-50%); z-index:2; color:#fff; max-width:620px; }
//   .hero-eyebrow { display:inline-flex; align-items:center; gap:8px; background:rgba(200,151,58,0.15);
//     border:1px solid rgba(200,151,58,0.4); padding:5px 14px; font:600 0.62rem var(--sans);
//     letter-spacing:3px; text-transform:uppercase; color:var(--gold-lt); margin-bottom:1.1rem; backdrop-filter:blur(4px); }
//   .hero-title { font:400 4rem var(--serif); line-height:1.08; margin-bottom:0.5rem; letter-spacing:1px; }
//   .hero-title strong { display:block; color:var(--gold-lt); }
//   .hero-sub { font:400 1rem var(--sans); opacity:0.85; margin-bottom:1.5rem; }
//   .hero-chips { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:1.75rem; }
//   .hero-chip { background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.25); backdrop-filter:blur(4px);
//     padding:5px 14px; font:500 0.72rem var(--sans); color:#fff; display:flex; align-items:center; gap:6px; }
//   .hero-chip i { color:var(--gold); font-size:0.65rem; }
//   .hero-price { display:inline-flex; flex-direction:column; align-items:flex-start;
//     background:var(--gold-gradient); color:var(--dark); padding:10px 22px; margin-bottom:1.75rem; }
//   .hero-price .hp-label { font:600 0.6rem var(--sans); letter-spacing:2px; text-transform:uppercase; opacity:0.7; }
//   .hero-price .hp-value { font:700 1.2rem var(--sans); }
//   .hero-actions { display:flex; gap:10px; flex-wrap:wrap; }
//   .btn-solid-teal { background:var(--teal-gradient); color:#fff; border:none; padding:13px 30px;
//     font:600 0.75rem var(--sans); text-transform:uppercase; letter-spacing:2px; cursor:pointer;
//     transition:all 200ms; box-shadow:0 6px 20px rgba(26,77,74,0.4); }
//   .btn-solid-teal:hover { transform:translateY(-2px); box-shadow:0 10px 28px rgba(26,77,74,0.5); }
//   .btn-ghost-ace { border:1px solid rgba(255,255,255,0.45); background:transparent; color:#fff;
//     padding:13px 30px; font:600 0.75rem var(--sans); text-transform:uppercase; letter-spacing:2px; cursor:pointer; transition:all 200ms; }
//   .btn-ghost-ace:hover { border-color:var(--gold-lt); color:var(--gold-lt); }

//   /* ── MARQUEE ── */
//   .ace-marquee { background:var(--dark); padding:10px 0; overflow:hidden; white-space:nowrap; }
//   .ace-marquee .mq { display:inline-flex; gap:2.5rem; animation:marquee 28s linear infinite;
//     font:600 0.68rem var(--sans); letter-spacing:2px; text-transform:uppercase; color:rgba(212,235,233,0.7); }
//   .ace-marquee .mq .dot { color:var(--gold); }
//   @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

//   /* ── COMMON ── */
//   .section-pad { padding:5rem 0; }
//   .eyebrow-ace { display:inline-flex; align-items:center; gap:10px; font:600 0.62rem var(--sans);
//     letter-spacing:4px; text-transform:uppercase; color:var(--ace-teal); margin-bottom:0.75rem; }
//   .eyebrow-ace::before { content:''; display:block; width:28px; height:2px; background:var(--gold); }
//   .title-ace { font:400 2.8rem var(--serif); line-height:1.15; color:var(--dark); letter-spacing:0.5px; }
//   .title-ace em { font-style:italic; color:var(--ace-teal); }
//   .sub-ace { font:400 0.92rem var(--sans); color:#4a6a68; margin-top:0.4rem; }

//   /* ── OVERVIEW ── */
//   .overview-section-ace { background:var(--cream); }
//   .rera-chip-ace { display:inline-flex; align-items:center; gap:6px;
//     background:rgba(200,151,58,0.1); border:1px solid rgba(200,151,58,0.35);
//     padding:4px 12px; font:500 0.65rem var(--sans); letter-spacing:1px;
//     color:var(--gold); border-radius:2px; margin-bottom:0.75rem; }
//   .config-strip-ace { display:flex; flex-wrap:wrap; margin:2rem 0; border:1px solid rgba(26,77,74,0.15); overflow:hidden; }
//   .cfg-item-ace { flex:1; min-width:100px; padding:1rem 1.25rem; border-right:1px solid rgba(26,77,74,0.15);
//     text-align:center; background:#fff; transition:background 200ms; }
//   .cfg-item-ace:last-child { border-right:none; }
//   .cfg-item-ace:hover { background:rgba(26,77,74,0.04); }
//   .cfg-label-ace { font:500 0.6rem var(--sans); letter-spacing:2px; text-transform:uppercase; color:var(--ace-teal); margin-bottom:3px; }
//   .cfg-value-ace { font:600 0.9rem var(--serif); color:var(--dark); }

//   /* sticky form */
//   .sticky-wrap-ace { position:sticky; top:88px; }
//   .sticky-form-ace { background:#fff; box-shadow:0 8px 40px rgba(13,31,30,0.1); border-top:4px solid var(--gold); }
//   .sf-head-ace { background:var(--dark); padding:1.25rem 1.5rem; text-align:center; }
//   .sf-head-ace h5 { font:400 1.05rem var(--serif); color:var(--gold-lt); margin:0; }
//   .sf-head-ace small { font:400 0.65rem var(--sans); letter-spacing:2px; opacity:0.5; color:#fff; }
//   .sf-body-ace { padding:1.4rem; }
//   .sf-inp-ace { width:100%; background:#f0f7f6; border:none; border-bottom:2px solid rgba(26,77,74,0.25);
//     padding:11px 14px; font:400 0.88rem var(--sans); color:var(--dark); margin-bottom:10px; outline:none; transition:border-color 200ms; }
//   .sf-inp-ace:focus { border-bottom-color:var(--ace-teal); }
//   .sf-sub-ace { width:100%; background:var(--teal-gradient); color:#fff; border:none; padding:13px;
//     font:700 0.72rem var(--sans); letter-spacing:2px; text-transform:uppercase; cursor:pointer; transition:opacity 200ms; }
//   .sf-sub-ace:hover { opacity:0.88; }
//   .sf-status-ace { font:400 0.78rem var(--sans); text-align:center; min-height:18px; margin-bottom:8px; }

//   /* ── PLOT TYPES ── */
//   .plot-section { background:#fff; }
//   .plot-card { border:1px solid rgba(26,77,74,0.12); overflow:hidden; transition:all 250ms; text-align:center; }
//   .plot-card:hover { transform:translateY(-4px); box-shadow:0 12px 36px rgba(13,31,30,0.1); }
//   .plot-icon { width:70px; height:70px; border-radius:50%; background:var(--teal-gradient); display:flex; align-items:center;
//     justify-content:center; margin:2rem auto 1rem; color:#fff; font-size:1.6rem; }
//   .plot-type { font:500 0.62rem var(--sans); letter-spacing:2px; text-transform:uppercase; color:var(--ace-teal); margin-bottom:4px; }
//   .plot-size { font:600 1.5rem var(--serif); color:var(--dark); margin-bottom:4px; }
//   .plot-price { font:600 0.85rem var(--sans); color:var(--gold); margin-bottom:1.5rem; }
//   .plot-btn { display:block; background:var(--teal-gradient); color:#fff; padding:12px; margin:0 1.5rem 1.5rem;
//     font:600 0.7rem var(--sans); letter-spacing:2px; text-transform:uppercase; border:none; cursor:pointer; transition:opacity 200ms; }
//   .plot-btn:hover { opacity:0.85; }

//   /* ── HIGHLIGHTS ── */
//   .highlights-ace { background:var(--dark); }
//   .hl-grid-ace { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:rgba(200,151,58,0.15); }
//   .hl-item-ace { background:var(--dark); padding:2rem 1.5rem; text-align:center; transition:background 250ms; }
//   .hl-item-ace:hover { background:rgba(26,77,74,0.45); }
//   .hl-icon-ace { font-size:1.5rem; color:var(--gold); margin-bottom:0.75rem; }
//   .hl-item-ace p { font:400 0.82rem var(--sans); color:#d4ebe9; margin:0; line-height:1.6; }

//   /* ── AMENITIES ── */
//   .amenities-ace { background:var(--ace-teal-dark); }
//   .ame-card-ace { position:relative; overflow:hidden; border-radius:4px; }
//   .ame-card-ace img { height:200px; object-fit:cover; transition:transform 400ms; }
//   .ame-card-ace:hover img { transform:scale(1.07); }
//   .ame-overlay-ace { position:absolute; inset:0; background:linear-gradient(to top,rgba(13,31,30,0.85) 0%,transparent 55%);
//     display:flex; align-items:flex-end; padding:1rem; }
//   .ame-overlay-ace span { color:#d4ebe9; font:600 0.82rem var(--sans); letter-spacing:0.5px; }

//   /* ── BLUE TRAIL FEATURE ── */
//   .feature-band { background:var(--teal-gradient); color:#fff; padding:4rem 0; }
//   .feature-band .feat-item { text-align:center; padding:1rem; }
//   .feature-band .feat-item i { font-size:2rem; color:var(--gold-lt); margin-bottom:0.75rem; display:block; }
//   .feature-band .feat-item h4 { font:400 1.1rem var(--serif); margin-bottom:0.3rem; }
//   .feature-band .feat-item p { font:400 0.8rem var(--sans); opacity:0.75; margin:0; }

//   /* ── GALLERY ── */
//   .gallery-ace { background:var(--dark); }
//   .gal-slide-ace img { height:300px; object-fit:cover; width:100%; }
//   div[class^="swiper-button"] { color:#fff; background:rgba(13,31,30,0.75); width:38px; height:38px;
//     border-radius:50%; border:1px solid rgba(200,151,58,0.35); transition:all 200ms; }
//   div[class^="swiper-button"]:hover { background:var(--ace-teal); border-color:var(--ace-teal); }
//   div[class^="swiper-button"]::after { font-size:0.85rem; }
//   .gal-ctrl-ace { display:flex; gap:8px; align-items:center; }
//   .gal-ctrl-ace div { position:static; margin:0; }

//   /* ── LOCATION ── */
//   .location-ace { background:var(--cream); }
//   .loc-tab-row { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:1.5rem; }
//   .loc-tab-btn { padding:8px 18px; font:600 0.7rem var(--sans); letter-spacing:1px; text-transform:uppercase;
//     background:#fff; border:1px solid rgba(26,77,74,0.2); color:var(--body); cursor:pointer; transition:all 200ms; }
//   .loc-tab-btn.active { background:var(--teal-gradient); color:#fff; border-color:transparent; }
//   .loc-row-ace { display:flex; align-items:flex-start; gap:0.75rem; padding:0.7rem 0; border-bottom:1px dashed rgba(26,77,74,0.15); }
//   .loc-row-ace:last-child { border-bottom:none; }
//   .loc-row-ace i { color:var(--gold); margin-top:3px; flex-shrink:0; }
//   .loc-row-ace strong { font:500 0.85rem var(--sans); color:var(--dark); }
//   .map-wrap-ace { overflow:hidden; box-shadow:0 8px 32px rgba(13,31,30,0.12); height:100%; min-height:380px; }
//   .map-wrap-ace iframe { width:100%; height:100%; min-height:380px; border:0; }

//   /* ── FLOOR PLAN ── */
//   .fp-section-ace { background:var(--cream); }
//   .fp-card-ace { background:#fff; border:1px solid rgba(26,77,74,0.12); overflow:hidden; transition:all 250ms; }
//   .fp-card-ace:hover { transform:translateY(-4px); box-shadow:0 12px 36px rgba(13,31,30,0.1); }
//   .fp-img-wrap-ace { position:relative; overflow:hidden; cursor:pointer; }
//   .fp-img-wrap-ace img { transition:filter 300ms; }
//   .fp-unlock-ace { position:absolute; inset:0; background:rgba(13,31,30,0.5); display:flex; align-items:center;
//     justify-content:center; opacity:0; transition:opacity 200ms; }
//   .fp-img-wrap-ace:hover .fp-unlock-ace { opacity:1; }
//   .fp-unlock-ace span { border:1px solid rgba(255,255,255,0.6); color:#fff; padding:9px 22px;
//     font:600 0.7rem var(--sans); letter-spacing:2px; text-transform:uppercase; }
//   .fp-info-ace { padding:1.25rem 1.25rem 0.5rem; }
//   .fp-name-ace { font:500 1.1rem var(--serif); color:var(--dark); }
//   .fp-btn-ace { display:flex; align-items:center; gap:8px; margin:0.75rem 1.25rem 1.25rem;
//     background:var(--teal-gradient); color:#fff; border:none; padding:10px 20px;
//     font:600 0.7rem var(--sans); letter-spacing:1.5px; text-transform:uppercase; cursor:pointer; transition:opacity 200ms; }
//   .fp-btn-ace:hover { opacity:0.85; }

//   /* ── ENQUIRY ── */
//   .enquiry-ace { background:#fff; }
//   .enq-card-ace { overflow:hidden; box-shadow:0 8px 48px rgba(13,31,30,0.08); }
//   .enq-inner-ace { padding:3rem; }
//   .enq-inp-ace { width:100%; background:#f0f7f6; border:none; border-bottom:2px solid rgba(26,77,74,0.2);
//     padding:13px 16px; font:400 0.88rem var(--sans); color:var(--dark); margin-bottom:12px; outline:none; transition:border-color 200ms; }
//   .enq-inp-ace:focus { border-bottom-color:var(--ace-teal); }
//   .enq-btn-ace { background:var(--teal-gradient); color:#fff; border:none; padding:13px 36px;
//     font:700 0.75rem var(--sans); letter-spacing:2px; text-transform:uppercase; cursor:pointer; transition:all 200ms; margin-top:4px; }
//   .enq-btn-ace:hover { opacity:0.88; transform:translateY(-1px); }

//   /* ── ABOUT DEV ── */
//   .about-ace { background:var(--dark); }
//   .about-card-ace { background:rgba(255,255,255,0.04); border:1px solid rgba(200,151,58,0.2); padding:2.5rem; height:100%; }
//   .about-card-ace h4 { font:400 1.5rem var(--serif); color:var(--gold-lt); margin-bottom:1rem; }
//   .about-card-ace p { font:400 0.88rem var(--sans); color:rgba(212,235,233,0.65); line-height:1.8; }

//   /* ── FOOTER ── */
//   .ace-footer { background:var(--dark); padding:2.5rem 0; }
//   .ace-footer a { color:var(--gold-lt); }
//   .ace-footer a:hover { color:var(--gold); }
//   .footer-text-ace { font:400 0.78rem var(--sans); color:rgba(212,235,233,0.55); line-height:1.9; }
//   .footer-disclaimer-ace { font:400 0.65rem var(--sans); color:rgba(212,235,233,0.3); margin-top:1rem; line-height:1.7;
//     border-top:1px solid rgba(200,151,58,0.1); padding-top:1rem; }
//   .social-icons-ace { display:flex; gap:10px; margin-top:1rem; }
//   .social-icons-ace a { width:34px; height:34px; border-radius:50%; border:1px solid rgba(200,151,58,0.3);
//     display:flex; align-items:center; justify-content:center; color:rgba(212,235,233,0.6); font-size:0.8rem; transition:all 200ms; }
//   .social-icons-ace a:hover { background:var(--gold); border-color:var(--gold); color:var(--dark); }

//   /* ── MOBILE CTA ── */
//   .mob-cta-ace { position:fixed; bottom:0; left:0; right:0; display:none; z-index:99; background:var(--dark); }
//   .mob-cta-ace a, .mob-cta-ace button { flex:1; color:#fff; text-align:center; padding:11px 6px;
//     font:600 0.65rem var(--sans); letter-spacing:1px; text-transform:uppercase; border:none;
//     border-right:1px solid rgba(200,151,58,0.15); background:none; cursor:pointer; display:flex;
//     flex-direction:column; align-items:center; gap:3px; }
//   .mob-cta-ace a:last-child, .mob-cta-ace button:last-child { border-right:none; }
//   .mob-cta-ace i { font-size:0.95rem; color:var(--gold); }
//   .mob-cta-ace .wa-mob { background:var(--whatsapp); }
//   .mob-cta-ace .wa-mob i { color:#fff; }

//   /* ── SCROLL TOP ── */
//   .scroll-top-ace { position:fixed; right:14px; bottom:65px; width:38px; height:38px; border-radius:50%;
//     background:var(--teal-gradient); color:#fff; border:none; cursor:pointer; display:flex;
//     align-items:center; justify-content:center; font-size:0.9rem; opacity:0; transition:opacity 300ms; z-index:98; }
//   .scroll-top-ace.show { opacity:1; }

//   /* ── MODAL ── */
//   .ace-modal-overlay { position:fixed; inset:0; background:rgba(10,25,24,0.93); backdrop-filter:blur(6px);
//     z-index:9999; display:flex; align-items:center; justify-content:center; padding:1rem; }
//   .ace-modal { background:#fff; max-width:460px; width:100%; position:relative; box-shadow:0 24px 60px rgba(0,0,0,0.4); }
//   .ace-modal-head { background:var(--dark); padding:1.75rem 2rem; text-align:center; }
//   .ace-modal-head .mh-tag { font:500 0.6rem var(--sans); letter-spacing:3px; text-transform:uppercase; color:var(--gold); margin-bottom:6px; }
//   .ace-modal-head h4 { font:400 1.4rem var(--serif); color:#fff; margin:0 0 4px; }
//   .ace-modal-head p { font:400 0.76rem var(--sans); color:rgba(255,255,255,0.5); margin:0; }
//   .ace-modal-body { padding:2rem; }
//   .modal-x-ace { position:absolute; top:-12px; right:-12px; width:34px; height:34px; border-radius:50%;
//     background:#fff; color:var(--dark); border:none; cursor:pointer; font-size:1.1rem; font-weight:700;
//     display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(0,0,0,0.2); z-index:1; }
//   .modal-x-ace:hover { background:var(--ace-teal); color:#fff; }

//   /* ── RESPONSIVE ── */
//   @media (max-width:991px) {
//     .ace-header .hd-inner { padding:0 1.5rem; }
//     .ace-nav { display:none; }
//     .ham { display:flex; }
//     .ace-cta .btn-wa-ace { display:none; }
//     .mob-cta-ace { display:flex; }
//     .scroll-top-ace { bottom:55px; }
//     .hl-grid-ace { grid-template-columns:repeat(2,1fr); }
//     .ace-hero { height:85vh; }
//     .hero-title { font-size:3rem; }
//   }
//   @media (max-width:767px) {
//     .section-pad { padding:3.5rem 0; }
//     .ace-hero { height:auto; aspect-ratio:4/5; margin-top:72px; }
//     .hero-content { left:5%; max-width:90%; }
//     .hero-title { font-size:2.3rem; }
//     .hl-grid-ace { grid-template-columns:1fr 1fr; }
//     .cfg-item-ace { min-width:50%; }
//     .enq-inner-ace { padding:2rem 1.5rem; }
//     .ace-footer { padding-bottom:4rem; }
//   }
//   @media (max-width:575px) {
//     .hero-title { font-size:1.9rem; }
//     .hero-actions { flex-direction:column; }
//     .hl-grid-ace { grid-template-columns:1fr; }
//     .title-ace { font-size:2.1rem; }
//   }
// `;

// /* ─── EmailJS ─── */
// function sendEnquiry(data, onOk, onErr) {
//   if (!window.emailjs) { onErr("EmailJS not ready"); return; }
//   window.emailjs.send("service_fkmfynb", "template_bdjcyq6", data).then(onOk).catch(onErr);
// }

// /* ─── Form ─── */
// function AceForm({ inpClass = "sf-inp-ace", btnClass = "sf-sub-ace", requireEmail = false, onDone }) {
//   const [vals, setVals] = useState({ name: "", mobile: "", email: "" });
//   const [status, setStatus] = useState("");
//   const change = (e) => setVals({ ...vals, [e.target.name]: e.target.value });
//   const submit = (e) => {
//     e.preventDefault();
//     setStatus("Sending…");
//     sendEnquiry(
//       { name: vals.name, mobile: vals.mobile, email: vals.email || "Not Provided" },
//       () => {
//         setStatus("✅ Sent! Our team will contact you shortly.");
//         setVals({ name: "", mobile: "", email: "" });
//         onDone?.();
//         window.open("https://wa.me/918882430000?text=Hi! I am interested in ACE Estate Sector 22D Yamuna Expressway. Please share plot details.", "_blank");
//       },
//       () => setStatus("❌ Failed. Please try again.")
//     );
//   };
//   return (
//     <form onSubmit={submit}>
//       {status && <div className="sf-status-ace" style={{ color: status.startsWith("✅") ? "#1a4d4a" : status.startsWith("❌") ? "#c0392b" : "#4a6a68" }}>{status}</div>}
//       <input className={inpClass} type="text"  name="name"   placeholder="Full Name *"    required value={vals.name}   onChange={change} />
//       <input className={inpClass} type="tel"   name="mobile" placeholder="Mobile Number *" required value={vals.mobile} onChange={change} />
//       {requireEmail && <input className={inpClass} type="email" name="email" placeholder="Email Address *" required value={vals.email} onChange={change} />}
//       <button type="submit" className={btnClass}>Enquire Now</button>
//     </form>
//   );
// }

// /* ─── Smart image (local placeholder) ─── */
// function SImg({ src, alt, height = 220, style }) {
//   const isLocal = src && src.startsWith("assetsc/");
//   if (isLocal) return <div className="img-ph" style={{ minHeight: height, ...style }}><span>📷 {alt}</span></div>;
//   return <img src={src} alt={alt} style={style} onError={(e) => { e.target.style.display = "none"; }} />;
// }

// /* ─── Main ─── */
// export default function AceEstate() {
//   const [menuOpen,  setMenuOpen]  = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [scrolled,  setScrolled]  = useState(false);
//   const [showTop,   setShowTop]   = useState(false);
//   const [locTab,    setLocTab]    = useState(0);
//   const swiperDone = useRef(false);

//   useEffect(() => {
//     const load = (src, cb) => {
//       if (document.querySelector(`script[src="${src}"]`)) { cb?.(); return; }
//       const s = document.createElement("script");
//       s.src = src; s.onload = cb; document.body.appendChild(s);
//     };
//     load("https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js", () => window.emailjs?.init("xLfYDZXLlR6IeQ-C6"));
//     load("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js");
//     load("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js");
//     load("https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.1/swiper-bundle.min.js", () => {
//       if (!swiperDone.current && window.Swiper) {
//         swiperDone.current = true;
//         new window.Swiper(".ace-gallery-swiper", {
//           slidesPerView: 1, spaceBetween: 8, loop: true,
//           autoplay: { delay: 3000, disableOnInteraction: false },
//           navigation: { nextEl: ".ace-gal-next", prevEl: ".ace-gal-prev" },
//           breakpoints: { 540: { slidesPerView: 2, spaceBetween: 12 }, 1024: { slidesPerView: 3, spaceBetween: 16 } },
//         });
//       }
//     });
//     load("https://unpkg.com/aos@2.3.0/dist/aos.js", () => window.AOS?.init({ duration: 1100, once: true }));
//   }, []);

//   useEffect(() => {
//     const fn = () => { setScrolled(window.scrollY > 55); setShowTop(window.scrollY > 300); };
//     window.addEventListener("scroll", fn);
//     return () => window.removeEventListener("scroll", fn);
//   }, []);

//   useEffect(() => {
//     const t = setTimeout(() => setShowModal(true), 6000);
//     return () => clearTimeout(t);
//   }, []);

//   const navLinks = [
//     { href: "#overview",  label: "Overview"   },
//     { href: "#plots",     label: "Plots"      },
//     { href: "#amenities", label: "Amenities"  },
//     { href: "#gallery",   label: "Gallery"    },
//     { href: "#location",  label: "Location"   },
//     { href: "#contact",   label: "Contact"    },
//   ];

//   const highlights = [
//     { icon: "fa-map-location-dot", text: "~275,186 sq.m. (68+ Acres) integrated township" },
//     { icon: "fa-water",            text: "Blue Trail — scenic water body winding through the township" },
//     { icon: "fa-house-chimney",    text: "Build your dream home — total design freedom" },
//     { icon: "fa-tree",             text: "Extensive green parks, landscaped gardens & open spaces" },
//     { icon: "fa-shield-halved",    text: "RERA Registered · UPRERAPRJ442226 · Full legal transparency" },
//     { icon: "fa-plane-departure",  text: "~15 mins from Jewar International Airport (upcoming)" },
//     { icon: "fa-film",             text: "Adjacent to Noida Film City & YEIDA smart city projects" },
//     { icon: "fa-road",             text: "Bang on Yamuna Expressway · seamless NCR connectivity" },
//   ];

//   const plots = [
//     { type: "Type D", size: "150 Sq. Yds.", sqft: "~1,350 Sq.Ft.", price: "₹1.15L / Sq.Yd.*" },
//     { type: "Type C", size: "200 Sq. Yds.", sqft: "~1,800 Sq.Ft.", price: "₹1.15L / Sq.Yd.*" },
//     { type: "Type B", size: "300 Sq. Yds.", sqft: "~2,700 Sq.Ft.", price: "On Request"         },
//     { type: "Type A", size: "500 Sq. Yds.", sqft: "~4,500 Sq.Ft.", price: "On Request"         },
//   ];

//   const features = [
//     { icon: "fa-water",            title: "Blue Trail",           desc: "Picturesque water body winding through the community" },
//     { icon: "fa-house-chimney",    title: "Majestic Clubhouse",   desc: "Grand club with sports, leisure & social spaces"       },
//     { icon: "fa-dumbbell",         title: "Sports & Fitness",     desc: "Gym, yoga deck, jogging track & outdoor courts"        },
//     { icon: "fa-children",         title: "Kids Play Zone",       desc: "Safe, dedicated spaces for children to explore"        },
//     { icon: "fa-utensils",         title: "Multi-Cuisine Dining", desc: "On-site restaurant & community gathering spaces"       },
//     { icon: "fa-leaf",             title: "Green Landscape",      desc: "7+ acres of parks, gardens & serene open areas"       },
//   ];

//   const locationTabs = [
//     {
//       label: "Roads & Expressways",
//       items: [
//         "Yamuna Expressway – Direct Access",
//         "Noida–Greater Noida Expressway – 20 Mins",
//         "Eastern Peripheral Expressway – 15 Mins",
//         "Noida–Greater Noida Link Road – 3 Mins",
//         "NH-58 / Delhi–Agra Highway – Via Expressway",
//       ],
//     },
//     {
//       label: "Airport & Transit",
//       items: [
//         "Jewar International Airport (Upcoming) – ~15 Mins",
//         "Kalindi Kunj, Delhi – ~45 Mins via Expressway",
//         "Pari Chowk Metro Station – 20 Mins",
//         "RRTS Corridor (Upcoming) – Regional Rapid Rail",
//         "Proposed Metro Extension – Sector 22D Node",
//       ],
//     },
//     {
//       label: "Education",
//       items: [
//         "Galgotias University – 10 Mins",
//         "Amity University – 25 Mins",
//         "Sharda University – 20 Mins",
//         "Noida International University – 25 Mins",
//         "DPS Greater Noida – 18 Mins",
//       ],
//     },
//     {
//       label: "Healthcare",
//       items: [
//         "Jaypee Hospital – 20 Mins",
//         "Yatharth Super Speciality Hospital – 20 Mins",
//         "Kailash Hospital, Greater Noida – 25 Mins",
//         "Sharda Hospital – 20 Mins",
//       ],
//     },
//     {
//       label: "Growth Drivers",
//       items: [
//         "Noida Film City – Adjacent Sector",
//         "YEIDA Olympic Park (~1,100 Acres) – Sector 22",
//         "F1 Track (Buddh International Circuit) – 12 Mins",
//         "Upcoming Logistics & IT Parks – Along Expressway",
//         "YEIDA Smart City & Industrial Zones – Nearby",
//       ],
//     },
//   ];

//   return (
//     <>
//       <style>{styles}</style>

//       {/* ── Header ── */}
//       <header className={`ace-header ${scrolled ? "scrolled" : ""}`}>
//         <div className="hd-inner">
//           <div className="ace-logo"><img src={IMG.LOGO} alt="ACE Group" /></div>
//           <nav className="ace-nav">
//             {navLinks.map(({ href, label }) => <a key={href} href={href}>{label}</a>)}
//           </nav>
//           <div className="ace-cta">
//             <a href="tel:+918882430000" className="btn-call-ace"><i className="fa fa-phone" /> +91 88824 30000</a>
//             <a href="https://wa.me/918882430000?text=Hi! I am interested in ACE Estate Sector 22D Yamuna Expressway." target="_blank" rel="noreferrer" className="btn-wa-ace">
//               <i className="fab fa-whatsapp" /> WhatsApp
//             </a>
//             <button className={`ham ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(o => !o)}>
//               <span /><span /><span />
//             </button>
//           </div>
//         </div>
//       </header>

//       <div className={`mob-menu-ace ${menuOpen ? "open" : ""}`}>
//         {navLinks.map(({ href, label }) => (
//           <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
//         ))}
//         <a href="tel:+918882430000" style={{ color: "var(--gold)", marginTop: "0.5rem" }}>
//           <i className="fa fa-phone" style={{ marginRight: 8 }} /> +91 88824 30000
//         </a>
//       </div>

//       <main>
//         {/* ── Hero ── */}
//         <section className="ace-hero" id="home">
//           <img src={IMG.HERO} alt="ACE Estate Yamuna Expressway" />
//           <div className="hero-content">
//             <div className="hero-eyebrow"><i className="fa fa-circle-dot" /> ACE Group · RERA: UPRERAPRJ442226</div>
//             <h1 className="hero-title">
//               ACE<br /><strong>Estate</strong>
//             </h1>
//             <p className="hero-sub">Premium Residential Plots · Sector 22D, Yamuna Expressway</p>
//             <div className="hero-chips">
//               <div className="hero-chip"><i className="fa fa-map" /> 68+ Acres Township</div>
//               <div className="hero-chip"><i className="fa fa-home" /> 150–500 Sq.Yds. Plots</div>
//               <div className="hero-chip"><i className="fa fa-plane" /> 15 Mins · Jewar Airport</div>
//               <div className="hero-chip"><i className="fa fa-water" /> Blue Trail Water Feature</div>
//             </div>
//             <div className="hero-price">
//               <span className="hp-label">Plot Price Starting</span>
//               <span className="hp-value">₹1,15,000 / Sq.Yd.*</span>
//             </div>
//             <div className="hero-actions">
//               <button className="btn-solid-teal" onClick={() => setShowModal(true)}>Book a Plot</button>
//               <button className="btn-ghost-ace" onClick={() => setShowModal(true)}>Download Brochure</button>
//             </div>
//           </div>
//         </section>

//         {/* ── Marquee ── */}
//         <div className="ace-marquee">
//           <div className="mq">
//             {["68+ Acres Township", "150 to 500 Sq.Yd. Plots", "Blue Trail Water Body",
//               "Majestic Clubhouse", "RERA Registered", "15 Mins · Jewar Airport",
//               "Film City · F1 Track · Olympic Park", "₹1.15L / Sq.Yd.",
//               "68+ Acres Township", "150 to 500 Sq.Yd. Plots", "Blue Trail Water Body",
//               "Majestic Clubhouse", "RERA Registered", "15 Mins · Jewar Airport",
//               "Film City · F1 Track · Olympic Park", "₹1.15L / Sq.Yd.",
//             ].map((t, i) => <span key={i}><span className="dot">✦</span> {t}</span>)}
//           </div>
//         </div>

//         {/* ── Overview ── */}
//         <section className="section-pad overview-section-ace" id="overview">
//           <div className="container-lg">
//             <div className="row g-5">
//               <div className="col-lg-8" data-aos="fade-right">
//                 <div className="rera-chip-ace"><i className="fa fa-shield-halved" /> RERA: UPRERAPRJ442226 · up-rera.in</div>
//                 <p className="eyebrow-ace">Project Overview</p>
//                 <h2 className="title-ace">ACE <em>Estate</em></h2>
//                 <p className="sub-ace" style={{ marginBottom: "1.5rem" }}>An Integrated Plotted Township · Sector 22D, Yamuna Expressway, Greater Noida</p>
//                 <p style={{ lineHeight: 1.85, marginBottom: "1rem" }}>
//                   Step into a realm where every moment feels like a serene escape. At <strong>ACE Estate</strong>,
//                   our <strong>~275,186 sq.m. integrated plotted township</strong> on the Yamuna Expressway is a harmonious
//                   blend of lush greenery, exquisite amenities, and vibrant community living.
//                 </p>
//                 <p style={{ lineHeight: 1.85, marginBottom: "2rem" }}>
//                   Stroll along the <strong>Blue Trail</strong> — a picturesque water body that soothes the senses —
//                   or immerse yourself in the grandeur of the majestic clubhouse. This is where modern living meets
//                   nature's embrace: a place where your soul finds its sanctuary and joy becomes a way of life.
//                   Choose from <strong>4 plot sizes</strong> (150 to 500 sq.yds.) and build your dream home exactly
//                   the way you envision, with total design freedom.
//                 </p>
//                 <div className="config-strip-ace">
//                   {[
//                     { l: "Land",    v: "68+ Acres"       },
//                     { l: "Plots",   v: "150–500 Sq.Yds." },
//                     { l: "Types",   v: "4 Configurations" },
//                     { l: "Price",   v: "₹1.15L/Sq.Yd.*" },
//                     { l: "RERA",    v: "UPRERAPRJ442226" },
//                   ].map(({ l, v }) => (
//                     <div key={l} className="cfg-item-ace">
//                       <div className="cfg-label-ace">{l}</div>
//                       <div className="cfg-value-ace">{v}</div>
//                     </div>
//                   ))}
//                 </div>
//                 <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: "1.5rem" }}>
//                   <button className="btn-solid-teal" onClick={() => setShowModal(true)}>
//                     <i className="fa fa-download" style={{ marginRight: 6 }} /> Download Brochure
//                   </button>
//                   <button onClick={() => setShowModal(true)} style={{ border: "1px solid rgba(26,77,74,0.3)", background: "transparent", color: "var(--dark)", padding: "12px 28px", font: "600 0.75rem var(--sans)", letterSpacing: 2, textTransform: "uppercase", cursor: "pointer" }}>
//                     Schedule Site Visit
//                   </button>
//                 </div>
//               </div>
//               <div className="col-lg-4">
//                 <div className="sticky-wrap-ace" data-aos="fade-left">
//                   <div className="sticky-form-ace">
//                     <div className="sf-head-ace">
//                       <h5>Book Your Plot</h5>
//                       <small>GET BEST PRICE & AVAILABILITY</small>
//                     </div>
//                     <div className="sf-body-ace"><AceForm /></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── Plot Types ── */}
//         <section className="plot-section section-pad" id="plots">
//           <div className="container-lg">
//             <div className="text-center mb-5" data-aos="fade-up">
//               <p className="eyebrow-ace" style={{ justifyContent: "center" }}>Configurations</p>
//               <h2 className="title-ace">Choose Your <em>Plot Size</em></h2>
//               <p className="sub-ace">Four plot types to match every dream and budget</p>
//             </div>
//             <div className="row g-4" data-aos="fade-up">
//               {plots.map(({ type, size, sqft, price }) => (
//                 <div key={type} className="col-lg-3 col-sm-6">
//                   <div className="plot-card">
//                     <div className="plot-icon"><i className="fa fa-house-flag" /></div>
//                     <div className="plot-type">{type}</div>
//                     <div className="plot-size">{size}</div>
//                     <div style={{ font: "400 0.78rem var(--sans)", color: "#4a6a68", marginBottom: "4px" }}>{sqft}</div>
//                     <div className="plot-price">{price}</div>
//                     <button className="plot-btn" onClick={() => setShowModal(true)}>
//                       Enquire for This Plot
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <p style={{ textAlign: "center", fontSize: "0.72rem", color: "#4a6a68", marginTop: "1.25rem", fontStyle: "italic" }}>
//               * Prices are indicative and subject to change. Contact us for current pricing and availability.
//             </p>
//           </div>
//         </section>

//         {/* ── Highlights ── */}
//         <section className="highlights-ace section-pad">
//           <div className="container-lg">
//             <div className="text-center mb-5" data-aos="fade-up">
//               <p className="eyebrow-ace" style={{ color: "var(--gold)", justifyContent: "center" }}>Why ACE Estate</p>
//               <h2 className="title-ace" style={{ color: "#d4ebe9" }}>Key <em style={{ color: "var(--gold-lt)" }}>Highlights</em></h2>
//             </div>
//             <div className="hl-grid-ace" data-aos="fade-up">
//               {highlights.map(({ icon, text }) => (
//                 <div key={text} className="hl-item-ace">
//                   <div className="hl-icon-ace"><i className={`fa ${icon}`} /></div>
//                   <p>{text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ── Feature Band ── */}
//         <section className="feature-band">
//           <div className="container-lg">
//             <div className="text-center mb-4" data-aos="fade-up">
//               <h2 style={{ font: "400 2.2rem var(--serif)", color: "#fff", marginBottom: "0.5rem" }}>
//                 The Blue Trail Experience
//               </h2>
//               <p style={{ font: "400 0.92rem var(--sans)", opacity: 0.78, margin: 0 }}>
//                 A one-of-a-kind water body weaving through the township — ACE Estate's signature lifestyle feature
//               </p>
//             </div>
//             <div className="row g-4 mt-2" data-aos="fade-up">
//               {features.map(({ icon, title, desc }) => (
//                 <div key={title} className="col-lg-2 col-md-4 col-6">
//                   <div className="feat-item">
//                     <i className={`fa ${icon}`} />
//                     <h4>{title}</h4>
//                     <p>{desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ── Amenities ── */}
//         <section className="amenities-ace section-pad" id="amenities">
//           <div className="container-lg">
//             <div className="text-center mb-5" data-aos="fade-up">
//               <p className="eyebrow-ace" style={{ color: "var(--gold)", justifyContent: "center" }}>Lifestyle</p>
//               <h2 className="title-ace" style={{ color: "#d4ebe9" }}>World-Class <em style={{ color: "var(--gold-lt)" }}>Amenities</em></h2>
//               <p style={{ font: "400 0.88rem var(--sans)", color: "rgba(212,235,233,0.55)", marginTop: "0.4rem" }}>
//                 Majestic Clubhouse · Blue Trail · Landscaped Parks · Sports Courts & More
//               </p>
//             </div>
//             <div className="row g-3" data-aos="fade-up">
//               {IMG.AMENITY_IMGS.map(({ src, label }) => (
//                 <div key={label} className="col-6 col-md-4">
//                   <div className="ame-card-ace">
//                     <img src={src} alt={label} onError={(e) => { e.target.style.display = "none"; }} />
//                     <div className="ame-overlay-ace"><span>{label}</span></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="text-center mt-4">
//               <button className="btn-solid-teal" onClick={() => setShowModal(true)}>Request Full Amenity List</button>
//             </div>
//           </div>
//         </section>

//         {/* ── Floor Plan ── */}
//         <section className="fp-section-ace section-pad">
//           <div className="container-lg">
//             <div className="text-center mb-4" data-aos="fade-up">
//               <p className="eyebrow-ace" style={{ justifyContent: "center" }}>Master Plan</p>
//               <h2 className="title-ace">Township <em>Layout</em></h2>
//             </div>
//             <div className="row g-4 justify-content-center" data-aos="fade-up">
//               <div className="col-lg-6 col-md-8">
//                 <div className="fp-card-ace">
//                   <div className="fp-img-wrap-ace" onClick={() => setShowModal(true)}>
//                     <SImg src={IMG.MASTER_PLAN} alt="ACE Estate Master Plan" height={280} style={{ filter: "blur(5px)", minHeight: 280 }} />
//                     <div className="fp-unlock-ace"><span>Register to View Full Plan</span></div>
//                   </div>
//                   <div className="fp-info-ace">
//                     <div className="fp-name-ace">ACE Estate · Tentative Master Plan</div>
//                   </div>
//                   <button className="fp-btn-ace" onClick={() => setShowModal(true)}>
//                     <i className="fa fa-download" /> Request Master Plan
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── Gallery ── */}
//         <section className="gallery-ace section-pad" id="gallery">
//           <div className="container-lg">
//             <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4" data-aos="fade-up">
//               <div>
//                 <p className="eyebrow-ace" style={{ color: "var(--gold)" }}>Visual Tour</p>
//                 <h2 className="title-ace" style={{ color: "#d4ebe9" }}>Project <em style={{ color: "var(--gold-lt)" }}>Gallery</em></h2>
//               </div>
//               <div className="gal-ctrl-ace">
//                 <div className="swiper-button-prev ace-gal-prev" />
//                 <div className="swiper-button-next ace-gal-next" />
//               </div>
//             </div>
//             <div className="swiper ace-gallery-swiper" data-aos="fade-up">
//               <div className="swiper-wrapper">
//                 {IMG.GALLERY.map(({ src, label }) => (
//                   <div key={src} className="swiper-slide gal-slide-ace">
//                     <img src={src} alt={label} onError={(e) => { e.target.style.display = "none"; }} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── Location ── */}
//         <section className="location-ace section-pad" id="location">
//           <div className="container-lg">
//             <div className="text-center mb-5" data-aos="fade-up">
//               <p className="eyebrow-ace" style={{ justifyContent: "center" }}>Connectivity</p>
//               <h2 className="title-ace">Location <em>Advantages</em></h2>
//               <p className="sub-ace"><i className="fa fa-map-marker-alt" style={{ color: "var(--ace-teal)" }} /> Sector 22D, Yamuna Expressway, Greater Noida</p>
//             </div>
//             <div className="row g-4">
//               <div className="col-lg-5" data-aos="fade-right">
//                 <div className="map-wrap-ace">
//                   <iframe
//                     src="https://www.google.com/maps?q=ACE+Estate+Sector+22D+Yamuna+Expressway+Greater+Noida&output=embed"
//                     title="ACE Estate Location Map" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
//                   />
//                 </div>
//               </div>
//               <div className="col-lg-7" data-aos="fade-left">
//                 <div className="loc-tab-row">
//                   {locationTabs.map(({ label }, i) => (
//                     <button key={label} className={`loc-tab-btn ${locTab === i ? "active" : ""}`} onClick={() => setLocTab(i)}>
//                       {label}
//                     </button>
//                   ))}
//                 </div>
//                 {locationTabs[locTab].items.map((item) => (
//                   <div key={item} className="loc-row-ace">
//                     <i className="fa fa-location-dot" />
//                     <strong>{item}</strong>
//                   </div>
//                 ))}
//                 <button className="btn-solid-teal" style={{ marginTop: "1.5rem" }} onClick={() => setShowModal(true)}>
//                   Get Directions & Location Map
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── Enquiry ── */}
//         <section className="enquiry-ace section-pad" id="contact">
//           <div className="container-lg">
//             <div className="enq-card-ace" data-aos="fade-up">
//               <div className="row g-0">
//                 <div className="col-lg-7">
//                   <div className="enq-inner-ace">
//                     <p className="eyebrow-ace">Get In Touch</p>
//                     <h2 className="title-ace">Enquire <em>Now</em></h2>
//                     <p className="sub-ace" style={{ marginBottom: "2rem" }}>
//                       Our team will share pricing, plot availability and arrange a site visit for you.
//                     </p>
//                     <AceForm inpClass="enq-inp-ace" btnClass="enq-btn-ace" requireEmail />
//                   </div>
//                 </div>
//                 <div className="col-lg-5" style={{ minHeight: 300, overflow: "hidden" }}>
//                   <SImg src={IMG.FORM_SIDE} alt="ACE Estate Site" height={420} style={{ height: "100%", objectFit: "cover", minHeight: 300 }} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── About Developer ── */}
//         <section className="about-ace section-pad">
//           <div className="container-lg">
//             <div className="text-center mb-5" data-aos="fade-up">
//               <p className="eyebrow-ace" style={{ color: "var(--gold)", justifyContent: "center" }}>Developer</p>
//               <h2 className="title-ace" style={{ color: "#d4ebe9" }}>About <em style={{ color: "var(--gold-lt)" }}>ACE Group</em></h2>
//             </div>
//             <div className="row g-4" data-aos="fade-up">
//               <div className="col-lg-8">
//                 <div className="about-card-ace">
//                   <h4>15+ Years · 10,000+ Happy Clients · Award-Winning Developer</h4>
//                   <p>
//                     ACE Group is one of NCR's most trusted real estate developers, with over 15 years of
//                     excellence and a portfolio spanning residential apartments, commercial complexes, and
//                     integrated townships across Noida, Greater Noida, Gurgaon, and beyond.
//                   </p>
//                   <p style={{ marginTop: "1rem" }}>
//                     Known for quality construction, timely delivery, and customer-centric planning, ACE Group
//                     has delivered landmark projects like ACE Platinum, ACE City, ACE Aspire, ACE Divino,
//                     ACE Parkway, ACE Starlit, and ACE Terra — with ACE Estate being their flagship integrated
//                     township on the Yamuna Expressway.
//                   </p>
//                   <div style={{ display: "flex", gap: "2rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
//                     {[["15+", "Years"], ["10K+", "Clients"], ["45+", "Projects"], ["Award", "Winning"]].map(([val, lbl]) => (
//                       <div key={lbl} style={{ textAlign: "center" }}>
//                         <div style={{ font: "600 1.5rem var(--serif)", color: "var(--gold-lt)" }}>{val}</div>
//                         <div style={{ font: "400 0.7rem var(--sans)", color: "rgba(212,235,233,0.55)", letterSpacing: 1 }}>{lbl}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-4">
//                 <div className="about-card-ace" style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "1rem", alignItems: "center", textAlign: "center" }}>
//                   <img src={IMG.LOGO} alt="ACE Group" style={{ width: 100, margin: "0 auto" }} />
//                   <div style={{ font: "400 0.7rem var(--sans)", color: "rgba(212,235,233,0.5)", letterSpacing: 1, marginTop: "0.5rem" }}>
//                     Sales Inquiry
//                   </div>
//                   <a href="tel:+918882430000" style={{ color: "var(--gold)", font: "700 1rem var(--sans)", display: "flex", alignItems: "center", gap: 8 }}>
//                     <i className="fa fa-phone" /> +91 88824 30000
//                   </a>
//                   <a href="mailto:info@acegroupindia.com" style={{ color: "rgba(212,235,233,0.6)", font: "400 0.8rem var(--sans)" }}>
//                     info@acegroupindia.com
//                   </a>
//                   <div className="social-icons-ace">
//                     <a href="https://www.facebook.com/AceGroupOfficial" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f" /></a>
//                     <a href="https://www.instagram.com/acegroupofficial/" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></a>
//                     <a href="https://twitter.com/AceGroupIndia" target="_blank" rel="noreferrer"><i className="fab fa-twitter" /></a>
//                     <a href="https://www.youtube.com/c/acegroupofficial" target="_blank" rel="noreferrer"><i className="fab fa-youtube" /></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── Footer ── */}
//         <footer className="ace-footer">
//           <div className="container-lg">
//             <div className="row g-4 align-items-start">
//               <div className="col-md-8">
//                 <div style={{ font: "400 1.3rem var(--serif)", color: "var(--gold-lt)", marginBottom: "0.75rem" }}>
//                   ACE Estate · Sector 22D, Yamuna Expressway, Greater Noida
//                 </div>
//                 <div className="footer-text-ace">
//                   RERA Registered: UPRERAPRJ442226<br />
//                   <a href="https://up-rera.in/projects/" target="_blank" rel="noreferrer">up-rera.in</a>
//                   {" · "}
//                   <a href="https://acegroupindia.com/privacy-policy.php" target="_blank" rel="noreferrer">Privacy Policy</a>
//                   {" · "}
//                   <a href="https://acegroupindia.com/terms-and-conditions.php" target="_blank" rel="noreferrer">Terms & Conditions</a>
//                 </div>
//                 <div className="footer-disclaimer-ace">
//                   This website is operated by an authorized channel partner and is not the official ACE Group website.
//                   Content is for informational purposes only. Prices, plot availability, and specifications are indicative
//                   and subject to change without prior notice. Images are for representation purposes only. Please verify
//                   all RERA details on up-rera.in before making any purchase decision.
//                 </div>
//               </div>
//               <div className="col-md-4 text-center">
//                 <img src={IMG.QR} alt="ACE Estate QR Code" style={{ width: 110, margin: "0 auto", display: "block" }} onError={(e) => { e.target.style.display = "none"; }} />
//                 <p style={{ fontSize: "0.68rem", marginTop: 8, color: "rgba(212,235,233,0.35)" }}>
//                   Scan for RERA details
//                 </p>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </main>

//       {/* ── Mobile CTA ── */}
//       <div className="mob-cta-ace d-flex d-md-none">
//         <a className="wa-mob" href="https://wa.me/918882430000?text=Hi! I am interested in ACE Estate." target="_blank" rel="noreferrer">
//           <i className="fab fa-whatsapp" /><span>WhatsApp</span>
//         </a>
//         <a href="tel:+918882430000"><i className="fa fa-phone" /><span>Call Now</span></a>
//         <button onClick={() => setShowModal(true)}><i className="fa fa-envelope" /><span>Enquire</span></button>
//       </div>

//       {/* ── Scroll Top ── */}
//       <button className={`scroll-top-ace ${showTop ? "show" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
//         <i className="fa fa-chevron-up" />
//       </button>

//       {/* ── Modal ── */}
//       {showModal && (
//         <div className="ace-modal-overlay" onClick={(e) => e.target === e.currentTarget && setShowModal(false)}>
//           <div className="ace-modal">
//             <button className="modal-x-ace" onClick={() => setShowModal(false)}>×</button>
//             <div className="ace-modal-head">
//               <p className="mh-tag">ACE Group · Sector 22D · Yamuna Expressway</p>
//               <h4>ACE Estate</h4>
//               <p>Premium Residential Plots · 150–500 Sq.Yds. · ₹1.15L / Sq.Yd.*</p>
//             </div>
//             <div className="ace-modal-body">
//               <p style={{ textAlign: "center", font: "400 0.88rem var(--sans)", color: "var(--ace-teal)", marginBottom: "1.5rem" }}>
//                 Share your details and get plot pricing, availability & site visit scheduled.
//               </p>
//               <AceForm requireEmail onDone={() => setShowModal(false)} />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import { useState } from "react";
import Banner1 from "../assets/ban1.png";
import Chart from "../assets/sell-now-chart.png";
import G1 from "../assets/gallery1.png";
import G2 from "../assets/gallery2.png";
import G3 from "../assets/gallery3.png";
// import G4 from "../assetsc/gallery4.jpg";
// import G5 from "../assetsc/gallery5.jpg";
// import G6 from "../assetsc/gallery6.jpg";
// import G7 from "../assetsc/gallery7.jpg";
// import G8 from "../assetsc/gallery8.jpg";
// import Blog1 from "../assetsc/blog1.jpg";
// import Blog2 from "../assetsc/blog2.jpg";
// import Blog3 from "../assetsc/blog3.jpg";
// import Testi1 from "../assetsc/testi1.jpg";
// import Testi2 from "../assetsc/testi2.jpg";
// import Testi3 from "../assetsc/testi3.jpg";
// import Testi4 from "../assetsc/testi4.jpg";

const IMG = {
  banner: Banner1,
  sellNowChart: Chart,
  // gallery1: G1,
  // gallery2: G2,
  // gallery3: G3,
  // gallery4: G4,
  // gallery5: G5,
  // gallery6: G6,
  // gallery7: G7,
  // gallery8: G8,
  // blog1: Blog1,
  // blog2: Blog2,
  // blog3: Blog3,
  // testi1: Testi1,
  // testi2: Testi2,
  // testi3: Testi3,
  // testi4: Testi4,
  // map: MapImg,
};

const G = "#A9791C";
const GD = "#8B6314";
const GL = "#D9BB6C";
const BG = "#FDFBF6";
const BG2 = "#F4EFE2";
const DARK = "#211B0E";
const GRAY = "rgba(33,27,14,0.62)";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=Poppins:wght@300;400;500;600;700&display=swap');
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{font-family:'Poppins',sans-serif;background:${BG};color:${DARK};overflow-x:hidden;}

/* TOP BAR */
.topbar{background:#F3E8C4;border-bottom:1px solid rgba(169,121,28,0.2);padding:8px 0;font-size:13px;}
.topbar-inner{max-width:1200px;margin:0 auto;padding:0 20px;display:flex;align-items:center;justify-content:flex-end;gap:28px;}
.topbar span{display:flex;align-items:center;gap:6px;color:rgba(33,27,14,0.75);}
.topbar a{color:${G};text-decoration:none;font-weight:600;display:flex;align-items:center;gap:6px;}

/* NAV */
nav{background:${BG};border-bottom:1px solid rgba(169,121,28,0.15);position:sticky;top:0;z-index:999;}
.nav-inner{max-width:1200px;margin:0 auto;padding:0 20px;display:flex;align-items:center;justify-content:space-between;height:68px;}
.logo{font-family:'Playfair Display',serif;font-size:24px;font-weight:900;color:${G};letter-spacing:0.5px;text-decoration:none;}
.logo span{color:${DARK};}
.nav-links{display:flex;align-items:center;gap:6px;list-style:none;}
.nav-links a{color:rgba(33,27,14,0.82);text-decoration:none;font-size:14px;font-weight:500;padding:8px 14px;border-radius:6px;transition:all 0.2s;white-space:nowrap;}
.nav-links a:hover{color:${G};background:rgba(169,121,28,0.08);}
.nav-links .dropdown{position:relative;}
.nav-links .dropdown:hover .dropdown-menu{display:block;}
.dropdown-menu{display:none;position:absolute;top:100%;left:0;background:#FBF7EA;border:1px solid rgba(169,121,28,0.2);border-radius:8px;min-width:200px;padding:8px 0;z-index:100;box-shadow:0 8px 32px rgba(33,27,14,0.15);}
.dropdown-menu a{display:block;padding:10px 18px;color:rgba(33,27,14,0.75);font-size:13px;border-radius:0;}
.dropdown-menu a:hover{color:${G};background:rgba(169,121,28,0.08);}
.nav-phone{background:${G};color:#fff;padding:10px 20px;border-radius:6px;font-weight:700;font-size:13px;text-decoration:none;white-space:nowrap;}
.nav-phone:hover{background:${GD};}
.hamburger{display:none;background:none;border:none;color:${DARK};font-size:26px;cursor:pointer;}
.mobile-menu{display:none;flex-direction:column;background:#F8F3E6;padding:16px 20px;gap:4px;border-top:1px solid rgba(169,121,28,0.15);}
.mobile-menu a{color:rgba(33,27,14,0.8);text-decoration:none;padding:12px 0;font-size:15px;border-bottom:1px solid rgba(33,27,14,0.08);}
.mobile-menu.open{display:flex;}

/* HERO */
.hero{min-height:90vh;background:linear-gradient(120deg,${BG} 55%,#F7EFD2 100%);display:flex;align-items:center;position:relative;overflow:hidden;}
.hero::after{content:'';position:absolute;right:0;top:0;bottom:0;width:45%;background:linear-gradient(135deg,rgba(169,121,28,0.09),rgba(169,121,28,0.02));clip-path:polygon(10% 0,100% 0,100% 100%,0 100%);}
.hero-inner{max-width:1200px;margin:0 auto;padding:60px 20px;display:flex;align-items:center;gap:60px;width:100%;position:relative;z-index:1;}
.hero-left{flex:1;}
.hero-tag{display:inline-block;background:rgba(169,121,28,0.12);border:1px solid rgba(169,121,28,0.35);color:${G};font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;padding:6px 16px;border-radius:100px;margin-bottom:22px;}
.hero-title{font-family:'Playfair Display',serif;font-size:clamp(36px,4.5vw,62px);font-weight:900;line-height:1.1;margin-bottom:8px;color:${DARK};}
.hero-title .gold{color:${G};}
.hero-subtitle{font-size:16px;color:${GRAY};line-height:1.75;margin:20px 0 36px;max-width:500px;}
.hero-bullets{list-style:none;display:flex;flex-direction:column;gap:12px;margin-bottom:36px;}
.hero-bullets li{display:flex;align-items:flex-start;gap:10px;font-size:14.5px;color:rgba(33,27,14,0.78);}
.hero-bullets li::before{content:'✓';color:${G};font-weight:700;flex-shrink:0;margin-top:1px;}
.hero-btns{display:flex;gap:14px;flex-wrap:wrap;}
.btn-gold{background:linear-gradient(135deg,${G},${GD});color:#fff;padding:14px 32px;border-radius:8px;font-weight:700;font-size:15px;border:none;cursor:pointer;text-decoration:none;transition:all 0.2s;}
.btn-gold:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(169,121,28,0.35);}
.btn-outline{background:transparent;color:${G};border:2px solid ${G};padding:13px 30px;border-radius:8px;font-weight:600;font-size:15px;cursor:pointer;text-decoration:none;transition:all 0.2s;}
.btn-outline:hover{background:rgba(169,121,28,0.08);}
.hero-right{flex:0 0 420px;}
.hero-img-box{border-radius:20px;overflow:hidden;border:2px solid rgba(169,121,28,0.25);background:rgba(169,121,28,0.05);aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;color:rgba(169,121,28,0.5);font-size:14px;}
.hero-img-box .ph-icon{font-size:56px;}

/* TRUST SCROLLING STRIP */
.trust-strip{background:linear-gradient(90deg,${GD},${G},#e8c86a,${G},${GD});padding:0;overflow:hidden;}
.trust-track{display:flex;animation:scroll 30s linear infinite;width:max-content;}
.trust-track:hover{animation-play-state:paused;}
.trust-item{display:flex;align-items:center;gap:10px;padding:18px 32px;white-space:nowrap;border-right:1px solid rgba(255,255,255,0.2);}
.trust-item .ti-num{font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:#fff;}
.trust-item .ti-lbl{font-size:11px;font-weight:600;color:rgba(255,255,255,0.85);text-transform:uppercase;letter-spacing:0.5px;}
@keyframes scroll{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}

/* SECTION SHARED */
.sec{padding:80px 20px;}
.sec-dark{background:${BG2};}
.sec-gold-bg{background:linear-gradient(135deg,#F7EFD2,${BG});}
.ctr{max-width:1200px;margin:0 auto;}
.eyebrow{font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:${G};margin-bottom:10px;}
.sec-title{font-family:'Playfair Display',serif;font-size:clamp(26px,3vw,40px);font-weight:700;line-height:1.2;margin-bottom:14px;color:${DARK};}
.sec-desc{font-size:15px;color:${GRAY};line-height:1.8;max-width:580px;}

/* FEATURES ICONS SCROLL */
.features-scroll{overflow-x:auto;padding-bottom:8px;margin-top:48px;}
.features-scroll::-webkit-scrollbar{height:4px;}
.features-scroll::-webkit-scrollbar-thumb{background:rgba(169,121,28,0.3);border-radius:4px;}
.features-grid{display:flex;gap:16px;min-width:max-content;}
.feat-card{background:#fff;border:1px solid rgba(169,121,28,0.18);border-radius:14px;padding:24px 20px;text-align:center;width:160px;flex-shrink:0;transition:all 0.25s;box-shadow:0 2px 10px rgba(33,27,14,0.04);}
.feat-card:hover{border-color:${G};background:rgba(169,121,28,0.06);transform:translateY(-3px);}
.feat-icon{font-size:36px;margin-bottom:12px;}
.feat-title{font-size:13px;font-weight:700;color:${DARK};margin-bottom:4px;}
.feat-sub{font-size:11px;color:${GRAY};line-height:1.5;}

/* COMPARISON */
.compare-wrap{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:48px;}
.compare-col{border-radius:16px;padding:32px;}
.compare-col.bad{background:rgba(239,68,68,0.05);border:1px solid rgba(239,68,68,0.25);}
.compare-col.good{background:rgba(169,121,28,0.07);border:1px solid rgba(169,121,28,0.3);}
.compare-col h3{font-size:17px;font-weight:700;margin-bottom:20px;display:flex;align-items:center;gap:8px;}
.compare-col.bad h3{color:#dc2626;}
.compare-col.good h3{color:${G};}
.compare-list{list-style:none;display:flex;flex-direction:column;gap:13px;}
.compare-list li{font-size:14px;color:rgba(33,27,14,0.72);display:flex;align-items:flex-start;gap:10px;line-height:1.5;}
.compare-list li .ci{flex-shrink:0;margin-top:2px;}

/* WHAT WE BUY CARDS */
.buy-cards{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-top:48px;}
.buy-card{background:#fff;border:1px solid rgba(169,121,28,0.15);border-radius:16px;padding:32px;display:flex;gap:24px;align-items:flex-start;transition:all 0.25s;box-shadow:0 2px 10px rgba(33,27,14,0.04);}
.buy-card:hover{border-color:rgba(169,121,28,0.5);background:rgba(169,121,28,0.04);transform:translateY(-3px);}
.buy-card-icon{font-size:44px;flex-shrink:0;}
.buy-card h3{font-family:'Playfair Display',serif;font-size:20px;color:${G};margin-bottom:10px;}
.buy-card p{font-size:13.5px;color:${GRAY};line-height:1.75;}
.buy-card a{display:inline-block;margin-top:14px;color:${G};font-size:13px;font-weight:600;text-decoration:none;border-bottom:1px solid rgba(169,121,28,0.4);}

/* PROCESS */
.process-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:48px;position:relative;}
.process-steps::before{content:'';position:absolute;top:32px;left:10%;right:10%;height:2px;background:linear-gradient(90deg,transparent,${G},transparent);opacity:0.35;}
.p-step{text-align:center;position:relative;}
.p-num{width:64px;height:64px;border-radius:50%;background:rgba(169,121,28,0.1);border:2px solid ${G};display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:24px;font-weight:900;color:${G};margin:0 auto 18px;}
.p-step h4{font-size:15px;font-weight:700;margin-bottom:8px;color:${DARK};}
.p-step p{font-size:13px;color:${GRAY};line-height:1.6;}

/* WHY SELL NOW */
.sell-now-wrap{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;margin-top:48px;}
.sell-now-img{border-radius:18px;overflow:hidden;border:2px solid rgba(169,121,28,0.25);background:rgba(169,121,28,0.05);aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;color:rgba(169,121,28,0.45);font-size:13px;}
.sell-now-img .ph-icon{font-size:52px;}
.sell-bullets{list-style:none;display:flex;flex-direction:column;gap:14px;margin-top:24px;}
.sell-bullets li{display:flex;align-items:flex-start;gap:12px;font-size:14.5px;color:rgba(33,27,14,0.78);line-height:1.5;}
.sell-bullets li .dot{width:8px;height:8px;border-radius:50%;background:${G};flex-shrink:0;margin-top:6px;}

/* VIDEO / AD SECTION */
.ads-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-top:48px;}
.ad-card{border-radius:14px;overflow:hidden;border:1px solid rgba(169,121,28,0.18);background:#fff;}
.ad-thumb{aspect-ratio:16/9;background:rgba(169,121,28,0.06);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px;color:rgba(169,121,28,0.5);font-size:13px;border-bottom:1px solid rgba(169,121,28,0.12);}
.ad-thumb .play{font-size:48px;}
.ad-caption{padding:14px 18px;font-size:13px;color:${GRAY};}

/* TESTIMONIALS */
.testi-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-top:48px;}
.testi-card{border-radius:14px;overflow:hidden;border:1px solid rgba(169,121,28,0.18);background:#fff;}
.testi-vid{aspect-ratio:16/9;background:rgba(169,121,28,0.06);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px;color:rgba(169,121,28,0.45);font-size:13px;}
.testi-vid .play{font-size:44px;}
.testi-info{padding:14px 18px;display:flex;align-items:center;justify-content:space-between;}
.testi-info .name{font-weight:600;font-size:14px;color:${DARK};}
.testi-info .area{font-size:12px;color:${G};}

/* LOCATION SECTION */
.location-wrap{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;margin-top:48px;}
.map-box{border-radius:16px;overflow:hidden;border:2px solid rgba(169,121,28,0.25);background:rgba(169,121,28,0.05);aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;color:rgba(169,121,28,0.45);font-size:14px;}
.map-box .ph-icon{font-size:52px;}
.loc-info h3{font-family:'Playfair Display',serif;font-size:28px;color:${G};margin-bottom:10px;}
.loc-address{font-size:15px;color:${GRAY};line-height:1.8;margin-bottom:28px;}
.loc-rows{display:flex;flex-direction:column;gap:14px;}
.loc-row{display:flex;align-items:center;gap:14px;}
.loc-row .icon{font-size:20px;flex-shrink:0;}
.loc-row p{font-size:14px;color:${GRAY};}
.loc-row p strong{color:${DARK};}
.loc-btns{display:flex;gap:12px;margin-top:28px;flex-wrap:wrap;}

/* GALLERY / STORE PHOTOS */
.gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:48px;}
.gallery-item{border-radius:12px;overflow:hidden;border:2px dashed rgba(169,121,28,0.3);background:rgba(169,121,28,0.05);aspect-ratio:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;color:rgba(169,121,28,0.45);font-size:12px;cursor:pointer;transition:all 0.2s;}
.gallery-item:hover{border-color:${G};background:rgba(169,121,28,0.09);}
.gallery-item .ph-icon{font-size:30px;}

/* FAQ */
.faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:48px;align-items:start;}
.faq-item{border:1px solid rgba(169,121,28,0.16);border-radius:12px;overflow:hidden;background:#fff;}
.faq-q{padding:18px 20px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;font-weight:600;font-size:14px;gap:12px;transition:background 0.2s;color:${DARK};}
.faq-q:hover{background:rgba(169,121,28,0.06);}
.faq-q .ch{color:${G};font-size:20px;flex-shrink:0;transition:transform 0.3s;}
.faq-q.open .ch{transform:rotate(180deg);}
.faq-a{max-height:0;overflow:hidden;transition:max-height 0.35s ease,padding 0.3s;font-size:13.5px;color:${GRAY};line-height:1.8;padding:0 20px;}
.faq-a.open{max-height:300px;padding:0 20px 18px;}

/* BLOG */
.blog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:48px;}
.blog-card{border-radius:14px;overflow:hidden;border:1px solid rgba(169,121,28,0.15);background:#fff;transition:all 0.25s;box-shadow:0 2px 10px rgba(33,27,14,0.04);}
.blog-card:hover{border-color:rgba(169,121,28,0.45);transform:translateY(-3px);}
.blog-thumb{aspect-ratio:16/9;background:rgba(169,121,28,0.06);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;color:rgba(169,121,28,0.45);font-size:12px;}
.blog-thumb .ph-icon{font-size:32px;}
.blog-body{padding:20px;}
.blog-cat{font-size:11px;color:${G};font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;}
.blog-body h4{font-size:15px;font-weight:700;line-height:1.4;color:${DARK};}

/* FLOATING ACTION */
.floating{position:fixed;right:20px;bottom:24px;display:flex;flex-direction:column;gap:12px;z-index:1000;}
.fab{width:52px;height:52px;border-radius:50%;border:none;cursor:pointer;font-size:24px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(33,27,14,0.25);transition:transform 0.2s;}
.fab:hover{transform:scale(1.1);}
.fab-wa{background:#25D366;}
.fab-ph{background:${G};}

/* CTA BAND */
.cta-band{background:linear-gradient(135deg,rgba(169,121,28,0.14),rgba(139,99,20,0.14));border-top:1px solid rgba(169,121,28,0.25);border-bottom:1px solid rgba(169,121,28,0.25);padding:72px 20px;text-align:center;}
.cta-band .sec-title{max-width:600px;margin:0 auto 12px;}
.cta-band p{font-size:16px;color:${GRAY};margin-bottom:36px;}
.cta-phone{font-family:'Playfair Display',serif;font-size:42px;font-weight:900;color:${G};margin-bottom:6px;}
.cta-phone-label{font-size:13px;color:rgba(33,27,14,0.4);margin-bottom:32px;}
.cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:wrap;}

/* FOOTER */
footer{background:${BG2};padding:56px 20px 24px;border-top:1px solid rgba(169,121,28,0.15);}
.footer-grid{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:48px;}
.footer-brand{font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:${G};margin-bottom:14px;}
.footer-brand span{color:${DARK};}
.footer-desc{font-size:13px;color:rgba(33,27,14,0.45);line-height:1.8;margin-bottom:20px;}
.footer-social{display:flex;gap:10px;}
.social-btn{width:36px;height:36px;border-radius:50%;background:rgba(169,121,28,0.1);border:1px solid rgba(169,121,28,0.3);display:flex;align-items:center;justify-content:center;font-size:15px;text-decoration:none;transition:all 0.2s;}
.social-btn:hover{background:${G};color:#fff;}
.f-col h4{font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${G};margin-bottom:18px;}
.f-col ul{list-style:none;display:flex;flex-direction:column;gap:10px;}
.f-col ul a{color:rgba(33,27,14,0.5);font-size:13px;text-decoration:none;transition:color 0.2s;}
.f-col ul a:hover{color:${G};}
.footer-bottom{max-width:1200px;margin:0 auto;padding-top:24px;border-top:1px solid rgba(33,27,14,0.08);display:flex;justify-content:space-between;align-items:center;font-size:12px;color:rgba(33,27,14,0.35);}

/* RESPONSIVE */
@media(max-width:960px){
  .hero-inner{flex-direction:column;}
  .hero-right{width:100%;flex:none;}
  .compare-wrap,.sell-now-wrap,.location-wrap,.faq-grid{grid-template-columns:1fr;}
  .process-steps{grid-template-columns:repeat(2,1fr);}
  .process-steps::before{display:none;}
  .buy-cards{grid-template-columns:1fr;}
  .gallery-grid{grid-template-columns:repeat(2,1fr);}
  .blog-grid{grid-template-columns:1fr;}
  .ads-grid,.testi-grid{grid-template-columns:1fr;}
  .footer-grid{grid-template-columns:1fr 1fr;}
  .nav-links{display:none;}
  .hamburger{display:block;}
  .nav-phone-desktop{display:none;}
}
@media(max-width:600px){
  .gallery-grid{grid-template-columns:repeat(2,1fr);}
  .footer-grid{grid-template-columns:1fr;}
  .footer-bottom{flex-direction:column;gap:8px;text-align:center;}
  .cta-phone{font-size:32px;}
}
  /* Universal fit for any image inside these placeholder boxes */
.hero-img-box img,
.sell-now-img img,
.gallery-item img,
.blog-thumb img,
.ad-thumb img,
.testi-vid img,
.map-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
`;

const features = [
  { icon:"🏆", title:"Trusted Buyer", sub:"Greater Noida's Most Trusted" },
  { icon:"🔬", title:"XRF Testing", sub:"100% Accurate Karatmeter" },
  { icon:"🛡️", title:"No Damage", sub:"Non-Destructive Process" },
  { icon:"💳", title:"Instant Pay", sub:"Cash / NEFT / RTGS" },
  { icon:"📱", title:"100% Digital", sub:"Digital KYC & Invoice" },
  { icon:"⚖️", title:"Govt Certified", sub:"Certified Weights & Balance" },
  { icon:"👨‍💼", title:"Gold Experts", sub:"Certified Professionals" },
  { icon:"😊", title:"Best Price", sub:"Highest Payout Guaranteed" },
  { icon:"📅", title:"7 Days Open", sub:"10 AM – 7 PM Always" },
  { icon:"🆓", title:"Free Testing", sub:"Zero Cost Evaluation" },
];

const faqs = [
  { q:"What ID proof is required for selling gold?", a:"Any one valid photo ID: Aadhaar Card, Voter ID, Driving Licence, or Passport. PAN card is required for transactions of ₹2 lakh and above." },
  { q:"Will my ornaments get damaged during testing?", a:"No! We use XRF Karatmeter technology — completely non-destructive. Your jewellery stays untouched and intact throughout the entire process." },
  { q:"Can I sell gold without a hallmark?", a:"Yes. We accept gold without hallmarks. The value will be determined based on actual purity after testing with our Karatmeter machine." },
  { q:"What are your working hours?", a:"We are open 7 days a week including Sundays, from 10:00 AM to 7:00 PM." },
  { q:"What is the mode of payment?", a:"We offer instant payment via Cash, NEFT, or RTGS — whichever is most convenient for you. Payment is made immediately after you accept our offer." },
  { q:"Do you buy silver and diamonds too?", a:"Yes! We buy silver jewellery, diamond jewellery, and gold/silver coins in addition to gold jewellery." },
  { q:"How long does the entire process take?", a:"The complete process from testing to payment takes only 10–15 minutes. Fast, simple, and hassle-free." },
  { q:"Can I sell gold without a purchase bill?", a:"Yes. You can sell gold with just a valid ID proof like Aadhaar or Voter ID. Having a bill may help in some cases, but it is not mandatory." },
  { q:"What is the minimum age to sell gold?", a:"You must be at least 21 years old and provide a valid ID proof to sell gold at our store." },
  { q:"Can I sell broken or tampered jewellery?", a:"Yes, we accept broken or tampered gold. Please bring a valid ID proof. Having the original purchase bill can sometimes help get better value." },
];

export default function SamridhiGold() {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = id => { document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }); setMobileOpen(false); };

  return (
    <>
      <style>{css}</style>

      {/* TOP BAR */}
      <div className="topbar">
        <div className="topbar-inner">
          <span>📅 7 Days Open</span>
          <span>🕐 10 AM – 7 PM</span>
          <a href="tel:+919953211815">📞 +91 9953211815</a>
        </div>
      </div>

      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <a className="logo" href="#">Samridhi <span>Gold Buyer</span></a>
          <ul className="nav-links">
            <li><a href="#" onClick={e=>{e.preventDefault();scrollTo("hero")}}>Home</a></li>
            <li><a href="#" onClick={e=>{e.preventDefault();scrollTo("about")}}>About Us</a></li>
            <li className="dropdown">
              <a href="#">What We Buy ▾</a>
              <div className="dropdown-menu">
                <a href="#" onClick={e=>{e.preventDefault();scrollTo("what-we-buy")}}>Cash Against Gold</a>
                <a href="#" onClick={e=>{e.preventDefault();scrollTo("what-we-buy")}}>Cash For Silver</a>
                <a href="#" onClick={e=>{e.preventDefault();scrollTo("what-we-buy")}}>Cash For Diamonds</a>
                <a href="#" onClick={e=>{e.preventDefault();scrollTo("what-we-buy")}}>Cash For Coins</a>
              </div>
            </li>
            <li><a href="#" onClick={e=>{e.preventDefault();scrollTo("location")}}>Our Branch</a></li>
            <li><a href="#" onClick={e=>{e.preventDefault();scrollTo("gallery")}}>Gallery</a></li>
            <li><a href="#" onClick={e=>{e.preventDefault();scrollTo("faq")}}>FAQs</a></li>
            <li><a href="#" onClick={e=>{e.preventDefault();scrollTo("contact")}}>Contact Us</a></li>
          </ul>
          <a className="nav-phone nav-phone-desktop" href="tel:+919953211815">📞 Call Now</a>
          <button className="hamburger" onClick={()=>setMobileOpen(o=>!o)}>☰</button>
        </div>
        <div className={`mobile-menu ${mobileOpen?"open":""}`}>
          {[["hero","Home"],["about","About Us"],["what-we-buy","What We Buy"],["process","How It Works"],["location","Our Branch"],["gallery","Gallery"],["faq","FAQs"],["contact","Contact Us"]].map(([id,label])=>(
            <a href="#" key={id} onClick={e=>{e.preventDefault();scrollTo(id)}}>{label}</a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-tag">⭐ Greater Noida's Trusted Gold Buyer</div>
            <h1 className="hero-title">
              Sona Do,<br/><span className="gold">Paisa Lo</span>
            </h1>
            <ul className="hero-bullets">
              <li>Most jewellers make you lose 15–20% without you even knowing</li>
              <li>Get the full, accurate value — without your jewellery being spoiled</li>
              <li>100% accurate, non-destructive, transparent XRF Karatmeter testing</li>
            </ul>
            <div className="hero-btns">
              <a className="btn-gold" href="tel:+919953211815">📞 Talk to Us Now</a>
              <button className="btn-outline" onClick={()=>scrollTo("process")}>See How It Works →</button>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-img-box">
              <span className="ph-icon"><img src={Banner1} alt="Banner Image" /></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="trust-track">
          {[...Array(2)].map((_,rep)=>(
            [
              ["New Business","Greater Noida"],
              ["100%","Transparent Testing"],
              ["Best Price","Guaranteed"],
              ["15 Min","Quick Process"],
              ["7 Days","Always Open"],
              ["XRF","Karatmeter Testing"],
              ["Instant","Cash Payment"],
              ["Free","Gold Valuation"],
              ["Certified","Gold Experts"],
              ["4.9★","Google Rating"],
            ].map(([n,l],i)=>(
              <div className="trust-item" key={`${rep}-${i}`}>
                <div>
                  <div className="ti-num">{n}</div>
                  <div className="ti-lbl">{l}</div>
                </div>
              </div>
            ))
          ))}
        </div>
      </div>

      {/* ABOUT / FEATURES */}
      <section className="sec" id="about">
        <div className="ctr">
          <div className="eyebrow">Who We Are</div>
          <h2 className="sec-title">Samridhi Gold Buyer — Greater Noida's Most Trusted</h2>
          <p className="sec-desc">We are a team of certified gold buying professionals serving Greater Noida. Our mission is simple: give you the highest, most accurate value for your gold — transparently, instantly, and without any damage to your jewellery.</p>
          <div className="features-scroll">
            <div className="features-grid">
              {features.map(f=>(
                <div className="feat-card" key={f.title}>
                  <div className="feat-icon">{f.icon}</div>
                  <div className="feat-title">{f.title}</div>
                  <div className="feat-sub">{f.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DON'T SELL BEFORE — COMPARISON */}
      <section className="sec sec-dark">
        <div className="ctr">
          <div className="eyebrow">Our Edge</div>
          <h2 className="sec-title">Don't Sell Your Gold Before You Read This</h2>
          <div className="compare-wrap">
            <div className="compare-col bad">
              <h3>❌ What Most People Experience</h3>
              <ul className="compare-list">
                {["Most people don't get the true value of their gold","Jewellery gets damaged during purity testing (acid test)","Customers are asked to trust the process with no proof","Payment methods are unclear, delayed, or unsafe","Privacy, safety, and security are not guaranteed","Shops are in unsafe areas with untrained staff","People end up dealing with unverified, non-reputable buyers"].map(t=>(
                  <li key={t}><span className="ci">❌</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="compare-col good">
              <h3>✅ How Samridhi Does It Differently</h3>
              <ul className="compare-list">
                {["See the exact purity of your gold with advanced Karatmeter testing","Jewellery tested completely damage-free — no acid, no scratching","Live purity results shown on screen — full transparency, no guesswork","Safe instant payment via Cash, NEFT, or RTGS","100% private, secure, and transparent process","Store in a prime, safe location in Greater Noida","Samridhi is a trusted brand with certified, professional staff"].map(t=>(
                  <li key={t}><span className="ci">✅</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUY */}
      <section className="sec" id="what-we-buy">
        <div className="ctr">
          <div className="eyebrow">What We Do</div>
          <h2 className="sec-title">We Buy All Kinds of Gold, Silver & Diamond Jewellery</h2>
          <div className="buy-cards">
            {[
              { icon:"🥇", title:"Get Instant Cash For Gold", desc:"We buy all types of gold jewellery — rings, necklaces, bangles, chains, earrings. With or without hallmark, with or without bill, old or new, broken or intact. Advanced Karatmeter testing ensures you get the highest accurate value.", link:"Cash Against Gold" },
              { icon:"🥈", title:"Cash For Silver", desc:"Planning to sell silver jewellery, utensils, or coins? We are one of the prominent silver buyers in Greater Noida. Our process is short and simple — bring your silver, get it weighed and valued, walk out with cash.", link:"Cash For Silver" },
              { icon:"💎", title:"Cash For Diamond Jewellery", desc:"We offer the most reliable cash for diamond jewellery. We accept all kinds of diamonds — old, new, used, set in rings, necklaces, or bracelets. Our team conducts authentic evaluation to give you the best value.", link:"Cash For Diamonds" },
              { icon:"🪙", title:"Cash For Gold & Silver Coins", desc:"Investment coins, temple coins, commemorative coins — we buy all types of gold and silver coins at competitive live market rates. Turn your idle coins into instant cash today.", link:"Cash For Coins" },
            ].map(c=>(
              <div className="buy-card" key={c.title}>
                <div className="buy-card-icon">{c.icon}</div>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <a href="#" onClick={e=>{e.preventDefault();scrollTo("contact")}}>{c.link} →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec sec-dark" id="process">
        <div className="ctr">
          <div className="eyebrow">How It Works</div>
          <h2 className="sec-title">Simple. Fast. Transparent.</h2>
          <p className="sec-desc">The entire process takes just 10–15 minutes. No hidden steps, no surprises, no damage to your jewellery.</p>
          <div className="process-steps">
            {[
              { n:"01", title:"Walk Into Our Store", desc:"Visit our Greater Noida branch with your gold jewellery and a valid photo ID (Aadhaar, Voter ID, Passport, or Driving Licence)." },
              { n:"02", title:"Free XRF Testing", desc:"We test your gold's purity live using German Karatmeter technology. Results displayed on screen in front of you. 100% transparent, no damage." },
              { n:"03", title:"Best Price Offer", desc:"We present our best price based on live market rate, purity, and weight. You are free to compare with other buyers before deciding." },
              { n:"04", title:"Instant Payment", desc:"Accept the offer and receive instant payment by Cash, NEFT, or RTGS. The entire process is done in 10–15 minutes." },
            ].map(s=>(
              <div className="p-step" key={s.n}>
                <div className="p-num">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SELL NOW */}
      <section className="sec sec-gold-bg">
        <div className="ctr">
          <div className="eyebrow">Why Sell Gold Now?</div>
          <h2 className="sec-title">It's the Best Time to Sell Your Gold</h2>
          <div className="sell-now-wrap">
            <div className="sell-now-img">
              <span className="ph-icon"><img src={Chart} alt="rate Chart" /> </span>
            </div>
            <div>
              <p style={{fontSize:15,color:"rgba(33,27,14,0.75)",lineHeight:1.8}}>
                Gold prices are at historic peak levels right now. If you bought gold earlier at lower prices, today you are sitting on a significant profit. It's the perfect time to turn your idle gold into maximum cash.
              </p>
              <ul className="sell-bullets">
                {["Gold is trading at historic peak levels","You may have bought gold at much lower prices earlier","Today you're sitting on a big profit — cash it in!","Perfect time to sell while prices are high","Turn unused or idle gold into maximum money","Invest the cash in better opportunities"].map(t=>(
                  <li key={t}><span className="dot"></span>{t}</li>
                ))}
              </ul>
              <div style={{marginTop:28}}>
                <a className="btn-gold" href="tel:+919953211815">📞 Get Free Valuation Today</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEOS / ADS */}
      {/* <section className="sec sec-dark" id="videos">
        <div className="ctr">
          <div className="eyebrow">Featured Videos</div>
          <h2 className="sec-title">Watch & Learn</h2>
          <p className="sec-desc">Add your promotional videos or customer testimonial videos here.</p>
          <div className="ads-grid">
            {["Your Promo Video 1","Your Promo Video 2"].map((v,i)=>(
              <div className="ad-card" key={i}>
                <div className="ad-thumb">
                  <span className="play">▶️</span>
                  <span>{v}</span>
                  <span style={{fontSize:11,opacity:0.6}}>Paste your YouTube embed link</span>
                </div>
                <div className="ad-caption">Add your video caption / description here</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* TESTIMONIALS */}
      {/* <section className="sec">
        <div className="ctr">
          <div className="eyebrow">Testimonials</div>
          <h2 className="sec-title">Real Stories, Real Trust</h2>
          <p className="sec-desc">Hear from our happy customers in Greater Noida who got the best value for their gold.</p>
          <div className="testi-grid">
            {[["Happy Customer","Greater Noida Sector 1"],["Happy Customer","Greater Noida Sector 10"],["Happy Customer","Greater Noida Sector 27"],["Happy Customer","Greater Noida Sector 44"]].map(([name,area],i)=>(
              <div className="testi-card" key={i}>
                <div className="testi-vid">
                  <span className="play">▶️</span>
                  <span>Customer Video {i+1}</span>
                  <span style={{fontSize:11,opacity:0.6}}>Add YouTube link</span>
                </div>
                <div className="testi-info">
                  <div className="name">{name}</div>
                  <div className="area">{area}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* GALLERY / STORE PHOTOS */}
      <section className="sec sec-dark" id="gallery">
        <div className="ctr">
          <div className="eyebrow">Our Store</div>
          <h2 className="sec-title">Find Samridhi Gold Buyer Near You</h2>
          <p className="sec-desc">Walk into our Greater Noida branch for instant testing and get cash for gold on the spot.</p>
          <div className="gallery-grid">
            {[G1,G2,G3].map((img,idx)=>(
              <div className="gallery-item" key={idx}>
                <span className="ph-icon"><img src={img} alt={`Samridhi Gold Buyer store — Greater Noida branch photo ${idx+1}`} loading="lazy" /></span>
                <span></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="sec" id="location">
        <div className="ctr">
          <div className="eyebrow">Our Branch</div>
          <h2 className="sec-title">Visit Samridhi Gold Buyer</h2>
          <div className="location-wrap">
            <div className="map-box">
              <span className="ph-icon"><iframe title="Samridhi Gold Buyer location map — Greater Noida" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85404.14669650557!2d77.22106880000001!3d28.576972799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefa6796a6831%3A0xc542a68808102fd2!2sSAMRIDHI%20GOLD%20BUYERS!5e1!3m2!1sen!2sin!4v1784198898282!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
              </span>
              <span></span>
              
            </div>
            <div className="loc-info">
              <h3>Samridhi Gold Buyer</h3>
              <p className="loc-address">
                [Your Shop Name & Number],<br/>
                [Street / Market Name],<br/>
                Greater Noida, Uttar Pradesh — 201310
              </p>
              <div className="loc-rows">
                <div className="loc-row"><span className="icon">📞</span><p><strong>Call / WhatsApp:</strong> +91 9953211815</p></div>
                <div className="loc-row"><span className="icon">🕐</span><p><strong>Hours:</strong> 10:00 AM – 7:00 PM, 7 Days a Week</p></div>
                <div className="loc-row"><span className="icon">📍</span><p><strong>Nearest Landmark:</strong> [Add landmark here]</p></div>
                <div className="loc-row"><span className="icon">🚇</span><p><strong>Metro / Transport:</strong> [Nearest metro or bus stop]</p></div>
                <div className="loc-row"><span className="icon">📧</span><p><strong>Email:</strong> samridhigold@gmail.com</p></div>
              </div>
              <div className="loc-btns">
                <a className="btn-gold" href="tel:+919953211815">📞 Call Now</a>
                <a className="btn-outline" href="https://wa.me/919953211815" target="_blank" rel="noreferrer">💬 WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec-dark" id="faq">
        <div className="ctr">
          <div className="eyebrow">FAQ</div>
          <h2 className="sec-title">Your Questions, Answered</h2>
          <div className="faq-grid">
            {faqs.map((f,i)=>(
              <div className="faq-item" key={i}>
                <div className={`faq-q${openFaq===i?" open":""}`} onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                  <span>{f.q}</span>
                  <span className="ch">⌄</span>
                </div>
                <div className={`faq-a${openFaq===i?" open":""}`}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="sec">
        <div className="ctr">
          <div className="eyebrow">Our Blog</div>
          <h2 className="sec-title">Gold Buying Insights</h2>
          <div className="blog-grid">
            {[
              "Why Gold Prices Are at an All-Time High in 2025",
              "Top Questions to Ask Before Selling Your Gold Jewellery",
              "How to Get the Best Value When Selling Gold in Greater Noida",
            ].map((title,i)=>(
              <div className="blog-card" key={i}>
                <div className="blog-thumb">
                  <span className="ph-icon">🖼️</span>
                  <span>Blog Thumbnail {i+1}</span>
                </div>
                <div className="blog-body">
                  <div className="blog-cat">Gold Buying Tips</div>
                  <h4>{title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band" id="contact">
        <div className="eyebrow" style={{textAlign:"center",marginBottom:12}}>Get In Touch</div>
        <h2 className="sec-title" style={{textAlign:"center",maxWidth:600,margin:"0 auto 12px"}}>Ready to Sell Your Gold for the Best Price?</h2>
        <p style={{fontSize:16,color:GRAY,marginBottom:28,maxWidth:500,margin:"0 auto 28px"}}>Walk in to our Greater Noida branch or call us now. Free valuation, no obligations, instant payment.</p>
        <div className="cta-phone" href="tel:+919953211815">📞 +91 9953211815</div>
        <div className="cta-phone-label" href="https://wa.me/919953211815" >Call or WhatsApp — we respond instantly</div>
        <div className="cta-btns">
          <a className="btn-gold" href="tel:+919953211815" style={{fontSize:16,padding:"15px 40px"}}>Call Now</a>
          <a className="btn-outline" href="https://wa.me/919953211815" target="_blank" rel="noreferrer" style={{fontSize:16,padding:"14px 40px"}}>💬 WhatsApp Us</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Samridhi <span>Gold Buyer</span></div>
            <p className="footer-desc">Greater Noida's trusted destination for selling gold, silver, diamonds, and coins. Transparent testing, best prices, instant payment — always.</p>
            <div className="footer-social">
              {["📘","📸","🐦","▶️"].map((s,i)=>(
                <a className="social-btn" href="#" key={i}>{s}</a>
              ))}
            </div>
          </div>
          <div className="f-col">
            <h4>Quick Links</h4>
            <ul>
              {[["hero","Home"],["about","About Us"],["location","Our Branch"],["gallery","Gallery"],["faq","FAQs"],["contact","Contact Us"]].map(([id,l])=>(
                <li key={id}><a href="#" onClick={e=>{e.preventDefault();scrollTo(id)}}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="f-col">
            <h4>What We Buy</h4>
            <ul>
              {["Cash Against Gold","Cash For Silver","Cash For Diamonds","Cash For Gold/Silver Coins"].map(l=>(
                <li key={l}><a href="#" onClick={e=>{e.preventDefault();scrollTo("what-we-buy")}}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="f-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+919953211815">📞 +91 9953211815</a></li>
              <li><a href="https://wa.me/919953211815">💬 WhatsApp Us</a></li>
              <li><a href="mailto:samridhigoldbuyer@gmail.com">📧 Email Us</a></li>
              <li><a href="#" onClick={e=>{e.preventDefault();scrollTo("location")}}>📍 Greater Noida, UP</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Samridhi Gold Buyer. All Rights Reserved. Greater Noida, Uttar Pradesh.</span>
          <span>Open 7 Days | 10 AM – 7 PM</span>
        </div>
      </footer>

      {/* FLOATING BUTTONS */}
      <div className="floating">
        <a className="fab fab-wa" href="https://wa.me/919953211815" target="_blank" rel="noreferrer" title="WhatsApp">💬</a>
        <a className="fab fab-ph" href="tel:+919953211815" title="Call Now">📞</a>
      </div>
    </>
  );
}