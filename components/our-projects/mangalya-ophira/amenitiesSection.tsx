"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export function AmenitiesSection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    "AmenitiesSection1.png",
    "AmenitiesSection2.png",
    "AmenitiesSection3.png",
    "AmenitiesSection4.png",
    "AmenitiesSection5.png",
    "AmenitiesSection6.png",
  ];

  // Prevent background scroll when modal open
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImg]);

  return (
    <>
      <section className="bg-[#ededed] py-10 md:py-[60px] px-[20px]">
        <div className="max-w-[1100px] mx-auto">
          {/* Heading */}
          <h2 className="font-quattrocento text-center font-semibold leading-[1.28] text-[20px] md:text-[36px] lg:text-[40px] text-black tracking-wide">
            AMENITIES
          </h2>

          <p className="font-poppins font-light text-[13px] md:text-[16px] text-[#3F3F3F] leading-[1.28] max-w-[550px] mb-8 mx-auto text-center mt-3 md:mt-4">
            Mangalya Ophira Noida Extension Features
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
            {images.map((img, i) => {
              const imgPath = `/our-projects/mangalya-anant/${img}`;
              return (
                <div
                  key={i}
                  className="relative w-full h-[220px] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImg(imgPath)}
                >
                  <Image
                    src={imgPath}
                    alt="Amenity"
                    fill
                    className="object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedImg && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[9999] p-[20px]">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImg(null)}
            className="absolute top-5 right-5 text-white text-3xl font-bold hover:scale-110 transition"
          >
            ✕
          </button>

          {/* Image */}
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={selectedImg}
              alt="Full View"
              width={1600}
              height={1600}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
