"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryData = [
  {
    id: 1,
    image: "/crs-activity/gallery/1.jpg",
    title: "Food Support",
  },
  { id: 2, image: "/crs-activity/gallery/2.jpg", title: "Charity" },
  { id: 3, image: "/crs-activity/gallery/3.jpeg", title: "Charity" },
  { id: 4, image: "/crs-activity/gallery/4.jpeg", title: "Education & Empowerment" },
  { id: 5, image: "/crs-activity/gallery/5.jpeg", title: "Charity" },
  { id: 6, image: "/crs-activity/gallery/6.jpeg", title: "Awareness" },
  { id: 7, image: "/crs-activity/gallery/7.jpeg", title: "Education & Empowerment" },
  { id: 8, image: "/crs-activity/gallery/8.jpeg", title: "Charity" },
  { id: 9, image: "/crs-activity/gallery/9.jpeg", title: "Education & Empowerment" },
  { id: 10, image: "/crs-activity/gallery/10.jpeg", title: "Awareness" },
];

const n = galleryData.length;

export default function CSRGallery() {
  const [active, setActive] = useState(0);
  const dragX = useRef(0);
  const dragMoved = useRef(false);

  const goTo = (i: number) => setActive(((i % n) + n) % n);
  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  const getPos = (index: number) => {
    let d = index - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  const onDragStart = (x: number) => {
    dragX.current = x;
    dragMoved.current = false;
  };
  const onDragMove = (x: number) => {
    if (dragMoved.current) return;
    const dx = x - dragX.current;
    if (Math.abs(dx) > 60) {
      dragMoved.current = true;
      dx < 0 ? next() : prev();
    }
  };

  return (
    <section className="w-full overflow-hidden pt-2 pb-10">
      {/* DESKTOP: 3D Carousel */}
      <div className="relative hidden md:block">
        <div
          className="relative h-[560px] w-full select-none"
          onMouseDown={(e) => onDragStart(e.clientX)}
          onMouseMove={(e) => {
            if (e.buttons === 1) onDragMove(e.clientX);
          }}
        >
          {galleryData.map((item, index) => {
            const pos = getPos(index);
            const abs = Math.abs(pos);
            const scale =
              abs === 0 ? 1 : abs === 1 ? 0.82 : abs === 2 ? 0.67 : 0.55;
            const tx = pos * 260;
            const opacity = abs > 3 ? 0 : abs === 3 ? 0.2 : 1;
            const bright = abs === 0 ? 1 : Math.max(0.45, 1 - abs * 0.2);

            return (
              <div
                key={item.id}
                className="absolute left-1/2 top-1/2 transition-all duration-[600ms] ease-[cubic-bezier(.4,0,.2,1)]"
                style={{
                  transform: `translate(-50%,-50%) translateX(${tx}px) scale(${scale})`,
                  zIndex: 90 - abs * 10,
                  opacity,
                  filter: `brightness(${bright})`,
                  pointerEvents: opacity === 0 ? "none" : "auto",
                }}
                onClick={() => abs !== 0 && goTo(index)}
              >
                <div
                  className={`w-[300px] lg:w-[360px] overflow-hidden relative
  ${
    abs === 0
      ? "shadow-[0_32px_80px_rgba(0,0,0,0.3)]"
      : "shadow-xl hover:shadow-2xl transition-shadow"
  }`}
                >
                  {abs === 0 && (
                    <div className="pointer-events-none absolute inset-0 z-20">
                      {/* Full Top Border */}
                      <div className="absolute top-0 left-0 w-full h-[10px] bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800" />

                      {/* Half Left Border */}
                      <div className="absolute top-0 left-0 w-[10px] h-[45%] bg-gradient-to-b from-gray-900 to-transparent" />

                      {/* Half Right Border */}
                      <div className="absolute top-0 right-0 w-[10px] h-[45%] bg-gradient-to-b from-gray-900 to-transparent" />

                      <div className="absolute bottom-0 left-0 w-full h-[10px] bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800" />
                    </div>
                  )}

                  <div className="relative w-full aspect-[3/4] bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      draggable={false}
                      sizes="360px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                    <h3 className="text-white text-lg font-medium tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-[999]
            w-12 h-12 flex items-center justify-center rounded-full
            bg-white/90 backdrop-blur-sm hover:bg-green-500 hover:text-white
            text-gray-800 shadow-lg transition-all hover:scale-110 active:scale-95"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-[999]
            w-12 h-12 flex items-center justify-center rounded-full
            bg-white/90 backdrop-blur-sm hover:bg-green-500 hover:text-white
            text-gray-800 shadow-lg transition-all hover:scale-110 active:scale-95"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* MOBILE: Single card + side buttons */}
      <div className="md:hidden px-4 pt-0 pb-6">
        <div className="relative max-w-[340px] mx-auto">
          <div
            className="w-full  overflow-hidden relative shadow-2xl"
            onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
          >
            <div className="relative w-full aspect-[3/4] bg-gray-100">
              <Image
                src={galleryData[active].image}
                alt={galleryData[active].title}
                fill
                className="object-cover"
                sizes="340px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h3 className="text-white text-xl font-medium tracking-wide">
                {galleryData[active].title}
              </h3>
              <div className="mx-auto mt-2.5 h-[3px] w-9  rounded-full" />
            </div>
          </div>

          {/* Mobile side buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2
              w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center
              text-gray-700 hover:bg-green-500 hover:text-white transition-all active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2
              w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center
              text-gray-700 hover:bg-green-500 hover:text-white transition-all active:scale-95"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* <div className="flex items-center justify-center gap-4 mt-6">
          <span className="text-sm text-gray-500 font-medium">
            {String(active + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
          </span>
        </div> */}
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {galleryData.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === active ? "24px" : "6px",
              background: i === active ? "#22c55e" : "#d1d5db",
            }}
          />
        ))}
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-2 flex-wrap px-5 mt-6">
        {galleryData.map((item, i) => (
          <button
            key={item.id}
            onClick={() => goTo(i)}
            title={item.title}
            className={`relative w-[52px] h-[52px] rounded-xl overflow-hidden border-2
              transition-all duration-300
              ${
                i === active
                  ? "border-green-500 scale-105 shadow-md opacity-100"
                  : "border-transparent opacity-50 hover:opacity-80 hover:scale-105"
              }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="52px"
            />
          </button>
        ))}
      </div>

      {/* Counter */}
      <p className="text-center text-sm text-gray-400 mt-5 font-medium">
        {active + 1} / {n}
      </p>
    </section>
  );
}
