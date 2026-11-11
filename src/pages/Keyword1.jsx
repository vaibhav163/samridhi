import React from "react";
import { PHONE, PHONE_D, MAPS_URL, MAP_EMBED, HOURS_D, ADDRESS_LINE } from "../config.js";
import { GuidePage, ServicePage } from "../components/Layouts.jsx";
import { Crumbs, FaqBlock, ProcessSteps } from "../components/Blocks.jsx";
import { CORE_FAQS } from "../data/core.js";

const F = CORE_FAQS;

/* 1 — gold-buyer-near-me */
export function GoldBuyerNearMePage() {
  const table = (
    <div style={{ overflowX: "auto" }}>
      <table className="rate-table">
        <tbody>
          <tr><th>Your Area</th><th>Approx. Drive to Our Store</th><th>Route</th></tr>
          <tr><td>Gaur City 1 &amp; 2</td><td>2–10 minutes</td><td>Inside Gaur City itself — Gaur Chowk</td></tr>
          <tr><td>Greater Noida West (Sec 1–16B)</td><td>5–15 minutes</td><td>Greater Noida West Road / Vikas Marg</td></tr>
          <tr><td>Noida Extension / Bisrakh</td><td>5–12 minutes</td><td>Via Gaur Chowk</td></tr>
          <tr><td>Crossing Republik</td><td>12–20 minutes</td><td>Via Shahberi</td></tr>
          <tr><td>Noida Sec 119–122</td><td>10–18 minutes</td><td>Via Sector 121 / Dadri Road side</td></tr>
          <tr><td>Noida Sec 62 / 63</td><td>20–30 minutes</td><td>Hindon bridge route</td></tr>
          <tr><td>Indirapuram / Vaishali</td><td>25–40 minutes</td><td>NH-9 + Hindon bridge</td></tr>
          <tr><td>Greater Noida (Pari Chowk)</td><td>25–35 minutes</td><td>Link Road / Surajpur</td></tr>
        </tbody>
      </table>
    </div>
  );
  return (
    <GuidePage
      crumbItems={[["Home", ""], ["Gold Buyer Near Me", null]]}
      eyebrow="Gold Buyer Near Me"
      h1="Gold Buyer Near Me — How to Choose the Right One"
      intro="When you search 'gold buyer near me' or 'instant cash for gold near me', Google shows you whoever is closest — not necessarily whoever pays you fairly. The nearest buyer is only the best buyer if the testing is transparent, the rate is live, and the payment is instant and documented. This page helps you judge any nearby buyer — including us — on the things that actually decide what reaches your hand."
      faqPrefix="nearme"
      faqs={[
        ["Which is the best gold buyer near me?", "The best nearby buyer is the one who (1) tests purity by XRF in front of you, (2) weighs in front of you, (3) values at the day's live market rate with the calculation shown, (4) pays instantly with an invoice, and (5) lets you walk away free if you don't like the offer. Distance matters less than these five — a 10-minute extra drive can be worth thousands of rupees on larger quantities."],
        ["How do I find a scrap gold buyer near me?", "Look for a dedicated gold-buying store (not a jeweller who buys as a side line) that accepts broken and scrap gold and tests it by XRF. We accept scrap gold, broken jewellery and loose pieces at our Gaur City Centre store — see our scrap gold page for what counts as scrap."],
        ["Should I sell to the closest buyer or compare?", "Compare — testing is free at genuine buyers. Get your purity tested once, note the exact karat and net weight, then compare final payable amounts (after all deductions) from two or three buyers on the same day, since rates move daily."],
        F[9],
      ]}
      sections={[
        {
          h2: "What 'Near Me' Searches Don't Tell You",
          paras: [
            "Two buyers 500 metres apart can pay noticeably different amounts for the same chain. The difference rarely comes from the headline rate — it comes from <strong>how purity is read</strong> and <strong>what gets deducted</strong>. An acid test that 'estimates' your 22K chain at a lower purity, plus a round of wastage and melting deductions, quietly removes value that a transparent XRF valuation would have paid you. Proximity is convenient; transparency is profitable. Ideally, choose a buyer who gives you both.",
            "Our store sits at <strong>Gaur Chowk — the centre point of Greater Noida West</strong> — which puts us within a short drive of Gaur City, Noida Extension, Crossing Republik, Noida's western sectors and even Indirapuram. For most sellers in this region, we genuinely are the near option; the rest of this page is about verifying we're also the right one.",
          ],
        },
        {
          h2: "How Far Is Our Store From You?",
          paras: ["Drive times below are indicative, off-peak. In every case, testing and valuation at the counter take about 10–15 minutes, and both are free."],
          table,
        },
        {
          h2: "The 5-Point Check for Any Gold Buyer Near You",
          bullets: [
            "<strong>XRF testing in front of you</strong> — the purity result should appear on a screen you can read, with zero damage to the jewellery. Refuse 'we'll test it inside'.",
            "<strong>Weighing in front of you</strong> — on a certified scale, with stones and non-gold parts explained, not silently deducted.",
            "<strong>Live market rate</strong> — ask which rate is being applied and check it against the day's rate. Yesterday's rate is the buyer's profit, not yours.",
            "<strong>Instant, documented payment</strong> — cash, NEFT or RTGS in the same visit, with a proper invoice and digital KYC. No invoice means no record.",
            "<strong>Freedom to walk away</strong> — valuation must be free and without obligation. Pressure tactics are the oldest red flag in this business.",
          ],
        },
        {
          h2: "Red Flags That Should Make You Walk Out",
          bullets: [
            "Purity tested by acid or touchstone, or the item taken to a back room for 'checking'.",
            "Melting your jewellery before you've agreed to sell — after melting, you can't take it back.",
            "A high headline rate followed by unexplained percentage deductions at the end.",
            "No ID asked, no invoice offered — an undocumented sale protects the buyer, not you.",
            "'Offer valid only for the next 10 minutes' pressure.",
          ],
        },
        {
          h2: "Selling to Samridhi — What Happens at the Counter",
          paras: [
            "Walk in with your jewellery and one photo ID. We test purity on a German XRF Karatmeter — the reading appears on screen, live, and your jewellery is untouched. We weigh it in front of you, apply the day's live rate, and show the full calculation line by line. If you accept, payment is made instantly by cash, NEFT or RTGS with an invoice; if you don't, you take your jewellery and leave — the test costs nothing either way. Read the <a href=\"/process\">full process</a>, check <a href=\"/gold-rate-today\">how today's rate works</a>, or see <a href=\"/where-to-sell-gold\">how to sell gold — and where</a> for a comparison of all your options.",
          ],
        },
      ]}
      related={[
        ["/sell-gold-in-gaur-city", "Gold Buyer in Gaur City", "Our home neighbourhood — the store is inside Gaur City Centre itself."],
        ["/scrap-gold-buyer", "Scrap Gold Buyer", "Broken, loose or scrap gold? We buy it by tested purity and weight."],
        ["/safe-place-to-sell-gold", "Safe Place to Sell Gold", "In-mall location, privacy and documented payment — why sellers feel safe here."],
      ]}
      showAreas
    />
  );
}

