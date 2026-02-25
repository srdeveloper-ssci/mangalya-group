import AmenitiesArmsRace from "@/components/blogs/urban-living/amenitiesArmsRace";
import CityComingIntoOwn from "@/components/blogs/urban-living/cityComingIntoOwn";
import ConsideringGreaterNoida from "@/components/blogs/urban-living/consideringGreaterNoida";
import { UrbanHomeBlog } from "@/components/blogs/urban-living/hero";
import LifestyleEvolution from "@/components/blogs/urban-living/lifestyleEvolution";
import MangalyaPerspective from "@/components/blogs/urban-living/mangalyaPerspective";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Urban Living",
};

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
