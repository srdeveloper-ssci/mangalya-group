"use client";

import Image from "next/image";
import { useState } from "react";
import EnquirePopup from "@/components/EnquirePopup";

export function MangalyaSection() {
  const [open, setOpen] = useState(false);
  return (
    <section className="bg-white px-[20px] md:py-[35px] py-[40px]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[30px] md:gap-[80px] items-center">
        {/* LEFT CONTENT */}
        <div>
          <div className="md:w-[230px] md:h-[8px] w-[35%] h-1.5 bg-[#008854] rounded mb-2" />

          <h2 className="font-poppins text-[18px] md:text-[35px] leading-[1.28] font-medium mb-5">
            Redefining the True Value of Modern Living at Ophira
          </h2>

          <p className="font-poppins font-light text-[13px] md:text-[16px] text-[#3F3F3F] leading-[1.28] max-w-[550px] mb-8">
            Mangalya Ophira, Greater Noida (West) offers a world-class lifestyle
            surrounded by lush greenery and calm. Featuring modern amenities
            like a health & yoga centre, parks, and a shopping plaza, it’s
            designed for comfort, convenience, and everyday luxury. Choose from
            impeccably planned 2 & 3 BHK apartments that are spacious, airy, and
            flooded with natural light—crafted for elevated living and complete
            peace of mind.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="font-poppins font-light bg-black text-white px-5 py-2 md:py-3 md:px-7 text-[13px] md:text-[14px] w-fit hover:bg-[#008854] transition"
          >
            Download Brochure
          </button>
          <EnquirePopup open={open} setOpen={setOpen} />
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5">
          {/* TOP CARDS */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-4 border shadow-xl">
              <h4 className="text-[14px] md:text-[16px] font-poppins font-medium mb-1">
                Smart <br />
                Infrastructure
              </h4>
              <p className="font-poppins font-light text-[12px] text-[#3F3F3F] leading-[1.5]">
                Thoughtfully planned layouts that balance comfort, movement, and
                modern living.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-4 border shadow-xl gap-3">
              <div className="w-9 h-9 bg-black text-white rounded-lg flex items-center justify-center">
                ✓
              </div>
              <div>
                <h4 className="text-[14px] md:text-[16px] font-poppins font-medium mb-1 mt-2">
                  99% Trusted
                </h4>
                <p className="font-poppins font-light text-[12px] text-[#3F3F3F] leading-[1.5]">
                  Built on trust. Backed by experience.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM IMAGE CARD */}
          <div className="bg-white">
            <Image
              src="/our-projects/mangalya-anant/anant.png"
              alt="Location map"
              width={520}
              height={300}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
