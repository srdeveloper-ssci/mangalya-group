import InitiativesSection from "@/components/blogs/creating-communities-developing-dreams/builtOnTrust";
import ConsideringFuture from "@/components/blogs/creating-communities-developing-dreams/consideringFuture";
import { MangalyaStory } from "@/components/blogs/creating-communities-developing-dreams/hero";
import OurIdentity from "@/components/blogs/creating-communities-developing-dreams/ourIdentity";
import OurMethod from "@/components/blogs/creating-communities-developing-dreams/ourMethod";
import WhatMakesUsUnique from "@/components/blogs/creating-communities-developing-dreams/whatMakesUsUnique";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creating Communities Developing Dreams",
};

function page() {
  return (
    <div>
      <MangalyaStory />
      <OurIdentity />
      <OurMethod />
      <InitiativesSection />
      <WhatMakesUsUnique />
      <ConsideringFuture />
    </div>
  );
}

export default page;
