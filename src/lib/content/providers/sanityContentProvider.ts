import { sanityClient } from "../../sanity/client";
import type { ContentProvider, LibraryItem } from "../providerTypes";
import { mockContentProvider } from "./mockContentProvider";

const siteShellQuery = `*[_type == "siteShell" && slug == "default"][0]{
  navigation,
  footer
}`;

const homePageQuery = `*[_type == "homePage" && slug == "home"][0]{
  slug,
  seo,
  content
}`;

const pricingPageQuery = `*[_type == "pricingPage" && slug == "pricing"][0]{
  slug,
  seo,
  content
}`;

const libraryItemsQuery = `*[_type == "libraryItem"] | order(_createdAt desc) {
  "id": _id,
  title,
  "slug": slug.current,
  category,
  type,
  description,
  "thumbnailUrl": thumbnail.asset->url,
  "galleryUrls": gallery[].asset->url
}`;

const libraryItemBySlugQuery = `*[_type == "libraryItem" && slug.current == $slug][0] {
  "id": _id,
  title,
  "slug": slug.current,
  category,
  type,
  description,
  "thumbnailUrl": thumbnail.asset->url,
  "galleryUrls": gallery[].asset->url
}`;

function normalizeLibraryItem(item: LibraryItem): LibraryItem {
  return {
    ...item,
    thumbnailUrl: item.thumbnailUrl ?? undefined,
    galleryUrls: item.galleryUrls?.filter(Boolean) ?? [],
  };
}

export const sanityContentProvider: ContentProvider = {
  async getSiteShellContent() {
    if (!sanityClient) {
      return mockContentProvider.getSiteShellContent();
    }

    const siteShell = await sanityClient.fetch(siteShellQuery);
    if (!siteShell?.navigation || !siteShell?.footer) {
      return mockContentProvider.getSiteShellContent();
    }

    return siteShell;
  },
  async getHomePageContent() {
    if (!sanityClient) {
      return mockContentProvider.getHomePageContent();
    }

    const [siteShell, homePage] = await Promise.all([
      sanityClient.fetch(siteShellQuery),
      sanityClient.fetch(homePageQuery),
    ]);

    if (!siteShell?.navigation || !siteShell?.footer || !homePage?.seo || !homePage?.content) {
      return mockContentProvider.getHomePageContent();
    }

    return {
      slug: homePage.slug ?? "home",
      seo: homePage.seo,
      navigation: siteShell.navigation,
      footer: siteShell.footer,
      content: homePage.content,
    };
  },
  async getPricingPageContent() {
    if (!sanityClient) {
      return mockContentProvider.getPricingPageContent();
    }

    const [siteShell, pricingPage] = await Promise.all([
      sanityClient.fetch(siteShellQuery),
      sanityClient.fetch(pricingPageQuery),
    ]);

    if (!siteShell?.navigation || !siteShell?.footer || !pricingPage?.seo || !pricingPage?.content) {
      return mockContentProvider.getPricingPageContent();
    }

    return {
      slug: pricingPage.slug ?? "pricing",
      seo: pricingPage.seo,
      navigation: siteShell.navigation,
      footer: siteShell.footer,
      content: pricingPage.content,
    };
  },
  async getLibraryItems() {
    if (!sanityClient) {
      return mockContentProvider.getLibraryItems();
    }

    const items = await sanityClient.fetch<LibraryItem[]>(libraryItemsQuery);
    if (!items?.length) {
      return mockContentProvider.getLibraryItems();
    }

    return items.map(normalizeLibraryItem);
  },
  async getLibraryItemBySlug(slug: string) {
    if (!sanityClient) {
      return mockContentProvider.getLibraryItemBySlug(slug);
    }

    const item = await sanityClient.fetch<LibraryItem | null>(libraryItemBySlugQuery, { slug });
    if (!item) {
      return mockContentProvider.getLibraryItemBySlug(slug);
    }

    return normalizeLibraryItem(item);
  },
};
