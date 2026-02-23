"use client";

import Image from "next/image";

const features = [
  {
    title: "Smart Design Execution",
    description: "Efficient floor plans with smart cores ensure functional layouts for comfortable everyday living.",
    iconUrl: "/icons/design-icon.png",
  },
  {
    title: "Long-Lasting Finishes & Materials",
    description: "Durable finishes and quality fittings ensure low maintenance and long-term performance.",
    iconUrl: "/icons/materials-icon.png",
  },
  {
    title: "Safety & Reliability",
    description: "Earthquake-resistant structural design with comprehensive fire-safety planning ensures enhanced safety and compliance.",
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
    {/* CUSTOM SVG BORDER - Precise S-Curve Path */}
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 520 160"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
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
  strokeOpacity="0.25"
  strokeWidth="1.5"
  strokeDasharray="6 6"
  strokeLinecap="round"
  fill="none"
/>
    </svg>

    {/* ICON CONTAINER - Now using Image component */}
    <div className="absolute top-[-30px] left-[20px] w-[75px] h-[75px] bg-[#008854] rounded-full flex items-center justify-center z-20 shadow-md overflow-hidden">
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
    <div className="pl-32 pr-8 py-5">
      <h3 className="text-white font-bold text-lg lg:text-xl mb-1 tracking-tight">
        {title}
      </h3>
      <div className="w-full h-[0.5px] bg-white opacity-20 mb-3"></div>
      <p className="text-gray-400 text-[13px] lg:text-[14px] leading-snug">
        {description}
      </p>
    </div>
  </div>
);

const LeafIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4C16 4 8 8 8 16C8 20 10 24 16 28C22 24 24 20 24 16C24 8 16 4 16 4Z" fill="#4ADE80" />
    <path d="M16 8C16 8 12 10 12 16C12 18 13 20 16 22C19 20 20 18 20 16C20 10 16 8 16 8Z" fill="#22C55E" />
  </svg>
);

export default function MangalyaSpeciality() {
  return (
    <section className="bg-[#292929] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">
          
          {/* LEFT CONTENT (Preserved from your code) */}
          <div className="lg:w-[45%]">
            <div className="flex items-start gap-2 mb-6">
              <h2 className="text-3xl md:text-4xl font-serif italic text-white leading-tight">
                The Mangalya
                <br />
                Speciality
              </h2>
              <LeafIcon />
            </div>

            <p className="text-gray-200 text-base mb-8 max-w-md font-['Poppins']">
              Each Mangalya Group project lies
              <span className="text-gray-300">
                {" "}in designing societies where space, structure, and lifestyle
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

          {/* VERTICAL SEPARATOR LINE */}
          <div className="hidden lg:block w-[1px] bg-white opacity-20 self-stretch mx-4"></div>

          {/* RIGHT CONTENT - FEATURES (New & Responsive) */}
          <div className="lg:w-[50%] flex flex-col gap-6 justify-center pl-10 ">
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