import { HomeBuyerHero } from "@/components/blogs/amenities-that-matter/hero";
import MangalyaDifferenceSection from "@/components/blogs/amenities-that-matter/mangalyaDifferenceSection";
import PowerBackupSection from "@/components/blogs/amenities-that-matter/powerBackupSection";
import SafetySecuritySection from "@/components/blogs/amenities-that-matter/safetySecuritySection";
import WaterSecuritySection from "@/components/blogs/amenities-that-matter/waterSecuritySection";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Amenities That Matter: What Modern Homebuyers Want in 2026",
  path: "/blogs/amenities-that-matter",
  image: "/og/blog-amenities.jpg",
  type: "article",
  description: "Power backup, water security, safety and more — the amenities modern homebuyers really want in 2026, and how Mangalya Group delivers them."
});

function page() {
  return (
    <div>
      <HomeBuyerHero />
      <PowerBackupSection />
      <WaterSecuritySection />
      <SafetySecuritySection />
      <MangalyaDifferenceSection />
    </div>
  );
}

export default page;
