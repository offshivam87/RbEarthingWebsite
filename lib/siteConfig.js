// ─── Site & SEO Configuration for RB Earthing Company ───────────────────────

export const siteConfig = {
  name: "RB Earthing Company",
  legalName: "RB Earthing Private Limited",
  shortName: "RB Earthing",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.rbearthing.com",
  ogImage: "https://www.rbearthing.com/logo-1.png",
  logo: "https://www.rbearthing.com/logo-1.png",
  whiteLogo: "https://www.rbearthing.com/white-logo.png",
  foundingYear: "2017",
  tagline: "ISO Certified Earthing & Lightning Protection Solutions",
  
  description:
    "RB Earthing Company is Ludhiana's leading manufacturer of ISO 9001:2015 certified earthing electrodes, copper bonded rods, chemical earthing compounds, and ESE lightning arresters. Trusted across Punjab and Pan-India for safe, low-resistance electrical grounding.",
  
  longDescription:
    "RB Earthing Company, headquartered in Ludhiana, Punjab, is a premier manufacturer and supplier of advanced electrical earthing and lightning protection systems. Established in 2017, we provide CPRI and NABL lab-tested GI earthing electrodes, pure copper electrodes, high-tensile copper bonded rods, moisture-retaining chemical backfill compounds, heavy-duty HDPE pit covers, and ESE lightning arresters engineered for residential, commercial, industrial, and solar installations across India.",

  contact: {
    phone: "+91-91400-73153",
    phoneRaw: "+919140073153",
    email: "rbearthingcompany@gmail.com",
    whatsappUrl: "https://wa.me/919140073153?text=Hello%20RB%20Earthing%20Company%2C%20I%20would%20like%20to%20inquire%20about%20your%20products.",
    mapsUrl: "https://maps.google.com/?q=RB+Earthing+Company+Ludhiana",
  },

  location: {
    address: "RB Earthing Company",
    city: "Ludhiana",
    state: "Punjab",
    stateCode: "PB",
    country: "India",
    countryCode: "IN",
    postalCode: "141003",
    fullAddress: "RB Earthing Company, Ludhiana, Punjab, India",
    coordinates: {
      latitude: 30.8972,
      longitude: 75.8703,
    },
  },

  businessHours: [
    {
      days: "Monday - Saturday",
      hours: "9:00 AM - 6:00 PM",
      opens: "09:00",
      closes: "18:00",
    },
  ],

  certifications: [
    "ISO 9001:2015 Certified",
    "CPRI & NABL Tested",
    "CE Compliant (2014/35/EU)",
    "RoHS Compliant",
    "IS 3043 & IS 2629 Standard Compliant",
  ],

  keywords: [
    // Localized keywords for Ludhiana & Punjab
    "RB Earthing Company",
    "RB Earthing Company Ludhiana",
    "RB Earthing Ludhiana",
    "Earthing electrode manufacturer in Ludhiana",
    "Chemical earthing in Ludhiana Punjab",
    "Earthing material supplier Ludhiana",
    "Lightning arrester manufacturer in Ludhiana",
    "Copper bonded rod supplier Ludhiana Punjab",
    "Industrial earthing company Ludhiana",
    "Earthing solutions Ludhiana",
    
    // Core Product & Category Keywords
    "Chemical earthing electrode",
    "Pure copper earthing electrode",
    "GI earthing electrode pipe in strip",
    "Copper bonded earthing rod 250 micron",
    "ESE lightning arrester",
    "Conventional lightning arrester",
    "Earth enhancement backfill compound",
    "HDPE earthing pit cover",
    "Perforated cable tray",
    
    // Industrial & Pan-India Search Intent
    "ISO certified earthing manufacturer India",
    "CPRI tested earthing electrode",
    "Substation grounding rod manufacturer",
    "Solar plant earthing system",
    "Electrical grounding equipment manufacturer",
    "Low resistance chemical grounding",
    "Maintenance free earthing electrode",
  ],
};

