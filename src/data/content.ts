/* ============================================================
   VEER LASER FAB — CONTENT SOURCE OF TRUTH
   All figures, dates, model numbers and certification details
   come from the client's company details document.
   ============================================================ */

/* Image path helper — all photography is self-hosted in /public/images.
     Kept as an indirection point so asset paths stay centralized. */
export const img = (p: string): string => p;

export const CONTACT = {
  email: "veerlaserfab@gmail.com",
  phones: ["+91 99740 91289", "+91 90990 35367"],
  phoneHref: ["tel:+919974091289", "tel:+919099035367"],
  unit1: {
    label: "Unit 1 — Kathwada",
    address:
      "Plot No. 518, Road Number 14, Kathwada GIDC, Odhav Industrial Estate, Odhav, Ahmedabad, Kathwada, Gujarat 382430",
    mapQuery: "Plot No. 518, Road Number 14, Kathwada GIDC, Odhav, Ahmedabad, Gujarat 382430",
    mapLink: "https://maps.app.goo.gl/N5cG14bm2cyzWXmS8",
    established: "2018",
  },
  unit2: {
    label: "Unit 2 — Kuha",
    address:
      "Survey No. 2231, IndianOil Petrol Pump, Indore – Ahmedabad Hwy, Opp. Shree Ram Industrial Park, Kuha, Daskroi, Gujarat 382433",
    mapQuery:
      "Survey No. 2231, Indore - Ahmedabad Highway, Opp. Shree Ram Industrial Park, Kuha, Daskroi, Gujarat 382433",
    mapLink: "https://maps.app.goo.gl/nx95qm77T1AKamTx8",
    established: "2026",
  },
};

export const NAV_LINKS = [
  { label: "Facilities", href: "#facilities" },
  { label: "What We Do", href: "#services" },
  { label: "Featured Projects", href: "#work" },
  { label: "Who We Serve", href: "#industries" },
  { label: "Gallery", href: "#gallery" },
  { label: "Our Story", href: "#about" },
  { label: "Get a Quote", href: "#contact" },
];

export const HERO = {
  eyebrow: "PRECISION LASER CUTTING • CNC FABRICATION • METAL ENGINEERING",
  titleLines: ["Built on", "Precision.", "Delivered on Time."],
  sub: "Ahmedabad's dual-facility precision metal fabrication group — from 2,000W to 12,000W laser power, serving OEM and export clients since 2018.",
  coordinates: "23.0489° N / 72.6931° E — KATHWADA GIDC, AHMEDABAD",
};

export const STATS = [
  { value: 12000, suffix: "W", label: "Highest Laser Power" },
  { value: 0.02, decimals: 2, prefix: "±", suffix: "mm", label: "Machining Accuracy" },
  { value: 12000, suffix: "+", label: "Sq. Metres Facility" },
  { value: 2018, plain: true, label: "Est. 50+ Team" },
] as const;

export const STORY = [
  "Veer Laser Fab was founded in 2018 in Kathwada GIDC, Ahmedabad, with a single 2,000W CNC fiber laser cutting machine and one conviction — that Indian OEMs deserve world-class precision without world-class lead times.",
  "Within three years the shop floor grew into a complete fabrication line: VMC machining, press-brake forming, welding and structural assembly — formalised by ISO 9001:2015 certification in 2021. By 2024 our components were shipping into international OEM supply chains.",
  "In 2026 we commissioned Unit 2 at Kuha — a 12,000W fiber laser, 6,000W tube laser and 500T tandem press brake line that makes Veer the highest laser-power fabricator in Gujarat. Two facilities. One standard: ±0.02 mm.",
  "Our manufacturing infrastructure is designed to support OEMs, renewable-energy companies, EPC contractors and industrial-equipment builders — with precision components and heavy assemblies built strictly to customer drawings, international standards and traceable mill test certification.",
];

export const FOUNDER_QUOTE = {
  text: "From a single machine to a multi-facility precision manufacturing group — built on quality, delivered on time.",
  author: "Pulkit Patel",
  role: "Proprietor",
};

export const VALUES = [
  {
    title: "Precision",
    desc: "Every cut, bend and weld held to exact tolerance — ±0.02 mm is the standard, not the aspiration.",
  },
  {
    title: "Quality",
    desc: "Integrated ISO 9001 / 14001 / 45001-documented workflows with full MTC traceability from raw material to dispatch.",
  },
  {
    title: "Innovation",
    desc: "From 2,000W to 12,000W — continuous investment in the region's most advanced fabrication technology.",
  },
  {
    title: "Reliability",
    desc: "Delivered on time, every time — the scheduling discipline that keeps OEMs coming back.",
  },
  {
    title: "Partnership",
    desc: "Long-term collaboration over one-off transactions — we grow when our clients grow.",
  },
];

export const TIMELINE = [
  {
    year: "2018",
    category: "Founded",
    title: "The First Cut",
    body: "Founded in Kathwada GIDC, Ahmedabad with a single DNE 2,000W CNC fiber laser cutting machine — and a promise of on-time delivery.",
  },
  {
    year: "2019–20",
    category: "Expansion",
    title: "Capacity Expansion",
    body: "VMC machining with the HAAS VF4, press brakes and welding stations bring forming and machining in-house.",
  },
  {
    year: "2021",
    category: "Quality",
    title: "ISO Certified",
    body: "ISO 9001:2015 certification (Accreditation No. MSCB-119, IAS-accredited, IAF-recognised) formalises every workflow.",
  },
  {
    year: "2022–23",
    category: "Growth",
    title: "Structural Growth",
    body: "MSME registration; welding and structural fabrication capacity expands for heavier, larger assemblies.",
  },
  {
    year: "2024",
    category: "Export",
    title: "Going Global",
    body: "Export market entry with IEC registration (CIVPP0310F) — international OEM programmes begin shipping.",
  },
  {
    year: "2025",
    category: "Planning",
    title: "Unit 2 Planned",
    body: "Land and layout finalised at Kuha for a greenfield heavy fabrication facility.",
  },
  {
    year: "2026",
    category: "Launch",
    title: "Unit 2 Launched",
    body: "12,000W fiber laser, 6,000W tube laser and 500T tandem press brake online — the highest laser power in Gujarat.",
  },
];

