// ─── Product Data ─────────────────────────────────────────────────────────────
// All product categories and their individual products with specifications.

export const productCategories = [
  {
    id: "earthing-electrode",
    name: "Earthing Electrode",
    products: [
      {
        slug: "copper-terminal-earthing-electrode",
        name: "Pure Copper Earthing Electrode",
        tagline: "Superior Conductivity. Long-lasting Grounding.",
        description:
          "The Pure Copper Earthing Electrode (PC-02) is engineered for high-performance electrical safety, low resistance, and maximum fault-current dissipation. Built with high-grade pure copper, it enhances conductivity and ensures an extended service life under demanding environmental conditions.",
        additionalInfo:
          "This electrode guarantees rapid and hassle-free site installation across soil pH levels ranging from 5.0 to 8.0. Available in 48 mm, 58 mm, and 88 mm outer diameters with lengths of 1, 2, and 3 meters—making it an ideal grounding solution for substations, industrial plants, telecom sites, railways, and critical data infrastructure.",
        image: "/pure-copper-earthing-electrode.png",
        advantages: [
          "Enhanced Conductivity: Pure copper build ensures fast fault-current dissipation and long-term durability.",
          "Tested & Certified: Lab-tested and approved by NABL and CPRI for standard electrical compliance.",
          "Wide Soil Adaptability: Highly resistant to soil corrosion across pH values between 5.0 and 8.0.",
          "Quick Installation: Engineered for fast, straightforward on-site installation with minimal soil disturbance.",
        ],
        industries: [
          "Power Transmission & Distribution Substations",
          "Telecommunications & Cellular Towers",
          "Data Centers & IT Server Rooms",
          "Railways & Mass Transit Infrastructure",
          "Heavy Manufacturing, Refineries & Chemical Plants",
          "Commercial Complexes & High-Rise Buildings",
        ],
        benefits: [
          "Zero Electrolytic Corrosion: Pure copper construction offers far higher corrosion resistance than standard coated pipes.",
          "Stable Low Earth Resistance: Sustains safe low resistance through seasonal weather shifts and heavy fault surges.",
          "Low Maintenance: Eliminates the need for recurring chemical treatments or frequent replacements.",
          "Certified Safety Standards: Verified through CPRI and NABL testing protocols to prevent equipment damage and electrical fire hazards.",
        ],
        applications: [
          "Transformer neutral and body earthing",
          "Lightning arresters and surge protection down-conductors",
          "High-voltage electrical panels, breakers, and switchgear",
          "Generator sets and heavy motor earthing",
          "Sensitive instrumentation and telecom grounding",
        ],
        activeTab: "specifications",
        specifications: {
          headers: [
            "Model",
            "Length (Meter)",
            "Terminal Size",
            "Inner Strip",
            "Outer Pipe (Diameter)",
          ],
          rows: [
            ["40", "1 to 3", "40x6", "25 x 3", "48mm"],
            ["50", "1 to 3", "50x6", "25 x 3", "58mm"],
            ["80", "1 to 3", "80x6", "25 x 3", "88mm"],
          ],
        },
        productDetails:
          "The PC-02 Pure Copper Earthing Electrode provides an uncompromised grounding path for high-voltage and sensitive low-voltage applications alike. Unlike copper-bonded alternatives, its pure copper body guarantees consistent conductivity and mechanical strength, even in acidic or alkaline soils (pH 5.0 – 8.0). Designed for easy field deployment, each unit comes with factory-configured flat terminals for reliable busbar bolting and rapid on-site setup.",
      },
      {
        slug: "gi-earthing-electrode",
        name: "GI Earthing Electrode",
        tagline: "Durable. Reliable. Galvanized Protection.",
        description:
          "The GI Earthing Electrode (GI-01) features a Pipe-in-Strip design engineered for reliable grounding and fast fault-current dissipation. It is hot-dip galvanized to ensure corrosion resistance and a prolonged operational life in challenging soil environments.   Supplied with moisture booster chemical bags to sustain low earth resistance, this electrode is ideal for soils with pH values between 5.0 and 8.0. Engineered for fast, easy site installation, it is available in outer pipe diameters of 48 mm, 58 mm, and 88 mm with length options of 1, 2, and 3 meters—making it a dependable, low-maintenance grounding choice for industrial, utility, and commercial applications.",
        additionalInfo:
          "Available in 40 mm and 50 mm outer diameters, lengths of 1 to 3 metres. IS 2629 standard compliant galvanization for lasting protection.",
        image: "/gi-earthing-electrode.png",
        advantages: [
          "Hot-Dip Galvanized: Heavy zinc coating protects against rust and soil-induced chemical corrosion.",
          "Fast Current Dissipation: Pipe-in-strip geometry quickly discharges heavy electrical faults and surge currents safely into the ground.",
          "Moisture Booster Included: Comes with chemical booster bags to retain moisture and maintain consistently low soil impedance.",
          "Broad Soil Adaptability: Built to function reliably across soil pH levels from 5.0 to 8.0.",
          "Low Maintenance & Quick Setup: Streamlined design ensures fast on-site installation with minimal maintenance demands."
        ],
        industries: [
          "Power Transmission and Distribution Substations",
          "Commercial and Residential Real Estate",
          "Telecommunication Infrastructure and Mobile Towers",
          "Manufacturing Plants and Heavy Machinery Yards",
          "Railway and Highway Infrastructure Projects",
        ],
        benefits: [
          "Cost-Effective Durability: Offers solid mechanical strength and grounding safety at an economical price point compared to solid copper alternatives.",
          "Stable Earth Resistance: Specialized moisture booster compound prevents resistance spikes during dry seasons.",
          "Superior Mechanical Strength: Rigid galvanized steel tube structure withstands rough handling and harsh backfill conditions.",
          "Minimal Servicing: Eliminates repetitive watering and high routine maintenance requirements.",
        ],
        applications: [
          "Transformer neutral and body earthing",
          "Lightning arresters and surge protection down-conductors",
          "High-voltage electrical panels, breakers, and switchgear",
          "Generator sets and heavy motor earthing",
          "Sensitive instrumentation and telecom grounding",
          "Distribution transformer grounding",
        ],
        specifications: {
          headers: [
            "Model",
            "Length (Meter)",
            "Terminal Size",
            "Inner Strip",
            "Outer Pipe (Diameter)",
          ],
          rows: [
            ["40", "1 to 3", "40x6", "25 x 3", "48mm"],
            ["50", "1 to 3", "50x6", "25 x 3", "58mm"],
            ["80", "1 to 3", "80x6", "25 x 3", "88mm"],
          ],
        },
        productDetails:
          "The GI Earthing Electrode features a robust steel core with precision hot-dip galvanization, providing a zinc layer thickness of 80+ microns. Suitable for general-purpose earthing in residential and commercial installations.",
      },
      {
        slug: "copper-bonded-earthing-electrode",
        name: "Copper Bonded Earthing Electrode",
        tagline: "High Dissipation. Low-Maintenance Earthing Solution.",
        description:
          "The Copper Bonded Earthing Electrode (CB-03) is built using 100% pure copper coating on a robust steel core to provide high electrical conductivity and long service life. Engineered specifically for fast fault-current dissipation, it offers a cost-effective, low-maintenance grounding system for critical electrical setups.",
        additionalInfo:
          "Supplied with moisture booster chemical bags to ensure consistently low earth resistance, this electrode performs reliably across soil pH values between 5.0 and 8.0. Available in outer pipe diameters of 48 mm, 58 mm, and 88 mm with lengths of 1, 2, and 3 meters, it supports fast and straightforward site installation for substations, industrial plants, telecom facilities, and commercial buildings.",
        image: "/copper-bonded-earthing-electrode.jpg",
        advantages: [
          "100% Copper Coating: Delivers superior conductivity and robust corrosion protection for extended field life.",
          "Rapid Fault Dissipation: Specifically engineered to safely ground and dissipate high fault surges instantly.",
          "Included Moisture Booster: Comes with moisture booster chemical bags to keep earth resistance low throughout seasonal changes.",
          "Broad Soil Tolerance: Works efficiently in varying soil chemistry with pH levels between 5.0 and 8.0.",
          "Quick & Low Maintenance: Fast on-site installation with minimal maintenance demands over its operating lifetime.",
        ],
        industries: [
          "Power Distribution & Transformer Yards",
          "Telecommunication & Broadcasting Towers",
          "Commercial Complexes & High-Rise Infrastructure",
          "Manufacturing Units & Processing Plants",
          "Renewable Energy (Solar & Wind Power Plants)",
          "Oil, Gas & Petrochemical Facilities",
        ],
        benefits: [
          "Cost-Efficient Performance: Combines the high mechanical strength of steel with the electrical conductivity of copper at an economical cost.",
          "Stable Earth Resistance: The included chemical moisture-retaining compound prevents dry-soil impedance spikes.",
          "Anti-Corrosive Bond: Uniform copper layer prevents peeling, cracking, or rapid galvanic degradation.",
          "Minimal Maintenance: Eliminates repetitive excavation, watering, or frequent rod replacements.",
        ],
        applications: [
          "Lightning protection system grounding",
          "Transformer neutral and body earthing",
          "HT/LT electrical panels and switchgear grounding",
          "Diesel Generator (DG) set grounding",
          "Telecom transmission tower footing earthing",
          "Data center and server grounding systems",
        ],
        specifications: {
          headers: [
            "Model",
            "Length (Meter)",
            "Terminal Size",
            "Inner Strip",
            "Outer Pipe (Diameter)",
          ],
          rows: [
            ["40", "1 to 3", "40x6", "25 x 3", "48mm"],
            ["50", "1 to 3", "50x6", "25 x 3", "58mm"],
            ["80", "1 to 3", "80x6", "25 x 3", "88mm"],
          ],
        },
        productDetails:
          "The CB-03 Copper Bonded Earthing Electrode combines mechanical durability and high conductivity for demanding grounding requirements. Utilizing 100% copper bonding over an inner steel structure, the electrode withstands rough soil installation while rapidly carrying fault currents to ground. Each unit includes specialized moisture booster chemical bags that condition the surrounding soil to sustain a permanently low earth resistance level. Suitable for challenging terrain and soils ranging from pH 5.0 to 8.0, it features pre-drilled terminal plates for fast, standardized busbar connection.",
      },


    ],
  },
  {
    id: "earthing-pit-cover",
    name: "Earthing Pit Cover",
    products: [
      {
        slug: "earthing-pit-cover",
        name: "Earthing Pit Cover",
        tagline: "Lightweight. Durable. Weather Resistant.",
        description:
          "The Earthing Pit Cover (CB-08) is manufactured from high-density polyethylene (HDPE) to provide a durable, weather-resistant inspection chamber for underground grounding electrodes and connections. Designed to replace conventional concrete pits, it shields termination points and test links from environmental damage, soil ingress, and physical contamination while offering quick access for periodic testing.",
        additionalInfo:
          "Weighing between 0.600 kg and 3.00 kg, this lightweight pit cover features a top diameter of 162 mm, a bottom diameter of 242 mm, and a height of 230 mm. Its factory-engineered side cutouts allow easy cable and strip routing, making it a reliable, corrosion-free solution for commercial, residential, and industrial grounding networks.",
        image: "/earthing-pit-cover.jpg",
        advantages: [
          "Heavy-Duty HDPE Construction: High-grade polymer prevents rusting, rotting, UV degradation, and cracking under diverse site conditions.",
          "Lightweight & Easy to Handle: Ranging from 0.600 kg to 3.00 kg, it enables fast transport and low labor costs compared to heavy concrete chambers.",
          "Quick Inspection Access: Removable top cover allows rapid visual checks and resistance testing without excavation.",
          "Built-in Cable Inlets: Pre-molded side cutouts facilitate tidy entry and exit of earthing conductors, cables, and strips.",
          "Stable Footing: Flanged bottom base (242 mm diameter) anchors securely into surrounding backfill to resist ground shifting",
        ],
        industries: [
          "Solar Farms & Renewable Power Projects",
          "Telecommunication & Cellular Tower Sites",
          "Industrial Manufacturing Plants & Warehouses",
          "Commercial Complexes & Residential Societies",
          "Electrical Substations & Utility Distribution Networks",
        ],
        benefits: [
          "Superior Durability: Eliminates the cracking, chipping, and weathering typical of traditional cast concrete inspection pits.",
          "Corrosion & Chemical Proof: HDPE material is completely unaffected by acidic or alkaline soils and chemical backfill compounds.",
          "Cost-Efficient Installation: Lightweight profile cuts freight charges and eliminates heavy machinery or manual lifting gear during placement.",
          "Safe Termination Housing: Keeps moisture, debris, and soil away from terminal clamps and testing disconnect joints.",
        ],
        applications: [
          "Housing inspection points for pure copper, copper-bonded, and GI earthing electrodes",
          "Inspection and testing chambers for lightning protection down-conductor disconnect links",
          "Solar inverter and transformer yard grounding pits",
          "Telecom tower footing earthing access points",
          "Industrial equipment safety grounding chambers",
        ],
        specifications: {
          headers: ["PRODUCT CODE", "MATERIAL", "TOP DIA", "BOTTOM DIA", "HEIGHT", "WEIGHT RANGE",],
          rows: [
            ["CB-08", "HDPE", "162 mm", "242 mm", "230 mm", "0.600 kg to 3.00 kg"]
          ],
        },
        productDetails:
          "FRP Earthing Pit Covers are manufactured from high-grade fiber reinforced plastic with UV stabilization. These covers are designed to provide safe, durable access to earthing pits while withstanding harsh weather conditions and heavy loads.",
      },
    ],
  },
  {
    id: "lightning-arresters",
    name: "Lightning Arresters",
    products: [
      {
        slug: "ese-lightning-arrester",
        name: "ESE Lightning Arrester",
        tagline: "Advanced Protection. Maximum Coverage.",
        description:
          "Early Streamer Emission lightning arresters providing advanced protection with extended coverage radius for comprehensive facility protection against lightning strikes.",
        additionalInfo:
          "Protection radius up to 107 meters. Stainless Steel 316L construction. NFC 17-102 compliant. Ideal for large industrial facilities, commercial complexes, and critical infrastructure.",
        image: "/ese-lightning-arrester.png",
        advantages: [
          "Up to 107m protection radius",
          "Early Streamer Emission technology",
          "Stainless Steel 316L construction",
          "No external power supply required",
          "Maintenance-free operation",
        ],
        industries: [
          "Petrochemical Plants",
          "Airports & Aviation",
          "Data Centres",
          "Manufacturing Facilities",
          "Commercial Complexes",
          "Government Buildings",
        ],
        benefits: [
          "Wider protection area with fewer units",
          "Superior corrosion resistance with SS 316L",
          "Tested and certified to international standards",
          "Reduced installation cost per protected area",
        ],
        applications: [
          "Industrial facility lightning protection",
          "Commercial building protection",
          "Open area protection (stadiums, parking)",
          "Critical infrastructure protection",
          "Telecommunication tower protection",
        ],
        specifications: {
          headers: [
            "Material",
            "Weight",
            "Ext. Diameter",
            "Lenght (h)",
            "Rod Diameter",
            "Adapter Diameter",
            "IP Code",
            "Working Temperature",
            "Type of Terminal",
            "Internal Insulattion",
            "Standard ",
            "Groundig Method",
            "Max. Current Withstand",
            "(10/350µs) / >2.5 MJ/Ω Advance Time(AT)"

          ],
          rows: [
            ["Stainless Steel", "2.350 kg", "180 mm", "58 cm", "25 mm", "60 mm Male ", "IP 67", "-25°C/160°C ", "Electroatmospheric", "High Density Polyurethane Resin", "NF C-17-102/2011 ", "Wire/ Strip", "200kA", "63.0 με."],
          ],
        },
        productDetails:
          "The ESE Lightning Arrester utilizes advanced Early Streamer Emission technology to capture lightning strikes before conventional rods. Made from marine-grade Stainless Steel 316L, it offers superior corrosion resistance and is designed for maintenance-free operation over decades.",
      },
      {
        slug: "conventional-lightning-arrester",
        name: "Conventional Lightning Arrester",
        tagline: "Time-Tested. Reliable. Cost-Effective.",
        description:
          "The Conventional Lightning Arrester (CB-06) is a copper metal pipe/rod assembly engineered to protect structures, electrical assets, and personnel from direct lightning strikes and severe thunderstorms. Serving as the primary interception terminal in a structural lightning protection network, it captures strike energy and diverts lightning surge current directly to the ground before it causes electrical breakdown, fires, or structural failure.",
        additionalInfo:
          "Constructed with a multi-spike strike terminal and a solid base-mounting plate, the CB-06 ensures low-impedance conduction and long-term corrosion resistance in harsh outdoor environments. It is an indispensable safety terminal for high-rise residential properties, commercial centers, telecom structures, industrial plants, and utility substations.",
        image: "/conventional-lightning-arrester.png",
        advantages: [
          "Direct Strike Interception: Multi-pointed copper spike array maximizes field ionization to capture impending lightning discharges.",
          "Instant Current Diversion: Conducts mega-ampere surge currents safely into the down-conductor network without thermal damage.",
          "Weather & Corrosion Proof: Copper construction withstands prolonged exposure to rain, high winds, UV rays, and atmospheric oxidation.",
          "Rigid Base Mounting: Pre-fabricated 4-hole mounting flange allows rapid, secure anchoring onto rooftops, parapets, or structural masts.",
          "Passive & Fail-Safe: Purely physical design requires no internal electronics, external power, or recurring mechanical maintenance.",
        ],
        industries: [
          "Commercial High-Rises & Residential Townships",
          "Power Generation Stations & Transmission Substations",
          "Oil Refineries, Petrochemical Storage & Hazardous Yards",
          "Telecommunication & Broadcasting Mast Networks",
          "Manufacturing Facilities & Warehouses",
          "Airports, Radar Installations & Railway Stations",
        ],
        benefits: [
          "Total Structural Defense: Shields buildings from physical fragmentation, roof penetration, and fire hazards caused by direct strike heat.",
          "Electrical System Isolation: Diverts high-voltage discharge currents before they penetrate building wiring, panels, or sensitive electronics.",
          "Zero Operating Expense: Completely passive operational cycle eliminates power requirements and battery upkeep.",
          "Standard-Compliant Safety: Built to integrate seamlessly with standard copper tape or cable down-conductors and earthing grids."
        ],
        applications: [
          "Rooftop and parapet perimeter lightning protection arrays",
          "Telecom, microwave, and radio transmission towers",
          "High-voltage substation gantries and transformer yard protection",
          "Industrial chimney and cooling tower air-terminals",
          "Storage silo and petroleum tank protection setups",
        ],

        productDetails:
          "The CB-06 Conventional Lightning Arrester functions as an air terminal designed to establish a safe point of attachment for atmospheric electrical discharges. Featuring a central vertical rod surrounded by radiating spikes atop a copper conductive sphere, it broadens the protection cone over the installed perimeter. The assembly is supported by a heavy-duty copper base plate that facilitates straightforward mechanical bolting to structures and solid connection to down-conductors. By providing a dedicated, low-resistance route straight into the grounding pit, the CB-06 prevents side-flashing and protects internal electrical installations from lightning damage.",
      },
    ],
  },
  {
    id: "back-fill-compounds",
    name: "Back Fill Compounds",
    products: [
      {
        slug: "back-fill-compound",
        name: "Back Fill Compound",
        tagline: "Low Resistivity. Long-Lasting Moisture Retention.",
        description:
          "The Earth Enhancement Backfill Compound (CB-08) is formulated to condition the soil around grounding electrodes, prevent current leakage, and maintain stable, low soil resistance across all seasons. Applied directly around ground electrodes, pipes, and rods, it absorbs and retains moisture to ensure an uninterrupted, low-impedance electrical interface with the surrounding earth.",
        additionalInfo:
          "Engineered for rocky, sandy, or high-resistivity terrains, CB-08 prevents current dissipation losses and protects buried conductors from environmental degradation. It eliminates the need for periodic water recharging, providing a maintenance-free earthing enhancement solution for substations, industrial facilities, lightning protection networks, and critical installations.",
        image: "/back-fill-compound.png",
        advantages: [
          "Moisture Retention: Actively absorbs and locks in ground moisture to prevent soil shrinkage away from the electrode surface.",
          "Current Leakage Prevention: Improves electrical contact area to eliminate current leakage and dissipation barriers.",
          "Stable Earth Resistance: Maintains low, consistent ohmic resistance values despite seasonal dry spells or temperature swings.",
          "Non-Corrosive Formulation: Protects copper, copper-bonded, and GI electrodes against underground chemical corrosion.",
          "Maintenance-Free Performance: Eliminates routine chemical replenishments and constant manual watering of earthing pits.",
        ],
        industries: [
          "Power Generation",
          "Telecom Networks",
          "Industrial Facilities",
          "Solar Power Plants",
          "Data Centres",
        ],
        benefits: [
          "Lowers Overall Ground Resistance: Significantly drops total pit resistance compared to native untreated soil backfill.",
          "Long-Term Geological Stability: Does not wash out, leach into water tables, or dissolve during heavy rain cycles.",
          "Electrode Protection: Forms a protective, conductive envelope around the grounding rod to prolong electrode life.",
          "Uniform Fault Conduction: Distributes high lightning and short-circuit fault currents rapidly into the surrounding soil mass.",
        ],
        applications: [
          "Backfilling around earthing electrodes, pipes, and deep-driven earth rods",
          "Rocky, sandy, gravelly, and high-resistivity soil grounding pits",
          "Lightning protection system earth pit installations",
          "Transformer neutral and body earthing pits",
          "Substation earth mat grid trench conditioning",
        ],
        productDetails:
          "Backfill Compound (CB-08) functions as a specialized earth enhancement material designed to optimize the interface between earthing conductors and the surrounding soil. When mixed and packed around grounding electrodes, it forms a compact, highly conductive matrix that absorbs underground moisture and prevents air pockets from forming around the metal surface. This continuous contact ensures steady fault-current dissipation, prevents hazardous step-and-touch potentials, and maintains low earth resistance without requiring regular pit watering or chemical top-ups. Packaged in durable, moisture-sealed bags for easy handling and rapid on-site application.",
      },
    ],
  },
  {
    id: "copper-bonded-rods",
    name: "Copper Bonded Rods",
    products: [
      {
        slug: "copper-bonded-rod",
        name: "Copper Bonded  Rod",
        tagline: "High Dissipation. Low-Maintenance Earthing Solution.",
        description:
          "The Copper Bonded Earth Rod (CB-04) is manufactured from high-tensile low carbon steel and molecularly bonded with 99.9% pure electrolytic copper. This bond ensures high corrosion resistance, excellent mechanical driveability into deep soil, and the lowest ground resistance without cracking or peeling",
        additionalInfo:
          "Available with copper coating thicknesses ranging from 10 to 350 microns—with high specialization in standard 250-micron bonded rods—these rods deliver reliable fault dissipation and long-term grounding security. Offered in outer diameters of 14 mm, 16 mm, 17 mm, and 25 mm with standard length options of 1, 2, and 3 meters, they come equipped with 40×6 mm terminal plates for clean conductor attachments in diverse industrial and utility grounding networks.",
        image: "/copper-bonded-earth-rod.png",
        advantages: [
          "99.9% Electrolytic Copper: Molecular bonding guarantees zero peeling, slippage, or cracking when driven deep into the ground.",
          "Low Carbon Steel Core: High tensile core prevents bending or deformity during hard-ground driving.",
          "Lowest Ground Resistance: Delivers high electrical conductivity for safe and instant fault-current grounding.",
          "Variable Coating Thickness: Manufactured in 10 to 350-micron ranges, specializing in 250-micron copper bonding for maximum lifespan.",
          "Standardized Connection: Pre-fitted with a 40×6 mm terminal plate for fast and secure cable or tape termination.",
        ],
        industries: [
          "Solar Farms & Wind Energy Installations",
          "Power Transmission & Grid Substations",
          "Telecommunications & Cell Tower Earth Grids",
          "Industrial Plants & Petrochemical Refineries",
          "Commercial Complexes & Data Centers  ",
        ],
        benefits: [
          "Superior Driveability: Can be directly hammered into rocky or hard soils without stripping the copper layer.",
          "Corrosion Immunity: Continuous molecular copper barrier protects the steel core against underground oxidation and chemical attack.",
          "High Cost-Efficiency: Delivers electrical performance close to solid copper rods at a fraction of the raw material cost.",
          "Compact Footprint: Ideal for multi-rod deep-driven earthing setups where horizontal space is constrained.",
        ],
        applications: [
          "Lightning protection down-conductor grounding networks",
          "Substation grid earth mat extension and perimeter earthing",
          "Solar inverter, mounting structure, and combiner box grounding",
          "Communication tower leg earthing arrays",
          "Transformer body and neutral earth connections",
        ],
        specifications: {
          headers: [
            "Model",
            "Length (Meter)",
            "Terminal Size",
            "Inner Strip",
            "Outer Pipe (Diameter)",
          ],
          rows: [
            ["14", "1 to 3", "40x6", "25 x 3", "14mm"],
            ["16", "1 to 3", "40x6", "25 x 3", "16mm"],
            ["17", "1 to 3", "40x6", "25 x 3", "17mm"],
            ["25", "1 to 3", "40x6", "25 x 3", "25mm"],
          ],
        },
        productDetails:
          "Built for deep earth driving, the CB-04 Copper Bonded Earth Rod merges the structural strength of carbon steel with the electrical conductivity of electrolytic copper. The copper layer is molecularly bonded over a prepared steel core, with coating options extending from 10 to 350 microns (specializing in 250 microns). This ensures corrosion protection and low earth resistance throughout seasonal climate variations. Each rod is supplied with a 40×6 mm pre-drilled terminal plate for fast, direct mechanical fastening to earthing conductors and strips.",
      },
    ],
  },
  {
    id: "cable-trays",
    name: "Cable Trays",
    products: [
      {
        slug: "perforated-cable-tray",
        name: "Perforated Cable Tray",
        tagline: "Strong Ventilation. Easy Installation. Long-Lasting.",
        description:
          "Perforated Cable Trays are ideal for ventilating electrical equipment, distributing and supporting cables in industrial facilities, commercial buildings, and infrastructure projects.",


        image: "/perforated-cable-tray.png",
        advantages: [
          "Permanent molecular bond connection",
          "Virtually zero resistance joint",
          "Will not loosen over time",
          "Current carrying capacity exceeds conductor",
          "IEEE 837 certified connections",
        ],
        industries: [
          "Power Utilities",
          "Heavy Industries",
          "Telecom",
          "Railways",
          "Petrochemicals",
        ],
        benefits: [
          "Permanent connections that outlast the conductor",
          "No maintenance required after installation",
          "Superior fault current handling capability",
          "Corrosion resistant molecular bond",
        ],
        applications: [
          "Ground rod to conductor connections",
          "Conductor to conductor splicing",
          "Ground grid mesh connections",
          "Equipment bonding connections",
        ],

        productDetails:
          "Exothermic Welding creates a permanent molecular bond between conductors using a controlled exothermic reaction. The resulting connection has a current-carrying capacity that exceeds that of the conductors themselves, and will not loosen, corrode, or increase in resistance over time.",
      },
    ],
  },
];

// Helper: get a flat list of all products
export function getAllProducts() {
  return productCategories.flatMap((cat) =>
    cat.products.map((product) => ({
      ...product,
      categoryId: cat.id,
      categoryName: cat.name,
    }))
  );
}

// Helper: find a product by slug
export function getProductBySlug(slug) {
  for (const cat of productCategories) {
    const found = cat.products.find((p) => p.slug === slug);
    if (found)
      return {
        ...found,
        categoryId: cat.id,
        categoryName: cat.name,
      };
  }
  return null;
}

// Helper: find category by ID
export function getCategoryById(id) {
  return productCategories.find((cat) => cat.id === id) || null;
}