/* 2 — cash-for-gold-gaur-city */
export function CashForGoldGaurCityPage() {
  return (
    <ServicePage
      crumbItems={[["Home", ""], ["Cash for Gold — Gaur City", null]]}
      crumbName="Cash for Gold — Gaur City"
      faqPrefix="cfgc"
      h1="Cash for Gold in Gaur City — Transparent Gold Evaluation at Gaur City Centre"
      intro="If you live in Gaur City, your gold buyer is in your own neighbourhood market. Samridhi Gold Buyers at Gaur City Centre offers cash for gold with one difference you can verify yourself: a fully transparent gold evaluation — XRF purity on screen, weight in front of you, live rate, and instant payment."
      bullets={[
        "Gold necklaces, bangles, chains, rings and earrings",
        "Old, broken or inherited gold jewellery",
        "Gold with or without hallmark or purchase bill",
        "Coins and bars — valued by weight, purity and live rate",
        "Pledged gold release — settle the loan, keep the difference",
      ]}
      detailH2="Transparent Gold Evaluation — What It Actually Means"
      paras={[
        "Many shops in and around Gaur City will offer you 'cash for gold'. What separates one offer from another is whether the <strong>evaluation</strong> happens where you can see it. At our Gaur City Centre counter, transparency is a physical process, not a slogan: your jewellery goes on the XRF Karatmeter and the <strong>exact purity appears on a screen in front of you</strong>; the certified scale shows the weight; and the rate applied is the day's live market rate, written into a calculation we walk you through line by line. Nothing happens in a back room, and your jewellery is never scratched, acid-tested or melted before you agree.",
        "Because the evaluation is transparent, it is also <strong>checkable</strong>. You are free to note your purity and net weight, compare our figure with any other buyer in Gaur City or Greater Noida West the same day, and come back — the test is free and there is no obligation. Sellers who compare are exactly the sellers we want, because a verified number is our strongest argument.",
        "When you accept, payment is instant — cash, NEFT or RTGS — with digital KYC and a proper invoice. The whole visit usually takes 10–15 minutes, and since we are inside Gaur City Centre at Gaur Chowk, most Gaur City 1 and Gaur City 2 residents reach us in under ten minutes. For the store's exact location, floor and parking details, see our <a href=\"/gold-shop-in-gaur-city-centre\">Gaur City Centre store page</a>.",
      ]}
      faqs={[
        ["Where can I get cash for gold in Gaur City?", `At our store — ${ADDRESS_LINE}. We are inside Gaur City Centre at Gaur Chowk, ground floor (Shop GF-04), open 7 days, ${HOURS_D}.`],
        ["How is my gold evaluated?", "By XRF Karatmeter testing (purity on screen), certified weighing in front of you, and the day's live market rate. Payout = pure-gold weight × live rate, and the calculation is shown to you before you decide."],
        F[2], F[4],
      ]}
    />
  );
}

