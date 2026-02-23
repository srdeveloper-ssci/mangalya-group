"use client";

import Image from "next/image";

const features = [
  {
    title: "Smart Design Execution",
    description:
      "Efficient floor plans with smart cores ensure functional layouts for comfortable everyday living.",
    iconUrl: "/icons/design-icon.png",
  },
  {
    title: "Long-Lasting Finishes & Materials",
    description:
      "Durable finishes and quality fittings ensure low maintenance and long-term performance.",
    iconUrl: "/icons/materials-icon.png",
  },
  {
    title: "Safety & Reliability",
    description:
      "Earthquake-resistant structural design with comprehensive fire-safety planning ensures enhanced safety and compliance.",
    iconUrl: "/icons/safety-icon.png",
  },
];

type FeatureCardProps = {
  title: string;
  description: string;
  iconUrl: string;
};

const FeatureCard = ({ title, description, iconUrl }: FeatureCardProps) => (
  <div className="relative w-full max-w-[520px] min-h-[145px] flex items-center">
    {/* SVG BORDER (Same as yours) */}
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 520 160"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M 130 1
     H 488
     A 14 14 0 0 1 502 15
     V 131
     A 14 14 0 0 1 488 145
     H 22
     A 14 14 0 0 1 8 131
     V 80
     C 2 50, 85 98, 110 10
     A 21 8 0 0 1 130 1
     z"
        stroke="white"
        strokeOpacity="0.5"
        strokeWidth="1.3"
        strokeDasharray="6 6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>

    {/* ICON CONTAINER (UNCHANGED) */}
    <div className="absolute md:top-[-30px] top-[-10] md:left-[20px] w-13 h-13 md:w-[75px] md:h-[75px] bg-[#008854] rounded-full flex items-center justify-center z-20 shadow-md overflow-hidden">
      {iconUrl && (
        <Image
          src={iconUrl}
          alt={title}
          width={40}
          height={40}
          className="object-contain"
        />
      )}
    </div>

    {/* CONTENT */}
    <div className="pr-8 py-0">
      <h3 className=" pl-22 md:pl-32 text-white font-bold text-[14px] md:text-[20px] mb-3 tracking-tight">
        {title}
      </h3>
      <div className="md:ml-32 ml-22 w-[calc(100%-8rem)] h-[0.5px] bg-white opacity-40 mb-3"></div>
      <p className="pl-10 text-gray-300 text-[10px] md:text-[14px] leading-snug pb-5">
        {description}
      </p>
    </div>
  </div>
);

export default function MangalyaSpeciality() {
  return (
    <section className="bg-[#292929] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">
          {/* LEFT CONTENT */}
          <div className="lg:w-[45%] lg:pr-10 xl:pr-16">
            {/* ✅ UPDATED HEADING WITH LEAF IMAGE */}
            <div className="relative inline-flex items-center mb-6">
              <h2 className="text-3xl md:text-4xl font-serif italic text-white leading-tight">
                The Mangalya
                <br />
                Speciality
              </h2>

              <div className="absolute -top-5 right-[-25px] md:-top-6 md:right-[-40px] w-10 md:w-14 pointer-events-none">
                <Image
                  src="/about-us/leaf.png"
                  alt="leaf"
                  width={64}
                  height={64}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            <p className="text-gray-200 text-base mb-8 max-w-md font-['Poppins']">
              Each Mangalya Group project lies
              <span className="text-gray-300">
                {" "}
                in designing societies where space, structure, and lifestyle
              </span>
              <span className="text-gray-400"> work in harmony</span>
            </p>

            <div className="relative w-full aspect-[4/3] max-w-md overflow-hidden rounded-sm">
              <Image
                src="/MangalyaSpeciality.png"
                alt="Mangalya Group Residential Project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* VERTICAL SEPARATOR */}
          <div className="hidden lg:block w-[1px] bg-white opacity-40 self-stretch mx-4"></div>

          {/* RIGHT CONTENT (UNCHANGED) */}
          <div className="lg:w-[50%] flex flex-col md:gap-12 gap-4 justify-center lg:pl-10 xl:pl-16">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                iconUrl={feature.iconUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
