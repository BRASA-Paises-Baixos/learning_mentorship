export type SeoContent = {
  title: string;
  description: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type CtaLink = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

export type NavigationContent = {
  brand: {
    name: string;
    tagline: string;
    monogram: string;
  };
  links: NavLink[];
  cta: CtaLink;
};

export type FooterContent = {
  summary: string;
  links: NavLink[];
  legal: string;
};

export type PageContent<TContent> = {
  slug: string;
  seo: SeoContent;
  navigation: NavigationContent;
  footer: FooterContent;
  content: TContent;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  highlights: string[];
  stats: { label: string; value: string }[];
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
};

export type MentorshipContent = {
  eyebrow: string;
  title: string;
  body: string;
  steps: { title: string; detail: string }[];
};

export type Mentor = {
  id: string;
  name: string;
  role: string;
  focus: string;
  bio: string;
  avatarUrl?: string;
  company?: string;
};

export type MentorSectionContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  mentors: Mentor[];
};

export type Product = {
  id: string;
  title: string;
  description: string;
  format: string;
  price: string;
  ctaLabel: string;
  highlight?: boolean;
};

export type ProductSectionContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  products: Product[];
};

export type PricingTier = {
  id: string;
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  highlight?: boolean;
};

export type PricingContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  tiers: PricingTier[];
  footnote?: string;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type FAQContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: FAQItem[];
};

export type ImpactMetric = {
  label: string;
  value: string;
  detail: string;
};

export type ImpactContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  metrics: ImpactMetric[];
  initiatives: string[];
};

export type CTAContent = {
  title: string;
  subtitle: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
};

export type ContactContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  email: string;
  location: string;
  responseTime: string;
  socialLinks: NavLink[];
};

export type LibraryItem = {
  id: string;
  title: string;
  slug: string;
  category: string;
  type: string;
  description?: string;
  thumbnailUrl?: string;
  galleryUrls?: string[];
};

export type HomePageSections = {
  hero: HeroContent;
  about: AboutContent;
  mentorship: MentorshipContent;
  mentors: MentorSectionContent;
  products: ProductSectionContent;
  pricing: PricingContent;
  faq: FAQContent;
  impact: ImpactContent;
  cta: CTAContent;
  contact: ContactContent;
};

export type PricingPageSections = {
  pricing: PricingContent;
  faq: FAQContent;
  contact: ContactContent;
};

export type HomePageContent = PageContent<HomePageSections>;
export type PricingPageContent = PageContent<PricingPageSections>;
export type SiteShellContent = {
  navigation: NavigationContent;
  footer: FooterContent;
};
