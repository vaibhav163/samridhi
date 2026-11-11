import React from "react";
import { PHONE_D } from "../config.js";
import { GuidePage, ServicePage } from "../components/Layouts.jsx";
import { CORE_FAQS } from "../data/core.js";

const F = CORE_FAQS;

/* 8 — gold-purity-testing */
export function GoldPurityTestingPage() {
  const karatTable = (
    <div style={{ overflowX: "auto" }}>
      <table className="rate-table">
        <tbody>
          <tr><th>Karat</th><th>Purity</th><th>Hallmark</th><th>Typically</th></tr>
          <tr><td>24K</td><td>99.9%</td><td>999</td><td>Coins &amp; bars</td></tr>
          <tr><td>22K</td><td>91.6%</td><td>916</td><td>Most Indian jewellery</td></tr>
          <tr><td>18K</td><td>75.0%</td><td>750</td><td>Diamond jewellery</td></tr>
          <tr><td>14K</td><td>58.5%</td><td>585</td><td>Lightweight / imported pieces</td></tr>
        </tbody>
      </table>
    </div>
  );
  const compareTable = (
    <div style={{ overflowX: "auto" }}>
      <table className="rate-table">
        <tbody>
          <tr><th>Method</th><th>Damages Jewellery?</th><th>Accuracy</th><th>Result Shown to You?</th></tr>
          <tr><td>XRF Karatmeter (ours)</td><td>No — non-destructive</td><td>Exact composition reading</td><td>Yes — live on screen</td></tr>
          <tr><td>Acid test</td><td>Yes — surface reaction</td><td>Estimate only</td><td>Rarely verifiable</td></tr>
          <tr><td>Touchstone</td><td>Yes — scratches the piece</td><td>Estimate only</td><td>No</td></tr>
          <tr><td>Melting &amp; assay</td><td>Destroys the piece</td><td>Accurate but irreversible</td><td>After the fact</td></tr>
        </tbody>
      </table>
    </div>
  );
  return (
    <GuidePage
      crumbItems={[["Home", ""], ["Gold Purity Testing", null]]}
      eyebrow="Free Purity Testing"
      h1="Gold Purity Testing in Noida & Greater Noida West — Free XRF Test"
      intro="Before you sell gold — or even before you buy it — know exactly what you have. Our German XRF Karatmeter tests your gold's purity in seconds, in front of you, with zero damage. The test is free whether you sell to us or not, and customers travel from Noida and across Greater Noida West for it because the reading appears on a screen, not in someone's opinion."
      faqPrefix="purity"
      faqs={[
        ["Is gold purity testing really free?", "Yes. XRF testing and valuation at our store are completely free, with no obligation to sell. You can test a single piece or a full set."],
        ["Will the test damage my jewellery?", "No. XRF is a non-destructive X-ray fluorescence measurement — the piece is not scratched, cut, heated or acid-tested. It comes back exactly as you brought it."],
        ["Can you test gold without a hallmark?", "Yes — that is exactly what the machine is for. Hallmarked or not, the XRF reading shows the actual metal composition, including the percentages of gold and alloy metals."],
        ["I live in Noida. Is it worth travelling for a purity test?", "If you are about to sell, yes — knowing your exact purity before negotiating protects you at every buyer, including us. The test takes minutes; combine it with a free valuation and you leave with verified numbers either way."],
      ]}
      sections={[
        {
          h2: "Why Purity Testing Decides What You're Paid",
          paras: [
            "Every rupee of a gold valuation flows from one number: <strong>purity</strong>. Payout = weight × purity × live rate — so a buyer who reads your 22K chain as 'about 18K' has cut roughly a fifth of your money with a single assumption. That is why the testing method matters more than the shop's promises. A proper XRF (X-ray fluorescence) Karatmeter analyses the metal's composition directly and displays the percentages — gold, silver, copper and other alloys — on a screen you read yourself.",
            "Testing is equally useful when you are <em>not</em> selling: verifying an inherited piece, checking a gift, confirming a hallmark before a wedding purchase, or settling a family division fairly. Bring the piece in — the test is free in all these cases.",
          ],
        },
        {
          h2: "Karat and Purity — Quick Reference",
          paras: ["BIS hallmark numbers state purity in parts per thousand. Here is what the common karats actually mean:"],
          table: karatTable,
        },
        {
          h2: "XRF vs Acid vs Touchstone",
          table: compareTable,
          paras: [
            "The older methods survive because they are cheap and because their vagueness benefits the tester. Acid and touchstone tests damage the surface and produce a range, not a reading — and that range is always interpreted by the person paying you. Melting gives a true answer but destroys the piece, so it can only happen after you've committed. XRF is the only method that is simultaneously exact, instant and reversible: if you don't like the valuation, your jewellery is untouched and leaves with you.",
          ],
        },
        {
          h2: "How to Get Your Gold Tested",
          paras: [
            "Walk into our Gaur City Centre store any day between 10 AM and 8 PM with the pieces and — only if you decide to sell afterwards — one photo ID. Testing needs no documents and no appointment. Each piece takes under a minute on the machine, and our valuer will explain the reading: the karat, what the alloy percentages mean, and what the piece would be worth at today's live rate if you chose to sell. Read more about the full selling process <a href=\"/process\">here</a>, or get the complete <a href=\"/gold-valuation\">instant jewellery evaluation</a> — purity, weight, stones and value in one sitting.",
          ],
        },
      ]}
      related={[
        ["/gold-rate-today", "Gold Rate Today", "How purity, weight and the live rate combine into your payout."],
        ["/sell-gold", "Cash for Gold", "Tested and happy with the number? Sell in the same visit, paid instantly."],
        ["/gold-buyer-near-me", "Gold Buyer Near Me", "How to judge any nearby buyer — including the testing check."],
      ]}
      showAreas
    />
  );
}

