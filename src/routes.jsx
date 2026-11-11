import React from "react";
import { STREET, CITY, PIN, PHONE_D, HOURS_D } from "./config.js";
import { faqLd, breadcrumbLd, serviceLd } from "./lib/schema.js";
import { CORE_FAQS, HOME_FAQS, BLOGS } from "./data/core.js";
import HomePage from "./pages/Home.jsx";
import {
  AboutPage, WhatWeBuyPage, ProcessPage, GalleryPage, FaqPage, ContactPage,
} from "./pages/Simple.jsx";
import {
  SellGoldPage, SellSilverPage, SellDiamondsPage, SellCoinsPage,
  ReleasePledgedGoldPage, GoldRatePage,
} from "./pages/Services.jsx";
import {
  GaurCityPage, GreaterNoidaWestPage, NoidaExtensionPage, GreaterNoidaPage,
  NoidaPage, CrossingRepublikPage, GhaziabadPage,
} from "./pages/Areas.jsx";
import { BlogIndexPage, BlogPostPage, blogPostSchemas } from "./pages/Blogs.jsx";
import { PrivacyPage, TermsPage, SitemapPage, NotFoundPage } from "./pages/Legal.jsx";
import {
  GoldBuyerNearMePage, CashForGoldGaurCityPage, GoldShopGaurCityCentrePage,
  SellOldGoldPage, SellBrokenGoldPage, ScrapGoldBuyerPage,
} from "./pages/Keyword1.jsx";
import {
  GoldPurityTestingPage, GoldExchangePage, InstantCashForGoldPage,
  GoldDealerPage, GoldValuationPage, SafePlacePage, WhereToSellGoldPage,
} from "./pages/Keyword2.jsx";

const F = CORE_FAQS;
const bc = (items) => breadcrumbLd(items);
const svcBc = (name, slug) => bc([["Home", ""], ["What We Buy", "what-we-buy"], [name, slug]]);
const svcSchemas = (name, slug, faqs) => [svcBc(name, slug), faqLd(faqs), serviceLd(name)];
const areaSchemas = (area, slug, faqs) => [bc([["Home", ""], [`Sell Gold in ${area}`, slug]]), faqLd(faqs)];

// Each route: clean path, dist file (folder/index.html), head, element, popup?
const R = (path, title, desc, element, schemas, extra = {}) => ({
  path,
  file: path === "/" ? "index.html" : path.slice(1) + "/index.html",
  head: { title, desc, path, ogtype: extra.ogtype || "website", schemas },
  element,
  popup: !!extra.popup,
  priority: extra.priority || "0.7",
});

