"use client";
import Image from "next/image";

export default function ResidentsSayingSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[280px]">
      {/* Desktop Background Image */}
      <Image
        src="/blogs/mangalya-projects/img-2.png"
        alt="Residents Experience"
        fill
        className="object-cover hidden md:block"
        priority
      />

      {/* Mobile Background Image */}
      <Image
        src="/blogs/mangalya-projects/img-2-mobile.png"
        alt="Residents Experience Mobile"
        fill
        className="object-cover block md:hidden h-700px"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full h-full md:h-auto flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 text-white font-poppins py-6 md:py-0">
          {/* Title - always on top */}
          <div className="flex flex-col justify-start md:justify-center">
            <h2 className="font-poppins text-[25px] md:text-[30px] font-medium leading-snug mt-10 md:mt-0 md:mb-4">
              What Residents Are <br /> Actually Saying
            </h2>

            {/* Button - hidden on mobile here, shown at bottom */}
            {/* <Link
              href="/brochure"
              className="hidden md:inline-block font-poppins bg-white text-black px-7 py-3 text-[16px] font-light hover:bg-gray-900 hover:text-white transition w-fit"
            >
              Download Brochure
            </Link> */}
          </div>

          {/* Paragraph */}
          <p className="font-poppins text-[14px] leading-relaxed text-gray-200 max-w-xl flex-1 md:flex-none overflow-y-auto md:overflow-visible">
            Unlike curated marketing claims, real voices from Mangalya Group
            residents reveal the true experience. Homeowners at Mangalya Novena
            Greens highlight everyday wins—usable green spaces, active
            amenities, and a lifestyle that genuinely works. From children
            playing outdoors daily to professionals enjoying quick office
            commutes without sacrificing peace, the real value lies not in
            flashy features, but in thoughtful design that elevates daily
            living.
          </p>

          {/* Button - only on mobile, pinned to bottom */}
          {/* <div className="block md:hidden mt-auto">
            <Link
              href="/brochure"
              className="font-poppins inline-block bg-white text-black px-6 py-3 text-[14px] font-light hover:bg-gray-900 hover:text-white transition"
            >
              Download Brochure
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}
