import React, { useState } from "react";
import { PHONE, PHONE_D, WA, EMAIL, HOURS_D, MAPS_URL, MAP_EMBED, STREET, CITY, ADDRESS_LINE } from "../config.js";
import { makeSubmitHandler, EnquiryStatus } from "../lib/enquiry.jsx";
import {
  Crumbs, FaqBlock, ProcessSteps, AreasSection, ServicesSection, WhyUs,
} from "../components/Blocks.jsx";
import { CORE_FAQS } from "../data/core.js";

export function AboutPage() {
  return (
    <>
      <section className="sec">
        <div className="ctr">
          <Crumbs items={[["Home", ""], ["About Us", null]]} />
          <div className="eyebrow">About Us</div>
          <h1 className="sec-title">About Samridhi Gold Buyers, Greater Noida West</h1>
          <div className="content-page">
            <p>Samridhi Gold Buyers is a gold buying store at <strong>{STREET}, {CITY}</strong>, where you can sell gold, silver, diamond jewellery and coins with complete transparency.</p>
            <p>We started with a simple observation: most people who sell old gold have no way of knowing whether they are getting a fair price. Traditional testing methods — acid or touchstone — scratch the jewellery, and the final number is often just "trust us". Stones, wastage and melting charges quietly eat into the value.</p>
            <p>At Samridhi, the process happens in front of you. We test purity with <strong>German XRF Karatmeter technology</strong> — the result shows on a screen, live, with zero damage to your jewellery. We weigh your item in front of you, apply the day's live market rate, and explain the full calculation before you decide. Every sale is completed with digital KYC and a proper invoice, and payment is made instantly by cash, NEFT or RTGS.</p>
            <p>Our store sits inside Gaur City Centre at Gaur Chowk — a safe, easy-to-reach location for customers from Gaur City, Greater Noida West, Noida Extension, Crossing Republik and Noida. We are open 7 days a week, and testing and valuation are always free.</p>
            <h2>Our Promise</h2>
            <ul>
              <li>Your jewellery is never damaged during testing — no acid, no scratching, no melting.</li>
              <li>You see the purity, the weight and the rate. Nothing is hidden.</li>
              <li>No obligation: if the offer doesn't suit you, you take your jewellery back — free of charge.</li>
              <li>Instant payment and a proper invoice, every single time.</li>
            </ul>
          </div>
          <WhyUs />
        </div>
      </section>
      <AreasSection />
    </>
  );
}

