"use client";
import Image from "next/image";
import Link from "next/link";

export function NovenaHomeBlog() {
  return (
    <section className="w-full h-auto pt-8 md:py-0 bg-white">
      <h1 className="sr-only">Inside Mangalya Novena Greens: A New Standard for Modern Living</h1>
      {/* Image Container */}
      <div className="relative w-full">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/blogs/mangalya-novena-greens/heroImg.png"
            alt="Inside Mangalya Novena Greens"
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
            src="/blogs/mangalya-novena-greens/heroImg-mobile.png"
            alt="Inside Mangalya Novena Greens"
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
          One residential development, Mangalya Novena Greens, stands out as an
          example of thoughtful design, sustainable living, and modern luxury in
          the constantly changing Greater Noida West. This upscale residential
          community, created by the well-known Mangalya Group, is a reimagining
          of what contemporary living ought to be rather than just another
          housing development.
        </p>
      </div>
      <div className="text-center mt-12">
        <Link
          href="/contact"
          className="inline-block bg-black font-light text-white px-12 py-4 text-sm hover:bg-gray-800 transition"
        >
          Enquire Now
        </Link>
      </div>
    </section>
  );
}
