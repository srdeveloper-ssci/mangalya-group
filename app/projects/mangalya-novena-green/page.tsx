import ContactSection from "@/components/Home/contactSection";
import { AmenitiesSection } from "@/components/our-projects/mangalya-novena-green/amenitiesSection";
import { DiscoverSection } from "@/components/our-projects/mangalya-novena-green/discoverSection";
import FloorPlanSection from "@/components/our-projects/mangalya-novena-green/floorPlanSection";
import HeroSection from "@/components/our-projects/mangalya-novena-green/hero";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Mangalya Novena Green – Premium Apartments in Greater Noida West",
  path: "/projects/mangalya-novena-green",
  image: "/og/novena-green.jpg",
  description: "Mangalya Novena Green (UP RERA: UPRERAPRJ8646) — spacious, thoughtfully designed apartments in Greater Noida West with modern amenities. View floor plans, amenities and download the brochure."
});

function page() {
  return (
    <div>
      <HeroSection />
      <DiscoverSection />
      <FloorPlanSection />
      <AmenitiesSection />
      <ContactSection page="novena-green" />
    </div>
  );
}

export default page;
