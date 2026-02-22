import type {
  HomePageContent,
  PricingPageContent,
  SiteShellContent,
  LibraryItem,
} from "./models";

export type ContentProvider = {
  getSiteShellContent: () => Promise<SiteShellContent>;
  getHomePageContent: () => Promise<HomePageContent>;
  getPricingPageContent: () => Promise<PricingPageContent>;
  getLibraryItems: () => Promise<LibraryItem[]>;
  getLibraryItemBySlug: (slug: string) => Promise<LibraryItem | null>;
};

export type { HomePageContent, PricingPageContent, SiteShellContent, LibraryItem };
