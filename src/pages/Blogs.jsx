import React from "react";
import { DOMAIN, PHONE, PHONE_D } from "../config.js";
import { Crumbs, SkeletonImg, EmptyState } from "../components/Blocks.jsx";
import { BLOGS } from "../data/core.js";
import { breadcrumbLd } from "../lib/schema.js";

export function blogPostSchemas(b) {
  return [
    breadcrumbLd([["Home", ""], ["Blog", "blog"], [b.h1, b.slug]]),
    {
      "@type": "BlogPosting",
      headline: b.h1,
      description: b.desc,
      image: DOMAIN + b.img,
      datePublished: b.date,
      dateModified: b.date,
      author: { "@id": DOMAIN + "/#localbusiness" },
      publisher: { "@id": DOMAIN + "/#localbusiness" },
      mainEntityOfPage: DOMAIN + "/" + b.slug,
    },
  ];
}

function blogBody(paras) {
  return paras.map((p, i) => {
    if (p.startsWith("## ")) return <h2 key={i}>{p.slice(3)}</h2>;
    if (p.startsWith("**") && p.indexOf("**", 2) > 0) {
      const end = p.indexOf("**", 2);
      const bold = p.slice(2, end);
      const rest = p.slice(end + 2);
      return (
        <p key={i}>
          <strong>{bold}</strong>
          <span dangerouslySetInnerHTML={{ __html: rest }} />
        </p>
      );
    }
    return <p key={i} dangerouslySetInnerHTML={{ __html: p }} />;
  });
}

export function BlogPostPage({ blog: b }) {
  return (
    <section className="sec">
      <div className="ctr">
        <Crumbs items={[["Home", ""], ["Blog", "blog"], [b.h1, null]]} />
        <div className="blog-body">
          <div className="blog-cat">{b.cat} · {b.date} · {b.read}</div>
          <h1 className="sec-title">{b.h1}</h1>
          <SkeletonImg
            src={b.img}
            alt={`${b.h1} — Samridhi Gold Buyers, Greater Noida West`}
            className="skel-auto"
            style={{ width: "100%", borderRadius: "14px", margin: "14px 0 22px" }}
            eager
          />
          {blogBody(b.paras)}
          <p style={{ marginTop: "26px" }}>
            <a className="btn-gold" href={`tel:${PHONE}`}>📞 Get a Free Valuation — {PHONE_D}</a>
          </p>
          <p style={{ marginTop: "14px" }}><a href="/blog">← Back to all articles</a></p>
        </div>
      </div>
    </section>
  );
}

export function BlogIndexPage() {
  return (
    <section className="sec">
      <div className="ctr">
        <Crumbs items={[["Home", ""], ["Blog", null]]} />
        <div className="eyebrow">Our Blog</div>
        <h1 className="sec-title">Gold Selling Tips &amp; Guides</h1>
        <p className="sec-desc">Honest, practical guides to help you sell gold, silver and diamonds with confidence — written by the Samridhi team at Gaur City.</p>
        {BLOGS.length === 0 ? (
          <EmptyState icon="📝" title="Articles coming soon" text="We are writing new gold-selling guides — check back shortly, or call us with your question." />
        ) : (
        <div className="blog-grid">
          {BLOGS.map((b) => (
            <a className="blog-card" href={"/" + b.slug} key={b.slug}>
              <SkeletonImg className="blog-thumb" src={b.img} alt={b.h1} />
              <div className="blog-cat">{b.cat}</div>
              <h3>{b.h1}</h3>
              <p>{b.desc}</p>
              <span>{b.date} · {b.read}</span>
            </a>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