/* 4 — gold-shop-in-gaur-city-centre (bespoke, with map) */
export function GoldShopGaurCityCentrePage() {
  const faqs = [
    ["Where exactly is the gold shop in Gaur City Centre?", `Shop No. GF-04 — ground floor of Gaur City Centre, Gaur Chowk (Char Murti Chowk), Sector 4, Greater Noida West. You can also find us on Google Maps as 'Samridhi Gold Buyers'.`],
    ["What are the shop timings?", `Open 7 days a week, including Sundays, ${HOURS_D}. Walk-ins are welcome; calling ahead on ${PHONE_D} helps if you are bringing many items.`],
    ["Is parking available at Gaur City Centre?", "Yes — parking is available in and around the Gaur City Centre complex at Gaur Chowk, and the chowk is a well-known auto/cab drop point."],
    F[9],
  ];
  return (
    <>
      <section className="sec">
        <div className="ctr">
          <Crumbs items={[["Home", ""], ["Gold Shop in Gaur City Centre", null]]} />
          <div className="eyebrow">Our Store</div>
          <h1 className="sec-title">Gold Shop in Gaur City Centre — Samridhi Gold Buyers</h1>
          <p className="sec-desc">Everything about our physical store: where it is inside the complex, how to reach it, when it's open, and exactly what happens at the counter when you bring your gold.</p>
          <div style={{ textAlign: "center", marginBottom: "8px" }}>
            <a className="btn-gold" href={`tel:${PHONE}`}>📞 Call {PHONE_D}</a>{" "}
            <a className="btn-outline" href={MAPS_URL} target="_blank" rel="noreferrer">📍 Get Directions</a>
          </div>
        </div>
      </section>
      <section className="sec sec-gold-bg">
        <div className="ctr">
          <div className="location-wrap">
            <div className="loc-info">
              <div className="loc-rows">
                <div className="loc-row"><strong>📍 Address</strong><span>{ADDRESS_LINE}</span></div>
                <div className="loc-row"><strong>🏢 Inside the Complex</strong><span>Ground floor (GF-04), Gaur City Centre — the retail complex at Gaur Chowk, next to Gaur City Mall</span></div>
                <div className="loc-row"><strong>🕐 Hours</strong><span>Open 7 days — {HOURS_D}</span></div>
                <div className="loc-row"><strong>📞 Phone / WhatsApp</strong><span><a href={`tel:${PHONE}`}>{PHONE_D}</a></span></div>
                <div className="loc-row"><strong>🚇 Landmark</strong><span>Gaur Chowk (Char Murti Chowk) — the main crossing of Greater Noida West</span></div>
                <div className="loc-row"><strong>🅿️ Parking</strong><span>Available in and around the complex</span></div>
              </div>
            </div>
            <div className="map-box">
              <iframe title="Samridhi Gold Buyers — gold shop in Gaur City Centre" src={MAP_EMBED} loading="lazy" style={{ border: 0, width: "100%", height: "100%", minHeight: "320px" }} allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="content-page" style={{ marginTop: "30px" }}>
            <h2>A Gold Shop Inside a Mall — Why That Matters</h2>
            <p>Selling gold means carrying something valuable through public space and discussing money at a counter. Where the shop sits changes how safe that feels. Our store is inside <strong>Gaur City Centre</strong> — a busy, well-lit commercial complex with security, footfall and parking — not an isolated street shop. You can combine your visit with everyday errands, family members can wait comfortably nearby, and the transaction itself happens at a proper counter with digital KYC and an invoice. Many of our women customers and senior citizens tell us this setting is a big reason they chose us; we have written more about it on our <a href="/safe-place-to-sell-gold">safe place to sell gold</a> page.</p>
            <h2>What Happens at the Counter</h2>
            <p>Bring your gold, silver, diamond jewellery or coins, plus one photo ID. Your items are <strong>XRF-tested in front of you</strong> — purity on screen, zero damage — then weighed on a certified scale and valued at the day's live market rate with the calculation explained. Accept, and payment is made instantly by cash, NEFT or RTGS with an invoice; decline, and you take your items back — testing is free either way. From walk-in to walk-out usually takes 10–15 minutes. If your gold is pledged against a loan, bring the loan receipt too — <a href="/release-pledged-gold">releasing pledged gold</a> is handled at the same counter.</p>
            <h2>Reaching the Shop</h2>
            <p>Gaur Chowk is the best-known crossing in Greater Noida West, so autos and cabs find the complex easily. Gaur City 1 and 2 residents are 2–10 minutes away; Noida Extension and Bisrakh about 5–12 minutes; Crossing Republik 12–20 minutes via Shahberi; Noida sectors 119–122 about 10–18 minutes. Use the Get Directions button above for live routing to our exact pin.</p>
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
          <h2 className="sec-title">Common Questions</h2>
          <FaqBlock faqs={faqs} prefix="shop" />
        </div>
      </section>
    </>
  );
}

