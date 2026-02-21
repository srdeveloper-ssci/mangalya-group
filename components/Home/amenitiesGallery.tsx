"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export function AmenitiesGallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const galleryImages = [
    { id: 1, src: "/img1.png", alt: "Living room" },
    { id: 2, src: "/img2.png", alt: "Games area" },
    { id: 3, src: "/img3.png", alt: "Gym" },
    { id: 4, src: "/img4.png", alt: "Pool" },
    { id: 5, src: "/img5.png", alt: "Parking" },
    { id: 6, src: "/img6.png", alt: "Security" },
    { id: 7, src: "/img7.png", alt: "Playground" },
  ];

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
      <section className="relative pt-20 pb-35 md:pt-40 md:pb-40 bg-gray-50 overflow-hidden px-6">
        {/* Background Leaves (unchanged) */}
        <div className="absolute md:top-5 top-[-10] right-[-20] md:right-170 w-32 md:w-52 lg:w-64 pointer-events-none">
          <Image
            src="/top-leaf.png"
            alt="leaf"
            width={300}
            height={300}
            className="w-full h-auto object-contain rotate-320 md:rotate-0"
          />
        </div>

        <div className="absolute bottom-5 right-55 md:right-60 w-52 md:w-64 pointer-events-none">
          <Image
            src="/right-bottom-leaf.png"
            alt="leaf"
            width={300}
            height={300}
            className="w-full h-auto object-contain rotate-80 md:rotate-0"
          />
        </div>

        <div className="absolute top-[48%] left-0 md:left-25 w-28 md:w-78 pointer-events-none">
          <Image
            src="/left-leaf.png"
            alt="leaf"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          {/* Top Row */}
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {galleryImages.slice(0, 3).map((image) => (
                  <GalleryCard
                    key={image.id}
                    image={image}
                    onClick={() => setSelectedImg(image.src)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Middle Row */}
          <div className="flex justify-center">
            <div className="w-full max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {galleryImages.slice(3, 6).map((image) => (
                  <GalleryCard
                    key={image.id}
                    image={image}
                    onClick={() => setSelectedImg(image.src)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <GalleryCard
                image={galleryImages[6]}
                onClick={() => setSelectedImg(galleryImages[6].src)}
                customHeight="h-56 md:h-64"
              />
            </div>
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

function GalleryCard({
  image,
  onClick,
  customHeight,
}: {
  image: { id: number; src: string; alt: string };
  onClick: () => void;
  customHeight?: string;
}) {
  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden shadow-md ${
        customHeight || "h-48 md:h-56 lg:h-64"
      } group cursor-pointer`}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
    </div>
  );
}
