"use client";

import Image from "next/image";
import { useState } from "react";

export default function FloorPlanSection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    {
      src: "/our-projects/mangalya-anant/two1.png",
      alt: "2 BHK with Study",
    },
    {
      src: "/our-projects/mangalya-anant/one1.png",
      alt: "2 BHK",
    },
    {
      src: "/our-projects/mangalya-anant/three1.png",
      alt: "3 BHK",
    },
  ];

  return (
    <section className="bg-white md:pt-[20px] pb-20 px-[20px]">
      <div className="max-w-[1100px] mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center text-center lg:mb-5 pt-2 lg:pt-8">
          {/* Heading */}
          <div className="relative inline-flex items-center">
            <h2 className="font-quattrocento font-semibold leading-[1.28] text-[20px] md:text-[36px] lg:text-[40px] text-black tracking-wide">
              Floor Plan
            </h2>

            {/* Leaf */}
            <div className="absolute -top-6 right-[-32px] md:right-[-45px] w-12 md:w-16 pointer-events-none">
              <Image
                src="/about-us/leaf.png"
                alt="leaf"
                width={64}
                height={64}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Subtitle */}
          <p className="font-poppins font-light text-[13px] md:text-[16px] text-[#3F3F3F] leading-[1.28] max-w-[550px] mb-8 mt-3 md:mb-4 md:mt-4">
            Thoughtfully planned layouts that balance comfort, movement, and
            modern living.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[25px]">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative cursor-pointer"
              onClick={() => setSelectedImg(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={360}
                height={360}
                className="w-full h-[320px] object-contain hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImg && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-[20px]">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImg(null)}
            className="absolute top-5 right-5 text-white text-3xl font-bold hover:scale-110 transition"
          >
            ✕
          </button>

          {/* Image */}
          <Image
            src={selectedImg}
            alt="Full View"
            width={1600}
            height={1600}
            className="w-full h-full object-contain"
          />
        </div>
      )}
    </section>
  );
}
