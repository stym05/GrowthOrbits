export const b2bLeadGenerationPage = {
  eyebrow: "B2B lead generation",
  title: "A steady flow of sales-ready leads, not just a bigger list.",
  description:
    "Growth Orbits runs outbound lead generation end to end from targeted account research, multichannel outreach, and human qualification — so your pipeline fills with real conversations, not names to chase.",
  deliverables: {
    title: "What our B2B lead generation service delivers",
    description:
      "We research the right accounts, reach the real decision-makers, and qualify interest — then hand your team sales-ready leads with full context.",
    items: [
      "A clean, targeted list of your best-fit accounts and buyers.",
      "Multichannel outreach that starts real conversations.",
      "Qualified, sales-ready leads — not raw contacts.",
      "Transparent weekly reporting on pipeline and results.",
    ],
  },
  problem: {
    eyebrow: "The problem",
    title: "More leads isn't the goal. The right ones are.",
    description:
      "Most lead generation floods your reps with contacts that never convert — bought lists, low-intent form-fills, and outreach that reads like spam. Your team burns hours chasing ghosts. We do the opposite: fewer, better leads that actually fit your ICP and are ready to talk.",
  },
  included: {
    eyebrow: "What's included",
    title: "How our outbound lead generation works",
    items: [
      { number: "01", title: "ICP & offer alignment", description: "We pin down exactly who to target and why they'll care." },
      { number: "02", title: "Account & contact research", description: "We build and verify a clean, targeted list of the right buyers." },
      { number: "03", title: "Multichannel outreach", description: "Email, LinkedIn and phone in one coordinated sequence — not siloed blasts." },
      { number: "04", title: "Qualification", description: "We separate genuine interest from noise, so only real leads pass through." },
      { number: "05", title: "Sales-ready handoff", description: "Qualified leads go straight to your team or CRM, with full context." },
    ],
  },
} as const;

export const appointmentSettingProblem = {
  eyebrow: "The problem",
  title: "Most appointment settings sell you volume, not meetings that convert.",
  description:
    "Booking a lot of calls is easy. Booking the right ones is the hard part. When appointment setters chase calendar targets, your reps end up in meetings with poor-fit prospects and no context, burning time and goodwill.",
  answer: "We do the opposite: fewer, better meetings your team is genuinely glad to take.",
  image: "/careers/team-collaboration.jpg",
  imageAlt: "A team discussing sales opportunities around a table",
} as const;

export const appointmentSettingPilot = {
  title: "Start with a low-risk pilot.",
  descriptionStart: "Run a focused ",
  descriptionEmphasis: "4–6 week pilot",
  descriptionEnd:
    " to validate meeting quality and results before committing long-term. Once proven, scale into a monthly programme with an agreed meeting target.",
  action: { label: "Book a Demo", href: "/book-a-call" },
} as const;

export const appointmentSettingAudience = {
  eyebrow: "Who it's for",
  title: "Built for B2B teams with complex, considered sales.",
  description:
    "We partner with private-sector B2B companies across industries — wherever the deal is high-value, involves more than one decision-maker, and deserves a real conversation.",
  industries: [
    { code: "SaaS", name: "B2B SaaS" },
    { code: "IT", name: "Technology & IT Services" },
    { code: "SEC", name: "Cybersecurity" },
    { code: "FIN", name: "Fintech & Financial Services" },
    { code: "MFG", name: "Manufacturing & Industrial" },
    { code: "HLS", name: "Healthcare & Life Sciences" },
    { code: "PRO", name: "Professional Services & Consulting" },
    { code: "LOG", name: "Logistics & Supply Chain" },
    { code: "MKT", name: "Marketing, Media & AdTech" },
    { code: "TEL", name: "Telecom" },
    { code: "HR", name: "HR, Staffing & RecTech" },
    { code: "RET", name: "eCommerce & Retail Tech" },
  ],
} as const;

export const appointmentSettingFaq = [
  {
    question: "What is B2B appointment setting?",
    answer:
      "B2B appointment setting is the process of identifying, contacting and qualifying potential business buyers, then scheduling sales meetings between them and your team — so your reps focus on selling, not prospecting.",
  },
  {
    question: "How is appointment setting different from lead generation?",
    answer:
      "Lead generation fills the top of your funnel with interested contacts; appointment setting goes further and books a confirmed meeting on your calendar with a qualified decision-maker.",
  },
  {
    question: "How quickly will we see booked meetings?",
    answer:
      "Most clients see their first qualified meetings within the first few weeks of the pilot, once ICP and messaging are aligned.",
  },
  {
    question: "How much do appointment setting services cost?",
    answer:
      "Pricing depends on your target market and meeting volume. Most clients start with a fixed-fee pilot, then move to a monthly retainer tied to an agreed number of qualified meetings.",
  },
  {
    question: "Which regions do you cover?",
    answer:
      "We run outbound across North America, the UK, Europe and APAC, adapting messaging and timing to each market.",
  },
] as const;

