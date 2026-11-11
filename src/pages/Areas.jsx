import React from "react";
import { PHONE_D, HOURS_D, STREET } from "../config.js";
import { AreaPage } from "../components/Layouts.jsx";
import { CORE_FAQS } from "../data/core.js";

const F = CORE_FAQS;

export function GaurCityPage() {
  return (
    <AreaPage
      area="Gaur City" faqPrefix="gaurcity"
      intro="Our store is inside Gaur City Centre itself — so if you live in Gaur City 1 or Gaur City 2, a trusted gold buyer is quite literally in your neighbourhood market. Walk in with your gold, silver or diamond jewellery, get a free XRF purity test, and walk out with instant payment."
      neighbourhoods={["Gaur City 1", "Gaur City 2", "4th Avenue", "6th Avenue", "11th Avenue", "16th Avenue", "Gaur Saundaryam", "Gaur Sportswood", "Galaxy North Avenue", "Galaxy Vega", "Aarcity Regency Park", "White Orchid Gardens"]}
      reach="We are at <strong>Shop No. GF-04, Gaur City Centre, Gaur Chowk (Char Murti Chowk), Sector 4, Greater Noida West</strong> — ground floor, easy to find, with parking available in and around the complex. Most Gaur City societies are a 2–10 minute drive or a short walk away."
      extraPara="Because the store is inside a busy commercial centre, you sell in a safe, public, well-lit place — not an isolated shop. Many of our customers combine a valuation visit with their regular Gaur City Centre or Gaur City Mall errands."
      faqs={[
        ["Where exactly is the gold buyer in Gaur City?", `We are at ${STREET}, Greater Noida — inside the Gaur City Centre complex at Gaur Chowk, on the ground floor (Shop GF-04).`],
        ["Can I walk in without an appointment?", `Yes. Walk in any day between ${HOURS_D}. Testing and valuation are free and take about 10–15 minutes. Calling ahead on ${PHONE_D} helps if you are bringing many items.`],
        F[1], F[4],
      ]}
    />
  );
}

export function GreaterNoidaWestPage() {
  return (
    <AreaPage
      area="Greater Noida West" faqPrefix="gnw"
      intro="Greater Noida West (Noida Extension) has lakhs of families — and until recently, very few transparent options for selling gold. Samridhi Gold Buyers at Gaur Chowk serves the whole of Greater Noida West with XRF-tested, live-rate valuations and instant payment."
      neighbourhoods={["Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 10", "Sector 12", "Sector 16", "Sector 16B", "Supertech Eco Village 1, 2 & 3", "Ajnara Homes", "Nirala Estate", "Panchsheel Greens 1 & 2", "Cherry County", "Exotica Dreamville", "Arihant Arden", "Stellar Jeevan", "Amrapali Leisure Park", "SKA Greenarch", "Spring Meadows", "Techzone 4"]}
      reach="Our store at <strong>Gaur City Centre, Gaur Chowk</strong> sits at the centre of Greater Noida West — most sectors and societies are within a 5–15 minute drive via the Greater Noida West Road / Vikas Marg corridor. Gaur Chowk is also the area's best-known landmark, so autos and cabs find us easily."
      extraPara="Gold loans, inherited jewellery and old 22K pieces are the most common reasons Greater Noida West customers visit us. Whatever the reason, the process is private, quick and fully documented."
      faqs={[
        ["Which is the best place to sell gold in Greater Noida West?", "Choose a buyer who tests purity in front of you with XRF (not acid), shows you the weight and the live rate, and pays instantly with an invoice. That is exactly how we work at our Gaur City Centre store — and testing is free, so you can compare before deciding."],
        ["Do you buy gold without a bill in Greater Noida West?", F[2][1]],
        F[3], F[8],
      ]}
    />
  );
}

