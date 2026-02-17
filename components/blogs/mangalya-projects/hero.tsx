"use client";
import Image from "next/image";

export function MangalyaHomeBlog() {
  return (
    <section className="w-full h-auto pt-2 pb-12 md:pb-16 bg-white">
      {/* Image Container */}
      <div className="relative w-full">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/blogs/mangalya-projects/mangalya-hero.png"
            alt="Mangalya Story Desktop"
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
            src="/blogs/mangalya-projects/mangalya-hero-mobile.png"
            alt="Mangalya Story Mobile"
            width={800}
            height={1000}
            priority
            className="w-[85%] h-auto object-cover"
            sizes="80vw"
          />
        </div>
      </div>

      {/* Paragraph */}
      <div className="max-w-4xl mx-auto px-4 md:mt-3 lg:mt-4">
        <p className="text-[15px] md:text-lg lg:text-[20px] leading-relaxed font-light text-center">
          In Delhi NCR’s ultra-competitive real estate landscape, where bold
          promises are common, Mangalya Group stands out by consistently
          delivering on them. Quietly building credibility in Greater Noida West
          and Ghaziabad, the group has caught the attention of homebuyers,
          investors, and industry watchers alike. So, what’s driving the buzz?
          Let’s break down why Mangalya projects are becoming the talk of these
          fast-growing corridors.
        </p>
      </div>
    </section>
  );
}
