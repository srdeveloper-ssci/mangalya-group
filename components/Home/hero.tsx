"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="w-full p-0 sm:p-5">
      <style>{`
        @keyframes bounceInDown {
          0% {
            opacity: 0;
            transform: translate3d(0, -100px, 0);
          }
          60% {
            opacity: 1;
            transform: translate3d(0, 10px, 0);
          }
          80% {
            transform: translate3d(0, -5px, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes slideUpBounce {
          0% {
            opacity: 0;
            transform: translateY(80px);
          }
          60% {
            opacity: 1;
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
          }
        }

        @keyframes arrowSlide {
          0% {
            transform: translateX(-8px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Mobile only animations */
        @media (max-width: 640px) {
          .hero-badges {
            animation: ${isLoaded ? "fadeIn 0.8s ease-out forwards" : "none"};
          }

          .hero-heading {
            animation: ${isLoaded ? "fadeIn 1s ease-out 0.3s forwards" : "none"};
            opacity: ${isLoaded ? "1" : "0"};
          }

          .hero-button {
            animation: ${isLoaded ? "slideUpBounce 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.6s forwards" : "none"};
            opacity: ${isLoaded ? "1" : "0"};
          }

          .hero-button:hover .arrow-icon {
            transform: translateX(4px);
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
        {/* IMAGES */}
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
        <div className="block sm:hidden absolute inset-0">
          <Image
            src="/hero-img-mobile.png"
            alt="Hero Mobile"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 sm:bg-transparent" />

        {/* Content - MAXIMIZED RIGHT ALIGNMENT */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-end pr-2 sm:pr-6 md:pr-10 lg:pr-12 text-right">
          {/* Badges */}
          <div className="hero-badges flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-8 flex-wrap justify-end">
            <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm rounded-full border border-white/30">
              2-3 BHK
            </span>
            <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm rounded-full border border-white/30">
              YOGA CENTER
            </span>
            <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm rounded-full border border-white/30">
              LUXURY FEELS
            </span>
          </div>

          {/* Heading */}
          <h1
            className="hero-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[56px] text-white font-light leading-[1.1] mb-4 sm:mb-8 drop-shadow-2xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: "2px 4px 20px rgba(0,0,0,0.5)",
            }}
          >
            Homes crafted for comfort.
            <br />
            Built for pride.
          </h1>

          {/* CTA */}
          <Link
            href="/contact"
            className="hero-button inline-flex items-center gap-2 px-8 sm:px-14 py-3 sm:py-4 bg-black text-white text-xs sm:text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 shadow-2xl"
          >
            Enquire Now
            <span className="arrow-icon">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export function HeroSection() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [currentMobileImage, setCurrentMobileImage] = useState(0);

//   const mobileImages = [
//     "/home-mobile.png",
//     "/our-projects/mangalya-ophira/hero-mobile.png",
//   ];

//   useEffect(() => {
//     setIsLoaded(true);

//     // Image slideshow for mobile
//     if (window.innerWidth < 640) {
//       const interval = setInterval(() => {
//         setCurrentMobileImage((prev) => (prev + 1) % mobileImages.length);
//       }, 4000); // Change every 4 seconds

//       return () => clearInterval(interval);
//     }
//   }, [mobileImages.length]);

//   return (
//     <section className="w-full p-0 sm:p-5">
//       <style>{`
//         @keyframes bounceInDown {
//           0% {
//             opacity: 0;
//             transform: translate3d(0, -100px, 0);
//           }
//           60% {
//             opacity: 1;
//             transform: translate3d(0, 10px, 0);
//           }
//           80% {
//             transform: translate3d(0, -5px, 0);
//           }
//           100% {
//             transform: translate3d(0, 0, 0);
//           }
//         }

//         @keyframes slideUpBounce {
//           0% {
//             opacity: 0;
//             transform: translateY(80px);
//           }
//           60% {
//             opacity: 1;
//             transform: translateY(-8px);
//           }
//           100% {
//             transform: translateY(0);
//           }
//         }

//         @keyframes pulse {
//           0%, 100% {
//             box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
//           }
//           50% {
//             box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
//           }
//         }

//         @keyframes arrowSlide {
//           0% {
//             transform: translateX(-8px);
//             opacity: 0;
//           }
//           100% {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes zoomIn {
//           0% {
//             opacity: 0;
//             transform: scale(1.1);
//           }
//           100% {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes slideInRight {
//           0% {
//             opacity: 0;
//             transform: translateX(30px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slideInLeft {
//           0% {
//             opacity: 0;
//             transform: translateX(-30px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         @keyframes shimmer {
//           0% {
//             background-position: -100% 0;
//           }
//           100% {
//             background-position: 200% 0;
//           }
//         }

//         @keyframes rotateIn {
//           0% {
//             opacity: 0;
//             transform: rotate(-10deg) scale(0.9);
//           }
//           100% {
//             opacity: 1;
//             transform: rotate(0) scale(1);
//           }
//         }

//         @keyframes gradientShift {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }

//         /* Image transition animation */
//         @keyframes imageTransition {
//           0% {
//             opacity: 0;
//             transform: scale(1.05);
//           }
//           20% {
//             opacity: 1;
//             transform: scale(1);
//           }
//           80% {
//             opacity: 1;
//             transform: scale(1);
//           }
//           100% {
//             opacity: 0;
//             transform: scale(1.05);
//           }
//         }

//         /* Mobile only animations */
//         @media (max-width: 640px) {
//           .mobile-image {
//             animation: zoomIn 1.2s ease-out forwards;
//           }

//           .mobile-image-transition {
//             animation: imageTransition 4s ease-in-out forwards;
//           }

//           .hero-badges {
//             animation: ${isLoaded ? "fadeIn 0.8s ease-out forwards" : "none"};
//           }

//           .hero-badges span {
//             animation: ${isLoaded ? "slideInRight 0.6s ease-out forwards" : "none"};
//             opacity: ${isLoaded ? "1" : "0"};
//             animation-fill-mode: both;
//           }

//           .hero-badges span:nth-child(1) {
//             animation-delay: 0.2s;
//           }

//           .hero-badges span:nth-child(2) {
//             animation-delay: 0.4s;
//           }

//           .hero-badges span:nth-child(3) {
//             animation-delay: 0.6s;
//           }

//           .hero-heading {
//             animation: ${isLoaded ? "slideInLeft 0.8s ease-out 0.4s forwards" : "none"};
//             opacity: ${isLoaded ? "1" : "0"};
//             animation-fill-mode: both;
//             text-shadow: 2px 4px 15px rgba(0,0,0,0.6);
//           }

//           .hero-heading br {
//             animation: ${isLoaded ? "fadeIn 0.5s ease-out 0.6s forwards" : "none"};
//             opacity: ${isLoaded ? "1" : "0"};
//           }

//           .hero-button {
//             animation: ${isLoaded ? "slideUpBounce 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.8s forwards" : "none"};
//             opacity: ${isLoaded ? "1" : "0"};
//             position: relative;
//             overflow: hidden;
//           }

//           .hero-button::before {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: -100%;
//             width: 100%;
//             height: 100%;
//             background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
//             animation: shimmer 2s infinite;
//           }

//           .hero-button:hover .arrow-icon {
//             transform: translateX(4px);
//           }

//           .floating-element {
//             animation: float 3s ease-in-out infinite;
//           }

//           /* Image indicator dots */
//           .image-indicator {
//             display: flex;
//             gap: 8px;
//             position: absolute;
//             bottom: 20px;
//             left: 50%;
//             transform: translateX(-50%);
//             z-index: 20;
//           }

//           .indicator-dot {
//             width: 8px;
//             height: 8px;
//             border-radius: 50%;
//             background: rgba(255,255,255,0.5);
//             transition: all 0.3s ease;
//             animation: fadeIn 0.5s ease-out;
//           }

//           .indicator-dot.active {
//             width: 24px;
//             border-radius: 4px;
//             background: white;
//             box-shadow: 0 0 10px rgba(255,255,255,0.8);
//           }
//         }

//         .hero-button {
//           transition: all 0.3s ease;
//         }

//         .hero-button:hover {
//           transform: translateY(-2px);
//         }

//         .arrow-icon {
//           display: inline-block;
//           margin-left: 8px;
//           transition: transform 0.3s ease;
//         }

//         .hero-button:hover .arrow-icon {
//           transform: translateX(4px);
//         }
//       `}</style>

//       <div className="relative w-full h-[85vh] sm:h-auto overflow-hidden">
//         {/* DESKTOP IMAGE */}
//         <div className="hidden sm:block relative w-full">
//           <Image
//             src="/home-hero.png"
//             alt="Hero Desktop"
//             width={1920}
//             height={1080}
//             priority
//             className="w-full h-auto object-cover"
//           />
//         </div>

//         {/* MOBILE IMAGES WITH SLIDESHOW */}
//         <div className="block sm:hidden absolute inset-0">
//           {mobileImages.map((src, index) => (
//             <div
//               key={src}
//               className={`absolute inset-0 transition-opacity duration-1000 ${
//                 index === currentMobileImage ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <Image
//                 src={src}
//                 alt={`Hero Mobile ${index + 1}`}
//                 fill
//                 priority={index === 0}
//                 className={`object-cover ${
//                   index === currentMobileImage ? "mobile-image" : ""
//                 }`}
//               />
//             </div>
//           ))}

//           {/* Gradient overlay for better text readability */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

//           {/* Image indicator dots */}
//           <div className="image-indicator">
//             {mobileImages.map((_, index) => (
//               <button
//                 key={index}
//                 className={`indicator-dot ${index === currentMobileImage ? "active" : ""}`}
//                 onClick={() => setCurrentMobileImage(index)}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/20 sm:bg-transparent" />

//         {/* Content - MAXIMIZED RIGHT ALIGNMENT */}
//         <div className="absolute inset-0 z-10 flex flex-col justify-center items-end pr-2 sm:pr-6 md:pr-10 lg:pr-12 text-right">
//           {/* Badges */}
//           <div className="hero-badges flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-8 flex-wrap justify-end">
//             <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm rounded-full border border-white/30">
//               2-3 BHK
//             </span>
//             <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm rounded-full border border-white/30">
//               YOGA CENTER
//             </span>
//             <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm rounded-full border border-white/30">
//               LUXURY FEELS
//             </span>
//           </div>

//           {/* Heading */}
//           <h1
//             className="hero-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[56px] text-white font-light leading-[1.1] mb-4 sm:mb-8 drop-shadow-2xl"
//             style={{
//               fontFamily: "'Playfair Display', serif",
//               textShadow: "2px 4px 20px rgba(0,0,0,0.5)",
//             }}
//           >
//             Homes crafted for comfort.
//             <br />
//             Built for pride.
//           </h1>

//           {/* CTA */}
//           <Link
//             href="/contact"
//             className="hero-button inline-flex items-center gap-2 px-8 sm:px-14 py-3 sm:py-4 bg-black text-white text-xs sm:text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 shadow-2xl"
//           >
//             Enquire Now
//             <span className="arrow-icon">→</span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