export type Machine = {
  name: string;
  model: string;
  icon: "laser" | "tube" | "brake" | "cnc" | "support" | "crane";
  specs: { k: string; v: string }[];
};

export type Facility = {
  id: "unit1" | "unit2";
  name: string;
  location: string;
  established: string;
  badge?: string;
  address: string;
  area: string;
  image: string;
  imageAlt: string;
  blurb: string;
  flagship: string;
  machines: Machine[];
};

export const FACILITIES: Facility[] = [
  {
    id: "unit1",
    name: "Unit 1 — Kathwada",
    location: "Kathwada GIDC, Ahmedabad",
    established: "EST. 2018",
    address: "Plot No. 518, Road Number 14, Kathwada GIDC, Odhav, Ahmedabad, Gujarat 382430",
    area: "4,500 m²",
    image: "/images/facility-unit1.jpg",
    imageAlt: "Unit 1 machine shop in Kathwada GIDC — CNC fiber laser and VMC machining floor",
    blurb:
      "The original precision shop — CNC laser cutting, CNC bending, 4-axis VMC machining, TIG/MIG welding and finished sheet-metal enclosures under one roof, running ISO-documented workflows since day one.",
    flagship: "DNE 2,000 W Fiber Laser",
    machines: [
      {
        name: "CNC Fiber Laser Cutting Machine",
        model: "DNE · 2,000 W",
        icon: "laser",
        specs: [
          { k: "Rated Power", v: "2,000 W" },
          { k: "Cutting Bed", v: "3,000 × 1,500 mm" },
          { k: "Mild Steel Capacity", v: "up to 16 mm" },
          { k: "Positioning Accuracy", v: "±0.02 mm" },
        ],
      },
      {
        name: "VMC Machining Centre",
        model: "HAAS VF4 · 4-Axis",
        icon: "cnc",
        specs: [
          { k: "X-Axis Travel", v: "1,270 mm" },
          { k: "Y-Axis Travel", v: "508 mm" },
          { k: "Z-Axis Travel", v: "635 mm" },
          { k: "4th-Axis Rotary", v: "Indexed machining" },
          { k: "Tolerance", v: "±0.01 mm" },
          { k: "Application", v: "Precision components" },
        ],
      },
      {
        name: "Hydraulic Press Brake",
        model: "160 T × 3,100 mm",
        icon: "brake",
        specs: [
          { k: "Bending Force", v: "160 T" },
          { k: "Bending Length", v: "3,100 mm" },
          { k: "Control", v: "CNC back-gauge" },
          { k: "Application", v: "Sheet & plate forming" },
        ],
      },
      {
        name: "Support Equipment",
        model: "Welding · Drilling · Finishing",
        icon: "support",
        specs: [
          { k: "Welding", v: "MIG / TIG / SMAW bays" },
          { k: "Drilling", v: "Radial & magnetic · up to Ø 40 mm" },
          { k: "Finishing", v: "Grinding & deburr" },
          { k: "Quality", v: "In-house inspection" },
        ],
      },
    ],
  },
  {
    id: "unit2",
    name: "Unit 2 — Kuha",
    location: "Kuha, Ahmedabad",
    established: "EST. 2026",
    badge: "NEW — HIGHEST POWER IN GUJARAT",
    address: "Survey No. 2231, Indore – Ahmedabad Hwy, Opp. Shree Ram Industrial Park, Kuha, Daskroi, Ahmedabad, Gujarat 382433",
    area: "7,500 m²",
    image: "/images/facility-unit2.jpg",
    imageAlt: "Unit 2 heavy fabrication hall at Kuha with seven overhead EOT cranes",
    blurb:
      "The heavy-fabrication flagship — 12,000W sheet laser, 6,000W tube laser, 500T tandem braking, 10-Ton EOT cranes and an 18-station welding fleet, engineered for large structural, skid and process-equipment programmes.",
    flagship: "D-Power 12,000 W Fiber Laser",
    machines: [
      {
        name: "CNC Fiber Laser Cutting Machine",
        model: "D-Power 2580 FCCBD · 12,000 W",
        icon: "laser",
        specs: [
          { k: "Rated Power", v: "12,000 W" },
          { k: "Cutting Bed", v: "8,000 × 2,500 mm" },
          { k: "Table", v: "Dual exchange shuttle" },
          { k: "Mild Steel Capacity", v: "up to 40 mm" },
          { k: "Cutting Speed", v: "10 m+/min" },
          { k: "Assist Gases", v: "Nitrogen / Oxygen" },
        ],
      },
      {
        name: "CNC Tube Laser Cutting Machine",
        model: "6,000 W Tube Line",
        icon: "tube",
        specs: [
          { k: "Rated Power", v: "6,000 W" },
          { k: "Tube Diameter", v: "up to Ø 360 mm" },
          { k: "Profiles", v: "Round, square, RHS, channel" },
          { k: "Joint Prep", v: "Interlocking cut joints" },
          { k: "Accuracy", v: "±0.02 mm" },
        ],
      },
      {
        name: "Tandem Press Brake",
        model: "500 T Tandem",
        icon: "brake",
        specs: [
          { k: "Bending Force", v: "2 × 250 T · 500 T combined" },
          { k: "Bending Length", v: "8,000 mm tandem · 4,000 mm single" },
          { k: "Configuration", v: "Tandem synchronised" },
          { k: "Crowning", v: "Dynamic CNC compensation" },
          { k: "Application", v: "Heavy plate forming" },
        ],
      },
      {
        name: "Heavy Welding Fleet",
        model: "18 × 400 A MIG Stations",
        icon: "support",
        specs: [
          { k: "Welding", v: "18 × 400 A inverter MIG" },
          { k: "Welder Quals", v: "AWS D1.1 · ASME Sec. IX" },
          { k: "Drilling & Tapping", v: "Radial & magnetic · Ø 40 mm" },
          { k: "Edge Preparation", v: "Bevelling & planing" },
          { k: "Finishing", v: "Grinding & paint prep" },
        ],
      },
      {
        name: "Section & Profile Rolling",
        model: "3-Roll Hydraulic",
        icon: "support",
        specs: [
          { k: "Rolling Method", v: "3-roll hydraulic profile" },
          { k: "Sections", v: "Channels, angles, beams, flats" },
          { k: "Products", v: "Rings, curves & cylindrical shells" },
          { k: "Application", v: "Tower rings · stiffener bands" },
        ],
      },
      {
        name: "Material Handling",
        model: "EOT Cranes · 10 T",
        icon: "crane",
        specs: [
          { k: "Lift Capacity", v: "up to 10 T per crane" },
          { k: "Coverage", v: "Full fabrication bay spans" },
          { k: "Duty", v: "Plate & weldment transit" },
          { k: "Safety", v: "Dual-hoist fail-safe brakes" },
        ],
      },
    ],
  },
];

