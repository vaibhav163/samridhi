import React from "react";
import { PHONE, PHONE_D } from "../config.js";
import { ServicePage } from "../components/Layouts.jsx";
import { Crumbs, ServicesSection } from "../components/Blocks.jsx";
import { CORE_FAQS } from "../data/core.js";

const F = CORE_FAQS;
const base = (name) => ({
  crumbItems: [["Home", ""], ["What We Buy", "what-we-buy"], [name, null]],
  crumbName: name,
});

export function SellGoldPage() {
  return (
    <ServicePage
      {...base("Cash for Gold")}
      faqPrefix="gold"
      h1="Cash for Gold in Greater Noida West"
      intro="Sell your gold jewellery at Samridhi Gold Buyers, Gaur City Centre — tested live on an XRF Karatmeter, valued at today's market rate, and paid for instantly."
      bullets={[
        "Gold necklaces, chains, bangles, bracelets and kada",
        "Rings, earrings, pendants and mangalsutras",
        "Old, broken or out-of-fashion gold jewellery",
        "Gold with or without hallmark — and without purchase bill",
        "22K, 18K, 14K and other purities — valued by actual tested purity",
      ]}
      detailH2="How Your Gold Is Valued"
      paras={[
        "Your payout depends on three things only: the <strong>weight</strong> of your jewellery, its <strong>purity</strong>, and <strong>today's live gold rate</strong>. The XRF Karatmeter shows the exact purity on screen — 22K gold is 91.6% pure, 18K is 75% pure — and that percentage of your item's weight is its pure-gold weight. Multiply by the live rate and you have your value. We show you every step of this calculation before you decide.",
        "As a dedicated <strong>gold jewellery buyer</strong> (not a jeweller who buys as a side business), our entire counter is set up for one thing: testing and valuing your gold accurately, in front of you. Unlike the traditional route, there is no acid test and no scratching, and your jewellery is never melted before you agree. If you don't like the offer, you simply take your jewellery back — testing is free and there is no obligation to sell.",
        "Stones set in jewellery are not gold, so their weight is not counted as gold — this is standard practice everywhere. What makes the difference is whether the buyer shows you the numbers. We do. If you want to know how we work as a dealer — documented KYC, invoice and compliant process — see our <a href=\"/gold-dealer-greater-noida-west\">gold dealer page</a>, or check <a href=\"/instant-cash-for-gold\">how instant payment works</a>.",
      ]}
      faqs={[F[2], F[3], F[1], F[4]]}
    />
  );
}

export function SellSilverPage() {
  return (
    <ServicePage
      {...base("Cash for Silver")}
      faqPrefix="silver"
      h1="Cash for Silver in Greater Noida West"
      intro="Sell silver jewellery, utensils and articles at Samridhi Gold Buyers, Gaur City Centre — weighed in front of you, valued at the live silver rate, paid instantly."
      bullets={[
        "Silver jewellery — payal, bichhiya, chains, bangles and rings",
        "Silver utensils — glasses, plates, bowls and pooja sets",
        "Silver articles, gift items and idols",
        "Old or tarnished silver — condition does not matter, purity does",
        "Silver coins — see our dedicated coins page too",
      ]}
      detailH2="How Your Silver Is Valued"
      paras={[
        "Silver is valued by <strong>weight × purity × the live silver rate</strong>. Common Indian silver ranges from sterling (92.5% pure) to lower-purity articles, so testing matters as much as weighing. We test and weigh your silver in front of you and explain the valuation before you decide.",
        "Tarnish and age do not reduce the metal's value — silver is priced by its pure content, not its shine. Bring utensils, pooja items or jewellery in any condition.",
      ]}
      faqs={[
        ["Do you buy silver utensils and pooja articles?", "Yes — glasses, plates, bowls, lamps, idols and complete pooja sets are all accepted and valued by weight and tested purity."],
        ["Does tarnished or blackened silver fetch less?", "No. Tarnish is only surface oxidation; the silver content is unchanged, and that is what you are paid for."],
        F[4], F[9],
      ]}
    />
  );
}

