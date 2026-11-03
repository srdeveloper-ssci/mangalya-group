import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import BlogGrid from "@/components/blogs/blogGrid";
import BlogHero from "@/components/blogs/blogHero";

export const metadata: Metadata = pageMetadata({
  title: "Blogs – Real Estate Insights for Greater Noida West",
  description:
    "Real estate insights from Mangalya Group — homebuying tips, amenities that matter, project spotlights and why Greater Noida West is the future of urban living.",
  path: "/blogs",
  image: "/og/blog-urban.jpg",
});

function page() {
  return (
    <div>
      <BlogHero />
      <BlogGrid />
    </div>
  );
}

export default page;