/* 9 — gold-exchange */
export function GoldExchangePage() {
  return (
    <ServicePage
      crumbItems={[["Home", ""], ["Gold Exchange", null]]}
      crumbName="Gold Exchange Service"
      faqPrefix="exchange"
      h1="Gold Exchange Service — Turn Old Gold Into Full Value"
      intro="Exchanging gold means one thing at its core: your old gold is valued, and that value becomes money you can use. Our gold exchange service values your old pieces transparently by XRF-tested purity and the live rate — and pays the full value to you as cash or bank transfer, so you can spend it anywhere, on anything."
      bullets={[
        "Old jewellery exchanged for its full metal value",
        "Multiple old pieces combined into one total value",
        "Broken and out-of-fashion pieces — exchange value unaffected",
        "Pledged gold — release and exchange in one process",
        "Value paid by cash, NEFT or RTGS — usable anywhere",
      ]}
      detailH2="How Gold Exchange Works Here — Without the Retail Trap"
      paras={[
        "At jewellery showrooms, 'exchange' usually means your old gold's value is locked into buying new jewellery from the same shop — often with fresh making charges of 10–30% added on top, and an exchange valuation you never get to verify. The exchange rate looks generous until the bill arrives. Our service removes the lock-in: we are a gold buyer, not a jewellery retailer, so your old gold is <strong>valued openly and paid to you in money</strong>. Take that money to any jeweller, any brand, or nowhere at all — the value is yours, in full, with no purchase condition attached.",
        "The valuation itself is the same transparent process as every sale here: XRF purity on screen, certified weighing in front of you, the day's live rate, and the calculation explained line by line. Because several old pieces can be tested and totalled together, families often exchange a whole collection — old bangles, a broken chain, single earrings — in one visit, and receive one clear figure and one instant payment with a proper invoice.",
        "One honest clarification: exchange value is the <strong>metal value</strong> of your gold, as with any sale — original making charges and showroom markup are not recoverable, here or anywhere else. What you gain versus a showroom exchange is freedom: no forced purchase, no new making charges eating your value, and a number you watched being calculated. If part of your gold is pledged against a loan, we can <a href=\"/release-pledged-gold\">release it first</a> and then exchange the full piece.",
      ]}
      faqs={[
        ["Do I have to buy new jewellery to exchange my gold here?", "No. We are a gold buyer: your old gold's value is paid to you as cash or bank transfer. You can use it anywhere — including at any jeweller you choose for new jewellery — with no purchase condition from us."],
        ["How is exchange value calculated?", "Exactly like a sale: XRF-tested purity × weight × today's live rate, shown to you line by line, with digital KYC and an invoice."],
        ["Can I exchange broken or old-fashioned gold?", "Yes. Exchange value depends on metal content, not condition or design — broken and old pieces are valued by the same formula."],
        F[4], F[9],
      ]}
    />
  );
}