export type Service = {
  icon: string;
  title: string;
  line: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    icon: "laser",
    title: "CNC Fiber Laser Cutting",
    line: "12,000 W fiber laser with dual shuttle tables — 40 mm MS / 25 mm SS cut with nitrogen or oxygen assist for dross-free edges.",
    image: "/process/laser.png",
  },
  {
    icon: "tube",
    title: "Tube Laser Cutting",
    line: "6,000 W 3D tube laser — round, square, RHS and channel profiles with interlocking cut joints up to Ø 360 mm.",
    image: "/process/tube.png",
  },
  {
    icon: "brake",
    title: "Press Brake Bending",
    line: "2 × 250 T synchronised press brakes (500 T combined) with dynamic crowning — bends verified to ±0.2°.",
    image: "/process/brake.png",
  },
  {
    icon: "cnc",
    title: "CNC / VMC Machining",
    line: "4-axis HAAS VF4 VMC for machined faces, bores and patterns at ±0.01 mm — CMM-verified quality.",
    image: "/process/cnc.png",
  },
  {
    icon: "weld",
    title: "Welding & Fabrication",
    line: "18 × 400 A MIG fleet with AWS D1.1 / ASME IX certified welders — WPS / PQR-documented and fully traceable.",
    image: "/process/weld.png",
  },
  {
    icon: "structure",
    title: "Structural Fabrication",
    line: "Plate girders, box columns, portal frames and PEB from plate up to 50 mm — zero-clash erection fit-up.",
    image: "/process/structure.png",
  },
  {
    icon: "sheet",
    title: "Sheet Metal Fabrication",
    line: "IP55/IP65 enclosures, panels and racks from 0.5–4.0 mm CRCA / GI / SS — stud-welded and powder-coated.",
    image: "/process/sheet.png",
  },
  {
    icon: "vessel",
    title: "Process Equipment",
    line: "Vessels, tanks, heat exchangers and mills up to 1,25,000 L in MS / SS.",
    image: "/process/decorative.png",
  },
];

export const CAPACITY_TABLE = {
  head: ["Material", "Min (mm)", "Unit 1 Max (2 kW)", "Unit 2 Max (12 kW)"],
  rows: [
    ["Mild Steel (MS)", "0.5", "16", "40"],
    ["Stainless Steel (SS 304 / 316)", "0.5", "8", "25"],
    ["Aluminium", "0.5", "6", "20"],
    ["Copper & Brass", "0.5", "4", "12"],
    ["Galvanised / CR Sheets", "0.5", "8", "20"],
  ],
};

export const PERFORMANCE_CHIPS = [
  "±0.02 mm Accuracy",
  "10 m+/min Cutting Speed",
  "Full Job Traceability",
  "ISO-Documented Workflows",
  "Faster Turnaround",
  "Advanced Technology",
  "Skilled Team",
];

export type Product = {
  name: string;
  spec: string;
  art: string;
  image: string;
  category: "process" | "fabricated";
};

