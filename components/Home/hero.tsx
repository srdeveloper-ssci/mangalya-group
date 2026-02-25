"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./hero.module.scss"
export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="w-full p-0 sm:p-5">
      <style>{`
        @keyframes mobileFadeUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .hero-badges {
            opacity: 0;
            animation: ${isLoaded ? "mobileFadeUp 0.7s ease forwards" : "none"};
          }
          .hero-heading {
            opacity: 0;
            animation: ${isLoaded ? "mobileFadeUp 0.9s ease 0.2s forwards" : "none"};
          }
          .hero-button {
            opacity: 0;
            animation: ${isLoaded ? "mobileFadeUp 0.9s ease 0.4s forwards" : "none"};
          }
        }

        .hero-button {
          transition: all 0.3s ease;
        }

        .hero-button:hover {
          transform: translateY(-2px);
        }

        .arrow-icon {
          display: inline-block;
          margin-left: 8px;
          transition: transform 0.3s ease;
        }

        .hero-button:hover .arrow-icon {
          transform: translateX(4px);
        }
      `}</style>

      <div className="relative w-full h-[85vh] sm:h-auto overflow-hidden">

        {/* Desktop Image */}
        <div className="hidden sm:block relative w-full">
          <Image
            src="/home-hero.png"
            alt="Hero Desktop"
            width={1920}
            height={1080}
            priority
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Mobile Image */}
        <div className="block sm:hidden absolute inset-0">
          <Image
            src="/hero-img-mobile.png"
            alt="Hero Mobile"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Mobile Dark + Blur Overlay */}
        <div className="absolute inset-0 sm:bg-transparent bg-black/40 backdrop-blur-[1px] md:backdrop-blur-[0px]" />

        {/* Content - MAXIMIZED RIGHT ALIGNMENT */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-end pr-2 sm:pr-6 md:pr-10 lg:pr-12 text-right">
          {/* Badges */}
          <div className={`${styles.badges} `}>
             <span className={styles.badge}>2-3 BHK</span>
             <span className={styles.badge}>YOGA CENTER</span>
             <span className={styles.badge}>LUXURY FEELS</span>
          </div>

          {/* Heading */}
          <h1
            className="hero-heading text-[40px] sm:text-[48px] text-white font-bold leading-[1.2] mb-6 sm:mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: "0px 6px 25px rgba(0,0,0,0.8)",
            }}
          >
            Homes crafted for comfort.
            <br />
            Built for pride.
          </h1>

          {/* CTA */}
          <Link
            href="/contact"
            className="hero-button inline-flex items-center gap-2 px-7 sm:px-14 py-3 sm:py-4 bg-black text-white text-xs sm:text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 shadow-2xl"
          >
            Enquire Now
            <span className="arrow-icon">→</span>
          </Link>

        </div>
      </div>
    </section>
  );
}