/* 10 — instant-cash-for-gold */
export function InstantCashForGoldPage() {
  return (
    <ServicePage
      crumbItems={[["Home", ""], ["Instant Cash for Gold", null]]}
      crumbName="Instant Cash for Gold"
      faqPrefix="instant"
      h1="Instant Cash for Gold — On-Spot Payment & Instant Bank Transfer"
      intro="When you sell gold, you shouldn't have to chase your own money. At Samridhi Gold Buyers the full cycle — free XRF test, valuation, acceptance, payment — completes in one visit of about 10–15 minutes. Choose on-spot cash payment or an instant bank transfer for your gold by NEFT or RTGS, with a proper invoice either way."
      bullets={[
        "Payment in the same visit — no 'come tomorrow'",
        "Cash payment at the counter for your gold",
        "Instant bank transfer for gold — NEFT / RTGS to your account",
        "Proper invoice and digital KYC for every transaction",
        "Free valuation first — payment only when you accept the offer",
      ]}
      detailH2="Instant Cash for Gold in Greater Noida West — How Payment Works"
      paras={[
        "<strong>Instant cash for gold</strong> is our standard, not a special service. The sequence never changes: your gold is XRF-tested in front of you, weighed, and valued at the day's live rate. The moment you accept the figure, payment is initiated in front of you — the whole promise of selling gold for immediate needs, whether that's a medical expense, a business payment or simply converting a locker asset into usable money the same day.",
        "You choose the mode. <strong>Cash</strong> is counted and handed over at the counter. For larger amounts, most customers prefer an <strong>instant bank transfer for gold</strong> — NEFT or RTGS directly to your bank account — because it is safer than carrying cash and creates an automatic record. The transfer is made while you are at the counter, and you leave with the transaction reference plus your invoice, which records the items sold, their purity and weight, and the amount paid. There are no part-payments and no post-dated promises.",
        "A safety note we give every customer: for significant amounts, bank transfer is the wiser choice, and if you do take cash, we are inside Gaur City Centre — a staffed, well-lit complex — rather than an isolated shop. Whatever you choose, testing and valuation are free first, and if the offer doesn't suit you, nothing is owed and your gold goes home with you. See also <a href=\"/safe-place-to-sell-gold\">why sellers consider our store a safe place to sell gold</a>.",
      ]}
      faqs={[
        ["How fast is 'instant' — really?", "Once you accept the valuation, payment is made in the same visit: cash at the counter, or an NEFT/RTGS transfer initiated in front of you. Testing to payment is typically 10–15 minutes in total."],
        ["Is bank transfer available for all amounts?", "Yes. NEFT and RTGS are available for any transaction, and recommended for larger ones. You receive the transfer reference and a proper invoice before you leave."],
        ["Do I get any document for the payment?", "Yes — every sale is completed with digital KYC and an invoice recording what was sold, its tested purity and weight, and the amount paid."],
        ["What if I accept the valuation but want payment later?", "That is fine — but note the gold rate changes daily, so a later sale is valued at that day's rate. Most customers complete everything in one visit."],
        F[0],
      ]}
    />
  );
}