export function NoidaExtensionPage() {
  return (
    <AreaPage
      area="Noida Extension" faqPrefix="noidext"
      intro="Noida Extension and Greater Noida West are two names for the same fast-growing area — and our Gaur City Centre store is right in the middle of it. If you searched for a gold buyer in Noida Extension, you found us: free XRF testing, live-rate valuation, instant payment."
      neighbourhoods={["Noida Extension (all sectors)", "Bisrakh", "Chipiyana Buzurg", "Shahberi side", "Eco Village societies", "Ajnara & Le Gardenia side", "Haibatpur", "Ithaira", "Roza Yakubpur", "Aimnabad", "Saini", "Khairpur Gurjar"]}
      reach="Head to <strong>Gaur Chowk</strong> — the centre point of Noida Extension. Our store is <strong>Shop GF-04, Gaur City Centre</strong>, right at the chowk. From most Noida Extension societies it is a 5–12 minute drive; from Bisrakh and Chipiyana it is even closer."
      extraPara="New homeowners in Noida Extension often sell old jewellery to fund interiors or clear a gold loan. We handle both — including releasing pledged gold — with the full calculation shown to you first."
      faqs={[
        ["Is Noida Extension the same as Greater Noida West?", "Yes — Noida Extension is the popular name for Greater Noida West. Our store at Gaur City Centre, Gaur Chowk serves both names' entire area."],
        F[2], F[5], F[4],
      ]}
    />
  );
}

export function GreaterNoidaPage() {
  return (
    <AreaPage
      area="Greater Noida" faqPrefix="gnoida"
      intro="Selling gold in Greater Noida usually meant visiting a local jeweller and accepting an opaque number. Customers from across Greater Noida — Pari Chowk, Alpha, Beta, Delta and Knowledge Park — now visit our Gaur City Centre store for XRF-tested, on-screen valuation and instant payment."
      neighbourhoods={["Pari Chowk", "Alpha 1 & 2", "Beta 1 & 2", "Delta 1 & 2", "Gamma 1 & 2", "Knowledge Park 1–5", "Jagat Farm", "Kasna", "Surajpur", "Ecotech", "Omega 1 & 2", "Swarn Nagari", "Jaypee Greens", "Sector 36, 37 & P3"]}
      reach={`Our store is in <strong>Greater Noida West (Gaur City Centre, Gaur Chowk)</strong>. From Pari Chowk side, the Noida–Greater Noida Link Road / Surajpur route takes roughly 25–35 minutes depending on traffic. Many customers call first on ${PHONE_D} for the day's rate before making the trip.`}
      extraPara="We also release pledged gold — a common need for Greater Noida customers with gold loans at banks and NBFCs near Pari Chowk and Jagat Farm."
      faqs={[
        ["Is it worth travelling from Pari Chowk to sell gold?", "For larger quantities, yes — the difference between an opaque estimate and an XRF-tested live-rate valuation can be significant. Call us for today's rate first, get a free valuation, and decide with the numbers in front of you."],
        F[1], F[3], F[9],
      ]}
    />
  );
}

export function NoidaPage() {
  return (
    <AreaPage
      area="Noida" faqPrefix="noida"
      intro="If you live in Noida's western sectors — 119, 120, 121, 122, 74–78 or around Dadri Road — our Gaur City Centre store is a short drive away, and sellers visit us for one reason: the valuation is transparent. XRF purity on screen, weight in front of you, live rate, instant payment. Many Noida customers come to us specifically to sell old gold for cash — inherited sets, old 22K jewellery and pieces bought decades ago."
      neighbourhoods={["Sector 119", "Sector 120", "Sector 121", "Sector 122", "Sector 74", "Sector 75", "Sector 76", "Sector 77", "Sector 78", "Sector 79", "Sector 62 & 63", "Sector 51 & 52", "Sector 34", "Sorkha", "Parthala Khanjarpur"]}
      reach={`From Sector 119/120, cross towards Gaur Chowk via the Sector 121 / Dadri Road side — typically <strong>10–18 minutes</strong>. From the Sector 62/63 side, the Hindon bridge route to Greater Noida West is usually fastest. Our address: <strong>${STREET}</strong>.`}
      extraPara="Noida customers frequently bring inherited jewellery and diamond pieces. Diamond settings are valued stone-by-stone and the gold is XRF-tested separately — both figures are shown to you."
      faqs={[
        ["How far is your store from Noida Sector 120?", "About 10–15 minutes by road via Gaur Chowk. We are at Shop GF-04, Gaur City Centre, Greater Noida West."],
        F[2], F[4], F[5],
      ]}
    />
  );
}