/* 5 — sell-old-gold */
export function SellOldGoldPage() {
  return (
    <ServicePage
      crumbItems={[["Home", ""], ["Sell Old Gold", null]]}
      crumbName="Sell Old Gold"
      faqPrefix="oldgold"
      h1="Sell Old Gold Jewellery for Cash"
      intro="Old jewellery — inherited sets, your mother's bangles, pieces bought decades ago — is often worth far more than families expect, because it was bought at a fraction of today's rate. As an old gold jewellery buyer, we test its actual purity by XRF and pay you its full metal value at the live rate."
      bullets={[
        "Inherited and family gold — sets, bangles, chains, coins",
        "Old 22K jewellery in traditional designs",
        "Gold without bills — most old gold has none, and that's fine",
        "Single pieces and full family collections",
        "Old gold with stones — metal and stones valued separately",
      ]}
      detailH2="How Old Gold Is Valued — Honestly"
      paras={[
        "Old gold is valued exactly like new gold: <strong>weight × tested purity × today's live rate</strong>. Age, design and fashion add no premium and cause no penalty at a genuine buyer — you are selling metal content, and an old 22K piece contains the same gold as a new one. Where sellers lose money on old gold is <strong>purity assumptions</strong>: some buyers declare old jewellery 'probably 18K' without testing. Our XRF Karatmeter measures the real composition and shows it on screen — if your grandmother's bangles are 22K, you get paid for 22K.",
        "Two honest caveats. First, the value is the <strong>metal (melt) value</strong> — the making charges and retail markup you paid decades ago are not recoverable when selling any jewellery, old or new; anyone who implies otherwise is misleading you. Second, stones, enamel and non-gold parts are not paid as gold, though set diamonds are valued separately. What we promise is that every gram of actual gold in your old pieces is measured, shown to you, and paid at the live rate — no 'wastage' surprises.",
        "If you are selling old gold for cash in Noida or Greater Noida, bring whatever you have — bill or no bill (one photo ID is all that's required, plus PAN for ₹2 lakh and above). Testing is free, so even if you are only curious what the family set is worth today, you can find out in 10–15 minutes and decide later. Sellers from Noida often combine this with selling <a href=\"/sell-broken-gold\">broken pieces</a> in the same visit.",
      ]}
      faqs={[
        ["Can I sell old gold without a purchase bill?", "Yes. Most old and inherited gold has no bill. You only need one valid photo ID (Aadhaar, Voter ID, Driving Licence or Passport) — and PAN for transactions of ₹2 lakh and above. Value is decided by XRF-tested purity and weight, not paperwork."],
        ["Is old gold paid less than new gold?", "No. Gold is paid by weight and purity, not by age. An old 22K piece earns the same per-gram rate as a new 22K piece bought yesterday."],
        ["My old jewellery has stones. How is it valued?", "The gold is XRF-tested and weighed; set diamonds are evaluated separately and included. Coloured stones and enamel carry no gold value, and we show you how each part was treated."],
        F[4],
      ]}
    />
  );
}

