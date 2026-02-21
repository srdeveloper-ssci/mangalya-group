// "use client";

// import Image from "next/image";

// const INFO_CARDS = [
//   {
//     title: "Apartments",
//     details: ["3 BHK", "Duplex Apartment"],
//     imgSrc: "/icons/icon1.png",
//     isSvg: false,
//   },
//   {
//     title: "Spacious Homes",
//     details: ["Designed", "Living"],
//     imgSrc: "/icons/icon2.png",
//     isSvg: false,
//   },
//   {
//     title: "Location",
//     details: ["Noida"],
//     imgSrc: "/icons/icon3.png",
//     isSvg: false,
//   },
//   {
//     title: "Price",
//     details: ["On Request"],
//     imgSrc: "/price-icon.png",
//     isSvg: true,
//   },
// ];

// export default function InfoCardsSection() {
//   return (
//     <section className="w-full bg-white pb-12 font-['Poppins']">
//       <div className="max-w-[1440px] mx-auto px-10 md:px-16 lg:px-24">
//         {/* Grid layout matching the UI */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {INFO_CARDS.map((card, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between p-5 border border-gray-900 bg-white min-h-[90px]"
//             >
//               {/* Left: Text Content */}
//               <div className="flex flex-col">
//                 <h4 className="text-[19px] font-medium text-black mb-1 leading-tight font-sans">
//                   {card.title}
//                 </h4>
//                 <div className="flex flex-col">
//                   {card.details.map((line, i) => (
//                     <p
//                       key={i}
//                       className="text-[13px] text-gray-700 font-normal leading-tight"
//                     >
//                       {line}
//                     </p>
//                   ))}
//                 </div>
//               </div>

//               {/* Right: Icon/SVG */}
//               <div className="flex-shrink-0 ml-4">
//                 {card.isSvg ? (
//                   <div className="w-16 h-16 flex items-center justify-center">
//                     {card.svg}
//                   </div>
//                 ) : (
//                   <div className="relative w-14 h-14">
//                     <Image
//                       src={card.imgSrc || ""}
//                       alt={card.title}
//                       fill
//                       className="object-contain"
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

const INFO_CARDS = [
  {
    title: "Apartments",
    details: ["3 BHK", "Duplex Apartment"],
    imgSrc: "/icons/icon1.png",
  },
  {
    title: "Spacious Homes",
    details: ["Designed", "Living"],
    imgSrc: "/icons/icon2.png",
  },
  {
    title: "Location",
    details: ["Noida"],
    imgSrc: "/icons/icon3.png",
  },
  {
    title: "Price",
    details: ["On Request"],
    imgSrc: "/price-icon-new.png",
  },
];

export default function InfoCardsSection() {
  return (
    <section className="w-full bg-white pb-12 font-['Poppins']">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INFO_CARDS.map((card, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-5 border border-gray-900 bg-white min-h-[100px] hover:shadow-md transition"
            >
              
              {/* Left Content */}
              <div>
                <h4 className="text-[19px] font-medium text-black mb-1 leading-tight">
                  {card.title}
                </h4>

                {card.details.map((line, i) => (
                  <p
                    key={i}
                    className="text-[13px] text-gray-700 leading-tight"
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* Right Icon */}
              <div className="relative w-16 h-16 ml-4">
                <Image
                  src={card.imgSrc}
                  alt={card.title}
                  fill
                  className="object-contain"
                  sizes="64px"
                  priority
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}