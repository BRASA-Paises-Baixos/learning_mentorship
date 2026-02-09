export type LibraryItem = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  type: string;
  description?: string;
  thumbnailUrl?: string;
  galleryUrls?: string[];
};