/* 6 — sell-broken-gold */
export function SellBrokenGoldPage() {
  return (
    <ServicePage
      crumbItems={[["Home", ""], ["Sell Broken Gold", null]]}
      crumbName="Sell Broken Gold"
      faqPrefix="broken"
      h1="Sell Broken Gold Jewellery for Cash"
      intro="A snapped chain, a single earring, a bangle with a broken clasp — broken gold is still gold. As a broken jewellery buyer, we value damaged pieces by the only things that matter: tested purity and weight. Condition is irrelevant."
      bullets={[
        "Broken chains, necklaces and mangalsutras",
        "Single earrings and odd pieces — one of a pair is fine",
        "Bent or broken bangles, bracelets and kada",
        "Damaged rings and pendants, pieces with missing stones",
        "Tangled, knotted or partially damaged jewellery",
      ]}
      detailH2="Why Broken Gold Loses Nothing at Our Counter"
      paras={[
        "When you sell jewellery, you are selling <strong>metal content</strong> — gold that will be refined and reused. A chain does not contain less gold because its clasp snapped, and a single earring weighs exactly what it weighs. Yet many buyers use damage as a negotiating lever, quoting a lower 'scrap rate' for broken pieces. At Samridhi there is one rate logic for everything: the XRF Karatmeter shows the piece's actual purity on screen, the scale shows its weight, and the payout is pure-gold weight × the day's live rate — the same formula we use for a brand-new necklace.",
        "Broken pieces are actually where <strong>transparent testing matters most</strong>. Old repairs sometimes include lower-karat solder joints, and a damaged piece can hide mixed-metal sections — an honest XRF reading shows you the true average purity of what you brought, instead of a buyer's guess that conveniently rounds down. If a section tests lower, you'll see it on the screen yourself and can decide with full information.",
        "So gather the drawer of almost-jewellery — the broken, the bent, the one-of-a-pair — and bring it in together. Testing is free and takes minutes per piece; most customers are surprised how much the 'useless' pieces add up to. It pairs naturally with selling <a href=\"/sell-old-gold\">old gold</a> or <a href=\"/scrap-gold-buyer\">scrap gold</a> in the same visit.",
      ]}
      faqs={[
        ["Is broken gold paid at a lower rate?", "No. We pay by tested purity and weight — the same formula as intact jewellery. Damage does not reduce the gold content, so it does not reduce your payout."],
        ["I have only one earring of a pair. Can I sell it?", "Yes. Single earrings, odd studs and unmatched pieces are accepted and valued by their own weight and purity."],
        ["A stone has fallen out of my broken ring. Does that matter?", "No. The gold is valued by purity and weight; if the stone is still set, diamonds are evaluated separately. A missing stone simply means less non-gold material in the piece."],
        F[1], F[4],
      ]}
    />
  );
}

