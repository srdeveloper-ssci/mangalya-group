"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full">
      <h1 className="sr-only">Mangalya Ophira, Greater Noida West</h1>
      <div className="relative w-full">
        {/* Desktop Image */}
        <div className="hidden md:block w-full">
          <Image
            src="/our-projects/mangalya-anant/hero.png"
            alt="Mangalya Ophira residential project"
            width={1920}
            height={900}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden w-full">
          <Image
            src="/our-projects/mangalya-anant/hero-mobile.png"
            alt="Mangalya Ophira residential project"
            width={800}
            height={1200}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
