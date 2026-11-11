import React from "react";
import { PHONE, PHONE_D, WA, HOURS_D, MAPS_URL } from "../config.js";
import {
  Crumbs, FaqBlock, ProcessSteps, AreasSection, ServicesSection, ServiceHero,
} from "./Blocks.jsx";

// ---------- v2 service_page() layout ----------
export function ServicePage({
  crumbItems, crumbName, h1, intro, bullets, detailH2, paras, faqs, faqPrefix,
  extraAfterParas = null, formOptions,
}) {
  return (
    <>
      <ServiceHero h1={h1} intro={intro} bullets={bullets} formOptions={formOptions} />
      <section className="sec">
        <div className="ctr">
          <Crumbs items={crumbItems} />
          <div className="content-page">
            <h2>{detailH2}</h2>
            {paras.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            {extraAfterParas}
            <h2>What We Accept</h2>
            <ul className="sell-bullets">
              {bullets.map((b, i) => (
                <li key={i}><span className="dot"></span>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="sec sec-gold-bg">
        <div className="ctr">
          <div className="eyebrow">How It Works</div>
          <h2 className="sec-title">From Testing to Payment in 10–15 Minutes</h2>
          <ProcessSteps />
        </div>
      </section>
      <section className="sec">
        <div className="ctr">
          <div className="eyebrow">FAQs</div>
          <h2 className="sec-title">Common Questions</h2>
          <FaqBlock faqs={faqs} prefix={faqPrefix || "svc"} />
        </div>
      </section>
      <AreasSection />
    </>
  );
}

// ---------- v2 area_page() layout ----------
export function AreaPage({ area, intro, neighbourhoods, reach, extraPara, faqs, faqPrefix }) {
  return (
    <>
      <section className="sec">
        <div className="ctr">
          <Crumbs items={[["Home", ""], [`Sell Gold in ${area}`, null]]} />
          <div className="eyebrow">Gold Buyer Near {area}</div>
          <h1 className="sec-title">Sell Gold in {area} — Cash for Gold, Silver &amp; Diamonds</h1>
          <p className="sec-desc">{intro}</p>
          <div style={{ textAlign: "center", marginBottom: "8px" }}>
            <a className="btn-gold" href={`tel:${PHONE}`}>📞 Call {PHONE_D}</a>{" "}
            <a className="btn-outline" href={MAPS_URL} target="_blank" rel="noreferrer">📍 Get Directions</a>
          </div>
        </div>
      </section>
      <section className="sec sec-gold-bg">
        <div className="ctr">
          <div className="eyebrow">Neighbourhoods We Serve</div>
          <h2 className="sec-title">Customers Visit Us From Across {area}</h2>
          <div className="chip-list">
            {neighbourhoods.map((n) => (
              <span className="chip" key={n}>{n}</span>
            ))}
          </div>
          <div className="content-page" style={{ marginTop: "26px" }}>
            <h2>How to Reach Our Store</h2>
            <p dangerouslySetInnerHTML={{ __html: reach }} />
            <p>{extraPara}</p>
            <h2>Why Sellers From {area} Choose Samridhi</h2>
            <ul>
              <li><strong>Transparent XRF testing</strong> — purity on screen, zero damage to jewellery.</li>
              <li><strong>Live-rate valuation</strong> — weight and rate shown, calculation explained.</li>
              <li><strong>Instant payment</strong> — cash, NEFT or RTGS in the same visit, with invoice.</li>
              <li><strong>Safe in-mall location</strong> — inside Gaur City Centre at Gaur Chowk, open 7 days ({HOURS_D}).</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="ctr">
          <div className="eyebrow">How It Works</div>
          <h2 className="sec-title">Sell in 4 Steps, 10–15 Minutes</h2>
          <ProcessSteps />
        </div>
      </section>
      <section className="sec sec-gold-bg">
        <div className="ctr">
          <div className="eyebrow">FAQs</div>
          <h2 className="sec-title">Selling Gold in {area} — Questions</h2>
          <FaqBlock faqs={faqs} prefix={faqPrefix || "area"} />
        </div>
      </section>
      <ServicesSection />
    </>
  );
}

// ---------- Guide layout for keyword pages ----------
// sections: [{ h2, paras: [html], bullets: [text] }]
// related: [[href, title, blurb]]
export function GuidePage({
  crumbItems, eyebrow, h1, intro, sections, faqs, faqPrefix, related,
  showAreas = false, showServices = false, heroForm = false,
}) {
  return (
    <>
      <section className="sec">
        <div className="ctr">
          <Crumbs items={crumbItems} />
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="sec-title">{h1}</h1>
          <p className="sec-desc">{intro}</p>
          <div style={{ textAlign: "center", marginBottom: "8px" }}>
            <a className="btn-gold" href={`tel:${PHONE}`}>📞 Call {PHONE_D}</a>{" "}
            <a className="btn-outline" href={WA} target="_blank" rel="noreferrer">💬 WhatsApp Us</a>{" "}
            <a className="btn-outline" href={MAPS_URL} target="_blank" rel="noreferrer">📍 Get Directions</a>
          </div>
        </div>
      </section>
      <section className="sec sec-gold-bg">
        <div className="ctr">
          <div className="content-page">
            {sections.map((s, i) => (
              <React.Fragment key={i}>
                <h2>{s.h2}</h2>
                {(s.paras || []).map((p, j) => (
                  <p key={j} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
                {s.bullets ? (
                  <ul>
                    {s.bullets.map((b, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: b }} />
                    ))}
                  </ul>
                ) : null}
                {s.table || null}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="ctr">
          <div className="eyebrow">How It Works</div>
          <h2 className="sec-title">Sell in 4 Steps, 10–15 Minutes</h2>
          <ProcessSteps />
        </div>
      </section>
      {faqs ? (
        <section className="sec sec-gold-bg">
          <div className="ctr">
            <div className="eyebrow">FAQs</div>
            <h2 className="sec-title">Common Questions</h2>
            <FaqBlock faqs={faqs} prefix={faqPrefix || "guide"} />
          </div>
        </section>
      ) : null}
      {related ? (
        <section className="sec">
          <div className="ctr">
            <div className="eyebrow">Keep Exploring</div>
            <h2 className="sec-title">Related Pages</h2>
            <div className="buy-cards">
              {related.map(([u, t, d]) => (
                <div className="buy-card" key={u}>
                  <div className="buy-card-icon">➡️</div>
                  <div>
                    <h3>{t}</h3>
                    <p>{d}</p>
                    <a href={u}>View details →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      {showAreas ? <AreasSection /> : null}
      {showServices ? <ServicesSection /> : null}
    </>
  );
}
