export const siteConfig = {
  name: "Growth Orbit",
  tagline: "Outbound growth, built around the right conversations.",
  description:
    "Growth Orbits helps B2B teams build predictable pipeline through research-led appointment setting, lead generation, and account-based marketing.",
  email: "hello@growthorbits.example",
  phone: "+44 20 0000 0000",
  location: "London, United Kingdom",
  linkedin: "#",
  socialLinks: [
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "X", href: "#", icon: "x" },
    { label: "Instagram", href: "#", icon: "instagram" },
  ],
} as const;

export const navigation = [
  {
    label: "Solutions",
    href: "/services",
    children: [
      /*{ label: "Solutions overview", href: "/services" },*/
      { label: "B2B Appointment Setting", href: "/services/appointment-setting" },
      { label: "B2B Lead Generation", href: "/services/b2b-lead-generation" },
      { label: "Account-Based Marketing(ABM)", href: "/services/account-based-marketing" },
    ],
  },
  { label: "Industries", href: "/who-we-serve" },
  {
    label: "Company",
    href: "/about/our-story",
    children: [
      { label: "Our story", href: "/about/our-story" },
      { label: "Leadership team", href: "/about/founder-team" },
      { label: "Our approach", href: "/about/how-we-work" },
      { label: "Careers", href: "/about/careers" },
    ],
  },
  {
    label: "Insights",
    href: "/resources/insights",
    children: [
      { label: "FAQs", href: "/resources/faq" },
      { label: "Blogs", href: "/resources/blogs" },
      { label: "Case Studies", href: "/resources/insights" },
    ],
  },
] as const;

export const footerNavigation = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "B2B Appointment setting", href: "/services/appointment-setting" },
      { label: "B2B Lead generation", href: "/services/b2b-lead-generation" },
      { label: "Account-based marketing", href: "/services/account-based-marketing" },
    ],
  },
  {
    label: "Industries We Help Grow",
    href: "/who-we-serve",
    children: [
      { label: "IT Services and Consulting", href: "/who-we-serve" },
      { label: "Software Product Engineering", href: "/who-we-serve" },
      { label: "SaaS Product", href: "/who-we-serve" },
      { label: "Cybersecurity", href: "/who-we-serve" },
    ],
  },
  {
    label: "Company",
    href: "/about/our-story",
    children: [
      { label: "Our story", href: "/about/our-story" },
      { label: "Leadership Team", href: "/about/founder-team" },
      { label: "Our approach", href: "/about/how-we-work" },
      { label: "Careers", href: "/about/careers" },
    ],
  },
  {
    label: "Insights",
    href: "/resources/insights",
    children: [
      { label: "FAQs", href: "/resources/faq" },
      { label: "Blogs", href: "/resources/blogs" },
      { label: "Case Studies", href: "/resources/insights" },
    ],
  },
] as const;

export const services = [
  {
    number: "01",
    slug: "appointment-setting",
    title: "Appointment Setting",
    description:
      "Put qualified conversations on your sales team's calendar with ICP-led targeting, human research, and thoughtful multichannel outreach.",
    href: "/services/appointment-setting",
    accent: "teal",
  },
  {
    number: "02",
    slug: "b2b-lead-generation",
    title: "B2B Lead Generation",
    description:
      "Create a repeatable prospecting engine that identifies the right accounts, verifies decision-makers, and opens relevant sales opportunities.",
    href: "/services/b2b-lead-generation",
    accent: "navy",
  },
  {
    number: "03",
    slug: "account-based-marketing",
    title: "Account-Based Marketing",
    description:
      "Coordinate highly targeted campaigns around priority accounts, buying groups, and the business problems most likely to create action.",
    href: "/services/account-based-marketing",
    accent: "gold",
  },
] as const;

export const operatingPrinciples = [
  { value: "ICP-first", label: "Targeting starts with fit, not list volume." },
  { value: "Human-led", label: "Research and quality checks before outreach." },
  { value: "Multi-channel", label: "Email, LinkedIn, and calling work together." },
  { value: "Transparent", label: "Clear activity, learning, and pipeline reporting." },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Define the market",
    copy: "Align on your ICP, buying committee, priority regions, offer, qualification rules, and campaign goals.",
  },
  {
    number: "02",
    title: "Research the accounts",
    copy: "Build a focused account universe and verify the people, signals, and context behind each opportunity.",
  },
  {
    number: "03",
    title: "Shape the message",
    copy: "Create outreach around buyer problems, business triggers, and a clear reason to start a conversation.",
  },
  {
    number: "04",
    title: "Launch and learn",
    copy: "Run coordinated sequences, qualify engagement, and improve targeting and messaging using campaign evidence.",
  },
] as const;

