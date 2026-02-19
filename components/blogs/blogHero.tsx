import Image from "next/image";
import Link from "next/link";

export default function BlogHero() {
  return (
    <section className="w-full">
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-6 md:mb-8 pt-8 md:pt-10">
        {/* Heading */}
        <div className="relative inline-flex items-center">
          <h2 className="font-Montserrat font-medium text-[30px] md:text-[36px] lg:text-[40px] text-black tracking-wide">
            Blogs
          </h2>

          {/* Leaf */}
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

        {/* Subtitle */}
        <p className="font-poppons font-light mt-1 max-w-xl text-[16px] md:text-[18px] text-gray-800">
          Where strategy meets execution—and growth follows.
        </p>
      </div>

      {/* Hero Wrapper (this adds padding like image) */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Image Container - Clickable */}
        <Link
          href="/blogs/creating-communities-developing-dreams"
          className="group block"
        >
          <div className="relative w-full h-64 md:h-80 overflow-hidden cursor-pointer">
            <Image
              src="/blogs/footer-logo.png"
              alt="Blog Hero"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/40 transition-colors duration-300" />

            {/* Content */}
            <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 text-white max-w-xl">
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="font-poppins bg-yellow-400 text-black text-[10px] font-light px-3 py-1 rounded-full">
                  Technology
                </span>
                <span className="font-poppins bg-yellow-400 text-black text-[10px] font-light px-3 py-1 rounded-full">
                  Other Category
                </span>
              </div>

              <h2 className="text-[15px] md:text-[20px] font-poppins font-semibold leading-snug mb-2">
                Creating Communities, Developing Dreams
              </h2>

              <span className="bg-white text-black font-poppins font-light text-[10px] px-3 py-1 rounded-full inline-block">
                The Mangalyam Group Story
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
