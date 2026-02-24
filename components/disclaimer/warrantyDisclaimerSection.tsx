"use client";
import Image from "next/image";
import Link from "next/link";

export default function WarrantyDisclaimerSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-[320px] md:h-[420px]">
          <Image
            src="/disclaimer/img1.png" // replace
            alt="Mangalya Novena Greens"
            fill
            className="object-cover"
          />
        </div>

        {/* CENTER CONTENT */}
        <div className="text-center px-2">
          <h2 className="font-handwritten font-bold text-[35px] md:text-[45px] mb-6 text-gray-900">
            Warranty Disclaimer
          </h2>

          <p className="font-poppins text-sm text-gray-600 leading-relaxed mb-8">
            The website and its contents are provided on an “as is” and “as
            available” basis. No information given on this website creates any
            warranty or extends the scope of any warranty that cannot be
            disclaimed under applicable law. The use of this website is at the
            user’s own risk.
            <br /><br />
            This website is intended for guidance only and does not constitute
            part of an offer or contract. Designs and specifications are subject
            to change without prior notice. Any computer-generated images or
            artists’ impressions are indicative of the actual designs.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[320px] md:h-[420px]">
          <Image
            src="/disclaimer/img2.png" // replace
            alt="Novena Green Entrance"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