export const PRODUCTS: Product[] = [
  { name: "Reaction / Pressure Vessels", spec: "Up to 1,25,000 L · MS / SS304 / SS316", art: "vessel", image: "/products/vessel.webp", category: "process" },
  { name: "Limpet / Jacketed Vessels", spec: "Heated & cooled jacketed process vessels", art: "jacketed", image: "/products/jacketed.webp", category: "process" },
  { name: "Storage Tanks", spec: "Atmospheric storage up to 1,25,000 L", art: "tank", image: "/products/tank.webp", category: "process" },
  { name: "Open Vessels", spec: "Open-top process & holding vessels", art: "open", image: "/products/openvessel.webp", category: "process" },
  { name: "Heat Exchangers", spec: "Shell & tube exchanger fabrication", art: "hex", image: "/products/hex.webp", category: "process" },
  { name: "Sigma / Kneader Mills", spec: "Kneader & sigma-blade mill bodies", art: "mill", image: "/products/mill.webp", category: "process" },
  { name: "Ball Mills", spec: "Grinding mill shells & assemblies", art: "ballmill", image: "/products/ballmill.webp", category: "process" },
  { name: "Boilers", spec: "Shell-type boiler fabrication", art: "boiler", image: "/products/boiler.webp", category: "process" },
  { name: "Chimneys", spec: "Industrial chimneys & stacks", art: "chimney", image: "/products/chimney.webp", category: "process" },
  { name: "Rotary Dryers", spec: "Rotary drum dryer shells & flights · MS / SS", art: "dryer", image: "/products/rotary-dryer.jpg", category: "process" },
  { name: "Evaporators", spec: "Falling-film & forced-circulation evaporator bodies", art: "evaporator", image: "/products/evaporator-unit.jpg", category: "process" },
  { name: "Cyclones", spec: "Cyclone separators & ducting", art: "cyclone", image: "/products/cyclone.webp", category: "process" },
  { name: "Solvent Recovery Plants", spec: "SRP skids & structural packages", art: "plant", image: "/products/plant.webp", category: "process" },
  { name: "Sheet Metal Enclosures", spec: "From 0.5 mm · powder-coat ready", art: "enclosure", image: "/products/enclosure.webp", category: "fabricated" },
  { name: "Cable Trays", spec: "Perforated & ladder-type trays", art: "tray", image: "/products/tray.webp", category: "fabricated" },
  { name: "Transformer Tanks", spec: "Leak-tested radiator-ready tanks", art: "transfo", image: "/products/transfo.webp", category: "fabricated" },
  { name: "Windmill Internal Structures", spec: "TA internals · platforms · HDG finished", art: "wind", image: "/products/wind.webp", category: "fabricated" },
  { name: "Automotive Parts", spec: "Laser-cut OEM components", art: "auto", image: "/products/auto.webp", category: "fabricated" },
  { name: "Structural Steel", spec: "Beams, columns, trusses & tower members", art: "truss", image: "/products/truss.webp", category: "fabricated" },
  { name: "Precision Laser-Cut OEM Parts", spec: "±0.02 mm cut accuracy", art: "part", image: "/products/part.webp", category: "fabricated" },
];

export const CAPACITY_HIGHLIGHTS = [
  { k: "Material of Construction", v: "MS / SS304 / SS316" },
  { k: "Thickness Range", v: "0.5 mm – ∞" },
  { k: "Tube Diameter", v: "up to Ø 360 mm" },
  { k: "Bending Length", v: "up to 8,000 mm" },
  { k: "Vessel Capacity", v: "up to 1,25,000 L" },
];

export const SUZLON = {
  label: "CASE STUDY 01 — WIND ENERGY",
  title: "Precision-Manufactured Wind Tower Internal Structures & Components",
  titleAccent: {
    pre: "Precision-Manufactured Wind Tower Internal Structures & ",
    em: "Components",
  },
  client: "Suzlon Energy Ltd — Approved Vendor",
  image: "/images/suzlon-tower.webp",
  video: "/videos/suzlon.mp4",
  imageAlt:
    "Hot-dip galvanised wind tower internal platform, walkway and ladder assembly fabricated by Veer Laser Fab",
  body: [
    "For Suzlon's S144 / S140 and S160 m hub-height turbine platforms, Veer Laser Fab manufactures the complete Transition Adapter (TA) Internals — a hot-dip-galvanised structural package that forms the internal working-platform system inside the tower's transition piece.",
    "Every beam, bracket and ladder is laser-cut to ±0.02 mm, welded to documented procedures, galvanised and staged as erection-ready sets for multi-batch delivery against the programme schedule.",
    "Each batch is verified before dispatch — 100% dimensional inspection, weld testing with universal weld gauges, and dry-film-thickness (DFT) verification of the galvanised coating.",
  ],
  includes: [
    "Internal Platform",
    "Tower Walkway with Handrails",
    "Vertical Ladder Assembly",
    "Rest Platform",
    "Mounting Brackets",
    "Cable Support System",
    "Ladder Safety Hoop & Support",
    "Cable Ladder Systems",
    "Beveled Flange Reinforcement Plates",
    "Complete Tower Internal Assembly",
  ],
  tags: [
    "Beams",
    "Frames",
    "L-Angles",
    "Toe Plates",
    "Brackets",
    "Hatches",
    "Railings",
    "Cable Trays",
    "Retainer Plates",
    "Grounding Bars",
  ],
  footnote: "REF — ML No. 35000650 · Assembly Drawing M220.300134 · Hot-Dip Galvanised Finish · Multi-Set Batch Delivery",
};

export const MILACRON = {
  label: "CASE STUDY 02 — INDUSTRIAL MACHINERY",
  title: "Heavy-Duty Machine Base & Skid Structures",
  titleAccent: {
    pre: "Heavy-Duty Machine Base & ",
    em: "Skid Structures",
  },
  client: "Milacron",
  image: "/images/milacron-base.webp",
  gallery: [
    "/images/milacron-slider/1.jpg",
    "/images/milacron-slider/2.jpg",
    "/images/milacron-slider/3.jpg",
    "/images/milacron-slider/4.jpg",
    "/images/milacron-slider/5.jpg",
  ],
  imageAlt:
    "Precision-welded box-type heavy machine base frame fabricated and machined by Veer Laser Fab for Milacron",
  body: [
    "For Milacron we fabricate precision-welded box-type and beam-type steel base frames that carry large machine assemblies, including injection moulding machines. Each base is cut, welded, stress-relieved and machined on critical faces to exact load-bearing specifications.",
    "Finished bases are shot-blasted, primed and finished with multi-coat industrial epoxy paint, then dispatched as staged production batches — with ladder-frame support structures completing the scope for each machine set.",
  ],
  includes: [
    "Box-Type Base Frames",
    "Beam-Type Skid Structures",
    "Machined Mounting Faces",
    "Ladder-Frame Supports",
    "Levelling & Anchor Systems",
    "Painted & Staged Batches",
  ],
  tags: ["Box Weldments", "Machined Faces", "Skids", "Ladder Frames", "Batch Dispatch"],
  footnote: "· · VEER LASER FAB",
};

