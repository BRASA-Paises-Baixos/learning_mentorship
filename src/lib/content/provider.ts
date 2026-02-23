import type {
  ContentProvider,
  HomePageContent,
  PricingPageContent,
  SiteShellContent,
  LibraryItem,
} from "./providerTypes";
import { mockContentProvider } from "./providers/mockContentProvider";
import { sanityContentProvider } from "./providers/sanityContentProvider";

export type { ContentProvider };
export type { HomePageContent, PricingPageContent, SiteShellContent, LibraryItem };

const PROVIDER_MAP: Record<string, ContentProvider> = {
  mock: mockContentProvider,
  sanity: sanityContentProvider,
};

export function getContentProvider(): ContentProvider {
  const providerName =
    process.env.NEXT_PUBLIC_CONTENT_PROVIDER ??
    process.env.CONTENT_PROVIDER ??
    "sanity";

  return PROVIDER_MAP[providerName] ?? sanityContentProvider;
}
