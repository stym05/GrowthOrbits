/** Editable services-overview content. Update scope and commercial language as offers evolve. */
export const servicesOverviewContent = {
  hero: {
    eyebrow: "Growth services",
    title: "One focused system for creating better B2B conversations.",
    description:
      "Choose the capability that solves today’s constraint or connect all three into an accountable pipeline programme built around your market, offer, and sales motion.",
    primaryAction: { label: "Find your starting point", href: "#service-options" },
    secondaryAction: { label: "Discuss a pilot", href: "/book-a-call" },
    centre: { label: "Shared outcome", value: "Qualified pipeline" },
    orbit: [
      { number: "01", label: "Appointment setting", detail: "Create sales conversations" },
      { number: "02", label: "Lead generation", detail: "Build the prospecting engine" },
      { number: "03", label: "Account-based marketing", detail: "Focus on strategic accounts" },
    ],
  },
  services: [
    {
      number: "01",
      eyebrow: "Flagship service",
      title: "Appointment Setting",
      copy: "Put relevant, qualified conversations on your sales team’s calendar through precise targeting, human research, thoughtful outreach, and clear qualification.",
      bestFor: "Teams with sales capacity that need a steadier flow of well-contextualised meetings.",
      outcome: "Qualified conversations with agreed handoff context.",
      capabilities: ["ICP and account definition", "Contact and buying-group research", "Multichannel outreach", "Response handling and qualification"],
      href: "/services/appointment-setting",
    },
    {
      number: "02",
      eyebrow: "Pipeline foundation",
      title: "B2B Lead Generation",
      copy: "Create a repeatable route from defined market to sales opportunity by connecting research, data quality, prospecting, message testing, and qualification.",
      bestFor: "Teams entering a market, launching an offer, or strengthening an inconsistent prospecting motion.",
      outcome: "A clearer, repeatable prospecting engine with market learning.",
      capabilities: ["Market and segment prioritisation", "Verified prospect intelligence", "Campaign message development", "Lead qualification and reporting"],
      href: "/services/b2b-lead-generation",
    },
    {
      number: "03",
      eyebrow: "Strategic account focus",
      title: "Account-Based Marketing",
      copy: "Coordinate relevant attention across a deliberately small set of high-value accounts, buying groups, business signals, and tailored sales plays.",
      bestFor: "Teams pursuing strategic accounts where value and complexity justify deeper personalisation.",
      outcome: "More coordinated engagement inside accounts that matter most.",
      capabilities: ["Priority-account selection", "Buying-group mapping", "Account-specific message plays", "Sales and marketing coordination"],
      href: "/services/account-based-marketing",
    },
  ],
  comparison: {
    eyebrow: "Choose with confidence",
    title: "Different constraints need different starting points.",
    rows: [
      { label: "Primary need", values: ["More qualified meetings", "A repeatable pipeline engine", "Progress in priority accounts"] },
      { label: "Typical scope", values: ["Focused ICP and personas", "Defined segments and regions", "Named strategic accounts"] },
      { label: "Main motion", values: ["Research, outreach, qualification", "Market build and campaign learning", "Account and buying-group plays"] },
      { label: "Core outcome", values: ["Sales-ready conversations", "Qualified opportunity creation", "Coordinated account engagement"] },
    ],
  },
  foundations: {
    eyebrow: "Shared foundations",
    title: "Whichever service you choose, quality starts in the same place.",
    description: "The operating standards that keep strategy, execution, and sales handoff connected.",
    items: [
      { number: "01", title: "ICP-led targeting", copy: "Prioritise accounts using fit, value, market context, and agreed commercial criteria." },
      { number: "02", title: "Human-verified research", copy: "Validate people, account detail, and useful context before outreach begins." },
      { number: "03", title: "Coordinated outreach", copy: "Build one relevant narrative across email, LinkedIn, and calling touchpoints." },
      { number: "04", title: "Transparent learning", copy: "Track responses, qualification, pipeline movement, and what should change next." },
    ],
  },
  decision: {
    eyebrow: "Not sure which service fits?",
    title: "Start with the pipeline constraint—not the service label.",
    copy: "Bring us your market, offer, sales capacity, and current bottleneck. We’ll identify the narrowest useful pilot and make the trade-offs clear.",
    action: { label: "Find the right pilot", href: "/book-a-call" },
  },
} as const;
