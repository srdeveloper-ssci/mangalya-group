import ContactSection from "@/components/Home/contactSection";
import { AmenitiesSection } from "@/components/our-projects/mangalya-anant/amenitiesSection";
import FloorPlanSection from "@/components/our-projects/mangalya-anant/floorPlanSection";
import HeroSection from "@/components/our-projects/mangalya-anant/hero";
import { RedefineSection } from "@/components/our-projects/mangalya-anant/redefine";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anant",
};

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
