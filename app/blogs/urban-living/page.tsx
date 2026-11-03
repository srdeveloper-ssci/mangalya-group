import AmenitiesArmsRace from "@/components/blogs/urban-living/amenitiesArmsRace";
import CityComingIntoOwn from "@/components/blogs/urban-living/cityComingIntoOwn";
import ConsideringGreaterNoida from "@/components/blogs/urban-living/consideringGreaterNoida";
import { UrbanHomeBlog } from "@/components/blogs/urban-living/hero";
import LifestyleEvolution from "@/components/blogs/urban-living/lifestyleEvolution";
import MangalyaPerspective from "@/components/blogs/urban-living/mangalyaPerspective";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Why Greater Noida Is the Future of Urban Living",
  path: "/blogs/urban-living",
  image: "/og/blog-urban.jpg",
  type: "article",
  description: "Infrastructure, lifestyle and value — why Greater Noida is emerging as the future of urban living, and what it means for homebuyers."
});

function page() {
  return (
    <div>
      <UrbanHomeBlog />
      <LifestyleEvolution />
      <AmenitiesArmsRace />
      <MangalyaPerspective />
      <CityComingIntoOwn />
      <ConsideringGreaterNoida />
    </div>
  );
}

export default page;
