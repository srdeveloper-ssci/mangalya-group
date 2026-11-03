import ContactSection from "@/components/Home/contactSection";
import { AmenitiesSection } from "@/components/our-projects/mangalya-ophira/amenitiesSection";
import FloorPlanSection from "@/components/our-projects/mangalya-ophira/floorPlanSection";
import HeroSection from "@/components/our-projects/mangalya-ophira/hero";
import { MangalyaSection } from "@/components/our-projects/mangalya-ophira/mangalyaAnant";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Mangalya Ophira – Affordable Luxury 2 & 3 BHK in Greater Noida West",
  path: "/projects/mangalya-ophira",
  image: "/og/ophira.jpg",
  description: "Mangalya Ophira (UP RERA: UPRERAPRJ6418) — affordable luxury 2 BHK, 2 BHK + study and 3 BHK apartments in Greater Noida West. Explore floor plans, amenities and download the brochure."
});

function page() {
  return (
    <div>
      <HeroSection />
      <MangalyaSection />
      <FloorPlanSection />
      <AmenitiesSection />
      <ContactSection />
    </div>
  );
}

export default page;