export const audiences = [
  {
    title: "IT Services and Consulting",
    copy: "Helping IT providers reach the right businesses, engage key stakeholders, and generate qualified sales opportunities.",
  },
  {
    title: "Software Product Engineering",
    copy: "Supporting software engineering companies in connecting with organizations looking for development and technology solutions.",
  },
  {
    title: "SaaS Product",
    copy: "Helping SaaS companies identify ideal customers, reach decision-makers, and accelerate customer acquisition.",
  },
  {
    title: "Cybersecurity",
    copy: "Enabling cybersecurity companies to connect with organizations facing security challenges and reach the stakeholders responsible for technology decisions.",
  },
] as const;

export const sampleEngagements = [
  {
    label: "Example engagement",
    title: "SaaS market expansion",
    copy: "A focused pilot for a B2B SaaS team entering the UK: account selection, persona mapping, message testing, and qualified demo booking.",
    outcome: "Illustrative scope — replace with verified case study before launch.",
  },
  {
    label: "Example engagement",
    title: "IT services pipeline build",
    copy: "A multichannel campaign aimed at technology leaders in mid-market firms, supported by account research and weekly learning reviews.",
    outcome: "Illustrative scope — replace with verified case study before launch.",
  },
] as const;

export const resources = [
  {
    type: "Guide",
    readTime: "7 min read",
    title: "How to build an ICP for B2B outbound",
    excerpt: "A practical framework for narrowing the market before investing in outreach.",
    href: "/resources/blogs",
  },
  {
    type: "Insight",
    readTime: "5 min read",
    title: "Appointment setting vs. lead generation",
    excerpt: "Where each discipline starts, where it ends, and how to choose the right engagement.",
    href: "/resources/insights",
  },
  {
    type: "Playbook",
    readTime: "8 min read",
    title: "A better multichannel sequence",
    excerpt: "Build coherent email, LinkedIn, and calling touchpoints without creating noise.",
    href: "/resources/blogs",
  },
] as const;

export const faqs = [
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

export type ContentCard = {
  title: string;
  copy: string;
  meta?: string;
};

export type ContentSection = {
  eyebrow?: string;
  title: string;
  copy?: string;
  bullets?: readonly string[];
  cards?: readonly ContentCard[];
  theme?: "light" | "soft" | "navy";
};

export type ContentPage = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  sections: readonly ContentSection[];
  form?: "contact" | "pilot";
};

const sharedDeliveryCards: readonly ContentCard[] = [
  { title: "ICP-led targeting", copy: "Prioritize accounts based on fit, market context, and agreed commercial criteria." },
  { title: "Human-verified research", copy: "Validate the people and account detail that automated data alone often misses." },
  { title: "Coordinated outreach", copy: "Build one clear narrative across email, LinkedIn, and calling touchpoints." },
  { title: "Transparent reporting", copy: "Track activity, responses, qualification, learning, and pipeline contribution." },
];

