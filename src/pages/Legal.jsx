import React from "react";
import { DOMAIN, NAME, PHONE, PHONE_D, EMAIL, ADDRESS_LINE, SERVICES, AREAS } from "../config.js";
import { Crumbs } from "../components/Blocks.jsx";
import { BLOGS } from "../data/core.js";

export function PrivacyPage() {
  return (
    <section className="sec">
      <div className="ctr">
        <Crumbs items={[["Home", ""], ["Privacy Policy", null]]} />
        <div className="content-page">
          <h1>Privacy Policy</h1>
          <p><em>Last updated: 11 November 2026</em></p>
          <p>This Privacy Policy explains how {NAME} ("we", "us") collects, uses and protects your information when you use {DOMAIN} or sell gold, silver, diamonds or coins at our store.</p>
          <h2>Information We Collect</h2>
          <p>When you submit an enquiry form, we collect your name, phone number and what you wish to sell, solely to respond to your enquiry. When you sell at our store, we are required by law to record KYC details (photo ID, and PAN for transactions of ₹2 lakh and above) and transaction particulars on your invoice.</p>
          <h2>How We Use It</h2>
          <p>To respond to enquiries, complete your transaction, issue invoices, and meet legal and regulatory obligations. We do not sell your personal information to third parties, and we do not send marketing messages without your consent.</p>
          <h2>Cookies &amp; Analytics</h2>
          <p>This website uses Google Tag Manager / analytics cookies to understand aggregate usage. You may disable cookies in your browser settings.</p>
          <h2>Data Security &amp; Retention</h2>
          <p>Transaction records are retained as required by Indian law. Enquiry data is kept only as long as needed to serve your request.</p>
          <h2>Contact</h2>
          <p>For any privacy question, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or call <a href={`tel:${PHONE}`}>{PHONE_D}</a>.</p>
        </div>
      </div>
    </section>
  );
}

export function TermsPage() {
  return (
    <section className="sec">
      <div className="ctr">
        <Crumbs items={[["Home", ""], ["Terms & Conditions", null]]} />
        <div className="content-page">
          <h1>Terms &amp; Conditions</h1>
          <p><em>Last updated: 11 November 2026</em></p>
          <h2>1. Our Services</h2>
          <p>{NAME} purchases gold, silver, diamond jewellery and gold/silver coins directly from individuals at our physical store at {ADDRESS_LINE}. Purity testing is performed on-site using XRF Karatmeter technology, and pricing is offered based on the live market rate, tested purity and weight at the time of your visit.</p>
          <h2>2. Valuations</h2>
          <p>Testing and valuation are free and carry no obligation to sell. Any figure mentioned in an enquiry response is indicative; the final offer is made in person after testing and may vary with the live rate.</p>
          <h2>3. Eligibility &amp; ID</h2>
          <p>You must be at least 21 years old, provide a valid government photo ID, and a PAN card for transactions of ₹2 lakh and above. You confirm that any item you sell is lawfully owned by you.</p>
          <h2>4. Payment</h2>
          <p>On acceptance of our offer, payment is made instantly by cash, NEFT or RTGS, with an invoice. Completed transactions are final, subject to applicable law.</p>
          <h2>5. Website Content</h2>
          <p>Content on this website, including any discussion of gold rates, is general information. Live rates change daily; the rate applicable to your transaction is the rate at the time of your in-store valuation.</p>
          <h2>6. Jurisdiction</h2>
          <p>These terms are governed by the laws of India, and any disputes are subject to the jurisdiction of the courts in Gautam Buddh Nagar, Uttar Pradesh.</p>
          <h2>7. Contact</h2>
          <p>Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or call <a href={`tel:${PHONE}`}>{PHONE_D}</a>.</p>
        </div>
      </div>
    </section>
  );
}

export const SITEMAP_LINKS = [
  ["", "Home"], ["about", "About Us"], ["what-we-buy", "What We Buy"],
  ["process", "How It Works"], ["gallery", "Gallery"], ["faq", "FAQs"],
  ["blog", "Blog"], ["contact", "Contact Us"],
  ...SERVICES,
  ["gold-buyer-near-me", "Gold Buyer Near Me"],
  ["cash-for-gold-gaur-city", "Cash for Gold — Gaur City"],
  ["gold-shop-in-gaur-city-centre", "Our Gold Shop in Gaur City Centre"],
  ["sell-old-gold", "Sell Old Gold"],
  ["sell-broken-gold", "Sell Broken Gold Jewellery"],
  ["scrap-gold-buyer", "Scrap Gold Buyer"],
  ["gold-purity-testing", "Gold Purity Testing"],
  ["gold-exchange", "Gold Exchange Service"],
  ["instant-cash-for-gold", "Instant Cash for Gold"],
  ["gold-dealer-greater-noida-west", "Gold Dealer in Greater Noida West"],
  ["gold-valuation", "Gold & Jewellery Valuation"],
  ["safe-place-to-sell-gold", "Safe Place to Sell Gold"],
  ["where-to-sell-gold", "How & Where to Sell Gold"],
  ...AREAS.map(([u, n]) => [u, `Sell Gold in ${n}`]),
  ...BLOGS.map((b) => [b.slug, b.h1]),
  ["privacy-policy", "Privacy Policy"],
  ["terms-and-conditions", "Terms & Conditions"],
];

export function SitemapPage() {
  return (
    <section className="sec">
      <div className="ctr">
        <Crumbs items={[["Home", ""], ["Sitemap", null]]} />
        <div className="content-page">
          <h1>Sitemap</h1>
          <ul>
            {SITEMAP_LINKS.map(([u, n]) => (
              <li key={u + n}><a href={"/" + u}>{n}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function NotFoundPage() {
  return (
    <section className="sec">
      <div className="ctr" style={{ textAlign: "center" }}>
        <div className="eyebrow center">404</div>
        <h1 className="sec-title center">This Page Couldn't Be Found</h1>
        <p className="sec-desc" style={{ margin: "0 auto 26px" }}>The page may have moved. Here's where most people go:</p>
        <div className="cta-btns" style={{ justifyContent: "center" }}>
          <a className="btn-gold" href="/">Home</a>
          <a className="btn-outline" href="/sell-gold">Cash for Gold</a>
          <a className="btn-outline" href="/gold-rate-today">Gold Rate Today</a>
          <a className="btn-outline" href="/contact">Contact Us</a>
        </div>
        <p style={{ marginTop: "22px" }}>Or call us: <a href={`tel:${PHONE}`}>{PHONE_D}</a></p>
      </div>
    </section>
  );
}
