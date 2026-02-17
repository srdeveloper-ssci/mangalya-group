"use client";
import Image from "next/image";
import Link from "next/link";

export default function StoryBehindSuccess() {
  return (
    <section className="bg-[#292929] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1 font-poppins text-gray-300">
            <h2 className="text-[25px] md:text-[30px] font-medium text-white mb-6 leading-snug">
              The Story Behind the <br /> Success
            </h2>

            <p className="text-[14px] md:text-[16px] font-light leading-relaxed mb-4">
              Mangalya Group has been in the real estate industry for over two
              decades and has managed to provide more than 50,000 residential
              units in the Delhi NCR region. However, it is their recent
              ventures in Greater Noida West (Noida Extension) and Ghaziabad
              that have managed to gain the attention of the masses.
            </p>

            <p className="text-[14px] md:text-[16px] font-light leading-relaxed mb-4">
              Whether it is Mangalya Novena Greens and Ophira in Greater Noida
              West or their prestigious projects in Indirapuram and Vaishali in
              Ghaziabad, the real estate giant has managed to unlock a secret
              that many other developers are yet to discover.
            </p>

            <p className="text-[14px] md:text-[16px] font-light leading-relaxed mb-8">
              The secret? It’s refreshingly simple: build what people actually
              want to live in, not just what looks good in brochures.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-white text-black px-8 py-3 text-sm font-medium hover:bg-gray-900 hover:text-white transition"
            >
              Enquire Now
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 relative h-[420px] md:h-[500px] overflow-hidden">
            <Image
              src="/blogs/mangalya-projects/img-1.png"
              alt="Mangalya Group Project"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