export const contentPages: readonly ContentPage[] = [
  {
    path: "services",
    eyebrow: "Growth services",
    title: "One focused system for creating better B2B conversations.",
    description: "Compare appointment setting, B2B lead generation, and account-based marketing to find the right starting point for your pipeline.",
    sections: [],
  },
  {
    path: "services/appointment-setting",
    eyebrow: "Flagship service",
    title: "Qualified meetings with the buyers your team actually wants to meet.",
    description: "A research-led appointment setting programme designed around your ICP, qualification rules, and sales capacity.",
    sections: [
      {
        eyebrow: "The problem",
        title: "Your closers should not spend their best hours building lists.",
        copy: "Growth Orbits handles the work before the meeting: target selection, contact research, message development, outreach, response handling, and qualification.",
        bullets: ["Reduce low-fit meetings", "Create a steadier flow of relevant conversations", "Protect sales time for discovery and closing", "Learn what resonates in each market"],
      },
      { eyebrow: "What is included", title: "A complete appointment-setting workflow", cards: sharedDeliveryCards, theme: "soft" },
      {
        eyebrow: "Handoff",
        title: "Every meeting arrives with context.",
        copy: "Your team receives the account, contact, campaign history, qualification notes, and agreed next step so the conversation can start intelligently.",
        theme: "navy",
      },
    ],
  },
  {
    path: "services/b2b-lead-generation",
    eyebrow: "B2B lead generation",
    title: "Build a reliable path from target account to sales opportunity.",
    description: "Research, prospecting, outreach, and qualification designed for complex B2B buying journeys.",
    sections: [
      {
        eyebrow: "Approach",
        title: "Quality starts before the first message.",
        copy: "We narrow the market, verify the data, define the buying group, and create a relevant outreach thesis before campaign execution begins.",
        cards: sharedDeliveryCards,
      },
      {
        eyebrow: "Use cases",
        title: "Where lead generation creates leverage",
        bullets: ["Entering a new geography", "Launching a new B2B offer", "Supporting an under-capacity sales team", "Reactivating a focused dormant-account list", "Building pipeline around a priority vertical"],
        theme: "soft",
      },
    ],
  },
  {
    path: "services/account-based-marketing",
    eyebrow: "Account-based marketing",
    title: "Create coordinated attention inside the accounts that matter most.",
    description: "An ABM programme built around priority accounts, buying groups, relevant signals, and tailored messages.",
    sections: [
      {
        eyebrow: "Account focus",
        title: "Treat strategic accounts like markets of one.",
        copy: "Map the buying group, identify relevant business context, and coordinate messaging that gives each stakeholder a credible reason to engage.",
        cards: [
          { title: "Account selection", copy: "Score target accounts against fit, value, timing, and available signals." },
          { title: "Buying-group mapping", copy: "Identify decision-makers, champions, evaluators, and likely blockers." },
          { title: "Personalized plays", copy: "Adapt the message and asset mix to the account and stakeholder context." },
          { title: "Sales alignment", copy: "Coordinate outreach, follow-up, ownership, and account learning with your team." },
        ],
      },
    ],
  },
  {
    path: "who-we-serve",
    eyebrow: "Who we serve",
    title: "Built for B2B teams where every conversation needs to count.",
    description: "Growth Orbits works with companies selling valuable software, technology, or expertise to clearly defined business audiences.",
    sections: [],
  },
  {
    path: "about/our-story",
    eyebrow: "Our story",
    title: "Growth should be systematic without becoming mechanical.",
    description: "Growth Orbits was conceived as a research-led outbound partner for B2B companies that value relevance, rigor, and long-term pipeline quality.",
    sections: [
      {
        eyebrow: "Why Growth Orbits",
        title: "The name reflects the operating idea.",
        copy: "Strong growth systems create repeatable motion around a clear center: the right market, the right problem, and the right customer conversation. Every programme is designed to reinforce that orbit.",
      },
      {
        eyebrow: "Status",
        title: "An early-stage company profile",
        copy: "This website currently uses example company information. Founder biographies, verified history, office details, and customer evidence must be added before public launch.",
        theme: "soft",
      },
    ],
  },
  {
    path: "about/founder-team",
    eyebrow: "Founder & team",
    title: "The specialist team behind better B2B conversations.",
    description: "Meet the sample founder and specialist team model behind Growth Orbits. Names, biographies, roles, and portraits are ready to replace before launch.",
    sections: [
      {
        eyebrow: "Team model",
        title: "The roles behind a strong outbound programme",
        cards: [
          { title: "Strategy lead", copy: "Owns ICP alignment, campaign direction, review cadence, and commercial outcomes." },
          { title: "Research specialist", copy: "Builds account intelligence, validates contacts, and surfaces usable context." },
          { title: "Campaign specialist", copy: "Runs outreach, handles responses, and maintains quality across channels." },
          { title: "Quality & reporting", copy: "Reviews handoffs, maintains standards, and turns campaign evidence into action." },
        ],
      },
    ],
  },
  {
    path: "about/how-we-work",
    eyebrow: "How we work · Why Growth Orbits",
    title: "A clearer way to turn market focus into qualified pipeline.",
    description: "Explore the principles, operating phases, collaboration model, delivery standards, and evidence-led approach behind Growth Orbits.",
    sections: [],
  },
  {
    path: "about/careers",
    eyebrow: "Careers",
    title: "Do thoughtful work with people who care about the details.",
    description: "Explore the culture, future opportunities, and working principles behind the team Growth Orbits is building.",
    sections: [],
  },
  {
    path: "resources/insights",
    eyebrow: "Insights",
    title: "Practical thinking for better B2B pipeline decisions.",
    description: "Example articles ready to move into a CMS when the editorial programme begins.",
    sections: [
      { eyebrow: "Latest", title: "Seed topics", cards: resources.map((item) => ({ title: item.title, copy: item.excerpt, meta: item.type })) },
    ],
  },
  {
    path: "resources/blogs",
    eyebrow: "Growth Orbits blog",
    title: "Useful thinking for teams building B2B pipeline.",
    description: "Practical Growth Orbits articles about targeting, outbound, qualification, sales handoff, and campaign learning.",
    sections: [],
  },
  {
    path: "resources/faq",
    eyebrow: "Frequently asked questions",
    title: "Clear answers for a more useful first conversation.",
    description: "Explore how Growth Orbits approaches targeting, campaign delivery, qualification, reporting, systems, and working together.",
    sections: [],
  },
  {
    path: "contact",
    eyebrow: "Contact",
    title: "Tell us what you are trying to grow.",
    description: "Share your market, offer, and current pipeline challenge. This demo form is ready to connect to a production email workflow.",
    sections: [],
    form: "contact",
  },
  {
    path: "book-a-call",
    eyebrow: "Strategy conversation",
    title: "Bring the pipeline challenge. Leave with a clearer next move.",
    description: "A focused conversation to understand your market, identify the real constraint, and decide on a sensible next step.",
    sections: [],
    form: "contact",
  },
  {
    path: "pilot",
    eyebrow: "Pilot programme",
    title: "Validate the market before committing to scale.",
    description: "A focused pilot aligns targeting, messaging, channels, qualification, and reporting around one measurable market hypothesis.",
    sections: [
      {
        eyebrow: "Pilot structure",
        title: "Designed to create evidence",
        cards: [
          { title: "Narrow scope", copy: "One clear offer, audience, geography, and campaign objective." },
          { title: "Defined standards", copy: "Agreed data, message, qualification, and handoff requirements." },
          { title: "Learning cadence", copy: "Regular reviews of responses, objections, opportunities, and changes." },
          { title: "Scale decision", copy: "A grounded decision to expand, refine, pause, or change direction." },
        ],
      },
    ],
    form: "pilot",
  },
  {
    path: "thank-you",
    eyebrow: "Message received",
    title: "Thank you for contacting Growth Orbits.",
    description: "This is the post-submission confirmation page. Response-time copy should be updated when the operating team is in place.",
    sections: [],
  },
  {
    path: "privacy",
    eyebrow: "Legal",
    title: "Privacy policy",
    description: "Placeholder policy structure. Replace with counsel-reviewed language before collecting production data.",
    sections: [
      { title: "Data collected", copy: "Contact details and message content submitted through website forms, together with essential technical logs required for security and delivery." },
      { title: "Purpose", copy: "To respond to enquiries, operate the website, prevent abuse, and improve service delivery. No production analytics or marketing trackers are enabled in this starter." },
      { title: "Retention and rights", copy: "Define retention periods, processor details, regional rights, and request procedures with qualified legal counsel before launch." },
    ],
  },
  {
    path: "terms",
    eyebrow: "Legal",
    title: "Terms of use",
    description: "Placeholder website terms. Replace with jurisdiction-specific legal language before launch.",
    sections: [
      { title: "Website use", copy: "The website is provided for general information and does not create a client relationship or guarantee commercial outcomes." },
      { title: "Intellectual property", copy: "Define ownership of brand assets, articles, downloads, and other materials before publication." },
      { title: "Liability", copy: "Add counsel-reviewed limitations, governing law, and dispute terms appropriate to the operating entity." },
    ],
  },
  {
    path: "gdpr",
    eyebrow: "Compliance",
    title: "GDPR information",
    description: "A launch checklist for lawful data handling; not a substitute for legal advice or a finalized compliance programme.",
    sections: [
      { title: "Lawful basis", copy: "Document the lawful basis for enquiry handling, B2B outreach, marketing communications, and CRM processing." },
      { title: "Processor controls", copy: "Execute appropriate agreements with hosting, email, CRM, scheduling, analytics, and data providers." },
      { title: "Operational controls", copy: "Implement request handling, retention schedules, access controls, breach procedures, and records of processing." },
    ],
  },
  {
    path: "sitemap",
    eyebrow: "Sitemap",
    title: "Explore Growth Orbits.",
    description: "A human-readable index of the website structure.",
    sections: [
      {
        title: "Primary pages",
        cards: [
          { title: "Services", copy: "Appointment setting, B2B lead generation, and account-based marketing." },
          { title: "Who we serve", copy: "B2B SaaS, technology services, cybersecurity, and professional services." },
          { title: "About", copy: "Story, team model, working method, differentiators, and careers." },
          { title: "Resources", copy: "FAQs, blog articles, practical insights, and growth frameworks." },
        ],
      },
    ],
  },
] as const;

export function getContentPage(path: string): ContentPage | undefined {
  return contentPages.find((page) => page.path === path);
}
