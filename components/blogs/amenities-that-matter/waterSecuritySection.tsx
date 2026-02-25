"use client";
import Image from "next/image";

export default function WaterSecuritySection() {
  return (
    <section className="w-full bg-black">
      {/* Desktop Version */}
      <div className="relative w-full h-[260px] md:h-[360px] lg:h-[420px] overflow-hidden hidden md:block">
        <Image
          src="/blogs/amenities-that-matter/WaterImg-new.png"
          alt="Water Security"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center font-poppins">
          <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-2 gap-6">
            {/* LEFT TEXT */}
            <div className="text-white">
              <h3 className="text-[40px] font-medium mb-3">Why It Matters</h3>

              <p className="text-[15px] text-gray-200 leading-relaxed mb-4">
                The Hard Truth: Nothing can be more pinching than waking up to 5
                AM buckets to fill. In 2025, that is not acceptable.
              </p>

              <ul className="list-disc pl-5 space-y-2 text-[15px] text-gray-200">
                <li>
                  Access to Clean Drinking Water is a Right, Not a Privilege
                </li>
                <li>
                  Uniform water pressure impacts from showers to washing
                  machines
                </li>
                <li>Quality of water directly affects your health</li>
                <li>
                  Overhead tanks, borewells, and municipal supply need proper
                  management
                </li>
              </ul>
            </div>

            {/* RIGHT TITLE */}
            <div className="flex justify-end items-center">
              <h2 className="text-white text-4xl lg:text-5xl font-semibold text-right leading-tight">
                Water <br /> Security
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="relative w-full h-[600px] overflow-hidden block md:hidden">
        <Image
          src="/blogs/amenities-that-matter/water-mobile.png"
          alt="Water Security Mobile"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/40" />

        {/* Mobile Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
          {/* Top Title */}
          <h2 className="text-3xl font-semibold leading-tight text-right">
            Water <br /> Security
          </h2>

          {/* Bottom Text */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Why It Matters</h3>

            <p className="text-sm text-gray-200 leading-relaxed mb-3">
              The Hard Truth: Nothing can be more pinching than waking up to 5
              AM buckets to fill. In 2025, that is not acceptable.
            </p>

            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-200">
              <li>Access to Clean Drinking Water is a Right</li>
              <li>Uniform water pressure impacts daily life</li>
              <li>Water quality affects health</li>
              <li>Proper supply management is essential</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