export function SellDiamondsPage() {
  return (
    <ServicePage
      {...base("Cash for Diamonds")}
      faqPrefix="diamond"
      h1="Cash for Diamonds in Greater Noida West"
      intro="Sell diamond rings, solitaires and set jewellery at Samridhi Gold Buyers, Gaur City Centre — every stone evaluated carefully, and the gold in the setting valued separately by its tested purity."
      bullets={[
        "Diamond rings and solitaires — certified or uncertified",
        "Diamond earrings, pendants, bracelets and necklaces",
        "Diamond jewellery set in gold or platinum",
        "Loose diamonds with or without certificates",
        "Old or inherited diamond jewellery",
      ]}
      detailH2="How Your Diamond Jewellery Is Valued"
      paras={[
        "A diamond's value comes from the <strong>4Cs — cut, colour, clarity and carat weight</strong> — judged against current market demand. Our trained valuers examine each stone, explain what grade it falls in and how that affects the offer. This is a proper <strong>diamond valuation</strong>, not a guess: if you have a certificate (IGI, GIA or similar), bring it along — it can support the valuation — but it is not compulsory, and uncertified stones are evaluated with the same care.",
        "The metal setting is valued separately: the gold is XRF-tested for purity and weighed, so you receive value for both the stone and the metal, itemised clearly. For a combined gold + diamond evaluation in one visit, see our <a href=\"/gold-valuation\">instant jewellery evaluation</a> page.",
      ]}
      faqs={[
        ["Do I need a certificate to sell my diamond?", "No. A certificate helps, but our valuers can evaluate uncertified diamonds as well and will explain the grading to you."],
        ["Is the gold in my diamond ring paid for separately?", "Yes. The diamond and the gold setting are valued separately and both are included in your offer."],
        F[0], F[4],
      ]}
    />
  );
}

export function SellCoinsPage() {
  return (
    <ServicePage
      {...base("Cash for Coins")}
      faqPrefix="coins"
      h1="Cash for Gold & Silver Coins and Bars in Greater Noida West"
      intro="Sell gold and silver coins and bars at Samridhi Gold Buyers, Gaur City Centre — bank-issued, investment, temple and commemorative coins and bars valued by weight, purity and the live rate, with instant payment."
      bullets={[
        "Gold coins — bank-issued, branded (Tanishq, Malabar, MMTC-PAMP and others) and temple coins",
        "Gold and silver bars / bullion — sealed or loose, all standard weights",
        "Silver coins — festival, pooja and investment coins of all weights",
        "Coin sets and gift packs — sealed or open",
        "Old and antique-style coins with precious-metal content",
      ]}
      detailH2="How Your Coins and Bars Are Valued"
      paras={[
        "<strong>Gold coin and bar purchasing</strong> works on the same simple formula as jewellery: <strong>weight × purity × live rate</strong>. A 24K (999) gold coin or bar is nearly pure, so it tracks the live gold rate closely. Branded and bank-sealed pieces in original packaging are quickest to value, but we buy loose coins and bars too, after a non-destructive XRF purity check.",
        "If you are unsure whether a coin is solid precious metal or only plated, bring it in — the XRF test will tell you in seconds, free of charge. The same free check applies to silver coins and bars.",
      ]}
      faqs={[
        ["Do you buy coins and bars without the original bill or packing?", "Yes. Sealed packing and bills help, but loose coins and bars are accepted after a free XRF purity test."],
        ["Are plated coins accepted?", "Plated coins have negligible precious-metal content, so they carry little or no metal value. We will test the coin free and tell you honestly what it is."],
        F[4], F[9],
      ]}
    />
  );
}

