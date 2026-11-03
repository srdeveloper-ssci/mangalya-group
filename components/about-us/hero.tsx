"use client";

import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full p-0 sm:p-5">
      <h1 className="sr-only">About Mangalya Group</h1>
      <div className="relative w-full">
        <Image
          src="/about-us/hero.png"
          alt="About Mangalya Group – Novena Green entrance"
          width={1920}
          height={1080}
          priority
          className="w-full h-[200px] lg:h-auto md:h-auto select-none pointer-events-none"
        />
      </div>
    </section>
  );
}
