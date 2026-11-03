import ContactSection from "@/components/Home/contactSection";
import { AmenitiesSection } from "@/components/our-projects/mangalya-anant/amenitiesSection";
import FloorPlanSection from "@/components/our-projects/mangalya-anant/floorPlanSection";
import HeroSection from "@/components/our-projects/mangalya-anant/hero";
import { RedefineSection } from "@/components/our-projects/mangalya-anant/redefine";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Mangalya Anant – Premium Apartments in Noida Extension",
  path: "/projects/mangalya-anant",
  image: "/og/anant.jpg",
  description: "Mangalya Anant (UP RERA: UPRERAPRJ4306) — peaceful, premium residences in Noida Extension. View floor plans, amenities and download the brochure."
});

function page() {
  return (
    <div>
      <HeroSection />
      <RedefineSection />
      <FloorPlanSection />
      <AmenitiesSection />
      <ContactSection />
    </div>
  );
}

export default page;
