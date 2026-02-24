"use client";
import Image from "next/image";

export default function StatutoryDisclosure() {
  return (
    <section className="relative w-full h-[420px] md:h-[340px] lg:h-[380px] overflow-hidden">
      {/* Desktop Image */}
      <Image
        src="/disclaimer/img3.png"
        alt="Statutory Disclosure"
        fill
        priority
        className="hidden md:block object-cover"
      />

      {/* Mobile Image */}
      <Image
        src="/disclaimer/des-bg.png" // add your mobile image
        alt="Statutory Disclosure Mobile"
        fill
        priority
        className="block md:hidden object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/55" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-5 md:px-8 flex items-center">
        <div className="max-w-lg text-white">
          {/* Title */}
          <h2 className="font-handwritten font-bold text-[26px] sm:text-[32px] md:text-[42px] lg:text-[46px] mb-4 text-gray-200">
            Statutory Disclosure
          </h2>

          {/* Text */}
          <p className="font-poppins text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed text-gray-200">
            The website contains information about the projects and developments
            undertaken by the Company, including banners and posters. The
            content is subject to modification in accordance with the
            stipulations and recommendations under the Real Estate (Regulation
            and Development) Act, 2016 (RERA) and related rules, and it may not
            be fully updated at present. Users are therefore advised to directly
            verify all project details and aspects of any proposed booking or
            acquisition of units/premises with the Company's authorized sales
            team before making any purchasing decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
