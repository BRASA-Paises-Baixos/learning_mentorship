import { createClient } from "@sanity/client";

type SanityConfig = {
  projectId?: string;
  dataset?: string;
  apiVersion: string;
  useCdn: boolean;
};

export const sanityConfig: SanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: true,
};

export const sanityClient =
  sanityConfig.projectId && sanityConfig.dataset
    ? createClient({
        projectId: sanityConfig.projectId,
        dataset: sanityConfig.dataset,
        apiVersion: sanityConfig.apiVersion,
        useCdn: sanityConfig.useCdn,
      })
    : null;