export const OTHER_WORK = [
  {
    title: "Structural Steel / PEB Buildings",
    caption: "Columns, rafters and moment-connection frames fabricated and delivered bolt-ready for site erection.",
    image: "/images/gallery-peb.webp",
    alt: "Pre-engineered structural steel building frame fabricated by Veer Laser Fab",
  },
  {
    title: "Heavy Engineering",
    caption: "Rotary platforms, turntables and heavy assemblies handled under our EOT cranes.",
    image: "/images/about-floor.webp",
    alt: "Welder fabricating a heavy structural assembly on the Veer Laser Fab shop floor",
  },
  {
    title: "Skid Fabrication",
    caption: "Compressor, generator and hydraulic power-pack bases — welded, stress-relieved and machined to drawing.",
    image: "/images/milacron-base.webp",
    alt: "Heavy-duty fabricated machine skid staged for dispatch",
  },
  {
    title: "Decorative / Architectural Laser Screens & Signage",
    caption: "Intricate jali screens and signage cut with fiber-laser edge quality.",
    image: "/images/gallery-decorative.webp",
    alt: "Decorative laser-cut geometric metal screen with precise cut edges",
  },
  {
    title: "General Structural Steel Fabrication",
    caption: "Brackets, supports, frames and platforms — the daily backbone of the shop.",
    image: "/images/gallery-bend.webp",
    alt: "Press brake bending thick steel plate in the Veer Laser Fab fabrication shop",
  },
  {
    title: "Truss / Lattice Structural Work",
    caption: "Roof trusses, lattice structures and transmission-tower members cut, fitted and welded in jigs.",
    image: "/images/unit2.webp",
    alt: "Large truss and structural assemblies under the EOT cranes at Unit 2, Kuha",
  },
];

export const INDUSTRIES = [
  { name: "Electrical Control Panels", icon: "CircuitBoard" },
  { name: "Elevators & Lifts", icon: "ArrowUpDown" },
  { name: "Automobile & Auto Components", icon: "Car" },
  { name: "Export / International OEM", icon: "Ship" },
  { name: "Wind Energy", icon: "Wind" },
  { name: "Solar & Renewable Energy", icon: "Sun" },
  { name: "Plastic & Polymer", icon: "FlaskConical" },
  { name: "Railways", icon: "TrainFront" },
  { name: "Transformer Manufacturing", icon: "Plug" },
  { name: "Agricultural Engineering", icon: "Tractor" },
  { name: "Building & Construction", icon: "Building2" },
  { name: "Power Plant Sector", icon: "Zap" },
  { name: "Power Transmission", icon: "PlugZap" },
  { name: "Telecommunications", icon: "RadioTower" },
] as const;

export type Client = { name: string; logo: string };

export const CLIENTS: Client[] = [
  { name: "Electrotherm", logo: "/logos/electrotherm.png" },
  { name: "PowerLite", logo: "/logos/powerlite.png" },
  { name: "AMTECH", logo: "/logos/amtech.png" },
  { name: "SUZLON", logo: "/logos/suzlon.png" },
  { name: "Linde", logo: "/logos/linde.png" },
  { name: "MILACRON", logo: "/logos/milacron.png" },
  { name: "Inductotherm", logo: "/logos/inductotherm.png" },
  { name: "LOYAL", logo: "/logos/loyal.png" },
  { name: "Polymechplast", logo: "/logos/polymechplast.png" },
  { name: "INSPIRE", logo: "/logos/inspire.png" },
];

export type Certificate = {
  id: string;
  image?: string;
  badge: string;
  emblems: string[];
  docTitle: string;
  title: string;
  subtitle: string;
  issuer: string;
  certNo?: string;
  scope?: string;
  accent: string;
};

