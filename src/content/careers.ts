/**
 * Editable careers-page content.
 * Roles, benefits, locations, and hiring steps are sample data until confirmed.
 */
export const careersContent = {
  hero: {
    eyebrow: "Careers at Growth Orbits",
    title: "Do thoughtful work with people who care about the details.",
    description:
      "We are building a small, high-trust team for better B2B growth—curious researchers, clear communicators, and commercially minded operators who would rather create relevance than noise.",
    primaryAction: { label: "Join our talent network", href: "#future-roles" },
    secondaryAction: { label: "How we work", href: "/about/how-we-work" },
    image: "/careers/team-collaboration.jpg",
    imageAlt: "A diverse team collaborating around a table in a bright studio",
    signals: ["Small team", "High ownership", "Human-led growth"],
  },
  culture: {
    eyebrow: "The environment",
    title: "Ambitious without the theatre.",
    description:
      "Our best work happens when people have context, room to think, and the confidence to challenge a weak assumption. We keep the team close to the customer problem and make decisions with evidence—not hierarchy.",
    image: "/careers/working-session.jpg",
    imageAlt: "Two colleagues reviewing campaign research beside a window",
    quote: "Bring a point of view. Leave room for a better one.",
    principles: [
      {
        number: "01",
        title: "Clarity over complexity",
        copy: "Make the goal, decision, owner, and next step easy for everyone to understand.",
      },
      {
        number: "02",
        title: "Care before scale",
        copy: "Protect customer trust and campaign quality before adding more activity.",
      },
      {
        number: "03",
        title: "Evidence over ego",
        copy: "Test the idea, share what changed, and let useful signals improve the work.",
      },
      {
        number: "04",
        title: "Own the handoff",
        copy: "Your work is only complete when the next person has the context to succeed.",
      },
    ],
  },
  experience: {
    eyebrow: "What you can expect",
    title: "A practical place to grow your craft.",
    items: [
      {
        title: "Meaningful ownership",
        copy: "Work on clear commercial problems and see how your decisions affect campaign quality and customer outcomes.",
        meta: "Responsibility",
      },
      {
        title: "Frequent feedback",
        copy: "Use compact reviews, call listening, message analysis, and customer context to improve the work each week.",
        meta: "Development",
      },
      {
        title: "Focused flexibility",
        copy: "Plan independent deep work around reliable team rhythms, documented decisions, and responsive collaboration.",
        meta: "Ways of working",
      },
      {
        title: "A visible learning path",
        copy: "Build depth in your discipline while learning how research, strategy, outreach, and sales handoff connect.",
        meta: "Progression",
      },
    ],
    note: "Benefits, working locations, and employment terms will be published with each confirmed role.",
  },
  futureRoles: {
    eyebrow: "Future opportunities",
    title: "The capabilities we expect to build next.",
    description:
      "These are talent areas—not active vacancies. They show the kind of team Growth Orbits is designed to become and can be replaced with confirmed job listings later.",
    roles: [
      {
        discipline: "Research",
        title: "Account Research Specialist",
        copy: "Turn market criteria into accurate account intelligence, verified buying groups, and useful commercial context.",
        skills: ["Commercial curiosity", "Data quality", "Structured research"],
      },
      {
        discipline: "Delivery",
        title: "Campaign Growth Partner",
        copy: "Coordinate thoughtful multichannel campaigns, qualify responses, and turn weekly evidence into better execution.",
        skills: ["Clear communication", "Campaign judgement", "Customer care"],
      },
      {
        discipline: "Strategy",
        title: "B2B Growth Strategist",
        copy: "Connect ICP choices, buyer problems, messaging, and sales outcomes into a focused market plan.",
        skills: ["B2B positioning", "Experiment design", "Commercial thinking"],
      },
    ],
  },
  hiring: {
    eyebrow: "A respectful process",
    title: "Enough signal for both sides to make a good decision.",
    steps: [
      { number: "01", title: "Intro conversation", copy: "Your goals, relevant experience, and what you want from the next chapter." },
      { number: "02", title: "Practical discussion", copy: "A realistic work scenario discussed together—never free client work." },
      { number: "03", title: "Meet the team", copy: "Explore working styles, expectations, questions, and the role's real context." },
      { number: "04", title: "Clear decision", copy: "A prompt answer, useful feedback where possible, and transparent next steps." },
    ],
  },
  openApplication: {
    status: "No live openings right now",
    title: "Good people are worth meeting before the job description exists.",
    copy: "If our direction fits your craft, introduce yourself through the contact page. Tell us what you are unusually good at, the work you want to do next, and include a profile or portfolio link.",
    action: { label: "Introduce yourself", href: "/contact" },
  },
} as const;
