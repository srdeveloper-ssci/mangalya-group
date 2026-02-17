import AmenitiesThatMatter from "@/components/blogs/mangalya-projects/amenitiesThatMatter";
import { MangalyaHomeBlog } from "@/components/blogs/mangalya-projects/hero";
import ResidentsSayingSection from "@/components/blogs/mangalya-projects/residentsSayingSection";
import StoryBehindSuccess from "@/components/blogs/mangalya-projects/storyBehindSuccess";
import WhatMakesMangalyaStandOut from "@/components/blogs/mangalya-projects/whatMakesMangalyaStandOut";
import WhatSetsProjectsApartSection from "@/components/blogs/mangalya-projects/whatSetsProjectsApartSection";

function page() {
  return (
    <div>
      <MangalyaHomeBlog />
      <StoryBehindSuccess />
      <WhatSetsProjectsApartSection />
      <AmenitiesThatMatter />
      <ResidentsSayingSection />
      <WhatMakesMangalyaStandOut />
    </div>
  );
}

export default page;