export const serviceDetails = {
  "appointment-setting": {
    number: "01",
    eyebrow: "B2B appointment setting",
    title: "B2B appointment setting that books meetings your team actually wants.",
    description: "Growth Orbits is a B2B appointment setting company. Our research-led programme is built around your ICP, qualification rules, and sales capacity, so you get qualified meetings, not just calendar volume.",
    visual: { centre: "Sales-ready conversation", nodes: ["Right account", "Relevant problem", "Agreed next step"] },
    signals: ["ICP-led targeting", "Human response handling", "Context-rich handoff"],
    snapshot: [
      { value: "Fit first", label: "Every account starts with agreed commercial criteria." },
      { value: "Human-led", label: "Research, outreach, and qualification retain judgement." },
      { value: "Sales ready", label: "Meetings arrive with context and a reason to talk." },
    ],
    challenge: {
      eyebrow: "The constraint",
      title: "Your closers should not spend their best hours building lists.",
      copy: "When senior sellers own every prospecting task, pipeline becomes inconsistent and valuable sales time disappears into research, admin, and low-fit outreach.",
      points: ["Too much sales time lost before the first conversation", "Meeting volume that hides weak account or problem fit", "Inconsistent follow-up across email, LinkedIn, and calling", "Little usable learning when prospects do not engage"],
      answer: "Growth Orbits owns the work before the meeting while keeping qualification and handoff aligned to the way your team sells.",
    },
    scope: {
      eyebrow: "What it delivers",
      title: "What our B2B appointment setting service delivers",
      description: "We combine targeted research, multichannel outreach, and human qualification to book sales-ready meetings with decision-makers who match your ICP, then hand each one over with full context.",
      items: [
        { number: "01", title: "What you get", copy: "Qualified meetings booked straight onto your calendar." },
        { number: "02", title: "What every engagement delivers", copy: "Real decision-makers — not junior gatekeepers." },
        { number: "03", title: "What to expect from us", copy: "Full context before every call." },
        { number: "04", title: "Meetings, done properly", copy: "Transparent weekly reporting on activity and results." },
      ],
    },
    process: [
      { number: "01", title: "Agree the standard", copy: "Define what counts as a qualified conversation before activity begins." },
      { number: "02", title: "Build the market", copy: "Research accounts and the people most likely to care about the problem." },
      { number: "03", title: "Create engagement", copy: "Launch, manage replies, and adapt the message using real market evidence." },
      { number: "04", title: "Handoff and learn", copy: "Brief sales, review meeting quality, and feed outcomes into the campaign." },
    ],
    handoff: {
      eyebrow: "The handoff standard",
      title: "Every meeting should arrive with a useful story.",
      copy: "Your seller receives enough context to start intelligently rather than repeat the prospecting conversation from the beginning.",
      includes: ["Account and contact context", "Relevant need or trigger", "Outreach and response history", "Qualification notes", "Confirmed date and agreed next step"],
      cardLabel: "Illustrative handoff",
      cardTitle: "From booked slot to prepared conversation",
      cardCopy: "Replace this sample with your CRM fields, qualification criteria, and routing workflow during onboarding.",
    },
    cta: { title: "Ready for meetings your team actually wants to take?", copy: "Book a strategy call, we'll map your ICP and show you how we'd fill your calendar with qualified meetings." },
  },
  "b2b-lead-generation": {
    number: "02",
    eyebrow: b2bLeadGenerationPage.eyebrow,
    title: b2bLeadGenerationPage.title,
    description: b2bLeadGenerationPage.description,
    visual: { centre: "Repeatable pipeline", nodes: ["Defined market", "Verified demand", "Qualified opportunity"] },
    signals: ["Market prioritisation", "Verified prospect data", "Campaign learning"],
    snapshot: [
      { value: "Narrowed", label: "Segments are prioritised before contact volume grows." },
      { value: "Connected", label: "Research, messaging, channels, and qualification work together." },
      { value: "Repeatable", label: "Learning becomes a stronger prospecting motion over time." },
    ],
    challenge: {
      eyebrow: "The constraint",
      title: "More names do not create a pipeline engine.",
      copy: "Lead generation breaks down when teams buy broad data, run disconnected campaigns, and pass interest without a shared definition of quality.",
      points: ["Large lists with weak segment or buying-role logic", "Data decay that erodes trust before outreach begins", "Campaign activity disconnected from sales follow-up", "Reporting that counts leads without explaining pipeline movement"],
      answer: "Growth Orbits connects market definition, data quality, outreach, qualification, and reporting so each campaign strengthens the next.",
    },
    scope: {
      eyebrow: "What is included",
      title: "The foundations of a repeatable prospecting engine.",
      description: "The programme creates pipeline while building a clearer understanding of the audience, message, and route to opportunity.",
      items: [
        { number: "01", title: "Market prioritisation", copy: "Score sectors, segments, regions, and account types against commercial fit." },
        { number: "02", title: "Prospect intelligence", copy: "Verify accounts, decision-makers, buying roles, and relevant business context." },
        { number: "03", title: "Campaign development", copy: "Shape message hypotheses and coordinated channel sequences around real problems." },
        { number: "04", title: "Qualification & reporting", copy: "Progress interest, document quality, and connect campaign learning to pipeline." },
      ],
    },
    process: [
      { number: "01", title: "Prioritise", copy: "Choose the market slice most likely to produce useful evidence." },
      { number: "02", title: "Prepare", copy: "Build reliable data, persona logic, message angles, and qualification rules." },
      { number: "03", title: "Activate", copy: "Run coordinated prospecting and manage engagement across the journey." },
      { number: "04", title: "Improve", copy: "Review conversion, objections, quality, and pipeline movement to refine the engine." },
    ],
    handoff: {
      eyebrow: "Opportunity progression",
      title: "Qualification should create clarity, not another inbox.",
      copy: "Interested prospects are progressed against agreed criteria and routed with enough evidence for sales to choose the right follow-up.",
      includes: ["ICP and persona fit", "Engagement source and history", "Problem or initiative identified", "Timing and next-step signal", "CRM-ready notes and ownership"],
      cardLabel: "Illustrative workflow",
      cardTitle: "From response to accountable opportunity",
      cardCopy: "Replace this sample with your lifecycle stages, CRM definitions, SLAs, and sales ownership rules.",
    },
    cta: { title: "Turn market focus into a prospecting system that learns.", copy: "Start with the segment, offer, and pipeline constraint that matter most now." },
  },
  "account-based-marketing": {
    number: "03",
    eyebrow: "Strategic account focus",
    title: "Create coordinated attention inside the accounts that matter most.",
    description: "An account-based programme built around priority companies, buying groups, relevant signals, and tailored plays—not superficial personalisation.",
    visual: { centre: "Account momentum", nodes: ["Priority account", "Buying group", "Coordinated play"] },
    signals: ["Deliberate account selection", "Stakeholder coverage", "Sales alignment"],
    snapshot: [
      { value: "Focused", label: "Effort is concentrated where account value justifies depth." },
      { value: "Relevant", label: "Messages reflect the account, role, and business context." },
      { value: "Coordinated", label: "Sales and marketing act on one shared account picture." },
    ],
    challenge: {
      eyebrow: "The constraint",
      title: "Strategic accounts cannot be treated like larger list entries.",
      copy: "High-value opportunities stall when only one contact is known, outreach is generic, and sales and marketing act without a shared view of the account.",
      points: ["Named-account lists without clear selection logic", "Single-threaded relationships inside complex buying groups", "Personalisation based on trivia rather than business context", "Disconnected outreach, follow-up, and account ownership"],
      answer: "Growth Orbits creates a coordinated account picture and turns it into relevant plays across the stakeholders who shape the decision.",
    },
    scope: {
      eyebrow: "What is included",
      title: "An account programme designed for depth.",
      description: "Each play connects account selection, stakeholder logic, relevant evidence, and coordinated action with your sales team.",
      items: [
        { number: "01", title: "Account selection", copy: "Prioritise accounts using fit, value, timing, strategic relevance, and available signals." },
        { number: "02", title: "Buying-group mapping", copy: "Identify decision-makers, champions, evaluators, users, and likely blockers." },
        { number: "03", title: "Tailored account plays", copy: "Build messaging and assets around account context and stakeholder priorities." },
        { number: "04", title: "Sales coordination", copy: "Align ownership, outreach, follow-up, intelligence capture, and next actions." },
      ],
    },
    process: [
      { number: "01", title: "Select", copy: "Agree which accounts justify deeper investment and why." },
      { number: "02", title: "Map", copy: "Build the account narrative, buying group, signals, and relationship picture." },
      { number: "03", title: "Orchestrate", copy: "Coordinate relevant plays across stakeholders, channels, and sales actions." },
      { number: "04", title: "Progress", copy: "Track coverage, engagement, account movement, and the next best action." },
    ],
    handoff: {
      eyebrow: "The account view",
      title: "Give sales one picture of the opportunity.",
      copy: "Account intelligence is organised around people, priorities, engagement, relationships, and agreed next actions—not scattered campaign activity.",
      includes: ["Account thesis and priority", "Buying-group roles and coverage", "Relevant signals and initiatives", "Engagement by stakeholder", "Ownership and next-best actions"],
      cardLabel: "Illustrative account brief",
      cardTitle: "From named account to coordinated pursuit",
      cardCopy: "Replace this sample with your account tiers, CRM fields, sales ownership, and opportunity governance model.",
    },
    cta: { title: "Give priority accounts the focus their value deserves.", copy: "Start with a deliberately small account set and one clear commercial objective." },
  },
} as const;

export type ServiceDetailKey = keyof typeof serviceDetails;
export type ServiceDetail = (typeof serviceDetails)[ServiceDetailKey];
