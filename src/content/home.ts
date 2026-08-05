/**
 * Editable homepage content.
 * Replace sample wording and illustrative labels here without changing page components.
 */
export const homeHero = {
  video: {
    src: "/videos/home-cinematic.mp4",
    sourceFile: "7669069-uhd_2560_1440_25fps.mp4",
    note: "User-supplied homepage background video, optimized to 960×540 for web delivery.",
  },
  eyebrow: "B2B pipeline development",
  title: "Turn the right accounts into qualified sales conversations.",
  description:
    "Growth Orbits combines targeted research, personalized outreach, and appointment setting to help B2B teams build a more predictable pipeline.",
  primaryAction: { label: "Book a strategy call", href: "/book-a-call" },
  secondaryAction: { label: "Explore our services", href: "/services" },
  signalFlow: [
    { number: "01", label: "One shared ICP" },
    { number: "02", label: "Three coordinated channels" },
    { number: "03", label: "One learning loop" },
  ],
  designedFor: ["B2B SaaS", "Technology", "Cybersecurity", "Professional services"],
} as const;

export const orbitVisualContent = {
  status: "Live campaign system",
  centre: { label: "Qualified", value: "Conversation" },
  stages: [
    {
      number: "01",
      label: "Target account",
      value: "ICP matched",
      detail: "Sector · Region · Fit",
      className: "card-account",
    },
    {
      number: "02",
      label: "Relevant outreach",
      value: "Buyer context found",
      detail: "Email · LinkedIn · Call",
      className: "card-message",
    },
    {
      number: "03",
      label: "Sales handoff",
      value: "Meeting brief ready",
      detail: "Need · Timing · Next step",
      className: "card-meeting",
    },
  ],
  rhythm: ["Research", "Outreach", "Learning"],
} as const;

export const campaignQualityLoop = {
  eyebrow: "Built for signal, not noise",
  title: "Your sales team needs context, not another spreadsheet.",
  description:
    "Growth Orbits is designed to move from precise account selection to relevant buyer engagement and a useful sales handoff. Activity is only valuable when it creates learning or opportunity.",
  label: "Campaign quality loop",
  rhythm: "Repeat · refine · compound",
  steps: [
    { number: "01", title: "Fit", question: "Is this account worth pursuing?" },
    { number: "02", title: "Relevance", question: "Why should this buyer care now?" },
    { number: "03", title: "Qualification", question: "Is there a real reason to meet?" },
    { number: "04", title: "Learning", question: "What should change next?" },
  ],
} as const;

export const sampleEngagementPresentation = {
  eyebrow: "Engagement examples",
  title: "Show the commercial story without inventing proof.",
  description:
    "These cards demonstrate the future case-study format and are explicitly marked as illustrative until verified customer evidence is available.",
} as const;