export function ReleasePledgedGoldPage() {
  return (
    <ServicePage
      {...base("Release Pledged Gold")}
      faqPrefix="pledged"
      h1="Release Your Pledged Gold — and Keep the Difference"
      intro="If your gold is pledged against a loan, interest keeps growing while the gold's value may be far higher than the loan. We help you release the pledged gold, settle the lender, and buy the gold from you — so the surplus comes to you."
      bullets={[
        "Gold pledged with banks, NBFCs (gold loans) and local financiers",
        "Old pledges where interest has piled up",
        "Cases where the loan amount is less than the gold's current value",
        "Complete hand-holding — release, testing, valuation and payment",
      ]}
      detailH2="How Releasing Pledged Gold Works"
      paras={[
        "Bring your <strong>loan receipt or pawn ticket</strong> and one valid photo ID, and tell us which bank, NBFC or financier holds your gold. We first calculate your gold's approximate current value — based on weight, purity and the live rate — and compare it with your outstanding loan amount plus interest.",
        "If the gold is worth more than the settlement amount, it usually makes financial sense to release it: the loan is settled, the gold is released and tested at our counter, and we buy it from you at the transparent valuation. <strong>You receive the difference</strong> — instead of eventually losing the gold to the loan.",
        `Call us on ${PHONE_D} with your loan details before visiting, and we will tell you honestly whether releasing makes sense in your case. There is no charge for this guidance.`,
      ]}
      faqs={[
        ["What documents do I need to release pledged gold?", "Your loan receipt / pawn ticket, one valid photo ID, and the lender's branch details. PAN is needed if the final transaction is ₹2 lakh or above."],
        ["What if the loan amount is more than my gold's value?", "Then releasing may not benefit you, and we will tell you that clearly. There is no obligation and no charge for the valuation or the advice."],
        ["How long does the release process take?", "It depends on the lender's release procedure — many gold loans can be settled and released the same day. Call us first and we'll plan it with you."],
        F[4],
      ]}
    />
  );
}

export function GoldRatePage() {
  return (
    <>
      <section className="sec">
        <div className="ctr">
          <Crumbs items={[["Home", ""], ["Gold Rate Today", null]]} />
          <div className="eyebrow">Gold Rate Today</div>
          <h1 className="sec-title">Gold Rate Today in Greater Noida — and How Your Payout Is Calculated</h1>
          <div className="content-page">
            <p>The gold rate changes <strong>every day</strong> with the international market, the rupee–dollar rate and local demand — which is why any honest buyer will quote you the exact selling rate at the counter, or on a call, rather than printing a number on a website that may be stale by tomorrow. As a <strong>live market rate gold buyer</strong>, our valuation always starts from the rate running at the time of your visit.</p>
            <p style={{ fontSize: "18px" }}>
              <strong>📞 For today's exact rate, call or WhatsApp us: <a href={`tel:${PHONE}`}>{PHONE_D}</a></strong> — it takes 30 seconds, and testing at the store is free either way.
            </p>
            <h2>The Formula Every Buyer Uses</h2>
            <p><strong>Your payout = Pure-gold weight × Today's live rate per gram</strong>, where pure-gold weight = item weight × purity percentage.</p>
            <h2>Purity Table (BIS Standards)</h2>
            <div style={{ overflowX: "auto" }}>
              <table className="rate-table">
                <tbody>
                  <tr><th>Karat</th><th>Purity</th><th>Meaning</th><th>Commonly Used For</th></tr>
                  <tr><td>24K</td><td>99.9% (999)</td><td>Pure gold</td><td>Coins &amp; bars</td></tr>
                  <tr><td>22K</td><td>91.6% (916)</td><td>916 hallmark</td><td>Most Indian jewellery</td></tr>
                  <tr><td>18K</td><td>75.0% (750)</td><td>750 hallmark</td><td>Diamond jewellery</td></tr>
                  <tr><td>14K</td><td>58.5% (585)</td><td>585 hallmark</td><td>Lightweight / imported jewellery</td></tr>
                </tbody>
              </table>
            </div>
            <h2>A Worked Example (Illustration Only)</h2>
            <p>Say you bring a <strong>10 gram, 22K</strong> gold chain. Pure-gold weight = 10 g × 91.6% = <strong>9.16 grams</strong>. Your payout = 9.16 × today's live rate per gram for pure gold. At our counter this exact calculation is shown to you on the XRF screen and the weighing scale — before you decide anything.</p>
            <h2>Why Two Buyers Quote Different Amounts</h2>
            <ul>
              <li><strong>Purity reading</strong> — acid tests estimate; XRF measures. A lower "assumed" purity quietly lowers your payout.</li>
              <li><strong>Deductions</strong> — some buyers cut for "wastage", "melting" or stones without showing you the weight.</li>
              <li><strong>Which rate</strong> — the rate should be today's live market rate, not a rounded-down figure.</li>
            </ul>
            <p>Our answer to all three: test live on screen, weigh in front of you, calculate openly. Read <a href="/sell-gold">how selling gold works here</a> or see the <a href="/process">full 4-step process</a>.</p>
          </div>
        </div>
      </section>
      <ServicesSection />
    </>
  );
}