export const CERTIFICATIONS: Certificate[] = [
  {
    id: "iso-9001",
    image: "/certificates/iso-9001.jpg",
    badge: "TÜV INDIA",
    emblems: ["TÜV", "IAF"],
    docTitle: "Certificate — Management System",
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    issuer: "TÜV INDIA Pvt. Ltd. · TÜV NORD Group · IAF-accredited (NABCB)",
    certNo: "Registration No. IND 100 26397490 · Valid through 11 July 2029",
    scope: "Weld & assembly parts of wind-mill tubular towers · heavy structural fabrication",
    accent: "#0f4c92",
  },
  {
    id: "iso-14001",
    image: "/certificates/iso-14001.jpg",
    badge: "TÜV INDIA",
    emblems: ["TÜV", "IAF"],
    docTitle: "Certificate — Management System",
    title: "ISO 14001:2015",
    subtitle: "Environmental Management System",
    issuer: "TÜV INDIA Pvt. Ltd. · TÜV NORD Group · IAF-accredited (NABCB)",
    certNo: "Registration No. IND 104 26397490 · Valid 12.07.2026 – 11.07.2029",
    scope: "Manufacturing of weld and assembly parts of wind-mill tubular tower and heavy structural fabrication work",
    accent: "#1f7a3d",
  },
  {
    id: "iso-45001",
    image: "/certificates/iso-45001.jpg",
    badge: "TÜV INDIA",
    emblems: ["TÜV", "IAF"],
    docTitle: "Certificate — Management System",
    title: "ISO 45001:2018",
    subtitle: "Occupational Health & Safety Management System",
    issuer: "TÜV INDIA Pvt. Ltd. · TÜV NORD Group · IAF-accredited (NABCB)",
    // TODO(verify): re-check registration number & validity dates on the physical ISO 45001 certificate scan.
    accent: "#c05621",
  },
  {
    id: "iso-3834",
    image: "/certificates/iso-3834.jpg",
    badge: "UK CERT",
    emblems: ["UKC", "IAF"],
    docTitle: "Certificate of Conformity — Welding Quality",
    title: "ISO 3834-2:2021",
    subtitle: "Fusion Welding Quality · WPS / PQR / Welder Quals",
    issuer: "Accredited Issuing Body: UK Cert · welders certified under AWS D1.1 / ASME Section IX",
    certNo: "Certificate No. UQ-2026060531",
    scope: "Calibrated & audited welding quality management for structural fabrication",
    accent: "#1e3a5f",
  },
  {
    id: "en-1090",
    image: "/certificates/en-1090.jpg",
    badge: "UK CERT",
    emblems: ["EXC", "CE"],
    docTitle: "Certificate of Conformity — Structural Steel Execution",
    title: "EN 1090-2:2018 (EXC-3)",
    subtitle: "Execution of Steel Structures & Towers",
    issuer: "Accredited Issuing Body: UK Cert · factory production control audited",
    certNo: "Certificate No. UQ-2026060530 · Execution Class 3 (EXC-3)",
    scope: "Welded structural components · wind towers · heavy assemblies · CE-marked structural steelwork",
    accent: "#3f6212",
  },
  {
    id: "msme",
    image: "/certificates/msme.jpg",
    badge: "Government of India",
    emblems: ["UD", "GoI"],
    docTitle: "Udyam Registration Certificate",
    title: "MSME Registered",
    subtitle: "Micro Enterprise · Manufacturing",
    issuer: "Ministry of MSME, Government of India",
    certNo: "Udyam No. UDYAM-GJ-01-0067561 · GIDC Kathwada, Ahmedabad",
    accent: "#9f1239",
  },
  {
    id: "gst",
    image: "/certificates/gst.jpg",
    badge: "GST Network",
    emblems: ["GST", "IN"],
    docTitle: "Goods & Services Tax Registration",
    title: "GST Registered",
    subtitle: "Active taxpayer · regular filings",
    issuer: "State: Gujarat (24)",
    certNo: "GSTIN 24CIVPP0310F1ZF",
    accent: "#4338ca",
  },
  {
    id: "iec",
    image: "/certificates/iec.jpg",
    badge: "DGFT · GoI",
    emblems: ["DG", "FT"],
    docTitle: "Import – Export Code",
    title: "IEC Registered",
    subtitle: "Import–Export Code · export capable",
    issuer: "DGFT, Government of India",
    certNo: "IEC No. CIVPP0310F",
    accent: "#0e7490",
  },
];

export const QUALITY_QUOTE = "Every production run adheres strictly to client-approved Quality Assurance Plans, material test traceability (MTC 3.1), EN 1090 EXC-3 execution standards and digital dimensional inspection.";

export const WHY_US = [
  {
    title: "Dual-Unit Capacity",
    desc: "12,000+ m² across Kathwada and Kuha — parallel production lines that keep lead times honest.",
    icon: "Factory",
  },
  {
    title: "12,000W Laser Power",
    desc: "The highest fiber laser power in Gujarat cuts 40 mm mild steel in a single pass.",
    icon: "Zap",
  },
  {
    title: "Tube + Sheet Under One Roof",
    desc: "A 6,000W tube laser beside two sheet lasers — complete cutting scope, zero subcontracting.",
    icon: "Layers",
  },
  {
    title: "Multi-ISO Certified",
    desc: "ISO 9001, 14001 & 45001-certified, with ISO 3834-2 welding control and EN 1090 EXC-3 structural execution — audited end to end.",
    icon: "Award",
  },
  {
    title: "Export Capable",
    desc: "IEC-registered with export packing, documentation and QC discipline for international OEMs.",
    icon: "Ship",
  },
  {
    title: "End-to-End Service",
    desc: "Cutting, forming, machining, welding, finishing and assembly — one PO, one accountable partner.",
    icon: "Workflow",
  },
] as const;

export type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  caption: string;
};

export const GALLERY_CATEGORIES = [
  "All",
  "Wind Tower Internals",
  "Heavy Structural Fabrication",
  "Laser Cutting",
  "Structural Steel / PEB",
  "Skid & Machine Base",
  "Tanks & Process Equipment",
  "CNC Machining",
  "Decorative Screens",
  "General Fabrication",
  "Facilities",
];

