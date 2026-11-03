import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const routes: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/projects/mangalya-novena-green", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projects/mangalya-ophira", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projects/mangalya-anant", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about-us", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/blogs", priority: 0.7, changeFrequency: "weekly" },
  { path: "/blogs/amenities-that-matter", priority: 0.6, changeFrequency: "yearly" },
  { path: "/blogs/mangalya-novena-greens", priority: 0.6, changeFrequency: "yearly" },
  { path: "/blogs/mangalya-projects", priority: 0.6, changeFrequency: "yearly" },
  { path: "/blogs/urban-living", priority: 0.6, changeFrequency: "yearly" },
  { path: "/blogs/creating-communities-developing-dreams", priority: 0.6, changeFrequency: "yearly" },
  { path: "/crs-activities", priority: 0.5, changeFrequency: "monthly" },
  { path: "/disclaimer", priority: 0.2, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
