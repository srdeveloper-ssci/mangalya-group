import FacilitiesEverydayLifeSection from "@/components/blogs/mangalya-novena-greens/facilitiesEverydayLifeSection";
import { NovenaHomeBlog } from "@/components/blogs/mangalya-novena-greens/hero";
import LocationSeamlessLiving from "@/components/blogs/mangalya-novena-greens/locationSeamlessLiving";
import MangalyaGroupAdvantage from "@/components/blogs/mangalya-novena-greens/mangalyaGroupAdvantage";
import ModernDesignNatureSection from "@/components/blogs/mangalya-novena-greens/modernDesignNatureSection";
import ReraFinanceFamilySection from "@/components/blogs/mangalya-novena-greens/reraFinanceFamilySection";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Inside Mangalya Novena Greens: A New Standard for Modern Living",
  path: "/blogs/mangalya-novena-greens",
  image: "/og/blog-novena.jpg",
  type: "article",
  description: "A closer look at Mangalya Novena Greens — modern design, everyday facilities, location advantages and RERA-backed peace of mind in Greater Noida West."
});

function page() {
  return (
    <div>
      <NovenaHomeBlog />
      <ModernDesignNatureSection />
      <FacilitiesEverydayLifeSection />
      <LocationSeamlessLiving />
      <MangalyaGroupAdvantage />
      <ReraFinanceFamilySection />
    </div>
  );
}

export default page;
