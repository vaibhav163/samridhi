import React from "react";
import { PHONE, PHONE_D, EMAIL, HOURS_D, MAPS_URL, MAP_EMBED, ADDRESS_LINE } from "../config.js";
import {
  HeroForm, TrustStrip, WhyUs, ProcessSteps, AreasSection, ServicesSection, FaqBlock,
} from "../components/Blocks.jsx";
import { HOME_FAQS } from "../data/core.js";

export default function HomePage() {
  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-tag">⭐ Trusted Gold Buyer — Gaur City, Greater Noida West</div>
            <h1 className="hero-title">Sona Do,<br /><span className="gold">Paisa Lo</span></h1>
            <p className="hero-subtitle">
              Sell gold, silver, diamonds and coins in Greater Noida West with transparent XRF testing, instant payment, and zero damage to your jewellery.
            </p>
            <ul className="hero-bullets">
              <li>Live purity result on screen — no acid test, no guessing, no damage</li>
              <li>Valuation from today's live market rate, calculated in front of you</li>
              <li>Instant payment by cash, NEFT or RTGS — in about 10–15 minutes</li>
            </ul>
            <div className="hero-btns">
              <a className="btn-gold" href={`tel:${PHONE}`}>📞 Talk to Us Now</a>
              <a className="btn-outline" href="/gold-rate-today">Today's Gold Rate →</a>
            </div>
          </div>
          <div className="hero-right">
            <HeroForm />
          </div>
        </div>
      </section>
      <TrustStrip />
      <section className="sec" id="about">
        <div className="ctr">
          <div className="eyebrow">Who We Are</div>
          <h2 className="sec-title">Samridhi Gold Buyers — Gold Buyer at Gaur City Centre</h2>
          <p className="sec-desc">
            We buy gold, silver, diamonds and coins at our store in <strong>Gaur City Centre, Gaur Chowk, Sector 4, Greater Noida West</strong>. Our promise is simple: you see the exact purity of your gold on the XRF Karatmeter screen, you see the weight, you see the live rate — and only then do you decide. No pressure, no hidden deductions, no damage to your jewellery. <a href="/about">Read our full story →</a>
          </p>
          <WhyUs />
        </div>
      </section>
      <section className="sec sec-dark">
        <div className="ctr">
          <div className="eyebrow">Our Edge</div>
          <h2 className="sec-title">Don't Sell Your Gold Before You Read This</h2>
          <div className="compare-wrap">
            <div className="compare-col bad">
              <h3>❌ What Most People Experience</h3>
              <ul className="compare-list">
                <li>❌ Purity checked by acid or touchstone — jewellery gets scratched</li>
                <li>❌ "Melting charges", "wastage" and other deductions you never agreed to</li>
                <li>❌ You are asked to trust a number with no proof shown</li>
                <li>❌ Payment delayed, or made in ways that feel unsafe</li>
                <li>❌ No invoice, no record of what you sold or for how much</li>
              </ul>
            </div>
            <div className="compare-col good">
              <h3>✅ How Samridhi Does It Differently</h3>
              <ul className="compare-list">
                <li>✅ Exact purity on screen with advanced XRF Karatmeter testing</li>
                <li>✅ Jewellery tested completely damage-free — no acid, no scratching</li>
                <li>✅ Weight and live rate shown to you; calculation explained line by line</li>
                <li>✅ Safe instant payment via cash, NEFT or RTGS</li>
                <li>✅ Digital KYC and a proper invoice for every transaction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
      <section className="sec sec-gold-bg">
        <div className="ctr">
          <div className="eyebrow">Why Sell Gold Now?</div>
          <h2 className="sec-title">Gold Rates Are Near Historic Highs</h2>
          <div className="sell-now-wrap">
            <div className="img-box">
              <img src="/images/gold-rate-chart.jpg" alt="Gold rate trend — sell gold in Greater Noida West at high live rates" width="500" height="375" loading="lazy" />
            </div>
            <div>
              <p style={{ fontSize: "15px", color: "var(--gray)", lineHeight: "1.8" }}>
                Gold has risen strongly over the last several years. Jewellery bought even five or ten years ago was likely purchased at a fraction of today's rate — which means the gold sitting unused in your locker may be worth far more than you expect. Get it tested free and know its real value before you decide anything.
              </p>
              <ul className="sell-bullets">
                <li><span className="dot"></span>Free XRF purity test — know the exact karat</li>
                <li><span className="dot"></span>Valuation at today's live market rate</li>
                <li><span className="dot"></span>No obligation — walk away if the offer doesn't suit you</li>
                <li><span className="dot"></span>Instant payment the same visit</li>
              </ul>
              <div style={{ marginTop: "26px" }}>
                <a className="btn-gold" href={`tel:${PHONE}`}>📞 Get a Free Valuation</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="ctr">
          <div className="eyebrow">How It Works</div>
          <h2 className="sec-title">Sell Your Gold in 4 Simple Steps</h2>
          <ProcessSteps />
          <p style={{ textAlign: "center", marginTop: "22px" }}><a href="/process">See the full process →</a></p>
        </div>
      </section>
      <AreasSection />
      <section className="sec sec-gold-bg">
        <div className="ctr">
          <div className="eyebrow">FAQs</div>
          <h2 className="sec-title">Questions People Ask Before Selling Gold</h2>
          <FaqBlock faqs={HOME_FAQS} prefix="home" />
          <p style={{ textAlign: "center", marginTop: "22px" }}><a href="/faq">Read all FAQs →</a></p>
        </div>
      </section>
      <section className="sec">
        <div className="ctr">
          <div className="eyebrow">Visit Us</div>
          <h2 className="sec-title">Our Store — Gaur City Centre, Gaur Chowk</h2>
          <div className="location-wrap">
            <div className="loc-info">
              <div className="loc-rows">
                <div className="loc-row"><strong>📍 Address</strong><span>{ADDRESS_LINE}</span></div>
                <div className="loc-row"><strong>📞 Phone / WhatsApp</strong><span><a href={`tel:${PHONE}`}>{PHONE_D}</a></span></div>
                <div className="loc-row"><strong>✉️ Email</strong><span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span></div>
                <div className="loc-row"><strong>🕐 Hours</strong><span>Open 7 days — {HOURS_D}</span></div>
                <div className="loc-row"><strong>🚇 Landmark</strong><span>Gaur Chowk (Char Murti), next to Gaur City Mall</span></div>
              </div>
              <div className="loc-btns">
                <a className="btn-gold" href={MAPS_URL} target="_blank" rel="noreferrer">Get Directions</a>
                <a className="btn-outline" href="/contact">Contact Page →</a>
              </div>
            </div>
            <div className="map-box">
              <iframe title="Samridhi Gold Buyers location — Gaur City Centre, Greater Noida West" src={MAP_EMBED} loading="lazy" style={{ border: 0, width: "100%", height: "100%", minHeight: "320px" }} allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
