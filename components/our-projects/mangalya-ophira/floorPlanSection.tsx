"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const floorPlans = [
  {
    id: 1,
    src: "/our-projects/mangalya-ophira/floor-plans1.png",
    title: "Floor Plan 1",
  },
  {
    id: 2,
    src: "/our-projects/mangalya-ophira/floor-plans2.png",
    title: "Floor Plan 2",
  },
  {
    id: 3,
    src: "/our-projects/mangalya-ophira/floor-plans3.png",
    title: "Floor Plan 3",
  },
  {
    id: 4,
    src: "/our-projects/mangalya-ophira/floor-plans4.png",
    title: "Floor Plan 4",
  },
  {
    id: 5,
    src: "/our-projects/mangalya-ophira/floor-plans5.png",
    title: "Floor Plan 5",
  },
  {
    id: 6,
    src: "/our-projects/mangalya-ophira/floor-plans6.png",
    title: "Floor Plan 6",
  },
  {
    id: 7,
    src: "/our-projects/mangalya-ophira/floor-plans7.png",
    title: "Floor Plan 7",
  },
  {
    id: 8,
    src: "/our-projects/mangalya-ophira/floor-plans8.png",
    title: "Floor Plan 8",
  },
];

export default function FloorPlanSection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Prevent background scroll
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
      <section className="pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="flex flex-col items-center text-center lg:mb-5 pt-2 lg:pt-8">
            <div className="relative inline-flex items-center">
              <h2 className="font-quattrocento font-semibold leading-[1.28] text-[20px] md:text-[36px] lg:text-[40px] text-black tracking-wide">
                Floor Plan
              </h2>

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

            <p className="font-poppins font-light text-[13px] md:text-[16px] text-[#3F3F3F] leading-[1.28] max-w-[550px] my-3 md:my-4">
              Thoughtfully planned layouts that balance comfort, movement, and
              modern living.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-12 gap-6">
            {floorPlans.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedImg(item.src)}
                className={`
                  cursor-pointer shadow-sm hover:shadow-md transition overflow-hidden
                  ${
                    index < 3
                      ? "col-span-12 sm:col-span-6 lg:col-span-4"
                      : index < 6
                        ? "col-span-12 sm:col-span-6 lg:col-span-4"
                        : "col-span-12 sm:col-span-6 lg:col-span-6"
                  }
                `}
              >
                <div className="relative aspect-square">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-contain p-3 hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="text-center py-2 font-medium text-sm">
                  {item.title}
                </div>
              </div>
            ))}
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
