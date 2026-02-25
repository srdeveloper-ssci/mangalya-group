"use client";

export default function LuxuryDeveloperEnergy() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            Luxury Developer <br /> Energy
          </h2>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="font-handwritten font-semibold text-[30px] md:text-[45px] mb-4 text-gray-900">
            Transparency. Compliance. Trust.
          </h3>

          <p className="font-poppins text-sm text-gray-600 leading-relaxed">
            The content presented on this website regarding projects,
            apartments, plots, buildings, layouts, areas, amenities, services,
            terms of sale, and other relevant details is based on approved and
            sanctioned plans, subject to modifications and changes in compliance
            with relevant laws or directions from authorities. Any visuals,
            images, renderings, or maps of projects under development or
            construction are purely indicative, informative, and
            representational and should not be construed as actual photographs
            unless explicitly stated.
          </p>
        </div>
      </div>
    </section>
  );
}
