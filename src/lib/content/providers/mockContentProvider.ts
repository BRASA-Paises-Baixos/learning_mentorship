import type {
  ContentProvider,
  HomePageContent,
  PricingPageContent,
  SiteShellContent,
  LibraryItem,
} from "../providerTypes";

const siteShell: SiteShellContent = {
  navigation: {
    brand: {
      name: "BRASA Platform",
      tagline: "Mentorship + Learning",
      monogram: "B",
    },
    links: [
      { label: "Home", href: "/" },
      { label: "Library", href: "/library" },
      { label: "Mentorship", href: "/#mentorship" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/#contact" },
    ],
    cta: {
      label: "Get Access",
      href: "/pricing",
      variant: "primary",
    },
  },
  footer: {
    summary:
      "BRASA is a mentorship and learning platform for builders who want steady momentum, expert guidance, and a clear path from idea to launch.",
    links: [
      { label: "About", href: "/#about" },
      { label: "Mentors", href: "/#mentors" },
      { label: "FAQ", href: "/#faq" },
      { label: "Scholarship", href: "/#impact" },
      { label: "Contact", href: "/#contact" },
    ],
    legal: "BRASA Platform · Amsterdam, NL · Built for the global BRASA community",
  },
};

const homePageContent: HomePageContent = {
  slug: "home",
  seo: {
    title: "BRASA Platform · Mentorship with Focus",
    description:
      "Join BRASA for mentor-led learning, curated resources, and a calm, structured path to product growth.",
  },
  navigation: siteShell.navigation,
  footer: siteShell.footer,
  content: {
    hero: {
      eyebrow: "BRASA Platform",
      title: "Mentorship built for steady, ambitious builders.",
      subtitle:
        "A structured learning path, hands-on mentor guidance, and practical tools for the BRASA community.",
      primaryCta: { label: "Join the platform", href: "/pricing", variant: "primary" },
      secondaryCta: { label: "Explore the library", href: "/library", variant: "secondary" },
      highlights: [
        "Monthly mentor circles and office hours",
        "Curated playbooks, templates, and checklists",
        "Scholarship-backed access for emerging builders",
      ],
      stats: [
        { label: "Mentors", value: "12" },
        { label: "Learning modules", value: "48" },
        { label: "Cohorts per year", value: "4" },
      ],
    },
    about: {
      eyebrow: "About BRASA",
      title: "A mentorship platform rooted in craft, community, and clarity.",
      body:
        "BRASA blends structured mentorship with curated learning to help builders move from uncertainty to confident execution. Every module, session, and template is designed for real-world application.",
      bullets: [
        "Curated content designed for action within a single workweek",
        "Mentor-led feedback loops to keep momentum steady",
        "Local community anchors with global collaboration",
      ],
    },
    mentorship: {
      eyebrow: "Mentorship",
      title: "Guidance that stays close to the work.",
      body:
        "Our mentorship track pairs cohort rhythm with personalized coaching, so builders always know their next decisive step.",
      steps: [
        {
          title: "Assess & Align",
          detail: "Define your product narrative, success metrics, and 90-day focus areas.",
        },
        {
          title: "Build & Review",
          detail: "Weekly check-ins, peer feedback, and mentor notes keep progress visible.",
        },
        {
          title: "Launch & Reflect",
          detail: "Capture learnings, update the playbook, and plan the next cycle.",
        },
      ],
    },
    mentors: {
      eyebrow: "Mentors",
      title: "Operators who have shipped and scaled.",
      subtitle:
        "A bench of founders, product leads, and designers who know how to move teams from intent to release.",
      mentors: [
        {
          id: "mentor-1",
          name: "Amina Okafor",
          role: "Product Strategy",
          focus: "Narrative, roadmap alignment",
          bio: "Former head of product at a fintech scale-up, now advising early-stage founders.",
        },
        {
          id: "mentor-2",
          name: "Lucas van Dijk",
          role: "Design Systems",
          focus: "Systems, accessibility, product polish",
          bio: "Built multi-brand design systems for global consumer platforms.",
        },
        {
          id: "mentor-3",
          name: "Rosa Delgado",
          role: "Growth + Operations",
          focus: "Go-to-market, team rituals",
          bio: "Led growth programs across Europe and Latin America for marketplaces.",
        },
        {
          id: "mentor-4",
          name: "Kwame Mensah",
          role: "Engineering Leadership",
          focus: "Shipping, reliability, team health",
          bio: "Engineering director focused on calm execution and repeatable release cycles.",
        },
      ],
    },
    products: {
      eyebrow: "Products",
      title: "Everything you need to build with intention.",
      subtitle:
        "Mentorship, learning modules, and scholarships packaged for real outcomes.",
      products: [
        {
          id: "mentorship",
          title: "Mentorship Circles",
          description: "Small cohort sessions with focused feedback, goal tracking, and mentor support.",
          format: "Live + async",
          price: "Included in membership",
          ctaLabel: "See mentorship",
          highlight: true,
        },
        {
          id: "ebook",
          title: "BRASA Fieldbook",
          description: "A practical ebook of workflows, templates, and playbooks for product teams.",
          format: "Digital download",
          price: "$24 one-time",
          ctaLabel: "Preview the ebook",
        },
        {
          id: "scholarship",
          title: "Scholarship Access",
          description: "Community-funded access for emerging builders and founders in transition.",
          format: "Sponsored seat",
          price: "Pay what you can",
          ctaLabel: "Apply for support",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Choose the rhythm that fits your season.",
      subtitle: "Mock pricing for launch. Swap to Gumroad when payments go live.",
      tiers: [
        {
          id: "studio",
          name: "Studio",
          price: "$29",
          cadence: "per month",
          description: "Curated library access and monthly mentor notes.",
          features: [
            "Full library access",
            "Monthly studio notes",
            "Guided implementation checklists",
          ],
        },
        {
          id: "mentor",
          name: "Mentor",
          price: "$79",
          cadence: "per month",
          description: "Mentorship circles plus deeper feedback cycles.",
          features: [
            "Everything in Studio",
            "Mentor circle sessions",
            "Quarterly 1:1 mentor review",
          ],
          highlight: true,
        },
        {
          id: "collective",
          name: "Collective",
          price: "$240",
          cadence: "per month",
          description: "Team access with shared learning paths and reporting.",
          features: [
            "Team seats (up to 6)",
            "Custom learning roadmap",
            "Private office hours",
          ],
        },
      ],
      footnote: "Scholarship seats are available each quarter through the BRASA fund.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "What to expect",
      subtitle: "Answers for founders, builders, and emerging product leaders.",
      items: [
        {
          id: "faq-1",
          question: "When do cohorts start?",
          answer:
            "Cohorts open quarterly. Members can join the library anytime and reserve a mentorship circle seat when enrollment opens.",
        },
        {
          id: "faq-2",
          question: "Is the platform available outside the Netherlands?",
          answer:
            "Yes. Mentorship circles are timed for Europe/Africa, and library content is available globally.",
        },
        {
          id: "faq-3",
          question: "How do scholarships work?",
          answer:
            "Scholarship seats are funded by members and partners. Apply with a short form, and we review applications monthly.",
        },
        {
          id: "faq-4",
          question: "What if I only want the ebook?",
          answer:
            "You can purchase the BRASA Fieldbook as a standalone download. Membership bundles it with ongoing updates.",
        },
      ],
    },
    impact: {
      eyebrow: "Funding & Impact",
      title: "A community-funded path for emerging builders.",
      subtitle: "Membership revenue supports scholarships, peer cohorts, and local chapter events.",
      metrics: [
        { label: "Scholarship seats", value: "18", detail: "Funded in the past year" },
        { label: "Community events", value: "26", detail: "Run across BRASA chapters" },
        { label: "Mentor hours", value: "320", detail: "Donated to fellows" },
      ],
      initiatives: [
        "Scholarship fund that covers memberships and mentorship circles",
        "Local meetups in Amsterdam, Rotterdam, and Lagos",
        "Impact reports shared each quarter with members",
      ],
    },
    cta: {
      title: "Ready to build with more clarity?",
      subtitle: "Join BRASA and move with a support system that respects your time.",
      primaryCta: { label: "Start membership", href: "/pricing", variant: "primary" },
      secondaryCta: { label: "Book a call", href: "/#contact", variant: "secondary" },
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s talk about your goals.",
      subtitle: "We respond within two business days. Partnerships and scholarship sponsors welcome.",
      email: "hello@brasa.community",
      location: "Amsterdam, NL",
      responseTime: "48 hours",
      socialLinks: [
        { label: "LinkedIn", href: "https://www.linkedin.com" },
        { label: "Instagram", href: "https://www.instagram.com" },
        { label: "YouTube", href: "https://www.youtube.com" },
      ],
    },
  },
};

const pricingPageContent: PricingPageContent = {
  slug: "pricing",
  seo: {
    title: "BRASA Platform · Pricing",
    description: "Find the BRASA plan that fits your mentorship and learning goals.",
  },
  navigation: siteShell.navigation,
  footer: siteShell.footer,
  content: {
    pricing: homePageContent.content.pricing,
    faq: homePageContent.content.faq,
    contact: homePageContent.content.contact,
  },
};

const libraryItems: LibraryItem[] = [
  {
    id: "mock-1",
    title: "Designing Calm Interfaces",
    slug: "designing-calm-interfaces",
    category: "Design",
    type: "Guide",
    description: "A short guide to creating soothing, confident product interfaces.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: "mock-2",
    title: "Narratives for Product Teams",
    slug: "narratives-for-product-teams",
    category: "Strategy",
    type: "Workshop",
    description: "Mentor-led lessons on turning roadmap intent into team alignment.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=900&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: "mock-3",
    title: "Shipping with Confidence",
    slug: "shipping-with-confidence",
    category: "Leadership",
    type: "Playbook",
    description: "Frameworks for release readiness, stakeholder clarity, and calm launches.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    galleryUrls: [],
  },
];

export const mockContentProvider: ContentProvider = {
  async getSiteShellContent() {
    return siteShell;
  },
  async getHomePageContent() {
    return homePageContent;
  },
  async getPricingPageContent() {
    return pricingPageContent;
  },
  async getLibraryItems() {
    return libraryItems;
  },
  async getLibraryItemBySlug(slug: string) {
    return libraryItems.find((item) => item.slug === slug || item.id === slug) ?? null;
  },
};
