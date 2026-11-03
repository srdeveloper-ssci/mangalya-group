import type { Metadata } from "next";

/** Production origin. Override with NEXT_PUBLIC_SITE_URL (e.g. for staging). */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.mangalyagroup.in"
).replace(/\/$/, "");

export const SITE_NAME = "Mangalya Group";

export const DEFAULT_DESCRIPTION =
  "Mangalya Group builds RERA-registered homes in Greater Noida West (Noida Extension) — Mangalya Novena Green, Ophira and Anant. Thoughtfully designed, customer-first residences built to last.";

export const DEFAULT_OG_IMAGE = "/og/home.jpg";

type PageSeo = {
  title: string;
  description: string;
  /** Path starting with "/", e.g. "/about-us" */
  path: string;
  /** Path to a 1200x630 image under /public, e.g. "/og/anant.jpg" */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  keywords?: string[];
};

/**
 * Builds full metadata for a page: title, description, canonical URL,
 * Open Graph and Twitter card. Next.js does not deep-merge openGraph/twitter
 * from parent layouts, so every page gets the complete object here.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  type = "website",
  keywords,
}: PageSeo): Metadata {
  const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;
  const images = [
    {
      url: image,
      width: 1200,
      height: 630,
      alt: imageAlt || fullTitle,
      type: "image/jpeg",
    },
  ];

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: SITE_NAME,
      locale: "en_IN",
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
