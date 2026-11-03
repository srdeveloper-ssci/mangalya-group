import InitiativesSection from "@/components/blogs/creating-communities-developing-dreams/builtOnTrust";
import ConsideringFuture from "@/components/blogs/creating-communities-developing-dreams/consideringFuture";
import { MangalyaStory } from "@/components/blogs/creating-communities-developing-dreams/hero";
import OurIdentity from "@/components/blogs/creating-communities-developing-dreams/ourIdentity";
import OurMethod from "@/components/blogs/creating-communities-developing-dreams/ourMethod";
import WhatMakesUsUnique from "@/components/blogs/creating-communities-developing-dreams/whatMakesUsUnique";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "The Mangalya Group Story: Creating Communities, Developing Dreams",
  path: "/blogs/creating-communities-developing-dreams",
  image: "/og/blog-communities.jpg",
  type: "article",
  description: "The story behind Mangalya Group — our identity, our method, and what makes us unique as we build homes and communities built on trust."
});

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
