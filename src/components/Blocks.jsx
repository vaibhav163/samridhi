import React, { useState, useRef, useEffect } from "react";
import { PHONE, PHONE_D, WA, HOURS_D, AREAS, MAPS_URL } from "../config.js";
import { CORE_FAQS } from "../data/core.js";
import { makeSubmitHandler, EnquiryStatus } from "../lib/enquiry.jsx";

// ---------- Skeleton image: shimmer placeholder until the img has loaded ----------
// SSR renders the shimmer state; on the client the wrapper flips to .loaded
// when the image fires onLoad (or is already complete from cache).
export function SkeletonImg({ src, alt, className = "", style, eager = false, width, height }) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const im = ref.current;
    if (im && im.complete && im.naturalWidth > 0) setLoaded(true);
  }, []);
  return (
    <div className={`skel-img${loaded ? " loaded" : ""} ${className}`} style={style} aria-busy={!loaded}>
      <img
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        {...(eager ? { fetchpriority: "high" } : {})}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

// ---------- Empty state: shown instead of a blank area when a list is empty ----------
export function EmptyState({ icon = "🔍", title = "Nothing here yet", text = "" }) {
  return (
    <div className="empty-state" role="status">
      <div className="empty-icon" aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

// ---------- Hero enquiry form (identical fields/ids to v2; submit wired in React) ----------
export function HeroForm({ options } = {}) {
  const opts = options || [
    "Gold Jewellery", "Silver", "Diamond Jewellery",
    "Gold / Silver Coins", "Pledged Gold Release", "Other",
  ];
  const [status, setStatus] = useState(null);
  const onSubmit = makeSubmitHandler((f) => f.item.value, setStatus);
  return (
    <div className="hero-form-card" id="hero-form-card">
      <div className="hf-head">
        <h2>Get a Free Quote</h2>
        <p>Tell us what you're selling — we'll call you back with today's rate.</p>
      </div>
      <form className="hero-form" id="hero-form" onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="tel" name="phone" placeholder="Mobile Number" required pattern="[0-9]{10}" maxLength="10" />
        <select name="item" required defaultValue="">
          <option value="" disabled>What do you want to sell?</option>
          {opts.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <button type="submit" className="btn-gold" style={{ width: "100%" }}>Get Free Quote</button>
        <p className="form-note" id="hero-form-status"><EnquiryStatus status={status} defaultText="No spam — we'll only call about your enquiry." /></p>
      </form>
    </div>
  );
}

// ---------- Breadcrumbs (visual) ----------
export function Crumbs({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map(([n, u], i) => (
        <React.Fragment key={i}>
          {i > 0 ? " " : ""}
          {u && i < items.length - 1 ? <a href={"/" + u}>{n}</a> : <span>{n}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}

// ---------- FAQ accordion block ----------
export function FaqBlock({ faqs, prefix = "fa" }) {
  return (
    <div className="faq-grid">
      {faqs.map(([q, a], i) => {
        const id = `${prefix}-${i}`;
        return (
          <div className="faq-item" key={i}>
            <button className="faq-q" aria-expanded="false" aria-controls={id}>
              {q}
              <span>⌄</span>
            </button>
            <div className="faq-a" id={id}>
              <p dangerouslySetInnerHTML={{ __html: a }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ---------- Trust strip ----------
export function TrustStrip() {
  const items = [
    ["XRF", "Karatmeter Testing"], ["100%", "Transparent Process"],
    ["15 Min", "Testing to Payment"], ["Instant", "Cash / NEFT / RTGS"],
    ["Free", "Gold Valuation"], ["7 Days", "Open All Week"],
    ["Zero", "Damage Testing"], ["Gaur City", "Greater Noida West"],
  ];
  // Rendered pre-doubled (with data-doubled) exactly as v2's main.js leaves it
  // after load — main.js checks dataset.doubled and skips, and React hydration
  // sees the same DOM the client render produces (no mismatch, no re-render).
  const doubled = [...items, ...items];
  return (
    <div className="trust-strip" aria-hidden="true">
      <div className="trust-track" data-doubled="true">
        {doubled.map(([a, b], i) => (
          <div className="trust-item" key={i}>
            <div>
              <div className="ti-num">{a}</div>
              <div className="ti-lbl">{b}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- Why-us feature cards ----------
export function WhyUs() {
  const feats = [
    ["🏆", "Trusted Local Buyer", "At Gaur City Centre, Gaur Chowk"],
    ["🔬", "XRF Testing", "Purity shown live on screen"],
    ["🛡️", "Zero Damage", "No acid, no scratching"],
    ["💳", "Instant Payment", "Cash / NEFT / RTGS"],
    ["📱", "Digital KYC & Invoice", "Every sale documented"],
    ["⚖️", "Certified Weighing", "Weighed in front of you"],
    ["👨‍💼", "Trained Valuers", "Experienced gold experts"],
    ["🆓", "Free Valuation", "No obligation to sell"],
    ["📅", "7 Days Open", HOURS_D],
    ["🔒", "Private & Safe", "In-mall store, secure counter"],
  ];
  return (
    <div className="features-scroll">
      <div className="features-grid">
        {feats.map(([icon, t, s], i) => (
          <div className="feat-card" key={i}>
            <div className="feat-icon">{icon}</div>
            <div className="feat-title">{t}</div>
            <div className="feat-sub">{s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- 4-step process ----------
export function ProcessSteps() {
  const steps = [
    ["Walk Into Our Store", "Visit us at Shop No. GF-04, Gaur City Centre, Gaur Chowk, Sector 4, Greater Noida West with your jewellery and one valid photo ID (Aadhaar, Voter ID, Passport or Driving Licence)."],
    ["Free XRF Testing", "Your gold's purity is tested live on a German XRF Karatmeter. The result appears on screen in front of you — 100% transparent, zero damage."],
    ["Clear Valuation", "We weigh your item in front of you and calculate the value from the live market rate and tested purity. Every number is explained — no hidden deductions."],
    ["Instant Payment", "Accept the offer and get paid immediately by cash, NEFT or RTGS, with a proper invoice. The full process takes about 10–15 minutes."],
  ];
  return (
    <div className="process-steps">
      {steps.map(([t, d], i) => (
        <div className="p-step" key={i}>
          <div className="p-num">{i + 1}</div>
          <h3>{t}</h3>
          <p>{d}</p>
        </div>
      ))}
    </div>
  );
}

// ---------- Areas we serve ----------
export function AreasSection({ title = "Sell Gold Near You — Areas We Serve" } = {}) {
  return (
    <section className="sec">
      <div className="ctr">
        <div className="eyebrow">Areas We Serve</div>
        <h2 className="sec-title">{title}</h2>
        {AREAS.length === 0 ? (
          <EmptyState icon="📍" title="Areas coming soon" text="We are expanding — call us to check if we serve your area." />
        ) : (
        <div className="buy-cards">
          {AREAS.map(([u, n]) => (
            <div className="buy-card" key={u}>
              <div className="buy-card-icon">📍</div>
              <div>
                <h3>Sell Gold in {n}</h3>
                <p>Customers from {n} visit our Gaur City Centre store for free XRF testing and instant payment.</p>
                <a href={"/" + u}>View details →</a>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}

// ---------- Services ----------
const SERVICE_CARDS = [
  ["sell-gold", "🥇", "Cash for Gold", "Sell gold jewellery — with or without hallmark or bill, old, new or broken — at the live market rate."],
  ["sell-silver", "🥈", "Cash for Silver", "Silver jewellery, utensils, articles and coins weighed and valued transparently."],
  ["sell-diamonds", "💎", "Cash for Diamonds", "Diamond rings, solitaires and set jewellery evaluated by trained valuers."],
  ["sell-coins", "🪙", "Cash for Coins & Bars", "Gold and silver coins and bars — investment, temple and commemorative — at live rates."],
  ["release-pledged-gold", "🔓", "Release Pledged Gold", "Gold stuck in a loan? We help you release it and keep the difference."],
  ["gold-rate-today", "📈", "Gold Rate Today", "How today's rate is set — and how your payout is calculated from it."],
];

export function ServicesSection() {
  return (
    <section className="sec">
      <div className="ctr">
        <div className="eyebrow">What We Buy</div>
        <h2 className="sec-title">Sell Gold, Silver, Diamonds &amp; Coins</h2>
        {SERVICE_CARDS.length === 0 ? (
          <EmptyState icon="🥇" title="Services coming soon" text="Call us — we buy gold, silver, diamonds and coins at our Gaur City Centre store." />
        ) : (
        <div className="buy-cards">
          {SERVICE_CARDS.map(([u, icon, t, d]) => (
            <div className="buy-card" key={u}>
              <div className="buy-card-icon">{icon}</div>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
                <a href={"/" + u}>View details →</a>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}

// ---------- Service-page hero (form on right, as v2 service_page) ----------
export function ServiceHero({ h1, intro, bullets, formOptions }) {
  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-tag">📍 Gaur City Centre, Greater Noida West</div>
            <h1 className="hero-title" style={{ fontSize: "42px", lineHeight: "1.15" }}>{h1}</h1>
            <p className="hero-subtitle">{intro}</p>
            <ul className="hero-bullets">
              {bullets.slice(0, 3).map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="hero-btns">
              <a className="btn-gold" href={`tel:${PHONE}`}>📞 Call {PHONE_D}</a>
              <a className="btn-outline" href={WA} target="_blank" rel="noreferrer">💬 WhatsApp Us</a>
            </div>
          </div>
          <div className="hero-right">
            <HeroForm options={formOptions} />
          </div>
        </div>
      </section>
      <TrustStrip />
    </>
  );
}

export { CORE_FAQS };
export { MAPS_URL };
