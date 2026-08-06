export const workPhases = [
  {
    number: "01",
    timing: "Week 01",
    title: "Align around the market",
    copy: "Turn commercial goals into one shared campaign brief covering the market, offer, buyer roles, qualification rules, brand boundaries, and success measures.",
    outcome: "A focused campaign thesis with shared definitions.",
    activities: ["ICP workshop", "Offer and proof review", "Qualification rules"],
  },
  {
    number: "02",
    timing: "Weeks 01–02",
    title: "Build the campaign system",
    copy: "Research the account universe, validate buying groups, shape the message, and connect campaign activity to your existing sales workflow.",
    outcome: "A launch-ready audience, message, and handoff process.",
    activities: ["Account research", "Message development", "CRM and handoff setup"],
  },
  {
    number: "03",
    timing: "From week 03",
    title: "Launch with care",
    copy: "Release outreach in measured waves, check quality closely, and respond to early market signals before increasing volume.",
    outcome: "Useful evidence without putting your brand at risk.",
    activities: ["Quality assurance", "Multichannel launch", "Response handling"],
  },
  {
    number: "04",
    timing: "Every week",
    title: "Learn, decide, improve",
    copy: "Review account fit, engagement, objections, and meeting quality—then turn those findings into the next campaign decision.",
    outcome: "A programme that becomes more relevant over time.",
    activities: ["Learning review", "Campaign optimisation", "Pipeline feedback"],
  },
] as const;

export const modelPrinciples = [
  {
    number: "01",
    title: "Fit before volume",
    copy: "The first question is whether an account is worth pursuing—not how many names can be added to a sequence.",
    signal: "Sharper account selection",
  },
  {
    number: "02",
    title: "Context before contact",
    copy: "Research and buyer context shape the reason to reach out, so activity begins with relevance rather than a template.",
    signal: "More credible outreach",
  },
  {
    number: "03",
    title: "Quality before scale",
    copy: "Early campaign waves stay deliberately controlled until targeting, messaging, qualification, and handoff are working together.",
    signal: "Lower brand risk",
  },
  {
    number: "04",
    title: "Evidence before opinion",
    copy: "Responses, objections, meeting quality, and pipeline feedback decide what changes next—not activity theatre or instinct alone.",
    signal: "Compounding market learning",
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
  { number: "01", title: "Visible work", copy: "See what is happening, why it matters, what the market is saying, and what comes next." },
  { number: "02", title: "Shared definitions", copy: "Fit, qualification, handoff, and success are agreed before campaign activity begins." },
  { number: "03", title: "Human judgement", copy: "Automation supports the workflow; people remain accountable for relevance, tone, and quality." },
  { number: "04", title: "Useful handoffs", copy: "Every accepted conversation arrives with the account context and qualification detail sales needs." },
] as const;

export const fitProfile = {
  goodFit: [
    "A valuable B2B offer with a definable ideal customer profile",
    "Sales capacity to run thoughtful discovery and follow-up",
    "A willingness to share customer context and campaign feedback",
    "A practical pilot window with measurable learning goals",
  ],
  poorFit: [
    "A volume-at-any-cost target with no account-quality threshold",
    "An unproven offer that still needs fundamental product validation",
    "No internal owner for approvals, sales follow-up, or feedback",
    "A requirement to automate every interaction without human review",
  ],
} as const;
