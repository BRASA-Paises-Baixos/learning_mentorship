import type { ContentProvider } from "../providerTypes";

function notReady(method: string) {
  throw new Error(`Sanity content provider not configured: ${method}`);
}

export const sanityContentProvider: ContentProvider = {
  async getSiteShellContent() {
    return notReady("getSiteShellContent");
  },
  async getHomePageContent() {
    return notReady("getHomePageContent");
  },
  async getPricingPageContent() {
    return notReady("getPricingPageContent");
  },
  async getLibraryItems() {
    return notReady("getLibraryItems");
  },
  async getLibraryItemBySlug() {
    return notReady("getLibraryItemBySlug");
  },
};