export function CrossingRepublikPage() {
  return (
    <AreaPage
      area="Crossing Republik" faqPrefix="crossing"
      intro="Crossing Republik residents reach Greater Noida West in minutes via Shahberi — which makes our Gaur City Centre store one of the closest transparent gold buyers for Crossing Republik. Free XRF testing, live-rate valuation and instant payment, 7 days a week."
      neighbourhoods={["Gaur Global Village", "Panchsheel Wellingtons", "Ajnara Gen-X", "Mahagun Mascot", "Supertech Livingston", "GH-7 Crossing Republik", "Proview Officer City", "Assotech Sandal Suites side", "Dundahera", "Shahberi"]}
      reach="From Crossing Republik, take the <strong>Shahberi route to Gaur Chowk</strong> — typically 12–20 minutes depending on Shahberi traffic. Our store: <strong>Shop GF-04, Gaur City Centre, Gaur Chowk, Sector 4, Greater Noida West</strong>. Parking is available around the complex."
      extraPara="Crossing Republik customers often visit on weekends — we are open on Sundays too, at the same timings."
      faqs={[
        ["What is the fastest way from Crossing Republik to your store?", `The Shahberi–Gaur Chowk route is the shortest. In peak hours, allow a little extra time for the Shahberi stretch — or call us first on ${PHONE_D} and we'll be ready when you arrive.`],
        F[1], F[7], F[4],
      ]}
    />
  );
}

export function GhaziabadPage() {
  return (
    <AreaPage
      area="Ghaziabad" faqPrefix="ghaziabad"
      intro="Our store is in Greater Noida West — and a growing number of Ghaziabad customers from Indirapuram, Vaishali, Vasundhara and Raj Nagar make the short trip to Gaur City Centre because the valuation here is fully transparent: XRF purity on screen, weight in front of you, live market rate, and instant payment with a proper invoice. If you are comparing gold buyers in Ghaziabad, get a free valuation here before you decide — there is no obligation to sell."
      neighbourhoods={["Indirapuram", "Vaishali", "Vasundhara", "Raj Nagar", "Raj Nagar Extension", "Kavi Nagar", "Kaushambi", "Mohan Nagar", "Crossings Republik (Ghaziabad side)", "NH-9 corridor", "Shipra Suncity side", "Ahinsa Khand", "Gyan Khand", "Shakti Khand"]}
      reach="From <strong>Indirapuram / Vaishali</strong>, the fastest route is via NH-9 and the Hindon bridge towards Greater Noida West and Gaur Chowk — typically 25–40 minutes depending on traffic. From <strong>Raj Nagar and Kavi Nagar</strong>, come via Raj Nagar Extension towards Crossing Republik and Shahberi, or via NH-9. Our store: <strong>Shop GF-04, Gaur City Centre, Gaur Chowk, Sector 4, Greater Noida West</strong>, with parking around the complex. Calling ahead on the number above means we keep the counter ready for you."
      extraPara="Ghaziabad customers most often bring old family jewellery, pledged-gold release cases from gold loans taken in Ghaziabad branches, and coins or bars. All three are handled at the same counter, with digital KYC and an invoice for every transaction. Since the trip is longer, many customers first call for the day's live rate and a rough estimate on their item's weight and purity — then visit only when the numbers make sense."
      faqs={[
        ["Do you have a store in Ghaziabad?", "No — our only store is at Gaur City Centre, Greater Noida West. Ghaziabad customers visit us there because the XRF-tested, on-screen valuation and instant documented payment are worth the short drive. We never claim a Ghaziabad branch we don't have."],
        ["How long does it take to reach from Indirapuram?", "Usually 25–40 minutes via NH-9 and the Hindon bridge to Gaur Chowk, depending on traffic. The valuation itself takes about 10–15 minutes at the counter."],
        ["Can I get an estimate on call before travelling from Ghaziabad?", `Yes. Call us on ${PHONE_D} with your item's approximate weight and karat (from a hallmark or bill, if you have one) and we'll give you an indicative value at the day's live rate. The final figure is confirmed after the free XRF test in store.`],
        F[2], F[4],
      ]}
    />
  );
}
