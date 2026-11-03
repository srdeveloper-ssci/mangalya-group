"use client";
import Image from "next/image";

export function HomeBuyerHero() {
  return (
    <section className="w-full h-auto pt-8 md:py-0 bg-white">
      <h1 className="sr-only">Amenities That Matter: What Modern Homebuyers Really Want in 2026</h1>
      {/* Image Container */}
      <div className="relative w-full">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/blogs/amenities-that-matter/amenities-hero.png"
            alt="Amenities that matter to modern homebuyers"
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
            src="/blogs/amenities-that-matter/amenities-hero-12.png"
            alt="Amenities that matter to modern homebuyers"
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
        <p className="text-[15px] md:text-lg lg:text-[20px] leading-relaxed font-light text-center">
          Once upon a time, “fully loaded” meant parking and a small park. That
          era is over. Today’s homebuyers want more than four walls—they want a
          lifestyle that works for how they actually live.
        </p>
      </div>
    </section>
  );
}
