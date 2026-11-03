"use client";
import Image from "next/image";

export function MangalyaStory() {
  return (
    <section className="w-full h-auto pt-8 md:py-0 bg-white">
      <h1 className="sr-only">The Mangalya Group Story: Creating Communities, Developing Dreams</h1>
      {/* Image Container */}
      <div className="relative w-full">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/blogs/creating-communities-developing-dreams/blogs-1.png"
            alt="The Mangalya Group story"
            width={1920}
            height={1080}
            priority
            className="w-full h-auto object-cover"
            sizes="100vw"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden flex justify-center">
          <Image
            src="/blogs/creating-communities-developing-dreams/blogs-1-12.png"
            alt="The Mangalya Group story"
            width={800}
            height={1000}
            priority
            className="w-[85%] h-auto object-cover"
            sizes="80vw"
          />
        </div>
      </div>

      {/* Paragraph */}
      <div className="max-w-4xl mx-auto px-4 mt-8 md:mt-3 lg:mt-4">
        <p className="text-[15px] md:text-lg lg:text-[20px] text-gray-900 leading-relaxed font-light text-center">
          Here at Mangalya Group, outstanding real estate is not only
          constructed but also carefully planned for contemporary living.
          Mangalya Group, a reputable brand in the Delhi NCR real estate market,
          is dedicated to turning dreams into stunning, useful, and future-ready
          residences.
        </p>
      </div>
    </section>
  );
}
