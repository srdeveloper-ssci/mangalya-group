"use client";

import Image from "next/image";

export function CRSHeroSection() {
  return (
    <section className="w-full p-0 sm:p-5">
      <h1 className="sr-only">CSR Activities at Mangalya Group</h1>
      <div className="relative w-full">
        <Image
          src="/crs-activity/heroCrs-home.png"
          alt="Mangalya Group team at a CSR community food drive"
          width={1920}
          height={1080}
          priority
          className="w-full h-[200px] lg:h-auto md:h-auto select-none pointer-events-none"
        />
      </div>
    </section>
  );
}