export const GALLERY: GalleryItem[] = [
  { src: "/images/gallery/3.jpg", alt: "Chequered plate circular wind tower internal platform", category: "Wind Tower Internals", caption: "Wind tower internal platform — chequered plate, plasma-cut periphery" },
  { src: "/images/gallery/4.jpg", alt: "Circular platform with access hatch assembly", category: "Wind Tower Internals", caption: "Internal platform with welded access hatch — tower section" },
  { src: "/images/gallery/5.jpg", alt: "Large circular platform floor in fabrication bay", category: "Wind Tower Internals", caption: "Full-diameter tower platform under assembly" },
  { src: "/images/gallery/6.jpg", alt: "Circular safety railing ring weldment", category: "Wind Tower Internals", caption: "Circular handrail ring — tube bent and welded" },
  { src: "/images/gallery/7.jpg", alt: "Platform with vertical ladder cage", category: "Wind Tower Internals", caption: "Platform with caged ladder — internal tower access" },
  { src: "/images/gallery/11.jpg", alt: "Galvanised circular platform with ladder", category: "Wind Tower Internals", caption: "Galvanised platform with ladder — ready for dispatch" },
  { src: "/images/gallery/12.jpg", alt: "Galvanised platform with handrail and hatch", category: "Wind Tower Internals", caption: "Galvanised platform — handrail, hatch and chequered floor" },
  { src: "/images/gallery/13.jpg", alt: "Galvanised platform with tubular handrail", category: "Wind Tower Internals", caption: "Hot-dip galvanised platform with tubular railing" },
  { src: "/images/gallery/14.jpg", alt: "Chequered platform section with grating panels", category: "Wind Tower Internals", caption: "Platform section with grating walkway inserts" },
  { src: "/images/gallery/31.jpg", alt: "Stainless steel ladder and platform inside a vessel", category: "Wind Tower Internals", caption: "SS internal ladder & platform set inside tower shell" },
  { src: "/images/gallery/43.jpg", alt: "Yellow grating walkway platforms with handrails", category: "Wind Tower Internals", caption: "Grating walkway platforms with safety handrails" },
  { src: "/images/gallery/20.jpg", alt: "Heavy painted box girder in fabrication bay", category: "Heavy Structural Fabrication", caption: "Heavy box girder — welded, straightened and painted" },
  { src: "/images/gallery/28.jpg", alt: "Painted fabricated plate girders stacked", category: "Heavy Structural Fabrication", caption: "Fabricated plate girders — primer coated, ready for erection" },
  { src: "/images/gallery/29.jpg", alt: "Drilled and machined structural beams", category: "Heavy Structural Fabrication", caption: "CNC-drilled beam assemblies for structural erection" },
  { src: "/images/gallery/30.jpg", alt: "Painted heavy girders with cleats", category: "Heavy Structural Fabrication", caption: "Plate girders with welded cleats — final grey coat" },
  { src: "/images/gallery/41.jpg", alt: "Long welded plate girders in work shop", category: "Heavy Structural Fabrication", caption: "Long-span plate girders in final fabrication" },
  { src: "/images/gallery/1.jpg", alt: "Perforated cable tray channel, laser cut", category: "Laser Cutting", caption: "Laser-cut cable tray channel — burr-free perforations" },
  { src: "/images/gallery/15.jpg", alt: "Laser-cut decorative jali panel on laser bed", category: "Laser Cutting", caption: "Decorative jali panel fresh off the fiber laser" },
  { src: "/images/gallery/33.jpg", alt: "Laser-cut perforated sheet patterns", category: "Laser Cutting", caption: "Perforated sheet patterns — high-speed fiber laser" },
  { src: "/images/gallery/44.jpg", alt: "Laser-cut and profiled precision plate", category: "Laser Cutting", caption: "Profiled precision plate — laser-cut contours" },
  { src: "/images/gallery/47.jpg", alt: "Laser head cutting tube with sparks", category: "Laser Cutting", caption: "Tube laser in action — sparks on round section" },
  { src: "/images/gallery/57.jpg", alt: "Fiber laser cutting machine in shop", category: "Laser Cutting", caption: "Fiber laser cutting line — full sheet capacity" },
  { src: "/images/gallery/59.jpg", alt: "Close-up of tube laser cutting with sparks", category: "Laser Cutting", caption: "Close-up: tube laser pierce and cut" },
  { src: "/images/gallery/61.jpg", alt: "Laser cutting machine bed with exchange table", category: "Laser Cutting", caption: "Laser bed with exchange table — continuous production" },
  { src: "/images/gallery/67.jpg", alt: "Laser cutting bed with support serrations", category: "Laser Cutting", caption: "Cutting zone — serrated supports for sheet nesting" },
  { src: "/images/gallery/71.jpg", alt: "Laser machine with full sheet loaded", category: "Laser Cutting", caption: "Full sheet loaded — fiber laser ready to run" },
  { src: "/images/gallery/73.jpg", alt: "Operator programming laser cutting machine", category: "Laser Cutting", caption: "Nesting & programming at the laser control" },
  { src: "/images/gallery/9.jpg", alt: "PEB steel building frame under erection", category: "Structural Steel / PEB", caption: "PEB frame erection — columns, rafters and purlins" },
  { src: "/images/gallery/19.jpg", alt: "PEB structure erection with brick walls", category: "Structural Steel / PEB", caption: "Pre-engineered building steel on site" },
  { src: "/images/gallery/26.jpg", alt: "Erected PEB columns on foundations", category: "Structural Steel / PEB", caption: "PEB columns bolted to anchor foundations" },
  { src: "/images/gallery/27.jpg", alt: "PEB building frame with workers erecting", category: "Structural Steel / PEB", caption: "Site crew tightening rafters on PEB frame" },
  { src: "/images/gallery/42.jpg", alt: "Complete PEB steel skeleton", category: "Structural Steel / PEB", caption: "Complete PEB skeleton — columns, rafters, bracing" },
  {
    src: "/images/gallery-peb.webp",
    alt: "Pre-engineered steel building frame with lattice trusses",
    category: "Structural Steel / PEB",
    caption: "PEB frame — columns, rafters and lattice trusses",
  },
  { src: "/images/gallery/8.jpg", alt: "Long welded machine base frames", category: "Skid & Machine Base", caption: "Machine base skids — box weldments in jig" },
  { src: "/images/gallery/10.jpg", alt: "Heavy long skid frame weldment", category: "Skid & Machine Base", caption: "Long skid base — squared and stress-relieved" },
  { src: "/images/gallery/39.jpg", alt: "Painted long base frames on shop floor", category: "Skid & Machine Base", caption: "Machine base frames — primed for final coat" },
  { src: "/images/gallery/18.jpg", alt: "Galvanised flanged pipe", category: "Tanks & Process Equipment", caption: "Galvanised flanged pipe — fabricated and tested" },
  { src: "/images/gallery/21.jpg", alt: "Stainless steel helical coil assemblies", category: "Tanks & Process Equipment", caption: "SS helical coils for process heating duty" },
  { src: "/images/gallery/22.jpg", alt: "Welded flanged pipe column", category: "Tanks & Process Equipment", caption: "Fabricated pipe spool with flanged ends" },
  { src: "/images/gallery/23.jpg", alt: "Tapered pipe being welded on rollers", category: "Tanks & Process Equipment", caption: "Circumferential welding on turning rolls" },
  { src: "/images/gallery/24.jpg", alt: "Stainless steel process tank on legs", category: "Tanks & Process Equipment", caption: "SS process tank — pickled and passivated" },
  { src: "/images/gallery/25.jpg", alt: "Stainless condenser tank on welded sub-assembly", category: "Tanks & Process Equipment", caption: "SS condenser assembly on fabricated mount" },
  { src: "/images/gallery/32.jpg", alt: "Stainless steel hopper sheet metal box", category: "Tanks & Process Equipment", caption: "SS hopper — folded, welded and dressed" },
  { src: "/images/gallery/37.jpg", alt: "Transformer tank weldment", category: "Tanks & Process Equipment", caption: "Transformer tank — leak-tested weldment" },
  { src: "/images/gallery/38.jpg", alt: "Red process oven with blower", category: "Tanks & Process Equipment", caption: "Process oven with blower — fabricated shell" },
  { src: "/images/gallery/40.jpg", alt: "Large fabricated duct pipe in shop", category: "Tanks & Process Equipment", caption: "Large-diameter duct — rolled, welded, stiffened" },
  { src: "/images/gallery/45.jpg", alt: "Machined aluminium housing block", category: "CNC Machining", caption: "VMC-machined housing — 3-axis finish" },
  { src: "/images/gallery/46.jpg", alt: "Precision machined flanged components", category: "CNC Machining", caption: "Turned & machined flanged components" },
  { src: "/images/gallery/16.jpg", alt: "MAHAS LOKA laser-cut corten signage", category: "Decorative Screens", caption: "Custom signage — laser-cut lettering on corten" },
  { src: "/images/gallery/17.jpg", alt: "Decorative laser-cut jali panels", category: "Decorative Screens", caption: "Architectural jali panels — repeated geometric cut" },
  { src: "/images/gallery/2.jpg", alt: "Welded mesh guard enclosure frame", category: "General Fabrication", caption: "Mesh guard enclosure — welded frame with expanded metal" },
  { src: "/images/gallery/34.jpg", alt: "Red industrial oven enclosure fabrication", category: "General Fabrication", caption: "Industrial oven enclosure — double-door, insulated" },
  { src: "/images/gallery/49.jpg", alt: "Red fire bucket stands with FIRE buckets", category: "General Fabrication", caption: "Fire bucket stands — painted and stencilled" },
  { src: "/images/gallery/50.jpg", alt: "Fire extinguisher with safety sign board", category: "General Fabrication", caption: "Fire extinguisher stand with safety signage" },
  { src: "/images/gallery/68.jpg", alt: "Grey sliding gate with VLEER branding", category: "General Fabrication", caption: "Fabricated sliding main gate — powder coated" },
  { src: "/images/gallery/72.jpg", alt: "Large sliding gate with logo plate", category: "General Fabrication", caption: "Main gate with branded infill panel" },
  { src: "/images/gallery/35.jpg", alt: "Laser cutting shop floor", category: "Facilities", caption: "Unit shop floor — laser bays and plate storage" },
  { src: "/images/gallery/36.jpg", alt: "Surface treatment booth in shed", category: "Facilities", caption: "In-house finishing booth" },
  { src: "/images/gallery/48.jpg", alt: "Warehouse with EOT cranes", category: "Facilities", caption: "Fabrication hall with EOT cranes" },
  { src: "/images/gallery/51.jpg", alt: "Factory building exterior", category: "Facilities", caption: "Manufacturing unit — exterior" },
  { src: "/images/gallery/52.jpg", alt: "Warehouse interior with cranes", category: "Facilities", caption: "Production hall — crane-served bays" },
  { src: "/images/gallery/53.jpg", alt: "Warehouse interior with material lanes", category: "Facilities", caption: "Floor marking and material lanes" },
  { src: "/images/gallery/54.jpg", alt: "Assembly hall interior", category: "Facilities", caption: "Assembly hall — clear-span steel structure" },
  { src: "/images/gallery/55.jpg", alt: "Factory sheds exterior", category: "Facilities", caption: "Unit sheds — loading access" },
  { src: "/images/gallery/56.jpg", alt: "Office building exterior", category: "Facilities", caption: "Corporate office block" },
  { src: "/images/gallery/58.jpg", alt: "Cabin office inside production shed", category: "Facilities", caption: "Supervisor cabin on the shop floor" },
  { src: "/images/gallery/60.jpg", alt: "Tandem press brake machines", category: "Facilities", caption: "Tandem CNC press brakes — 500T combined" },
  { src: "/images/gallery/62.jpg", alt: "Fabrication hall with cranes", category: "Facilities", caption: "Fabrication bay — EOT crane coverage" },
  { src: "/images/gallery/63.jpg", alt: "Raw material storage area signage", category: "Facilities", caption: "Raw material storage — segregated by grade" },
  { src: "/images/gallery/64.jpg", alt: "Integrated management system policy board", category: "Facilities", caption: "ISO integrated management system policy" },
  { src: "/images/gallery/65.jpg", alt: "Warehouse exterior with rolling shutters", category: "Facilities", caption: "Storage shed — rolling shutter access" },
  { src: "/images/gallery/66.jpg", alt: "Section and plate bending machine", category: "Facilities", caption: "Section bending machine — rolls for rings & cones" },
  { src: "/images/gallery/69.jpg", alt: "MS plates stacked in storage", category: "Facilities", caption: "Plate stock — certified mill material" },
  { src: "/images/gallery/70.jpg", alt: "Raw material storage racks", category: "Facilities", caption: "Racked raw material — easy identification" },
];

export const SERVICE_OPTIONS = [
  "CNC Fiber Laser Cutting",
  "Tube Laser Cutting",
  "Press Brake Bending",
  "CNC / VMC Machining",
  "Welding & Fabrication",
  "Structural Fabrication",
  "Sheet Metal Fabrication",
  "Process Equipment",
  "Wind Energy Internals",
  "Power Transmission Towers",
];