export const ROUTES = [
  R("/", "Gold Buyer in Greater Noida West | Sell Gold for Cash — Samridhi Gold Buyers, Gaur City",
    "Sell gold, silver, diamonds & coins in Greater Noida West at Samridhi Gold Buyers, Gaur City Centre. Free XRF testing, live-rate valuation & instant payment. Open 7 days — call +91 99532 11815.",
    <HomePage />, [faqLd(HOME_FAQS), bc([["Home", ""]])], { popup: true, priority: "1.0" }),

  R("/about", "About Us | Samridhi Gold Buyers — Trusted Gold Buyer in Greater Noida West",
    "Samridhi Gold Buyers at Gaur City Centre buys gold, silver, diamonds & coins with German XRF testing, digital KYC, proper invoices and instant payment. Know who you're selling to.",
    <AboutPage />, [bc([["Home", ""], ["About Us", "about"]])]),

  R("/what-we-buy", "What We Buy | Gold, Silver, Diamonds & Coins — Samridhi Gold Buyers",
    "We buy gold jewellery, silver articles, diamond jewellery and gold/silver coins in Greater Noida West — with or without hallmark or bill. Free XRF testing & instant payment.",
    <WhatWeBuyPage />, [bc([["Home", ""], ["What We Buy", "what-we-buy"]])]),

  R("/process", "How It Works | Sell Gold in 4 Steps — Samridhi Gold Buyers, Gaur City",
    "Walk in, free XRF purity test, clear valuation at the live rate, instant payment. Selling gold at Samridhi Gold Buyers, Greater Noida West, takes about 10–15 minutes.",
    <ProcessPage />,
    [bc([["Home", ""], ["How It Works", "process"]]),
     { "@type": "HowTo", name: "How to sell gold at Samridhi Gold Buyers",
       step: [
         ["Walk into our store", "Visit Shop GF-04, Gaur City Centre with your jewellery and a valid photo ID."],
         ["Free XRF testing", "Purity is tested live on a German XRF Karatmeter — non-destructive, result on screen."],
         ["Clear valuation", "Weight and live market rate are shown; the full calculation is explained to you."],
         ["Instant payment", "Accept and get paid immediately by cash, NEFT or RTGS with an invoice."],
       ].map(([n, t], i) => ({ "@type": "HowToStep", position: i + 1, name: n, text: t })) }]),

  R("/gallery", "Gallery | Samridhi Gold Buyers Store, Gaur City Centre, Greater Noida West",
    "See how selling gold works at Samridhi Gold Buyers — XRF purity testing, certified weighing and instant payment at Gaur City Centre, Gaur Chowk, Greater Noida West.",
    <GalleryPage />, [bc([["Home", ""], ["Gallery", "gallery"]])]),

  R("/faq", "FAQs | Selling Gold, Silver & Diamonds — Samridhi Gold Buyers",
    "ID required, PAN limit, XRF testing, payment modes, pledged gold, timings — every question about selling gold in Greater Noida West, answered by Samridhi Gold Buyers.",
    <FaqPage />, [bc([["Home", ""], ["FAQs", "faq"]]), faqLd(F)]),

  R("/contact", "Contact Us | Samridhi Gold Buyers — Gaur City Centre, Greater Noida West",
    `Visit Samridhi Gold Buyers at ${STREET}, ${CITY} ${PIN}. Call or WhatsApp ${PHONE_D}. Open 7 days, ${HOURS_D}. Get directions & free gold valuation.`,
    <ContactPage />, [bc([["Home", ""], ["Contact Us", "contact"]])]),

  // ----- v2 services -----
  R("/sell-gold", "Sell Gold in Greater Noida West | Cash for Gold — Samridhi Gold Buyers",
    "Sell gold jewellery for cash in Greater Noida West. Free XRF purity test, valuation at today's live rate, instant payment. With/without hallmark or bill. Call +91 99532 11815.",
    <SellGoldPage />, svcSchemas("Cash for Gold", "sell-gold", [F[2], F[3], F[1], F[4]]), { priority: "0.8" }),

  R("/sell-silver", "Silver Jewellery Buyer in Greater Noida | Sell Silver for Cash — Samridhi Gold Buyers",
    "Sell silver jewellery, utensils, articles & coins in Greater Noida West. Weighed in front of you, valued at the live silver rate, instant payment. Call +91 99532 11815.",
    <SellSilverPage />, svcSchemas("Cash for Silver", "sell-silver", [
      ["Do you buy silver utensils and pooja articles?", "Yes — glasses, plates, bowls, lamps, idols and complete pooja sets are all accepted and valued by weight and tested purity."],
      ["Does tarnished or blackened silver fetch less?", "No. Tarnish is only surface oxidation; the silver content is unchanged, and that is what you are paid for."],
      F[4], F[9]]), { priority: "0.8" }),

  R("/sell-diamonds", "Diamond Jewellery Buyer & Diamond Valuation in Greater Noida West — Samridhi Gold Buyers",
    "Sell diamond rings, solitaires & diamond jewellery in Greater Noida West. Trained-valuer diamond valuation of cut, colour, clarity & carat with instant payment. Call +91 99532 11815.",
    <SellDiamondsPage />, svcSchemas("Cash for Diamonds", "sell-diamonds", [
      ["Do I need a certificate to sell my diamond?", "No. A certificate helps, but our valuers can evaluate uncertified diamonds as well and will explain the grading to you."],
      ["Is the gold in my diamond ring paid for separately?", "Yes. The diamond and the gold setting are valued separately and both are included in your offer."],
      F[0], F[4]]), { priority: "0.8" }),

  R("/sell-coins", "Sell Gold Coins for Cash | Gold Coins & Bars Buyer in Greater Noida West — Samridhi Gold Buyers",
    "Sell gold coins for cash in Greater Noida West — bank, investment, temple & commemorative coins and gold/silver bars valued by weight, purity & live rate. Instant payment. Call +91 99532 11815.",
    <SellCoinsPage />, svcSchemas("Cash for Coins", "sell-coins", [
      ["Do you buy coins and bars without the original bill or packing?", "Yes. Sealed packing and bills help, but loose coins and bars are accepted after a free XRF purity test."],
      ["Are plated coins accepted?", "Plated coins have negligible precious-metal content, so they carry little or no metal value. We will test the coin free and tell you honestly what it is."],
      F[4], F[9]]), { priority: "0.8" }),

  R("/release-pledged-gold", "Release Pledged Gold in Greater Noida West | Gold Loan Settlement Help — Samridhi Gold Buyers",
    "Gold pledged in a bank, NBFC or with a financier? We help you release pledged gold in Greater Noida West, settle the loan and keep the difference. Call +91 99532 11815.",
    <ReleasePledgedGoldPage />, svcSchemas("Release Pledged Gold", "release-pledged-gold", [
      ["What documents do I need to release pledged gold?", "Your loan receipt / pawn ticket, one valid photo ID, and the lender's branch details. PAN is needed if the final transaction is ₹2 lakh or above."],
      ["What if the loan amount is more than my gold's value?", "Then releasing may not benefit you, and we will tell you that clearly. There is no obligation and no charge for the valuation or the advice."],
      ["How long does the release process take?", "It depends on the lender's release procedure — many gold loans can be settled and released the same day. Call us first and we'll plan it with you."],
      F[4]]), { priority: "0.8" }),

  R("/gold-rate-today", "Gold Rate Today in Greater Noida | Live Market Rate Gold Buyer — Samridhi Gold Buyers",
    "What is today's gold rate in Greater Noida & how is your selling price calculated? Purity table, formula & a worked example. Call +91 99532 11815 for today's live rate.",
    <GoldRatePage />, [bc([["Home", ""], ["Gold Rate Today", "gold-rate-today"]]), faqLd([F[3], F[4]])], { priority: "0.8" }),

  // ----- v2 area pages -----
  R("/sell-gold-in-gaur-city", "Gold Buyer in Gaur City | Sell Gold at Gaur City Centre — Samridhi Gold Buyers",
    "Sell gold in Gaur City at Samridhi Gold Buyers — inside Gaur City Centre, Gaur Chowk. Free XRF testing, live-rate valuation & instant payment. Call +91 99532 11815.",
    <GaurCityPage />, areaSchemas("Gaur City", "sell-gold-in-gaur-city", [
      ["Where exactly is the gold buyer in Gaur City?", `We are at ${STREET}, ${CITY} — inside the Gaur City Centre complex at Gaur Chowk, on the ground floor (Shop GF-04).`],
      ["Can I walk in without an appointment?", `Yes. Walk in any day between ${HOURS_D}. Testing and valuation are free and take about 10–15 minutes. Calling ahead on ${PHONE_D} helps if you are bringing many items.`],
      F[1], F[4]]), { priority: "0.8" }),

  R("/sell-gold-in-greater-noida-west", "Sell Gold in Greater Noida West | Best Gold Buyer — Samridhi Gold Buyers, Gaur Chowk",
    "Sell gold in Greater Noida West at Samridhi Gold Buyers, Gaur City Centre. XRF testing, live market rate, instant cash payment. Serving Sectors 1–16 & all societies. Call +91 99532 11815.",
    <GreaterNoidaWestPage />, areaSchemas("Greater Noida West", "sell-gold-in-greater-noida-west", [
      ["Which is the best place to sell gold in Greater Noida West?", "Choose a buyer who tests purity in front of you with XRF (not acid), shows you the weight and the live rate, and pays instantly with an invoice. That is exactly how we work at our Gaur City Centre store — and testing is free, so you can compare before deciding."],
      ["Do you buy gold without a bill in Greater Noida West?", F[2][1]],
      F[3], F[8]]), { priority: "0.8" }),

  R("/sell-gold-in-noida-extension", "Sell Gold in Noida Extension | Cash for Gold — Samridhi Gold Buyers",
    "Sell gold in Noida Extension at Samridhi Gold Buyers, Gaur City Centre, Gaur Chowk. Free XRF purity test, live-rate valuation, instant payment. Open 7 days. Call +91 99532 11815.",
    <NoidaExtensionPage />, areaSchemas("Noida Extension", "sell-gold-in-noida-extension", [
      ["Is Noida Extension the same as Greater Noida West?", "Yes — Noida Extension is the popular name for Greater Noida West. Our store at Gaur City Centre, Gaur Chowk serves both names' entire area."],
      F[2], F[5], F[4]])),

  R("/sell-gold-in-greater-noida", "Sell Gold in Greater Noida | Trusted Gold Buyer — Samridhi Gold Buyers",
    "Sell gold in Greater Noida at Samridhi Gold Buyers. XRF purity testing, live-rate valuation & instant payment. Customers visit us from Pari Chowk, Alpha, Beta & Knowledge Park. Call +91 99532 11815.",
    <GreaterNoidaPage />, areaSchemas("Greater Noida", "sell-gold-in-greater-noida", [
      ["Is it worth travelling from Pari Chowk to sell gold?", "For larger quantities, yes — the difference between an opaque estimate and an XRF-tested live-rate valuation can be significant. Call us for today's rate first, get a free valuation, and decide with the numbers in front of you."],
      F[1], F[3], F[9]])),

  R("/sell-gold-in-noida", "Gold Buyer in Noida | Sell Old Gold for Cash in Noida — Samridhi Gold Buyers",
    "Sell gold near Noida at Samridhi Gold Buyers, Gaur City Centre — 10–15 mins from Sectors 119, 120, 121 & 122. XRF testing, live rate, instant payment. Call +91 99532 11815.",
    <NoidaPage />, areaSchemas("Noida", "sell-gold-in-noida", [
      ["How far is your store from Noida Sector 120?", "About 10–15 minutes by road via Gaur Chowk. We are at Shop GF-04, Gaur City Centre, Greater Noida West."],
      F[2], F[4], F[5]]), { priority: "0.8" }),

  R("/sell-gold-in-crossing-republik", "Sell Gold in Crossing Republik | Gold Buyer via Shahberi — Samridhi Gold Buyers",
    "Sell gold in Crossing Republik at Samridhi Gold Buyers — a short drive via Shahberi to Gaur City Centre. XRF testing, live-rate valuation, instant payment. Call +91 99532 11815.",
    <CrossingRepublikPage />, areaSchemas("Crossing Republik", "sell-gold-in-crossing-republik", [
      ["What is the fastest way from Crossing Republik to your store?", `The Shahberi–Gaur Chowk route is the shortest. In peak hours, allow a little extra time for the Shahberi stretch — or call us first on ${PHONE_D} and we'll be ready when you arrive.`],
      F[1], F[7], F[4]])),

  // ----- NEW keyword pages -----
  R("/gold-buyer-near-me", "Best Gold Buyer Near Me | Instant Cash for Gold Near Me — Samridhi Gold Buyers",
    "Looking for the best gold buyer near you in Greater Noida West, Noida or Crossing Republik? How to choose a nearby buyer — XRF testing, live rate, instant cash & red flags.",
    <GoldBuyerNearMePage />,
    [bc([["Home", ""], ["Gold Buyer Near Me", "gold-buyer-near-me"]]),
     faqLd([
       ["Which is the best gold buyer near me?", "The best nearby buyer is the one who (1) tests purity by XRF in front of you, (2) weighs in front of you, (3) values at the day's live market rate with the calculation shown, (4) pays instantly with an invoice, and (5) lets you walk away free if you don't like the offer. Distance matters less than these five — a 10-minute extra drive can be worth thousands of rupees on larger quantities."],
       ["How do I find a scrap gold buyer near me?", "Look for a dedicated gold-buying store (not a jeweller who buys as a side line) that accepts broken and scrap gold and tests it by XRF. We accept scrap gold, broken jewellery and loose pieces at our Gaur City Centre store — see our scrap gold page for what counts as scrap."],
       ["Should I sell to the closest buyer or compare?", "Compare — testing is free at genuine buyers. Get your purity tested once, note the exact karat and net weight, then compare final payable amounts (after all deductions) from two or three buyers on the same day, since rates move daily."],
       F[9]])], { priority: "0.8" }),

  R("/cash-for-gold-gaur-city", "Cash for Gold Gaur City | Transparent Gold Evaluation — Samridhi Gold Buyers",
    "Get cash for gold in Gaur City at Samridhi Gold Buyers, Gaur City Centre. Transparent gold evaluation — XRF purity on screen, live rate, instant payment.",
    <CashForGoldGaurCityPage />, svcSchemas("Cash for Gold — Gaur City", "cash-for-gold-gaur-city", [
      ["Where can I get cash for gold in Gaur City?", `At our store — ${STREET}, ${CITY}, ${PIN}. We are inside Gaur City Centre at Gaur Chowk, ground floor (Shop GF-04), open 7 days, ${HOURS_D}.`],
      ["How is my gold evaluated?", "By XRF Karatmeter testing (purity on screen), certified weighing in front of you, and the day's live market rate. Payout = pure-gold weight × live rate, and the calculation is shown to you before you decide."],
      F[2], F[4]]), { priority: "0.8" }),

  R("/sell-gold-in-ghaziabad", "Gold Buyer in Ghaziabad | Sell Gold — Samridhi Gold Buyers (Gaur City Centre)",
    "Sell gold in Ghaziabad — customers from Indirapuram, Vaishali, Vasundhara & Raj Nagar visit our Gaur City Centre store for XRF-tested valuation & instant payment. Call +91 99532 11815.",
    <GhaziabadPage />, areaSchemas("Ghaziabad", "sell-gold-in-ghaziabad", [
      ["Do you have a store in Ghaziabad?", "No — our only store is at Gaur City Centre, Greater Noida West. Ghaziabad customers visit us there because the XRF-tested, on-screen valuation and instant documented payment are worth the short drive. We never claim a Ghaziabad branch we don't have."],
      ["How long does it take to reach from Indirapuram?", "Usually 25–40 minutes via NH-9 and the Hindon bridge to Gaur Chowk, depending on traffic. The valuation itself takes about 10–15 minutes at the counter."],
      ["Can I get an estimate on call before travelling from Ghaziabad?", `Yes. Call us on ${PHONE_D} with your item's approximate weight and karat (from a hallmark or bill, if you have one) and we'll give you an indicative value at the day's live rate. The final figure is confirmed after the free XRF test in store.`],
      F[2], F[4]]), { priority: "0.8" }),

  R("/gold-shop-in-gaur-city-centre", "Gold Shop in Gaur City Centre | Samridhi Gold Buyers — Location, Timings & Directions",
    "Visit our gold shop in Gaur City Centre (Shop GF-04, Gaur Chowk, Greater Noida West). Timings, parking, directions & what happens at the counter.",
    <GoldShopGaurCityCentrePage />,
    [bc([["Home", ""], ["Gold Shop in Gaur City Centre", "gold-shop-in-gaur-city-centre"]]),
     faqLd([
       ["Where exactly is the gold shop in Gaur City Centre?", "Shop No. GF-04 — ground floor of Gaur City Centre, Gaur Chowk (Char Murti Chowk), Sector 4, Greater Noida West. You can also find us on Google Maps as 'Samridhi Gold Buyers'."],
       ["What are the shop timings?", `Open 7 days a week, including Sundays, ${HOURS_D}. Walk-ins are welcome; calling ahead on ${PHONE_D} helps if you are bringing many items.`],
       ["Is parking available at Gaur City Centre?", "Yes — parking is available in and around the Gaur City Centre complex at Gaur Chowk, and the chowk is a well-known auto/cab drop point."],
       F[9]])], { priority: "0.8" }),

  R("/sell-old-gold", "Old Gold Jewellery Buyer | Sell Old Gold for Cash — Samridhi Gold Buyers",
    "Sell old gold jewellery for cash in Greater Noida West & Noida. Old gold jewellery buyer — XRF-tested purity, live rate, with or without bill. Instant payment.",
    <SellOldGoldPage />, svcSchemas("Sell Old Gold", "sell-old-gold", [
      ["Can I sell old gold without a purchase bill?", "Yes. Most old and inherited gold has no bill. You only need one valid photo ID (Aadhaar, Voter ID, Driving Licence or Passport) — and PAN for transactions of ₹2 lakh and above. Value is decided by XRF-tested purity and weight, not paperwork."],
      ["Is old gold paid less than new gold?", "No. Gold is paid by weight and purity, not by age. An old 22K piece earns the same per-gram rate as a new 22K piece bought yesterday."],
      ["My old jewellery has stones. How is it valued?", "The gold is XRF-tested and weighed; set diamonds are evaluated separately and included. Coloured stones and enamel carry no gold value, and we show you how each part was treated."],
      F[4]]), { priority: "0.8" }),

  R("/sell-broken-gold", "Sell Broken Gold Jewellery | Broken Jewellery Buyer — Samridhi Gold Buyers",
    "Sell broken gold jewellery for cash — broken chains, single earrings, damaged pieces valued by purity & weight, not condition. Free XRF test, instant payment.",
    <SellBrokenGoldPage />, svcSchemas("Sell Broken Gold", "sell-broken-gold", [
      ["Is broken gold paid at a lower rate?", "No. We pay by tested purity and weight — the same formula as intact jewellery. Damage does not reduce the gold content, so it does not reduce your payout."],
      ["I have only one earring of a pair. Can I sell it?", "Yes. Single earrings, odd studs and unmatched pieces are accepted and valued by their own weight and purity."],
      ["A stone has fallen out of my broken ring. Does that matter?", "No. The gold is valued by purity and weight; if the stone is still set, diamonds are evaluated separately. A missing stone simply means less non-gold material in the piece."],
      F[1], F[4]]), { priority: "0.8" }),

  R("/scrap-gold-buyer", "Scrap Gold Buyer Near Me | Scrap Gold Buying & Evaluation — Samridhi Gold Buyers",
    "Scrap gold buyer in Greater Noida West — scrap gold buying with on-screen XRF evaluation. Broken bits, findings, dental gold & workshop scrap at the live rate.",
    <ScrapGoldBuyerPage />, svcSchemas("Scrap Gold Buyer", "scrap-gold-buyer", [
      ["How is scrap gold priced?", "By tested purity and weight, at the day's live rate — the same formula as jewellery. There is no separate lower 'scrap rate' at our counter; the XRF reading decides."],
      ["Can I sell dental gold?", "Yes, if it has gold content. We XRF-test it in front of you; you're paid for the gold percentage it actually contains."],
      ["My scrap is a mix of different pieces. How is it tested?", "We group similar pieces, test representative items from each group on the XRF Karatmeter in front of you, and weigh each group. You see every reading and weight before accepting."],
      ["Is there a minimum quantity for scrap gold?", "No minimum. Small quantities are tested and valued the same way — free of charge and with no obligation to sell."]]), { priority: "0.8" }),

  R("/gold-purity-testing", "Gold Purity Testing in Noida & Greater Noida West | Free XRF Test — Samridhi Gold Buyers",
    "Free gold purity testing in Noida & Greater Noida West — German XRF Karatmeter, exact karat on screen, zero damage. No obligation to sell.",
    <GoldPurityTestingPage />,
    [bc([["Home", ""], ["Gold Purity Testing", "gold-purity-testing"]]),
     faqLd([
       ["Is gold purity testing really free?", "Yes. XRF testing and valuation at our store are completely free, with no obligation to sell. You can test a single piece or a full set."],
       ["Will the test damage my jewellery?", "No. XRF is a non-destructive X-ray fluorescence measurement — the piece is not scratched, cut, heated or acid-tested. It comes back exactly as you brought it."],
       ["Can you test gold without a hallmark?", "Yes — that is exactly what the machine is for. Hallmarked or not, the XRF reading shows the actual metal composition, including the percentages of gold and alloy metals."],
       ["I live in Noida. Is it worth travelling for a purity test?", "If you are about to sell, yes — knowing your exact purity before negotiating protects you at every buyer, including us. The test takes minutes; combine it with a free valuation and you leave with verified numbers either way."]]),
     serviceLd("Gold Purity Testing", "Noida & Greater Noida West")], { priority: "0.8" }),

  R("/gold-exchange", "Gold Exchange Service | Exchange Old Gold for Full Value — Samridhi Gold Buyers",
    "Gold exchange service in Greater Noida West — your old gold valued transparently and paid in full as cash or bank transfer. No forced purchase, no lock-in.",
    <GoldExchangePage />, svcSchemas("Gold Exchange Service", "gold-exchange", [
      ["Do I have to buy new jewellery to exchange my gold here?", "No. We are a gold buyer: your old gold's value is paid to you as cash or bank transfer. You can use it anywhere — including at any jeweller you choose for new jewellery — with no purchase condition from us."],
      ["How is exchange value calculated?", "Exactly like a sale: XRF-tested purity × weight × today's live rate, shown to you line by line, with digital KYC and an invoice."],
      ["Can I exchange broken or old-fashioned gold?", "Yes. Exchange value depends on metal content, not condition or design — broken and old pieces are valued by the same formula."],
      F[4], F[9]]), { priority: "0.8" }),

  R("/instant-cash-for-gold", "Instant Cash for Gold | Instant Bank Transfer & On-Spot Cash Payment — Samridhi Gold Buyers",
    "Instant cash for gold in Greater Noida West — on-spot cash payment or instant bank transfer (NEFT/RTGS) in the same 10–15 minute visit, with invoice.",
    <InstantCashForGoldPage />, svcSchemas("Instant Cash for Gold", "instant-cash-for-gold", [
      ["How fast is 'instant' — really?", "Once you accept the valuation, payment is made in the same visit: cash at the counter, or an NEFT/RTGS transfer initiated in front of you. Testing to payment is typically 10–15 minutes in total."],
      ["Is bank transfer available for all amounts?", "Yes. NEFT and RTGS are available for any transaction, and recommended for larger ones. You receive the transfer reference and a proper invoice before you leave."],
      ["Do I get any document for the payment?", "Yes — every sale is completed with digital KYC and an invoice recording what was sold, its tested purity and weight, and the amount paid."],
      ["What if I accept the valuation but want payment later?", "That is fine — but note the gold rate changes daily, so a later sale is valued at that day's rate. Most customers complete everything in one visit."],
      F[0]]), { priority: "0.8" }),

  R("/gold-dealer-greater-noida-west", "Gold Dealer in Greater Noida West | Cash for Gold Dealer — Samridhi Gold Buyers",
    "Looking for a cash for gold dealer in Greater Noida West? Documented gold buying — digital KYC, XRF testing, proper invoice & instant payment at Gaur City Centre.",
    <GoldDealerPage />,
    [bc([["Home", ""], ["Gold Dealer — Greater Noida West", "gold-dealer-greater-noida-west"]]),
     faqLd([
       ["What makes a gold dealer trustworthy?", "A fixed, identifiable store; KYC taken for every sale; purity tested by XRF in front of you; a proper invoice for every transaction; and payment by cash or traceable bank transfer. If any of these are missing, you are not dealing with a professional buyer."],
       ["Do you buy gold from the public directly?", "Yes — individuals sell gold, silver, diamonds and coins to us directly at our Gaur City Centre store, with one photo ID (and PAN for ₹2 lakh and above) and an invoice for every purchase."],
       ["Why do you take KYC for a gold sale?", "Because documented buying protects you. KYC and an invoice prove the transaction happened at a stated value — your record that the jewellery was sold legitimately, at the recorded price."],
       F[4], F[9]]),
     serviceLd("Gold Dealer", "Greater Noida West")], { priority: "0.8" }),

  R("/gold-valuation", "Gold Valuation | Instant Jewellery & Diamond Valuation — Samridhi Gold Buyers",
    "Free instant jewellery evaluation in Greater Noida West — gold, silver & diamond valuation with XRF purity, certified weighing & live-rate figures shown to you.",
    <GoldValuationPage />,
    [bc([["Home", ""], ["Gold Valuation", "gold-valuation"]]),
     faqLd([
       ["What does the free evaluation include?", "XRF purity testing, certified weighing, valuation at the day's live rate for gold and silver, diamond grading assessment (4Cs) for diamond pieces, and a line-by-line explanation of the final figure. You also get the numbers verbally itemised — purity, weight and value per piece."],
       ["How long does a full jewellery evaluation take?", "About 10–15 minutes for a typical set of items. Large collections take a little longer; calling ahead helps us keep time aside."],
       ["Can I get a valuation without selling?", "Yes — that is the point of the service. Many customers value inherited jewellery for family division, insurance awareness or simply to know what they hold. There is no charge and no obligation."],
       ["Do you value diamonds as part of the same evaluation?", "Yes. Diamond pieces are assessed on cut, colour, clarity and carat by our trained valuers, and the gold setting is XRF-tested and valued separately — both figures are shown to you."]]),
     serviceLd("Gold Valuation")], { priority: "0.8" }),

  R("/safe-place-to-sell-gold", "Safe Place to Sell Gold Jewellery | Samridhi Gold Buyers, Gaur City Centre",
    "A safe place to sell gold jewellery — in-mall store at Gaur City Centre, private counter, traceable payment & invoice. Open 7 days.",
    <SafePlacePage />,
    [bc([["Home", ""], ["Safe Place to Sell Gold", "safe-place-to-sell-gold"]]),
     faqLd([
       ["Is it safe to carry gold to your store?", "Our store is inside Gaur City Centre — a busy, staffed commercial complex with security and parking at Gaur Chowk. You are in a public, well-lit mall environment from entry to exit, not walking into an isolated street shop."],
       ["Will other customers hear my transaction details?", "Valuations are discussed at the counter in a normal, discreet manner, and your KYC and invoice details stay between you and our team. We never announce amounts or discuss one customer's sale with another."],
       ["Is it safer to take bank transfer instead of cash?", "For larger amounts, yes — we recommend NEFT/RTGS so the money reaches your account directly and you carry no cash at all. Cash is available if you prefer it, and the transfer is always initiated in front of you."],
       ["I'm a woman / senior citizen selling alone. Is that okay?", "Absolutely — many of our customers come alone, and the in-mall setting, published timings (7 days, 10 AM – 8 PM) and no-pressure process are designed for exactly that comfort. Take all the time you need; there is never an obligation to sell."]])], { priority: "0.8" }),

  R("/where-to-sell-gold", "How to Sell Gold & Where to Sell Gold | Complete Guide — Samridhi Gold Buyers",
    "How to sell gold step by step, and where to sell gold for a fair value — jeweller vs bank vs online vs dedicated buyer, compared honestly, with a seller's checklist.",
    <WhereToSellGoldPage />,
    [bc([["Home", ""], ["How & Where to Sell Gold", "where-to-sell-gold"]]),
     faqLd([
       ["What is the best place to sell gold?", "For most people, a dedicated gold buyer with XRF testing, live-rate valuation and instant documented payment gives the fairest, most verifiable result. Jewellers suit exchange-into-new-jewellery; banks suit loans, not outright fair-value purchase; online buyers require surrendering your gold before the final price. Compare final payable amounts on the same day before deciding."],
       ["How do I sell gold step by step?", "1) Gather the pieces and one photo ID (PAN if the value may exceed ₹2 lakh). 2) Get the purity XRF-tested free and note the karat and net weight. 3) Get the valuation at the day's live rate and check the calculation. 4) Compare one more buyer if you wish. 5) Accept, complete KYC, take instant payment and your invoice. The whole process at our store takes 10–15 minutes."],
       ["Can I sell gold without a bill or hallmark?", "Yes, at a genuine buyer. The bill is optional and the hallmark is only an indicator — the XRF test measures actual purity either way. ID, however, is mandatory."],
       ["Should I sell gold or take a gold loan instead?", "They solve different problems. A loan keeps ownership but adds interest and risk if gold prices or your income move against you; selling converts the asset to money permanently at today's rate. If the gold is already pledged and the loan has grown, see our pledged gold release page — releasing and selling often leaves you better off than losing the gold to the loan."]])], { priority: "0.8" }),

  // ----- blog -----
  R("/blog", "Blog | Gold Selling Tips & Guides — Samridhi Gold Buyers",
    "Guides on selling gold, silver & diamonds in Greater Noida: today's rates, purity calculation, documents needed and questions to ask any buyer.",
    <BlogIndexPage />, [bc([["Home", ""], ["Blog", "blog"]])]),

  ...BLOGS.map((b) =>
    R("/" + b.slug, b.title, b.desc, <BlogPostPage blog={b} />, blogPostSchemas(b), { ogtype: "article" })
  ),

  // ----- legal -----
  R("/privacy-policy", "Privacy Policy | Samridhi Gold Buyers",
    "How Samridhi Gold Buyers collects, uses and protects your personal information when you sell gold or enquire on samridhigoldbuyers.com.",
    <PrivacyPage />, [bc([["Home", ""], ["Privacy Policy", "privacy-policy"]])]),

  R("/terms-and-conditions", "Terms & Conditions | Samridhi Gold Buyers",
    "Terms governing gold, silver, diamond and coin buying services of Samridhi Gold Buyers, Gaur City Centre, Greater Noida West.",
    <TermsPage />, [bc([["Home", ""], ["Terms & Conditions", "terms-and-conditions"]])]),

  R("/sitemap", "Sitemap | Samridhi Gold Buyers",
    "Every page on samridhigoldbuyers.com — services, areas served, guides and legal pages of Samridhi Gold Buyers, Greater Noida West.",
    <SitemapPage />, [bc([["Home", ""], ["Sitemap", "sitemap"]])], { priority: "0.3" }),
];

export const NOT_FOUND_ROUTE = {
  path: "/404",
  file: "404.html",
  head: {
    title: "Page Not Found | Samridhi Gold Buyers",
    desc: "This page could not be found. Visit Samridhi Gold Buyers, Gaur City Centre — sell gold, silver & diamonds with free XRF testing.",
    path: "/404",
    ogtype: "website",
    schemas: [bc([["Home", ""]])],
  },
  element: <NotFoundPage />,
  popup: false,
};

const byPath = new Map(ROUTES.map((r) => [r.path, r]));

export function normalizePath(raw) {
  let p = raw || "/";
  if (p === "/index.html" || p === "/index") p = "/";
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p;
}

export function getRoute(rawPath) {
  const p = normalizePath(rawPath);
  return byPath.get(p) || NOT_FOUND_ROUTE;
}

export function allRoutes() {
  return [...ROUTES, NOT_FOUND_ROUTE];
}
