import {
  DOMAIN, NAME, PHONE, EMAIL, STREET, CITY, REGION, PIN, LAT, LNG, MAPS_URL,
} from "../config.js";

// LocalBusiness @graph node — identical facts to v2 build.py localbusiness_schema().
export function localBusiness() {
  return {
    "@type": ["JewelryStore", "LocalBusiness"],
    "@id": DOMAIN + "/#localbusiness",
    name: NAME,
    url: DOMAIN + "/",
    logo: DOMAIN + "/images/icon-512.png",
    image: DOMAIN + "/images/store-front.jpg",
    telephone: PHONE,
    email: EMAIL,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: STREET,
      addressLocality: CITY,
      addressRegion: REGION,
      postalCode: PIN,
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: LAT, longitude: LNG },
    hasMap: MAPS_URL,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    areaServed: [
      "Gaur City", "Greater Noida West", "Noida Extension", "Greater Noida",
      "Noida", "Crossing Republik", "Ghaziabad",
    ].map((n) => ({ "@type": "Place", name: n })),
    sameAs: [],
  };
}

export function faqLd(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

// items: [[name, cleanPathOrNull]] — cleanPath like "sell-gold" or "" for home.
export function breadcrumbLd(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map(([n, u], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: n,
      item: DOMAIN + "/" + (u || ""),
    })),
  };
}

export function serviceLd(name, areaServed = "Greater Noida West") {
  return {
    "@type": "Service",
    name,
    provider: { "@id": DOMAIN + "/#localbusiness" },
    areaServed,
    serviceType: name,
  };
}

// Wraps page schemas into the @graph document used in <head>, LB first (as v2).
export function graphLd(schemas) {
  return { "@context": "https://schema.org", "@graph": [localBusiness(), ...schemas] };
}
