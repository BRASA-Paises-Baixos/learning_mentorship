import { createClient } from "@sanity/client";

export type SubscriptionContent = {
  _id: string;
  title: string;
  slug: string;
  gumroadProductId: string;
  description?: string;
  thumbnailUrl?: string;
  pdfUrl?: string;
  videoUrl?: string;
  externalVideoUrl?: string;
  order?: number;
};

const subscriptionContentByProductIdQuery = `*[_type == "subscriptionContent" && gumroadProductId == $productId][0] {
  _id,
  title,
  "slug": slug.current,
  gumroadProductId,
  description,
  "thumbnailUrl": thumbnail.asset->url,
  "pdfUrl": pdfFile.asset->url,
  "videoUrl": videoFile.asset->url,
  externalVideoUrl,
  order
}`;

function getSanityServerClient() {
  const projectId = process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET;
  const token = process.env.SANITY_API_TOKEN;

  if (!projectId || !dataset) {
    return null;
  }

  return createClient({
    projectId,
    dataset,
    apiVersion: "2024-01-01",
    useCdn: false,
    token,
  });
}

export async function getContentByProductId(productId: string): Promise<SubscriptionContent | null> {
  const client = getSanityServerClient();
  if (!client) {
    return null;
  }

  return client.fetch(subscriptionContentByProductIdQuery, { productId });
}
