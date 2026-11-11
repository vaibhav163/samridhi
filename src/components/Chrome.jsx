import React, { useState } from "react";
import {
  PHONE, PHONE_D, WA, EMAIL, HOURS_D, MAPS_URL, ADDRESS_LINE,
  SERVICES, AREAS, POPULAR,
} from "../config.js";
import { makeSubmitHandler, EnquiryStatus } from "../lib/enquiry.jsx";

// Topbar + nav (ids/classes identical to v2 so public/js/main.js works verbatim)
export function Header() {
  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <span>📅 7 Days Open</span>
          <span>🕐 {HOURS_D}</span>
          <span className="topbar-addr">📍 Gaur City Centre, Gaur Chowk</span>
          <a href={`tel:${PHONE}`}>📞 {PHONE_D}</a>
        </div>
      </div>
      <nav className="site-nav">
        <div className="nav-inner">
          <a className="logo" href="/">Samridhi <span>Gold Buyers</span></a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li className="dropdown">
              <a href="/what-we-buy">What We Buy ▾</a>
              <div className="dropdown-menu">
                <a href="/sell-gold">Cash for Gold</a>
                <a href="/sell-silver">Cash for Silver</a>
                <a href="/sell-diamonds">Cash for Diamonds</a>
                <a href="/sell-coins">Cash for Coins &amp; Bars</a>
                <a href="/release-pledged-gold">Release Pledged Gold</a>
                <a href="/gold-rate-today">Gold Rate Today</a>
                <a href="/gold-buyer-near-me">Gold Buyer Near Me</a>
                <a href="/instant-cash-for-gold">Instant Cash for Gold</a>
              </div>
            </li>
            <li><a href="/process">How It Works</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
          <a className="nav-phone nav-phone-desktop" href={`tel:${PHONE}`}>📞 Call Now</a>
          <button className="hamburger" aria-expanded="false" aria-label="Toggle menu">☰</button>
        </div>
        <div className="mobile-menu">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/what-we-buy">What We Buy</a>
          <a href="/sell-gold">Cash for Gold</a>
          <a href="/gold-buyer-near-me">Gold Buyer Near Me</a>
          <a href="/instant-cash-for-gold">Instant Cash for Gold</a>
          <a href="/release-pledged-gold">Release Pledged Gold</a>
          <a href="/gold-rate-today">Gold Rate Today</a>
          <a href="/process">How It Works</a>
          <a href="/gallery">Gallery</a>
          <a href="/faq">FAQs</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact Us</a>
        </div>
      </nav>
    </>
  );
}

// Lead popup (homepage only in v2) — form ids identical to v2; submit wired in React
export function LeadPopup() {
  const [status, setStatus] = useState(null);
  const onSubmit = makeSubmitHandler(
    () => "Free Gold Valuation Request",
    setStatus,
    () => setTimeout(() => {
      const p = document.getElementById("lead-popup");
      if (p) p.classList.remove("open");
    }, 1500)
  );
  return (
    <div className="popup-overlay" id="lead-popup" role="dialog" aria-modal="true" aria-labelledby="popup-title">
      <div className="popup-modal">
        <button className="popup-close" aria-label="Close popup">×</button>
        <div className="popup-head">
          <div className="p-tag">Free &amp; No Obligation</div>
          <h3 id="popup-title">Get Your Free Gold Valuation</h3>
          <p>Find out what your gold is worth at today's live rate.</p>
        </div>
        <div className="popup-body">
          <form id="lead-popup-form" onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="tel" name="phone" placeholder="Mobile Number" required pattern="[0-9]{10}" maxLength="10" />
            <button type="submit" className="btn-gold">Get Free Valuation</button>
          </form>
          <p className="popup-note" id="popup-status"><EnquiryStatus status={status} defaultText="We'll call you back — no spam, ever." /></p>
        </div>
      </div>
    </div>
  );
}

// CTA band + footer + floating buttons + sticky call bar (v2 footer())
export function Footer() {
  return (
    <>
      <section className="cta-band" id="contact-cta">
        <div className="eyebrow center">Get In Touch</div>
        <h2 className="sec-title center" style={{ maxWidth: "640px" }}>Ready to Sell Your Gold?</h2>
        <p style={{ fontSize: "16px", color: "var(--gray)", marginBottom: "28px", maxWidth: "520px", marginLeft: "auto", marginRight: "auto" }}>
          Walk in to our Gaur City Centre store or call now. Free XRF valuation, no obligation, instant payment when you accept.
        </p>
        <div className="cta-phone">📞 {PHONE_D}</div>
        <div className="cta-phone-label">Call or WhatsApp — open 7 days, {HOURS_D}</div>
        <div className="cta-btns">
          <a className="btn-gold" href={`tel:${PHONE}`} style={{ fontSize: "16px", padding: "15px 40px" }}>Call Now</a>
          <a className="btn-outline" href={WA} target="_blank" rel="noreferrer" style={{ fontSize: "16px", padding: "14px 40px" }}>💬 WhatsApp Us</a>
          <a className="btn-outline" href={MAPS_URL} target="_blank" rel="noreferrer" style={{ fontSize: "16px", padding: "14px 40px" }}>📍 Get Directions</a>
        </div>
      </section>
      <footer>
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Samridhi <span>Gold Buyers</span></div>
            <p className="footer-desc">
              Gold, silver, diamond and coin buyers at Gaur City Centre, Greater Noida West. Transparent XRF purity testing, live market-rate valuation and instant payment — with zero damage to your jewellery.
            </p>
            <p className="footer-desc">
              📍 {ADDRESS_LINE}<br />
              📞 <a href={`tel:${PHONE}`}>{PHONE_D}</a><br />
              ✉️ <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
              🕐 Open 7 days: {HOURS_D}
            </p>
          </div>
          <div className="f-col">
            <h4>Our Services</h4>
            {SERVICES.map(([u, n]) => (
              <a key={u} href={"/" + u}>{n}</a>
            ))}
            <a href="/what-we-buy">What We Buy</a>
            <a href="/process">How It Works</a>
          </div>
          <div className="f-col">
            <h4>Areas We Serve</h4>
            {AREAS.map(([u, n]) => (
              <a key={u} href={"/" + u}>Sell Gold in {n}</a>
            ))}
          </div>
          <div className="f-col">
            <h4>Popular</h4>
            {POPULAR.map(([u, n]) => (
              <a key={u} href={"/" + u}>{n}</a>
            ))}
            <a href="/contact">Contact Us</a>
            <a href="/sitemap">Sitemap</a>
          </div>
        </div>
        <div className="footer-bottom">© 2026 Samridhi Gold Buyers. All rights reserved. | {ADDRESS_LINE}</div>
      </footer>
      <div className="floating">
        <a className="fab fab-wa" href={WA} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">💬</a>
        <a className="fab fab-ph" href={`tel:${PHONE}`} aria-label="Call us">📞</a>
      </div>
      <div className="sticky-call">
        <a href={`tel:${PHONE}`} className="sc-call">📞 Call {PHONE_D}</a>
        <a href={WA} target="_blank" rel="noreferrer" className="sc-wa">💬 WhatsApp</a>
      </div>
    </>
  );
}

export default function Layout({ children, popup = false }) {
  return (
    <>
      <Header />
      <main id="main">
        {popup ? <LeadPopup /> : null}
        {children}
      </main>
      <Footer />
    </>
  );
}
