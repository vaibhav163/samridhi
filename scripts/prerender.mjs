// Prerender every route to a real static HTML file in dist/, using CLEAN URLs:
// home -> dist/index.html, /sell-gold -> dist/sell-gold/index.html,
// 404 -> dist/404.html. Also generates dist/sitemap.xml (clean URLs).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { render, allRoutes } from "../dist-ssr/entry-server.js";
import { DOMAIN, LASTMOD, GTM } from "../src/config.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

const manifest = JSON.parse(readFileSync(join(dist, ".vite", "manifest.json"), "utf-8"));
const clientJs = manifest["index.html"].file;

const routes = allRoutes();
for (const route of routes) {
  const { head, file, html } = render(route.path);
  const doc =
    `<!DOCTYPE html>\n<html lang="en"><head>\n${head}</head><body>\n` +
    `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${GTM}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\n` +
    `<a class="skip-link" href="#main">Skip to content</a>\n` +
    `<div id="root">${html}</div>\n` +
    `<script src="/js/main.js"></script>\n` +
    `<script type="module" src="/${clientJs}"></script>\n` +
    `</body></html>\n`;
  const out = join(dist, file);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, doc, "utf-8");
  console.log("prerendered", file);
}

// sitemap.xml — all pages except 404, clean URLs on the plural domain.
const smRoutes = routes.filter((r) => r.file !== "404.html");
const urls = smRoutes
  .map((r) => {
    const loc = DOMAIN + r.path;
    const freq = r.path === "/sitemap" ? "monthly" : "weekly";
    return `  <url><loc>${loc}</loc><lastmod>${LASTMOD}</lastmod><changefreq>${freq}</changefreq><priority>${r.priority || "0.7"}</priority></url>`;
  })
  .join("\n");
writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  "utf-8"
);
console.log(`sitemap.xml: ${smRoutes.length} URLs`);
console.log(`done: ${routes.length} pages`);