/* 11 — gold-dealer-greater-noida-west */
export function GoldDealerPage() {
  return (
    <GuidePage
      crumbItems={[["Home", ""], ["Gold Dealer — Greater Noida West", null]]}
      eyebrow="Gold Dealer"
      h1="Gold Dealer in Greater Noida West — Documented, Transparent Gold Buying"
      intro="People searching for an authorized gold dealer or a cash for gold dealer are really asking one question: who buys gold properly — with identity checks, honest testing and a paper trail? Samridhi Gold Buyers is an established gold-buying store at Gaur City Centre where every purchase is documented: digital KYC, XRF-tested purity, a proper invoice, and payment through traceable channels. This page explains exactly how our buying is documented, so you can judge for yourself."
      faqPrefix="dealer"
      faqs={[
        ["What makes a gold dealer trustworthy?", "A fixed, identifiable store; KYC taken for every sale; purity tested by XRF in front of you; a proper invoice for every transaction; and payment by cash or traceable bank transfer. If any of these are missing, you are not dealing with a professional buyer."],
        ["Do you buy gold from the public directly?", "Yes — individuals sell gold, silver, diamonds and coins to us directly at our Gaur City Centre store, with one photo ID (and PAN for ₹2 lakh and above) and an invoice for every purchase."],
        ["Why do you take KYC for a gold sale?", "Because documented buying protects you. KYC and an invoice prove the transaction happened at a stated value — your record that the jewellery was sold legitimately, at the recorded price."],
        F[4], F[9],
      ]}
      sections={[
        {
          h2: "What 'Documented Buying' Means at Our Counter",
          paras: [
            "Plenty of shops will take your gold with no questions and no paperwork — and that should worry you, not comfort you. An undocumented sale leaves you with no proof of what you sold or what you were paid, and it is how stolen or disputed jewellery moves through the market. A professional <strong>cash for gold dealer</strong> runs the opposite process, and ours is fixed: <strong>(1)</strong> your identity is recorded through digital KYC (photo ID; PAN for transactions of ₹2 lakh and above, as regulations require); <strong>(2)</strong> your gold is tested on a German XRF Karatmeter with the reading shown to you; <strong>(3)</strong> the valuation — weight, purity, live rate — is calculated openly; and <strong>(4)</strong> you are paid by cash, NEFT or RTGS against a proper invoice that itemises the transaction.",
          ],
        },
        {
          h2: "An Established Store, Not a Pop-Up Buyer",
          paras: [
            "We buy from a fixed address — <strong>Shop GF-04, Gaur City Centre, Gaur Chowk, Sector 4, Greater Noida West</strong> — inside a staffed commercial complex, with published timings (7 days, 10 AM – 8 PM), a published phone number and this website carrying our full name and address. That permanence is itself a credential: a dealer who intends to be at the same counter next year cannot afford the tricks a temporary buyer can. Our valuers are trained on the XRF equipment and the 4Cs for diamonds, and the same documented process applies whether you sell one ring or a full family collection.",
          ],
        },
        {
          h2: "Dealer vs Local Jeweller vs Online Buyer",
          bullets: [
            "<strong>Dedicated gold dealer (us):</strong> buying is the whole business — XRF testing in front of you, live-rate valuation, instant documented payment, no purchase condition.",
            "<strong>Local jeweller:</strong> buying is a side activity to selling jewellery; valuations often route through acid testing and deductions, and exchange is pushed over cash.",
            "<strong>Online / mail-in buyers:</strong> you surrender possession before the final figure is fixed — the valuation happens out of your sight, and rejecting it means waiting for your gold to come back.",
          ],
        },
        {
          h2: "Sell to a Dealer Who Shows You Everything",
          paras: [
            "If you are comparing dealers in Greater Noida West, use our process as the benchmark and ask every other buyer to match it: XRF on screen, weight in front of you, live rate, invoice, instant payment. Then compare the final payable figure on the same day. Start with our <a href=\"/sell-gold\">cash for gold</a> page, see <a href=\"/gold-valuation\">how a full jewellery evaluation works</a>, or simply walk in — testing and valuation are free, and there is never an obligation to sell.",
          ],
        },
      ]}
      related={[
        ["/sell-gold", "Cash for Gold", "Sell gold jewellery with the full documented dealer process."],
        ["/instant-cash-for-gold", "Instant Cash for Gold", "On-spot cash or instant bank transfer, against an invoice."],
        ["/safe-place-to-sell-gold", "Safe Place to Sell Gold", "In-mall location, privacy and a paper trail for every sale."],
      ]}
      showAreas
    />
  );
}

