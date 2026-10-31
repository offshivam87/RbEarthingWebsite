import { siteConfig } from "./siteConfig";

/**
 * Returns JSON-LD structured data for the LocalBusiness & Manufacturer
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Manufacturer"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: [siteConfig.shortName, "RB Earthing Ludhiana", "RB Earthing Pvt Ltd"],
    url: siteConfig.url,
    logo: siteConfig.logo,
    image: siteConfig.logo,
    description: siteConfig.description,
    telephone: siteConfig.contact.phoneRaw,
    email: siteConfig.contact.email,
    foundingDate: siteConfig.foundingYear,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "RB Earthing Company",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      postalCode: siteConfig.location.postalCode,
      addressCountry: siteConfig.location.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.location.coordinates.latitude,
      longitude: siteConfig.location.coordinates.longitude,
    },
    hasMap: siteConfig.contact.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Ludhiana",
      },
      {
        "@type": "State",
        name: "Punjab",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    knowsAbout: [
      "Earthing Electrodes",
      "Chemical Earthing",
      "Copper Bonded Earth Rods",
      "GI Earthing Electrodes",
      "Lightning Arresters",
      "Early Streamer Emission (ESE) Lightning Protection",
      "Earth Enhancement Backfill Compounds",
      "Electrical Grounding Systems",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phoneRaw,
      contactType: "sales and customer support",
      areaServed: "IN",
      availableLanguage: ["en", "hi", "pa"],
    },
  };
}

/**
 * Returns JSON-LD structured data for the Website
 */
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-IN",
  };
}

/**
 * Returns JSON-LD structured data for BreadcrumbList
 */
export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

/**
 * Returns JSON-LD structured data for an individual Product
 */
export function getProductSchema(product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteConfig.url}/products/${product.slug}#product`,
    name: product.name,
    image: [`${siteConfig.url}${product.image}`],
    description: product.description,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    manufacturer: {
      "@id": `${siteConfig.url}/#organization`,
    },
    category: product.categoryName || "Electrical Grounding Equipment",
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/products/${product.slug}`,
      priceCurrency: "INR",
      price: "1000",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      seller: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
  };
}

/**
 * Returns JSON-LD structured data for FAQs
 */
export function getFaqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

