import { HomeBuyerHero } from "@/components/blogs/amenities-that-matter/hero";
import MangalyaDifferenceSection from "@/components/blogs/amenities-that-matter/mangalyaDifferenceSection";
import PowerBackupSection from "@/components/blogs/amenities-that-matter/powerBackupSection";
import SafetySecuritySection from "@/components/blogs/amenities-that-matter/safetySecuritySection";
import WaterSecuritySection from "@/components/blogs/amenities-that-matter/waterSecuritySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amenities That Matter",
};

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