/* 12 — gold-valuation */
export function GoldValuationPage() {
  return (
    <GuidePage
      crumbItems={[["Home", ""], ["Gold Valuation", null]]}
      eyebrow="Free Valuation"
      h1="Gold Valuation — Instant Jewellery Evaluation, Free"
      intro="A proper valuation tells you three numbers — purity, weight, value — and shows you how each was arrived at. Our instant jewellery evaluation covers gold, silver and diamonds in a single free sitting at our Gaur City Centre counter: XRF purity on screen, certified weighing, diamond grading explained, and a clear figure at the day's live rate. No obligation to sell, ever."
      faqPrefix="valuation"
      faqs={[
        ["What does the free evaluation include?", "XRF purity testing, certified weighing, valuation at the day's live rate for gold and silver, diamond grading assessment (4Cs) for diamond pieces, and a line-by-line explanation of the final figure. You also get the numbers verbally itemised — purity, weight and value per piece."],
        ["How long does a full jewellery evaluation take?", "About 10–15 minutes for a typical set of items. Large collections take a little longer; calling ahead helps us keep time aside."],
        ["Can I get a valuation without selling?", "Yes — that is the point of the service. Many customers value inherited jewellery for family division, insurance awareness or simply to know what they hold. There is no charge and no obligation."],
        ["Do you value diamonds as part of the same evaluation?", "Yes. Diamond pieces are assessed on cut, colour, clarity and carat by our trained valuers, and the gold setting is XRF-tested and valued separately — both figures are shown to you."],
      ]}
      sections={[
        {
          h2: "What a Transparent Gold Evaluation Includes",
          paras: [
            "A <strong>transparent gold evaluation</strong> is not a number called out across a counter — it is a sequence you watch. <strong>Step one: purity.</strong> Each piece goes on the German XRF Karatmeter and its composition appears on screen — the karat and the alloy percentages. <strong>Step two: weight.</strong> Pieces are weighed on a certified scale in front of you; set stones and non-gold parts are identified openly. <strong>Step three: value.</strong> Pure-metal weight is multiplied by the day's live market rate and the arithmetic is shown to you, line by line. If you hold the three inputs yourself, no buyer anywhere can quietly change the output.",
            "This matters most for mixed holdings — a bag containing a 22K bangle, an 18K diamond ring and an unmarked chain. Guessed purities blend into one vague total; a measured evaluation prices each piece on its own facts, which is almost always better for the seller.",
          ],
        },
        {
          h2: "Diamond Valuation, Done Alongside",
          paras: [
            "Diamond jewellery defeats most simple buyers, who either ignore the stones or price them by feel. Our evaluation treats a diamond piece as two assets: the <strong>stones</strong>, assessed by trained valuers on the 4Cs — cut, colour, clarity and carat — against current market demand, with any IGI/GIA certificate you have taken into account (welcome, not required); and the <strong>setting</strong>, whose gold is XRF-tested and weighed like any other gold. You see both figures separately, so you know exactly what the diamond contributed and what the metal did. For deeper detail, see our <a href=\"/sell-diamonds\">diamond buying page</a>.",
          ],
        },
        {
          h2: "When People Use This Evaluation",
          bullets: [
            "<strong>Before selling anywhere</strong> — walk in for verified purity and weight, then compare offers on equal facts.",
            "<strong>Inherited jewellery</strong> — establish fair values for family division without committing to a sale.",
            "<strong>Pledged gold decisions</strong> — know the gold's current value versus your loan outstanding before choosing to release.",
            "<strong>Curiosity and planning</strong> — gold bought years ago is often worth multiples of its purchase price; know your number.",
          ],
        },
        {
          h2: "Get Your Free Evaluation",
          paras: [
            "Walk in any day, 10 AM – 8 PM, to Shop GF-04, Gaur City Centre, Gaur Chowk — no appointment and no documents needed for the evaluation itself (ID is required only if you decide to sell). Prefer to talk first? Call us and describe what you have; we'll tell you roughly what to expect and keep time aside. You can also read <a href=\"/gold-purity-testing\">how the XRF purity test works</a> or check <a href=\"/gold-rate-today\">today's rate logic</a> before you come.",
          ],
        },
      ]}
      related={[
        ["/gold-purity-testing", "Gold Purity Testing", "The free XRF test at the heart of every evaluation."],
        ["/sell-diamonds", "Sell Diamonds", "Diamond valuation and buying, stone by stone."],
        ["/cash-for-gold-gaur-city", "Cash for Gold — Gaur City", "Transparent evaluation for Gaur City residents, in your own complex."],
      ]}
      showServices
    />
  );
}

