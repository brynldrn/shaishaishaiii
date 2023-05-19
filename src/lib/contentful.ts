import contentful, { EntrySkeletonType } from "contentful";
import type { Document } from "@contentful/rich-text-types";

export interface HomeCard extends EntrySkeletonType {
  title: string,
  url: string,
  iconType: string
}

export interface IntroParagraph extends EntrySkeletonType {
  body: Document
}

export interface AffiliateLink extends EntrySkeletonType {
  title: string,
  url: string,
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
