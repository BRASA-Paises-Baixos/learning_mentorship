import { sanityClient } from "./client";
import type { LibraryItem } from "./types";

export const libraryItemsQuery = `*[_type == "libraryItem"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  type,
  description,
  "thumbnailUrl": thumbnail.asset->url,
  "galleryUrls": gallery[].asset->url
}`;

export const libraryItemBySlugQuery = `*[_type == "libraryItem" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  category,
  type,
  description,
  "thumbnailUrl": thumbnail.asset->url,
  "galleryUrls": gallery[].asset->url
}`;

const mockItems: LibraryItem[] = [
  {
    _id: "mock-1",
    title: "Designing Calm Interfaces",
    slug: "designing-calm-interfaces",
    category: "Design",
    type: "Guide",
    description: "A short guide to creating soothing, confident product interfaces.",
    thumbnailUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    _id: "mock-2",
    title: "Narratives for Product Teams",
    slug: "narratives-for-product-teams",
    category: "Strategy",
    type: "Video",
    description: "Mentor-led lessons on turning roadmap intent into team alignment.",
    thumbnailUrl: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=900&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    _id: "mock-3",
    title: "Shipping with Confidence",
    slug: "shipping-with-confidence",
    category: "Leadership",
    type: "Playbook",
    description: "Frameworks for release readiness, stakeholder clarity, and calm launches.",
    thumbnailUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    galleryUrls: [],
  },
];

export async function getLibraryItems(): Promise<LibraryItem[]> {
  if (!sanityClient) {
    return mockItems;
  }

  return sanityClient.fetch(libraryItemsQuery);
}

export async function getLibraryItemBySlug(slug: string): Promise<LibraryItem | null> {
  if (!sanityClient) {
    return mockItems.find((item) => item.slug === slug) ?? null;
  }

  return sanityClient.fetch(libraryItemBySlugQuery, { slug });
}