/* 13 — safe-place-to-sell-gold */
export function SafePlacePage() {
  return (
    <GuidePage
      crumbItems={[["Home", ""], ["Safe Place to Sell Gold", null]]}
      eyebrow="Safety First"
      h1="Safe Place to Sell Gold Jewellery — In-Mall, Private, Documented"
      intro="Selling gold involves carrying valuables in public and discussing real money at a counter. The safest place to sell gold jewellery is one designed for exactly that: a staffed in-mall store, a private and unhurried counter process, payment you can trace, and paperwork that proves the transaction. That is how our Gaur City Centre store is set up — this page explains the safety features you should demand anywhere."
      faqPrefix="safe"
      faqs={[
        ["Is it safe to carry gold to your store?", "Our store is inside Gaur City Centre — a busy, staffed commercial complex with security and parking at Gaur Chowk. You are in a public, well-lit mall environment from entry to exit, not walking into an isolated street shop."],
        ["Will other customers hear my transaction details?", "Valuations are discussed at the counter in a normal, discreet manner, and your KYC and invoice details stay between you and our team. We never announce amounts or discuss one customer's sale with another."],
        ["Is it safer to take bank transfer instead of cash?", "For larger amounts, yes — we recommend NEFT/RTGS so the money reaches your account directly and you carry no cash at all. Cash is available if you prefer it, and the transfer is always initiated in front of you."],
        ["I'm a woman / senior citizen selling alone. Is that okay?", "Absolutely — many of our customers come alone, and the in-mall setting, published timings (7 days, 10 AM – 8 PM) and no-pressure process are designed for exactly that comfort. Take all the time you need; there is never an obligation to sell."],
      ]}
      sections={[
        {
          h2: "The Location: Inside Gaur City Centre",
          paras: [
            "Safety starts before the counter. Samridhi Gold Buyers operates from <strong>Shop GF-04 inside Gaur City Centre</strong> at Gaur Chowk — a functioning commercial complex with security staff, CCTV-covered common areas, steady footfall and parking. Contrast the typical alternative: a small street-facing buying shop where you are the only customer, the shutters are half-down, and everyone on the road can see you walk in with a jewellery pouch. The mall setting also makes the visit ordinary — you can arrive with family, combine it with shopping, and leave unnoticed. Our <a href=\"/gold-shop-in-gaur-city-centre\">store page</a> has the exact location, floor and directions.",
          ],
        },
        {
          h2: "Privacy at the Counter",
          paras: [
            "Your business stays your business. Items are tested and weighed on the counter in front of you — they never disappear into a back room, which protects both the jewellery and your peace of mind. Amounts are discussed discreetly, your documents are used only for the KYC the law requires, and your invoice is your private record of the sale. If at any point you want to pause, think, or consult family on the phone, the process waits — deciding later, or not at all, costs nothing because testing and valuation are free.",
          ],
        },
        {
          h2: "Payment Safety: Traceable Beats Risky",
          paras: [
            "A safe sale ends with money you can prove you received. We pay by <strong>cash, NEFT or RTGS</strong> — your choice — against a proper invoice recording the items, purity, weight and amount. For significant sums we actively recommend bank transfer: it lands directly in your account while you watch, creates an automatic record, and removes the risk of carrying cash home. Read how the payment step works on our <a href=\"/instant-cash-for-gold\">instant cash for gold</a> page.",
          ],
        },
        {
          h2: "A Short Safety Checklist for Selling Anywhere",
          bullets: [
            "Choose a fixed, identifiable store — ideally in a staffed complex — over a pop-up or home-based buyer.",
            "Never let your jewellery leave your sight for 'testing inside'.",
            "Insist on an invoice; refuse no-paperwork deals however friendly they seem.",
            "For large amounts, take bank transfer and wait the few minutes for it to be initiated in front of you.",
            "Carry one photo ID yourself — a genuine buyer will always ask for it; one who doesn't is a warning sign.",
          ],
        },
      ]}
      related={[
        ["/gold-shop-in-gaur-city-centre", "Our Gaur City Centre Store", "Floor, landmarks, parking and what happens at the counter."],
        ["/gold-dealer-greater-noida-west", "Gold Dealer — Documented Buying", "KYC, invoice and traceable payment on every purchase."],
        ["/process", "How It Works", "The 4-step process, start to finish in 10–15 minutes."],
      ]}
      showAreas
    />
  );
}

