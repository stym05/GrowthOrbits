export const workPhases = [
  {
    number: "01",
    timing: "Week 01",
    title: "Align the orbit",
    copy: "Turn commercial goals into one shared campaign brief: market, offer, buyer roles, qualification rules, and success measures.",
    outcome: "A focused campaign thesis everyone can explain.",
    activities: ["ICP workshop", "Offer and proof review", "Qualification rules"],
  },
  {
    number: "02",
    timing: "Weeks 01–02",
    title: "Build the system",
    copy: "Research the account universe, map priority roles, shape the message, and connect campaign activity to your sales workflow.",
    outcome: "A launch-ready audience, message, and handoff process.",
    activities: ["Account research", "Message development", "CRM and handoff setup"],
  },
  {
    number: "03",
    timing: "From week 03",
    title: "Launch with control",
    copy: "Release outreach in measured waves, check quality closely, and respond to early market signals before increasing volume.",
    outcome: "Useful evidence without putting your brand at risk.",
    activities: ["Quality assurance", "Multichannel launch", "Response handling"],
  },
  {
    number: "04",
    timing: "Every week",
    title: "Learn and compound",
    copy: "Review account fit, engagement, objections, and meeting quality—then turn those findings into the next campaign decision.",
    outcome: "A programme that becomes more relevant over time.",
    activities: ["Learning review", "Campaign optimisation", "Pipeline feedback"],
  },
] as const;

export const collaborationModel = {
  client: [
    "Share product, customer, and market context",
    "Give timely feedback on messages and meetings",
    "Run prepared discovery conversations",
  ],
  growthOrbits: [
    "Own research, targeting, and campaign quality",
    "Manage outreach, replies, and qualification",
    "Surface clear learning and recommended actions",
  ],
} as const;

export const weeklyRhythm = [
  { label: "Monday", title: "Priorities", copy: "Confirm focus accounts and planned tests." },
  { label: "Midweek", title: "Signals", copy: "Share meaningful replies and buyer context." },
  { label: "Friday", title: "Learning", copy: "Review evidence, objections, and quality." },
  { label: "Next cycle", title: "Action", copy: "Apply decisions to the next campaign wave." },
] as const;

export const deliveryStandards = [
  { number: "01", title: "Visible work", copy: "You can see what is happening, why it matters, and what comes next." },
  { number: "02", title: "Shared definitions", copy: "Fit, qualification, and success are agreed before campaign activity begins." },
  { number: "03", title: "Human judgement", copy: "Automation supports the workflow; people remain accountable for relevance and quality." },
] as const;
