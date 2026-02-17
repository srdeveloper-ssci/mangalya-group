// "use client";

// export default function WhatSetsProjectsApartSection() {
//   return (
//     <section className="py-14 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
        
//         <div className="relative grid grid-cols-1 md:grid-cols-[320px_1fr] gap-12">
          
//           {/* Vertical Divider */}
//           <div className="hidden md:block absolute left-[320px] top-0 bottom-0 w-px bg-gray-300" />

//           {/* LEFT SIDE */}
//           <div className="space-y-24">
            
//             {/* Block 1 */}
//             <div>
//               <h3 className="text-xl font-semibold mb-3">
//                 What Sets These Projects <br /> Apart?
//               </h3>

//               {/* Tags */}
//               <div className="flex gap-2">
//                 <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
//                   Technology
//                 </span>
//                 <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
//                   Other Category
//                 </span>
//               </div>
//             </div>

//             {/* Block 2 */}
//             <div>
//               <h3 className="text-xl font-semibold">
//                 The Quality That Speaks for <br /> Itself
//               </h3>
//             </div>

//           </div>

//           {/* RIGHT SIDE */}
//           <div className="space-y-20 font-poppins text-sm text-gray-600 leading-relaxed">

//             {/* Content 1 */}
//             <div className="relative md:pl-10">
//               {/* Green Dot ON Line */}
//               <span className="hidden md:block absolute -left-[53px] top-1 w-3 h-3 bg-green-600 rounded-full" />

//               <p>
//                 The 70% Open Space formula in a world where developers are trying
//                 to squeeze the maximum number of units into the smallest space
//                 area, the promise of allocating 70% of the project area to open
//                 spaces is nothing short of revolutionary. This is not just a
//                 sales pitch; it is a lifestyle that the residents get to enjoy
//                 every single day. Consider the case of Mangalya Novena Greens in
//                 Tech Zone–IV, for example. The project spans 4 acres and is more
//                 like a carefully planned neighbourhood than a high-rise
//                 residential complex, where green spaces are not an
//                 afterthought but an integral part of the design. In a
//                 pollution-choked NCR, this is a promise that resonates with
//                 health-conscious families.
//               </p>
//             </div>

//             {/* Content 2 */}
//             <div className="relative md:pl-10">
//               {/* Green Dot ON Line */}
//               <span className="hidden md:block absolute -left-[53px] top-1 w-3 h-3 bg-green-600 rounded-full" />

//               <p className="font-medium text-gray-800 mb-2">
//                 Spanish-Inspired Architecture with Indian Sensibilities
//               </p>

//               <p>
//                 The Mangalya projects have Spanish-inspired architecture that
//                 appears elegant yet not ostentatious. More importantly, however,
//                 they also take into account vastu requirements and designs that
//                 are appropriate for Indian families—something that many
//                 “international style” projects do not.
//               </p>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

export default function WhatSetsProjectsApartSection() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="relative grid grid-cols-1 md:grid-cols-[320px_1fr] gap-12">

          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-[320px] top-0 bottom-0 w-px bg-gray-300" />

          {/* LEFT SIDE */}
          <div className="space-y-12 md:space-y-24">

            {/* Block 1 */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                What Sets These Projects <br /> Apart?
              </h3>

              <div className="flex gap-2">
                <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
                  Technology
                </span>
                <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
                  Other Category
                </span>
              </div>
            </div>

            {/* Block 2 */}
            <div className="hidden md:block">
              <h3 className="text-xl font-semibold">
                The Quality That Speaks for <br /> Itself
              </h3>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-12 md:space-y-20 font-poppins text-sm text-gray-600 leading-relaxed">

            {/* Content 1 */}
            <div className="relative md:pl-10">
              <span className="hidden md:block absolute -left-[53px] top-1 w-3 h-3 bg-green-600 rounded-full" />

              <p>
                The 70% Open Space formula in a world where developers are trying
                to squeeze the maximum number of units into the smallest space
                area, the promise of allocating 70% of the project area to open
                spaces is nothing short of revolutionary...
              </p>
            </div>

            {/* Mobile Second Heading */}
            <div className="md:hidden">
              <h3 className="text-xl font-semibold text-black">
                The Quality That Speaks for Itself
              </h3>
            </div>

            {/* Content 2 */}
            <div className="relative md:pl-10">
              <span className="hidden md:block absolute -left-[53px] top-1 w-3 h-3 bg-green-600 rounded-full" />

              <p className="font-medium text-gray-800 mb-2">
                Spanish-Inspired Architecture with Indian Sensibilities
              </p>

              <p>
                The Mangalya projects have Spanish-inspired architecture that
                appears elegant yet not ostentatious...
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