/* 14 — where-to-sell-gold */
export function WhereToSellGoldPage() {
  return (
    <GuidePage
      crumbItems={[["Home", ""], ["How & Where to Sell Gold", null]]}
      eyebrow="Complete Guide"
      h1="How to Sell Gold — and Where to Sell Gold for the Fairest Value"
      intro="You have more options for selling gold than you may realise — your old jeweller, a bank, an online buyer, a dedicated gold-buying store — and they do not pay the same. This guide explains how to sell gold step by step, compares where to sell gold honestly, and ends with a checklist you can use at any counter, including ours."
      faqPrefix="where"
      faqs={[
        ["What is the best place to sell gold?", "For most people, a dedicated gold buyer with XRF testing, live-rate valuation and instant documented payment gives the fairest, most verifiable result. Jewellers suit exchange-into-new-jewellery; banks suit loans, not outright fair-value purchase; online buyers require surrendering your gold before the final price. Compare final payable amounts on the same day before deciding."],
        ["How do I sell gold step by step?", "1) Gather the pieces and one photo ID (PAN if the value may exceed ₹2 lakh). 2) Get the purity XRF-tested free and note the karat and net weight. 3) Get the valuation at the day's live rate and check the calculation. 4) Compare one more buyer if you wish. 5) Accept, complete KYC, take instant payment and your invoice. The whole process at our store takes 10–15 minutes."],
        ["Can I sell gold without a bill or hallmark?", "Yes, at a genuine buyer. The bill is optional and the hallmark is only an indicator — the XRF test measures actual purity either way. ID, however, is mandatory."],
        ["Should I sell gold or take a gold loan instead?", "They solve different problems. A loan keeps ownership but adds interest and risk if gold prices or your income move against you; selling converts the asset to money permanently at today's rate. If the gold is already pledged and the loan has grown, see our pledged gold release page — releasing and selling often leaves you better off than losing the gold to the loan."],
      ]}
      sections={[
        {
          h2: "How to Sell Gold — The 5 Steps",
          paras: [
            "<strong>Step 1 — Prepare.</strong> Collect everything you might sell, including broken and single pieces, plus one photo ID. <strong>Step 2 — Know your purity.</strong> Get a free XRF test before negotiating anywhere; the karat and net weight are your facts. <strong>Step 3 — Get a live-rate valuation.</strong> Payout = pure-gold weight × today's rate; check the arithmetic yourself (our <a href=\"/gold-rate-today\">rate page</a> shows the formula and purity table). <strong>Step 4 — Compare the final figure.</strong> Same day, after all deductions — not headline rates. <strong>Step 5 — Sell with documentation.</strong> Complete KYC, accept instant payment (cash, NEFT or RTGS) and keep the invoice.",
          ],
        },
        {
          h2: "Where to Sell Gold — Your Options, Honestly Compared",
          bullets: [
            "<strong>Your local jeweller:</strong> convenient and familiar, but buying is a side business. Expect acid testing, wastage/melting deductions, and a push towards exchanging into new jewellery (with fresh making charges) rather than clean cash value. Fine for exchange if the numbers are shown — ask for them.",
            "<strong>Banks & NBFCs:</strong> excellent for gold <em>loans</em>, but they are not walk-in fair-value purchasers of your jewellery; their route is lending against it, with interest and auction risk if you default.",
            "<strong>Online / mail-in gold buyers:</strong> you courier or hand over your gold before the final price is fixed. The valuation happens out of sight; rejecting it means waiting for your gold's return. Convenient for some, but you surrender your strongest protection — watching the test.",
            "<strong>A dedicated gold-buying store (like ours):</strong> buying is the entire business, so the process is built around it — XRF testing in front of you, certified weighing, live-rate calculation shown line by line, instant documented payment, and the freedom to walk away free. This is the option we'd benchmark the others against.",
          ],
        },
        {
          h2: "The Seller's Checklist (Use It Anywhere)",
          bullets: [
            "Purity tested by XRF, on screen, in front of me — not estimated, not in a back room.",
            "Weight shown on a certified scale; stones and non-gold parts explained, not silently skipped.",
            "Rate = today's live market rate, and I can see the full calculation.",
            "All deductions named before I agree — ideally none beyond the formula.",
            "Payment instant, in my chosen mode, against a proper invoice with KYC done.",
            "Free to walk away at every step without charge or pressure.",
          ],
        },
        {
          h2: "Ready When You Are",
          paras: [
            "If you follow the checklist at our Gaur City Centre counter, you will find each item is simply how we work every day — which is why we publish it. Start with the <a href=\"/process\">4-step process</a>, check the <a href=\"/gold-purity-testing\">free purity testing</a> page, or walk in for a free valuation and judge the experience yourself. Selling gold is a significant family decision; it deserves verified numbers, not trust-me pricing — wherever you finally sell.",
          ],
        },
      ]}
      related={[
        ["/process", "How It Works", "Our 4-step selling process in detail."],
        ["/gold-buyer-near-me", "Gold Buyer Near Me", "Choosing a nearby buyer — distance, checks and red flags."],
        ["/release-pledged-gold", "Release Pledged Gold", "Gold stuck in a loan? Release it and keep the difference."],
      ]}
      showServices
    />
  );
}
