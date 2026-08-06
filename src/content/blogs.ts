/**
 * Editable blog sample data. Replace draft entries with CMS content and real authors before launch.
 */
export const blogsContent = {
  hero: {
    eyebrow: "Growth Orbits blog",
    title: "Useful thinking for teams building B2B pipeline.",
    description:
      "Practical articles about choosing markets, understanding buyers, creating relevant outreach, qualifying well, and learning from campaign evidence.",
    primaryAction: { label: "Browse sample articles", href: "#article-library" },
    secondaryAction: { label: "Explore insights", href: "/resources/insights" },
  },
  featured: {
    status: "Featured sample",
    category: "Targeting",
    title: "How to build an ICP your sales team can actually use",
    excerpt:
      "Move beyond broad firmographics and turn market knowledge into practical account, buyer, timing, and exclusion criteria.",
    readTime: "7 min read",
    author: "Growth Orbits Editorial",
    takeaway: "A focused market is a decision system—not a longer list of filters.",
  },
  categories: ["All topics", "Targeting", "Outbound", "Qualification", "Campaign learning"],
  posts: [
    {
      number: "01",
      category: "Outbound",
      title: "Why relevant outbound starts before the first message",
      excerpt: "Account choice, commercial context, proof, and timing do more work than a clever opening line ever can.",
      readTime: "6 min read",
      format: "Field note",
      accent: "teal",
    },
    {
      number: "02",
      category: "Qualification",
      title: "A useful qualification framework for B2B meetings",
      excerpt: "Create shared rules for what belongs on the calendar and which context must travel with the handoff.",
      readTime: "8 min read",
      format: "Framework",
      accent: "navy",
    },
    {
      number: "03",
      category: "Campaign learning",
      title: "What weekly campaign reviews should help you decide",
      excerpt: "Turn response patterns, objections, account quality, and meeting feedback into focused next actions.",
      readTime: "5 min read",
      format: "Operator guide",
      accent: "gold",
    },
    {
      number: "04",
      category: "Targeting",
      title: "Four signs your target account list is still too broad",
      excerpt: "Diagnose weak prioritisation before it becomes low relevance, noisy reporting, and wasted sales time.",
      readTime: "4 min read",
      format: "Checklist",
      accent: "gold",
    },
    {
      number: "05",
      category: "Outbound",
      title: "Designing a multichannel sequence that feels like one conversation",
      excerpt: "Give email, LinkedIn, and calling distinct jobs while keeping the narrative coherent for the buyer.",
      readTime: "9 min read",
      format: "Playbook",
      accent: "teal",
    },
    {
      number: "06",
      category: "Qualification",
      title: "The sales handoff is part of the customer experience",
      excerpt: "Why meeting context, ownership, preparation, and follow-up determine whether outbound creates real opportunity.",
      readTime: "6 min read",
      format: "Perspective",
      accent: "navy",
    },
  ],
  editorialPrinciples: [
    { number: "01", title: "Practical", copy: "Every article should help a B2B operator make or improve a real decision." },
    { number: "02", title: "Evidence-aware", copy: "We separate operating experience, informed opinion, and verified evidence clearly." },
    { number: "03", title: "No activity theatre", copy: "The focus stays on market learning, conversation quality, and commercial usefulness." },
  ],
  updates: {
    eyebrow: "Editorial updates",
    title: "The blog is being prepared for launch.",
    copy: "These entries are sample editorial data. When publishing begins, this area can connect to a newsletter or RSS workflow.",
    action: { label: "Ask us a pipeline question", href: "/contact" },
  },
} as const;
