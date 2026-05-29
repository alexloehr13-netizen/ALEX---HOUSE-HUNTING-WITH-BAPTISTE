import { FAQItem, PainPoint, BlueprintRow, ValueStackItem } from "./types";

export const PAIN_POINTS: PainPoint[] = [
  {
    id: "tax-trap",
    numberLabel: "01",
    title: "The Hidden Tax Trap",
    description: "Unexpected local purchasing taxes, land registry files, and multi-layered municipal surcharges can silently inflate your purchase cost by up to 15% on day one."
  },
  {
    id: "preservation",
    numberLabel: "02",
    title: "Historical Preservation Rules",
    description: "Strict regional exterior covenants dictate exactly which materials, finishes, and paint shades can be used. Getting unauthorized work done triggers massive fines."
  },
  {
    id: "contractors",
    numberLabel: "03",
    title: "The Contractor Runaround",
    description: "Sourcing, quoting, and managing local renovation crews without local connections often leads to endless delays, bloated budgets, and subpar craftsmanship."
  }
];

export const BLUEPRINT_ROWS: BlueprintRow[] = [
  {
    id: "part-1",
    volume: "PART I",
    title: "The Property Purchasing Blueprint",
    subtitle: "Surviving Notaries, Bureaucrats, and Legal Traps",
    description: "Your comprehensive roadmap to identifying legitimate structures, making initial written offers, understanding real estate power structures, and ensuring your contracts are bulletproof.",
    checklist: [
      "Securing the right local tax numbers without wasting days in Government hallways",
      "Vetting the '$1 Home' programs—and calculating the actual price of admission",
      "The Exact timeline of the Notary process from primary Deposit to Key Handover",
      "How to negotiate down standard agent fees and find off-market listings"
    ],
    isLeft: true,
    topicIconName: "notary"
  },
  {
    id: "part-2",
    volume: "PART II",
    title: "The Renovation & Living Reality",
    subtitle: "Cost Estimators, Crew Sourcing, and Residency",
    description: "A boots-on-the-ground action plan for estimating accurate local material schedules, securing permits for ancient stone walls, and planning your European immigration timeline correctly.",
    checklist: [
      "The true cost per square meter for plumbing, wiring, and structural timber frames",
      "Step-by-step screening list to vet contractors and guarantee milestones",
      "Residency, visa pathways, and long-term tax residency guidelines for expats",
      "Sourcing quality local reclaimed materials that satisfy historical inspectors"
    ],
    isLeft: false,
    topicIconName: "contractor"
  }
];

export const VALUE_STACK_ITEMS: ValueStackItem[] = [
  {
    id: "val-1",
    title: "The Core eBook: The Real Cost of Buying a Cheap House in Europe",
    value: 29.99,
    description: "The complete 95-page first-year budget guide detailing hidden notary fees, property evaluation traps, and closing taxes."
  },
  {
    id: "bonus-1",
    title: "Bonus I: The Pre-Viewing Due Diligence Checklist",
    value: 15,
    badge: "CRITICAL PREP",
    description: "32 checkpoints to scan during your first walkthrough before ever making an offer."
  },
  {
    id: "bonus-2",
    title: "Bonus II: The European Renovation Budget Calculator",
    value: 20,
    badge: "FINANCIAL TOOL",
    description: "Our offline cost spreadsheet pre-configured for traditional European material averages."
  },
  {
    id: "bonus-3",
    title: "Bonus III: The Expat Resource & Contacts Directory",
    value: 19,
    badge: "EXPAT DIRECTORY",
    description: "A hand-curated directory of English-speaking real estate lawyers, translation firms, and expats."
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Is this ebook only for people ready to buy right now?",
    answer: "No. This ebook is designed for anyone seriously considering buying property in Europe, whether you are ready to make an offer soon or just starting to explore the idea. It helps you understand the real costs early, so you do not waste time falling in love with homes that may be far more expensive than they look."
  },
  {
    id: "faq-2",
    question: "Does the ebook cover the hidden costs beyond the listing price?",
    answer: "Yes. The guide is built around the “true first-year cost” of ownership. It covers closing costs, notary fees, agency commissions, legal help, inspections, repairs, utilities, insurance, taxes, travel, setup costs, and emergency buffers, so you can estimate what a property may actually cost after you get the keys."
  },
  {
    id: "faq-3",
    question: "Will this help me avoid buying a cheap house that becomes a money pit?",
    answer: "Yes. The ebook includes checklists and red flags for older European homes, including roofs, septic systems, wiring, plumbing, damp, heating, insulation, renovation permits, and structural issues. It helps you know what questions to ask before making an offer and when a low price may actually be a warning sign."
  },
  {
    id: "faq-4",
    question: "Does this ebook explain visa and expat issues for foreign buyers?",
    answer: "Yes. The guide explains one of the biggest misunderstandings foreign buyers have: buying a house in Europe does not automatically give you the right to live there full-time. It covers the basic issues around non-EU buyers, the 90/180 Schengen rule, long-stay visas, tax residency, healthcare, currency exchange, translators, lawyers, and property managers."
  }
];