export function WhatWeBuyPage() {
  const cards = [
    ["cash-for-gold", "🥇", "Cash for Gold", "All gold jewellery — necklaces, bangles, chains, rings, earrings, mangalsutras and bracelets. With or without hallmark, with or without bill, old, new or broken. Valued by actual XRF-tested purity at the live rate.", "/sell-gold", "Sell gold →"],
    ["cash-for-silver", "🥈", "Cash for Silver", "Silver jewellery, utensils, pooja articles, gift items and ornaments. Weighed in front of you and valued at the live silver rate.", "/sell-silver", "Sell silver →"],
    ["cash-for-diamonds", "💎", "Cash for Diamonds", "Diamond rings, solitaires, earrings, pendants and set jewellery — certified or uncertified. Each stone is evaluated carefully and explained to you.", "/sell-diamonds", "Sell diamonds →"],
    ["cash-for-coins", "🪙", "Cash for Coins & Bars", "Gold and silver coins and bars — bank-issued, investment, temple and commemorative — valued by weight, purity and the live market rate.", "/sell-coins", "Sell coins & bars →"],
    [null, "🔓", "Release Pledged Gold", "Gold pledged with a bank, NBFC or local financier? We help you release it, settle the loan and buy the gold from you — so you keep the difference instead of losing the gold.", "/release-pledged-gold", "How it works →"],
    [null, "📈", "Today's Gold Rate", "Rates change every day. See how the live rate, purity and weight combine to decide your payout — then call us for today's exact rate.", "/gold-rate-today", "Understand the rate →"],
  ];
  return (
    <>
      <section className="sec">
        <div className="ctr">
          <Crumbs items={[["Home", ""], ["What We Buy", null]]} />
          <div className="eyebrow">What We Do</div>
          <h1 className="sec-title">We Buy Gold, Silver, Diamonds &amp; Coins</h1>
          <p className="sec-desc">Every category is tested with the same transparent, non-destructive XRF process and paid for instantly at our Gaur City Centre store.</p>
          <div className="buy-cards">
            {cards.map(([id, icon, t, d, u, link], i) => (
              <div className="buy-card" id={id || undefined} key={i}>
                <div className="buy-card-icon">{icon}</div>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                  <a href={u}>{link}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec sec-gold-bg">
        <div className="ctr">
          <div className="eyebrow">Good to Know</div>
          <h2 className="sec-title">What to Bring When You Sell</h2>
          <div className="content-page">
            <ul>
              <li><strong>One valid photo ID</strong> — Aadhaar, Voter ID, Driving Licence or Passport (mandatory).</li>
              <li><strong>PAN card</strong> — required for transactions of ₹2 lakh and above.</li>
              <li><strong>Purchase bill</strong> — helpful if you have it, but <em>not</em> mandatory.</li>
              <li><strong>For pledged gold</strong> — your loan receipt / pawn ticket and the lender's details.</li>
              <li>You must be <strong>21 years or older</strong> and the rightful owner of the items you sell.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export function ProcessPage() {
  return (
    <>
      <section className="sec">
        <div className="ctr">
          <Crumbs items={[["Home", ""], ["How It Works", null]]} />
          <div className="eyebrow">How It Works</div>
          <h1 className="sec-title">Sell Your Gold in 4 Simple Steps</h1>
          <p className="sec-desc">The entire process takes about 10–15 minutes at our Gaur City Centre counter. No hidden steps, no surprises, no damage to your jewellery.</p>
          <ProcessSteps />
          <div className="content-page" style={{ marginTop: "36px" }}>
            <h2>Why the XRF Test Matters</h2>
            <p>Older testing methods — acid and touchstone — scratch the surface of your jewellery and only estimate purity. A German XRF (X-ray fluorescence) Karatmeter measures the exact metal composition without touching or damaging the piece, and displays the result on a screen you can read yourself. That one difference removes almost every dispute about purity — and it is why we can value hallmarked, non-hallmarked, old and even broken jewellery fairly.</p>
            <h2>No Obligation at Any Step</h2>
            <p>Testing and valuation are free. If our offer doesn't suit you, you are free to compare with any other buyer and come back — your jewellery leaves with you, exactly as it arrived.</p>
          </div>
        </div>
      </section>
      <ServicesSection />
    </>
  );
}

export function GalleryPage() {
  const items = [
    ["/images/store-front.jpg", "Samridhi Gold Buyers store at Shop GF-04, Gaur City Centre, Greater Noida West", "Our store — Shop GF-04, Gaur City Centre, Gaur Chowk"],
    ["/images/gallery1.jpg", "XRF Karatmeter purity testing for gold in Greater Noida West", "German XRF Karatmeter — purity tested live, zero damage"],
    ["/images/gallery2.jpg", "Certified weighing of gold jewellery in front of the customer", "Certified weighing, done in front of you"],
    ["/images/gallery3.jpg", "Instant cash, NEFT or RTGS payment for gold at Samridhi Gold Buyers", "Instant payment — cash, NEFT or RTGS"],
    ["/images/gallery4.jpg", "Gaur City Centre, Greater Noida West — location of Samridhi Gold Buyers", "Easy to reach from Gaur City, Noida Extension & Crossing Republik"],
    ["/images/hero-gold.jpg", "Sell gold, silver and diamonds in Greater Noida West — Sona Do, Paisa Lo", "Sona Do, Paisa Lo — sell gold, silver & diamonds"],
  ];
  return (
    <section className="sec">
      <div className="ctr">
        <Crumbs items={[["Home", ""], ["Gallery", null]]} />
        <div className="eyebrow">Our Store</div>
        <h1 className="sec-title">Inside Samridhi Gold Buyers, Gaur City Centre</h1>
        <p className="sec-desc">Walk in for free XRF testing and get cash for gold on the spot. Visit us at {STREET}, {CITY}.</p>
        <div className="gallery-grid">
          {items.map(([src, alt, cap], i) => (
            <div className="gallery-item" key={i}>
              <img src={src} alt={alt} loading="lazy" />
              <p>{cap}</p>
            </div>
          ))}
        </div>
        <p className="sec-desc" style={{ marginTop: "18px" }}>
          Planning a visit? <a href={MAPS_URL} target="_blank" rel="noreferrer">Get directions on Google Maps →</a>
        </p>
      </div>
    </section>
  );
}

export function FaqPage() {
  return (
    <section className="sec">
      <div className="ctr">
        <Crumbs items={[["Home", ""], ["FAQs", null]]} />
        <div className="eyebrow">FAQ</div>
        <h1 className="sec-title">Frequently Asked Questions</h1>
        <p className="sec-desc">
          Everything you need to know before selling your gold, silver or diamonds at our Gaur City Centre store. Still unsure? Call us on <a href={`tel:${PHONE}`}>{PHONE_D}</a>.
        </p>
        <FaqBlock faqs={CORE_FAQS} prefix="faqpage" />
      </div>
    </section>
  );
}

export function ContactPage() {
  const [status, setStatus] = useState(null);
  const onSubmit = makeSubmitHandler((f) => f.message.value || "General Enquiry", setStatus);
  return (
    <>
      <section className="sec">
        <div className="ctr">
          <Crumbs items={[["Home", ""], ["Contact Us", null]]} />
          <div className="eyebrow">Get In Touch</div>
          <h1 className="sec-title">Contact Samridhi Gold Buyers</h1>
          <p className="sec-desc">Walk in to our Gaur City Centre store, call, WhatsApp, or send a message — we respond fast.</p>
          <div className="contact-grid">
            <div>
              <h2 style={{ marginBottom: "14px" }}>Send Us a Message</h2>
              <form className="contact-form" id="contact-form" onSubmit={onSubmit}>
                <input type="text" name="name" placeholder="Full Name" required />
                <input type="tel" name="phone" placeholder="Phone Number" required pattern="[0-9]{10}" maxLength="10" />
                <textarea name="message" placeholder="What do you want to sell? (gold / silver / diamond / coins / pledged gold)" rows="4"></textarea>
                <button type="submit" className="btn-gold">Send Message</button>
                <p className="form-note" id="contact-status"><EnquiryStatus status={status} defaultText="Prefer to talk? Call us or WhatsApp us." /></p>
              </form>
            </div>
            <div>
              <h2 style={{ marginBottom: "14px" }}>Visit Our Store</h2>
              <div className="loc-rows">
                <div className="loc-row"><strong>📍 Address</strong><span className="loc-address">{ADDRESS_LINE}</span></div>
                <div className="loc-row"><strong>📞 Call / WhatsApp</strong><span><a href={`tel:${PHONE}`}>{PHONE_D}</a></span></div>
                <div className="loc-row"><strong>🕐 Hours</strong><span>{HOURS_D}, 7 days a week</span></div>
                <div className="loc-row"><strong>✉️ Email</strong><span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span></div>
                <div className="loc-row"><strong>🚇 Landmark</strong><span>Gaur Chowk (Char Murti Chowk), next to Gaur City Mall</span></div>
                <div className="loc-row"><strong>🅿️ Reaching Us</strong><span>Easy access from Gaur City 1 &amp; 2, Noida Extension, Crossing Republik (via Shahberi) and Noida sectors 119–122.</span></div>
              </div>
              <div className="loc-btns">
                <a className="btn-gold" href={`tel:${PHONE}`}>📞 Call Now</a>
                <a className="btn-outline" href={WA} target="_blank" rel="noreferrer">💬 WhatsApp</a>
                <a className="btn-outline" href={MAPS_URL} target="_blank" rel="noreferrer">📍 Directions</a>
              </div>
            </div>
          </div>
          <div className="map-box" style={{ marginTop: "34px" }}>
            <iframe title="Samridhi Gold Buyers on Google Maps — Gaur City Centre" src={MAP_EMBED} loading="lazy" style={{ border: 0, width: "100%", height: "380px" }} allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
      <AreasSection />
    </>
  );
}
