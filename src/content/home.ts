/**
 * Editable homepage content.
 * Replace sample wording and illustrative labels here without changing page components.
 */
export const homeHero = {
  eyebrow: "B2B LEAD GENERATION & APPOINTMENT SETTING",
  title: "Fill Your Sales Pipeline With Qualified Sales Meetings.",
  description:
    "Growth Orbits helps B2B companies connect with the right decision-makers through targeted outbound campaigns and strategic appointment setting, delivering more qualified meetings and a predictable sales pipeline.",
  primaryAction: { label: "Book a Strategy Call", href: "/book-a-call" },
  secondaryAction: { label: "Explore our services", href: "/services" },
  designedFor: ["B2B SaaS", "Technology", "Cybersecurity", "Professional services"],
} as const;

export const homeServices = {
  titleLead: "Solutions for",
  titleAccent: "Predictable B2B Growth",
  description:
    "Research, outreach, and optimization work together to turn prospects into qualified meetings.",
  items: [
    {
      number: "01",
      title: "Appointment Setting",
      description:
        "Fill your sales pipeline with qualified meetings. We engage your ideal prospects and book high-value appointments directly into your team's calendar.",
      href: "/services/appointment-setting",
      image: "/services/appointment-setting.jpg",
      imageAlt: "Abstract orange and blue forms converging at a single point",
    },
    {
      number: "02",
      title: "B2B Lead Generation",
      description:
        "Reach the right companies, connect with decision-makers, and build a consistent pipeline of qualified opportunities ready for your sales team.",
      href: "/services/b2b-lead-generation",
      image: "/services/b2b-lead-generation.jpg",
      imageAlt: "Abstract luminous data waves representing connected prospects",
    },
    {
      number: "03",
      title: "Account-Based Marketing",
      description:
        "Win your highest-value accounts with precision. We deliver personalized, multi-channel campaigns that engage key stakeholders and accelerate enterprise deals.",
      href: "/services/account-based-marketing",
      image: "/services/account-based-marketing.jpg",
      imageAlt: "Abstract violet orbital rings focused around a central point",
    },
  ],
} as const;

export const homeProcess = {
  title: "Four simple steps. One connected process. Better results with every campaign.",
  description:
    "Our step-by-step system keeps your targeting, research, messaging, outreach, and sales team working together to generate better results.",
  steps: [
    {
      number: "01",
      title: "Define the Market",
      description:
        "We identify your ideal customers, the right decision-makers, and business goals so every campaign starts with a clear direction.",
    },
    {
      number: "02",
      title: "Research the Accounts",
      description:
        "We build a list of the right companies, find the key decision-makers, and gather useful insights before reaching out.",
    },
    {
      number: "03",
      title: "Shape the Message",
      description:
        "We create clear, personalized messages that focus on your prospects' needs and give them a reason to respond.",
    },
    {
      number: "04",
      title: "Launch and Learn",
      description:
        "We launch your campaigns, track what works, and use those insights to improve future outreach and results.",
    },
  ],
} as const;

export const homeTestimonials = {
  title: "What Working With Growth Orbits Looks Like",
  description: "Real growth stories from B2B teams building stronger sales pipelines.",
  items: [
    {
      quote:
        "Growth Orbits helped us create a clear outbound strategy for entering the UK market. Their team helped us identify the right accounts, map decision-makers, refine our messaging, and start conversations with potential customers who matched our ideal profile.",
      name: "Daniel Carter",
      role: "VP of Growth",
      image: "/testimonials/daniel-carter.jpg",
    },
    {
      quote:
        "We needed a more predictable way to reach technology leaders. Growth Orbits brought structure to our outreach by researching accounts, connecting with the right stakeholders, and continuously improving our campaigns based on performance insights.",
      name: "Sarah Mitchell",
      role: "Head of Business Development",
      image: "/testimonials/sarah-mitchell.jpg",
    },
    {
      quote:
        "Growth Orbits helped us reach the right security leaders and create a more focused approach to outbound sales. Their team combined account research, personalized messaging, and consistent follow-ups to help us build meaningful conversations with potential customers.",
      name: "Michael Reynolds",
      role: "Director of Sales",
      image: "/testimonials/michael-reynolds.jpg",
    },
  ],
} as const;

export const homeResources = {
  title: "Blogs, Case Studies, and strategies to help you build a stronger B2B pipeline.",
  description:
    "Explore practical insights on lead generation, account-based marketing, sales outreach, and pipeline growth. Our resources help B2B teams find the right prospects, engage decision-makers, and create more meaningful sales conversations.",
  items: [
    {
      title: "In-House SDR vs. Outsourced Appointment Setting: Which Approach Is Right for Your Business?",
      description:
        "Building a sales pipeline requires the right people, process, and strategy. Learn the key differences between hiring an in-house SDR team and partnering with an outsourced appointment setting company—including costs, scalability, expertise, and time-to-results.",
      href: "/resources/blogs",
    },
    {
      title: "How to Build an Ideal Customer Profile (ICP) for Better B2B Tech Sales",
      description:
        "A strong ICP helps your sales team focus on the companies most likely to convert. Learn how to define your ideal customers, identify buying signals, understand decision-makers, and create more targeted B2B outreach campaigns.",
      href: "/resources/blogs",
    },
  ],
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
