/**
 * Editable FAQ content. Confirm commercial, legal, and delivery details before launch.
 */
export const resourceFaqContent = {
  hero: {
    eyebrow: "Growth Orbits FAQ",
    title: "Clear answers for a more useful first conversation.",
    description:
      "Explore how targeting, campaign delivery, qualification, reporting, and working together are designed to operate.",
    primaryAction: { label: "Discuss your market", href: "/book-a-call" },
    secondaryAction: { label: "Explore services", href: "/services" },
    highlights: [
      { value: "04", label: "Topics covered" },
      { value: "12", label: "Practical answers" },
      { value: "1", label: "Shared campaign view" },
    ],
    popular: [
      { label: "Most asked", question: "What makes an appointment qualified?", href: "#qualification" },
      { label: "Getting started", question: "How quickly can a pilot launch?", href: "#launch-timing" },
      { label: "Ways of working", question: "Can you work with our CRM?", href: "#crm-integration" },
    ],
  },
  categories: [
    {
      slug: "services",
      number: "01",
      title: "Services & fit",
      description: "Where Growth Orbits fits, what the services include, and how to choose a starting point.",
      questions: [
        {
          id: "service-choice",
          question: "Which service should we start with?",
          answer:
            "The right starting point depends on the constraint. Appointment setting fits teams that need qualified conversations; lead generation strengthens the prospecting engine; account-based marketing supports a smaller set of strategically important accounts. Discovery is used to identify the narrowest useful starting scope.",
        },
        {
          id: "industry-fit",
          question: "Which businesses are the best fit?",
          answer:
            "The model is designed for B2B companies selling considered, higher-value solutions where account fit, buyer context, and conversation quality matter. Initial focus areas include B2B SaaS, IT and technology services, cybersecurity, and professional services.",
        },
        {
          id: "existing-team",
          question: "Can you complement an internal sales or marketing team?",
          answer:
            "Yes. Growth Orbits can operate as a focused extension of an existing team. Responsibilities, approvals, lead ownership, CRM updates, qualification rules, and feedback rhythms should be agreed before launch.",
        },
      ],
    },
    {
      slug: "delivery",
      number: "02",
      title: "Campaign delivery",
      description: "How campaigns move from market definition to coordinated outreach and ongoing learning.",
      questions: [
        {
          id: "launch-timing",
          question: "How quickly can a pilot launch?",
          answer:
            "A focused pilot can usually move into launch after the ICP, account criteria, data, message direction, channel plan, and sales handoff are approved. The exact timing depends on market complexity, source material, data availability, and stakeholder response times.",
        },
        {
          id: "channels",
          question: "Which outreach channels do you use?",
          answer:
            "Campaigns can combine personalised email, LinkedIn, and calling. The channel mix is selected around buyer behaviour, market expectations, available evidence, compliance requirements, and the client's existing sales motion.",
        },
        {
          id: "messaging-approval",
          question: "Do we approve messaging before outreach begins?",
          answer:
            "Yes. Positioning, campaign narratives, message examples, calls to action, and brand boundaries should be reviewed before launch. Learning from live conversations can then be incorporated through an agreed change process.",
        },
      ],
    },
    {
      slug: "qualification",
      number: "03",
      title: "Qualification & reporting",
      description: "What reaches the calendar, how context is handed over, and which signals are reviewed.",
      questions: [
        {
          id: "qualification",
          question: "What makes an appointment qualified?",
          answer:
            "Qualification criteria are agreed before launch. Typical criteria include account fit, the prospect's role, a relevant business need, credible interest, timing, and a clear reason for the sales conversation. The exact definition should reflect your sales process—not a generic lead label.",
        },
        {
          id: "reporting",
          question: "What does campaign reporting include?",
          answer:
            "A useful reporting view should cover account and contact coverage, channel activity, response themes, qualification outcomes, meetings, handoff status, and the changes being made as a result. Final metrics and reporting frequency are agreed during onboarding.",
        },
        {
          id: "meeting-no-show",
          question: "How are reschedules and no-shows handled?",
          answer:
            "The operating plan should define confirmation, reminder, rescheduling, and follow-up responsibilities. Any replacement policy or commercial commitment must be stated explicitly in the final service agreement rather than assumed from this sample page.",
        },
      ],
    },
    {
      slug: "working-together",
      number: "04",
      title: "Working together",
      description: "Systems, feedback, commercial structure, and the practical responsibilities on both sides.",
      questions: [
        {
          id: "crm-integration",
          question: "Can Growth Orbits work with our CRM?",
          answer:
            "Yes. The delivery model is designed to connect with common CRM, scheduling, and communication workflows. Required fields, ownership, permissions, integration method, and data retention should be confirmed during onboarding.",
        },
        {
          id: "client-input",
          question: "What do you need from our team?",
          answer:
            "The strongest programmes have a clear internal owner, timely access to product and customer context, messaging approval, transparent sales feedback, and reliable follow-up after a qualified handoff.",
        },
        {
          id: "pricing",
          question: "How is an engagement priced?",
          answer:
            "Pricing should reflect scope, market complexity, research depth, channel mix, volume, integrations, and reporting needs. Confirmed packages and commercial terms will be published when the final operating model is approved; a discovery call can define an appropriate pilot scope in the meantime.",
        },
      ],
    },
  ],
  contact: {
    eyebrow: "Your question is specific",
    title: "Bring us the context. We’ll give you a straight answer.",
    copy: "Share your market, offer, sales motion, and the constraint you are trying to solve. If Growth Orbits is not the right fit, we will make that clear too.",
    primaryAction: { label: "Ask a question", href: "/contact" },
    secondaryAction: { label: "Book a strategy call", href: "/book-a-call" },
  },
} as const;
