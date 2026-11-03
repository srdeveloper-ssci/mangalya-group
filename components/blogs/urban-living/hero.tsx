"use client";
import Image from "next/image";
import Link from "next/link";

export function UrbanHomeBlog() {
  return (
    <section className="w-full h-auto pt-2 pb-12 md:pb-16 bg-white">
      <h1 className="sr-only">Greater Noida Is the Future of Urban Living</h1>
      {/* Image Container */}
      <div className="relative w-full">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/blogs/urban-living/urban-living-home.png"
            alt="Urban living in Greater Noida"
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
            src="/blogs/urban-living/urban-living-home-mobile.png"
            alt="Urban living in Greater Noida"
            width={800}
            height={1000}
            priority
            className="w-[85%] h-auto object-cover"
            sizes="80vw"
          />
        </div>
      </div>

      {/* Paragraph */}
      <div className="max-w-4xl mx-auto px-4 md:mt-3 lg:mt-4 py-6 md:py-2">
        <p className="text-[15px] md:text-lg lg:text-[18px] leading-relaxed font-light text-center">
          Once dismissed as “too far,” Greater Noida has flipped the script.
          What was once a satellite address is now shaping up as a complete
          city—with seamless metro connectivity, global companies moving in, and
          a lifestyle that finally feels… intentional. From smarter
          infrastructure to better cafés and more breathing space, the
          transformation is impossible to ignore. <br />
          <br />
          Whether you’re a first-time buyer tired of rent burn, a growing family
          craving room to live, or an investor tracking the next breakout
          market—Greater Noida is no longer a future bet. It’s a present-day
          opportunity.
        </p>
      </div>
      <div className="text-center mt-8 md:mt-4">
        <Link
          href="/contact"
          className="font-poppins inline-block bg-black font-light text-white px-12 py-4 text-sm hover:bg-gray-800 transition"
        >
          Enquire Now
        </Link>
      </div>
    </section>
  );
}
