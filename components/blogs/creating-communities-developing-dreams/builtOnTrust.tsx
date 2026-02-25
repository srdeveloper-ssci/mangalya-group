"use client";
import Image from "next/image";

export default function InitiativesSection() {
  return (
    <section className="w-full pt-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16 md:mb-20">
          <h1
            className="text-[28px] md:text-5xl lg:text-6xl text-gray-900 mb-2"
            style={{
              fontFamily: "'Brush Script MT', cursive",
              fontStyle: "italic",
              fontWeight: "400",
              letterSpacing: "0.5px",
            }}
          >
            Built on Trust. Driven by
          </h1>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-gray-900"
            style={{
              fontFamily: "'Brush Script MT', cursive",
              fontStyle: "italic",
              fontWeight: "400",
              letterSpacing: "0.5px",
            }}
          >
            Customers
          </h1>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT – Images */}
          <div className="grid grid-cols-2 gap-2 md:gap-6">
            {/* LEFT COLUMN (1 & 3) */}
            <div className="flex flex-col gap-2 md:gap-6">
              {/* Image 1 */}
              <div className="relative h-[220px] md:h-[250px] overflow-hidden">
                <Image
                  src="/blogs/creating-communities-developing-dreams/blog-1.png"
                  fill
                  className="object-cover"
                  alt=""
                />
              </div>

              {/* Image 3 (blur bottom) */}
              <div className="relative h-[220px] md:h-[250px] overflow-hidden">
                <Image
                  src="/blogs/creating-communities-developing-dreams/blog3.png"
                  fill
                  className="object-cover"
                  alt=""
                />
              </div>
            </div>

            {/* RIGHT COLUMN (2 & 4) */}
            <div className="flex flex-col gap-2 md:gap-6">
              {/* Image 2 */}
              <div className="relative h-[280px] md:h-[320px] overflow-hidden">
                <Image
                  src="/blogs/creating-communities-developing-dreams/blog-2.png"
                  fill
                  className="object-cover"
                  alt=""
                />
              </div>

              {/* Image 4 (blur bottom) */}
              <div className="relative h-[160px] md:h-[180px] overflow-hidden">
                <Image
                  src="/blogs/creating-communities-developing-dreams/blog4.png"
                  fill
                  className="object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* RIGHT – Text */}
          <div className="flex flex-col font-poppins">
            <h3 className="text-[20px] md:text-[30px] font-medium mb-5">
              Leading Initiatives That Define Excellence
            </h3>

            <p className="text-[14px] md:text-[17px] text-[#5A5A5A] leading-relaxed mb-4">
              Our developments are notable for their architecture, comfort, and
              convenience, from modern homes in Greater Noida West to carefully
              planned living areas in Techzone 4. Mangalya Ophira is a top-notch
              residential development with a variety of contemporary features
              and community-focused design.
            </p>

            <p className="text-[14px] md:text-[17px] text-[#5A5A5A] leading-relaxed mb-8">
              Novena Greens of Mangalya reflects our core values of space,
              style, and substance. Every project exemplifies our commitment to
              building thriving communities where life thrives rather than just
              houses.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 border-y py-8">
              {/* Item 1 */}
              <div className="text-center px-6 border-r border-gray-300">
                <h4 className="text-2xl md:text-[40px] font-light">100%</h4>
                <p className="text-xs md:text-[16px] text-[#9A9A9A]">
                  Quality Assured
                </p>
              </div>

              {/* Item 2 */}
              <div className="text-center px-6 border-r border-gray-300">
                <h4 className="text-2xl md:text-[40px] font-light">24×7</h4>
                <p className="text-xs md:text-[16px] text-[#9A9A9A]">
                  Security Surveillance
                </p>
              </div>

              {/* Item 3 */}
              <div className="text-center px-6">
                <h4 className="text-2xl md:text-[40px] font-light">100%</h4>
                <p className="text-xs md:text-[16px] text-[#9A9A9A]">
                  Infrastructure Strength
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