/* 7 — scrap-gold-buyer */
export function ScrapGoldBuyerPage() {
  return (
    <ServicePage
      crumbItems={[["Home", ""], ["Scrap Gold Buyer", null]]}
      crumbName="Scrap Gold Buyer"
      faqPrefix="scrap"
      h1="Scrap Gold Buyer — Fair Scrap Gold Evaluation, On Screen"
      intro="Scrap gold — broken bits, loose findings, old dental gold, workshop leftovers — has real value, but 'scrap' is where sellers get underpaid most, because nobody shows them a purity figure. Our scrap gold evaluation is an XRF test you watch happen, and our scrap gold buying uses the same live-rate formula as jewellery."
      bullets={[
        "Broken jewellery fragments and loose gold pieces",
        "Gold findings — clasps, hooks, links, earring backs",
        "Old dental gold (crowns and bridges with gold content)",
        "Jewellery-workshop leftovers and bench scrap",
        "Damaged coins, bent bars and unhallmarked bits",
      ]}
      detailH2="What Counts as Scrap Gold — and How We Evaluate It"
      paras={[
        "<strong>Scrap gold</strong> is any gold that is no longer wearable or saleable as a finished piece: fragments, findings, damaged items, dental gold, and the small leftovers from jewellery making and repair. Its value is purely its metal content — which is exactly why <strong>scrap gold evaluation</strong> must be measurement, not opinion. Mixed scrap is the hardest to judge by eye: a bag of bits can contain 22K, 18K and lower-karat soldered pieces side by side.",
        "Our process handles that honestly. Pieces are grouped, XRF-tested so you can see the purity readings on screen, and weighed in front of you. The payout follows the same formula as everything else we buy — pure-gold weight × the day's live market rate — with the readings and weights shown to you before you decide. If some items test as low-purity or plated, we tell you plainly and you can take them back; testing is free.",
        "If you searched for a 'scrap gold buyer near me' in Greater Noida West, Noida or Crossing Republik, our Gaur City Centre counter is a short drive away, and scrap is welcome in any quantity — a single broken earring back or a full workshop packet. For larger workshop quantities, calling ahead on " + PHONE_D + " helps us keep time aside for batch testing.",
      ]}
      faqs={[
        ["How is scrap gold priced?", "By tested purity and weight, at the day's live rate — the same formula as jewellery. There is no separate lower 'scrap rate' at our counter; the XRF reading decides."],
        ["Can I sell dental gold?", "Yes, if it has gold content. We XRF-test it in front of you; you're paid for the gold percentage it actually contains."],
        ["My scrap is a mix of different pieces. How is it tested?", "We group similar pieces, test representative items from each group on the XRF Karatmeter in front of you, and weigh each group. You see every reading and weight before accepting."],
        ["Is there a minimum quantity for scrap gold?", "No minimum. Small quantities are tested and valued the same way — free of charge and with no obligation to sell."],
      ]}
    />
  );
}
