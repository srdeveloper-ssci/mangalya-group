"use client";

import Image from "next/image";

export default function QuoteStrip() {
  return (
    <section className="w-full">
      <div
        className="w-full py-16 md:py-20 px-4 text-center"
        style={{
          background: "linear-gradient(135deg, #e3f4ee 0%, #f8ecee 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="font-light text-gray-800 text-[20px] md:text-[40px] leading-[128%] tracking-tight">
            {/* Opening Quote */}
            <span className="font-serif text-4xl md:text-5xl align-top mr-2 font-bold">
              “
            </span>
            Smart planning, {/* Green word with leaf */}
            <span className="relative inline-block text-emerald-600 font-mix">
              green
              <span className="absolute -top-5 right-[-20px] md:-top-6 md:right-[-30px] w-10 md:w-14">
                <Image
                  src="/about-us/leaf.png"
                  alt="leaf"
                  width={32}
                  height={32}
                  className="w-full h-auto object-contain"
                />
              </span>
            </span>{" "}
            spaces and
            <br />a <span className="text-red-500 font-mix">
              lifestyle
            </span>{" "}
            that feels upgraded –
            <br />
            everyday
            {/* Closing Quote */}
            <span className="font-serif text-4xl md:text-5xl align-bottom ml-2 font-bold">
              ”
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
