"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FEATURES = ["2-3 BHK", "CLUB HOUSE", "SWIMMING POOL", "GYM"];

function Badge({ text }: { text: string }) {
  return (
    <span className="px-4 md:px-5 py-2 bg-gray-100 border border-gray-300 text-gray-900 rounded-full text-xs md:text-sm font-poppins font-medium whitespace-nowrap hover:bg-gray-200 transition-colors duration-200">
      {text}
    </span>
  );
}

export function AboutSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        {/* "ABOUT us" section - positioned at top right */}
        <div className="flex justify-end">
          <div className="flex items-start gap-4 md:gap-5">
            <div className="w-20 md:w-24 lg:w-30 h-[1.5px] bg-black mt-3 md:mt-4"></div>
            <div className="text-right -space-y-1 md:-space-y-2">
              <h2 className="text-[35px] md:text-[50px] font-bold text-black tracking-[0.15em] font-handwritten leading-none">
                ABOUT
              </h2>
              <div className="flex justify-end">
                <span className="text-[35px] md:text-[50px] font-bold text-black tracking-[0.15em] font-handwritten leading-none">
                  us
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main heading with badges in same line */}
        <div className="mb-12 md:mb-14 lg:mb-5">
          <div className="flex flex-col lg:flex-row lg:items-start gap-4 md:gap-6">
            {/* Main Heading */}
            <div className="flex-1">
              <h1 className="text-[20px] md:text-[40px] font-poppins font-extra-light leading-[128%] text-gray-600">
                Discover your dream of premium <br/>living at Mangalya
              </h1>
            </div>

            {/* Badges container - in same line with proper gaps */}
            <div className="flex flex-wrap gap-2 md:gap-3 items-start mt-2 lg:mt-15">
              {FEATURES.map((feature) => (
                <Badge key={feature} text={feature} />
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Left Image - with overlay text */}
          <div className="lg:col-span-5 relative overflow-hidden h-64 sm:h-72 md:h-80 lg:h-110 group">
            <Image
              src="/Rectangle 225.png"
              alt="Novena Green residential complex with smartly planned homes"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8">
              <p className="text-white text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-quattrocento leading-snug">
                Smartly planned homes with
                <br />
                green, open living.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-4 relative overflow-hidden h-64 sm:h-72 md:h-80 lg:h-110 group">
            <Image
              src="/Rectangle 227.png"
              alt="Premium amenities and recreational spaces for families"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Content - Description and CTA */}
          <div className="lg:col-span-3 flex flex-col justify-center gap-8">
            <p className="text-base md:text-[18px] leading-relaxed text-gray-900 font-poppins">
              At Mangalya Group, we build{" "}
              <span className="text-red-500 font-semibold">quality</span> homes
              and <span className="text-teal-600 font-semibold">vibrant</span>{" "}
              communities with a customer-first vision. Thoughtful design meets
              lasting quality and timeless living spaces.
            </p>

            {/* Show More Button */}

            <Link
              href="/about-us"
              className="flex items-center bg-gray-900 rounded-full pl-6 md:pl-7 pr-2 py-2.5 md:py-2 w-fit hover:bg-gray-800 active:scale-95 transition-all duration-300 group"
              aria-label="Show more information about Mangalya properties and amenities"
            >
              <span className="text-white text-sm md:text-base font-poppins font-medium mr-4">
                Show More
              </span>

              <span className="w-9 h-9 md:w-10 md:h-10 bg-emerald-500 rounded-full flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                <ChevronRight
                  className="w-5 h-5 md:w-6 md:h-6 text-white"
                  strokeWidth={3}
                />
                <ChevronRight
                  className="w-5 h-5 md:w-6 md:h-6 text-white -ml-3 md:-ml-3.5"
                  strokeWidth={3}
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
