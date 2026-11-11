import { DOMAIN, NAME, LAT, LNG, GTM, GVERIFY } from "../config.js";
import { graphLd } from "./schema.js";

export function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Builds the <head> in the v2 site's order/format, but with CLEAN canonical
// URLs (no .html). route.path is the clean path ("/" for home).
export function buildHead({ title, desc, path, ogtype = "website", schemas = [] }) {
  const url = DOMAIN + path;
  const ld = JSON.stringify(graphLd(schemas), null, 1);
  return `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM}');</script>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="geo.region" content="IN-UP">
<meta name="geo.placename" content="Greater Noida West">
<meta name="geo.position" content="${LAT};${LNG}">
<meta name="ICBM" content="${LAT}, ${LNG}">
<meta property="og:type" content="${ogtype}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${DOMAIN}/images/og-image.jpg">
<meta property="og:site_name" content="${NAME}">
<meta property="og:locale" content="en_IN">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${DOMAIN}/images/og-image.jpg">
<link rel="icon" href="/images/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="192x192" href="/images/icon-192.png">
<link rel="apple-touch-icon" href="/images/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#181208">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="/css/style.css">
<meta name="google-site-verification" content="${GVERIFY}">
<script type="application/ld+json">
${ld}
</script>`;
}
