import ContactSection from "@/components/Home/contactSection";
import { AmenitiesSection } from "@/components/our-projects/mangalya-novena-green/amenitiesSection";
import { DiscoverSection } from "@/components/our-projects/mangalya-novena-green/discoverSection";
import FloorPlanSection from "@/components/our-projects/mangalya-novena-green/floorPlanSection";
import HeroSection from "@/components/our-projects/mangalya-novena-green/hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Novena Green",
};

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
