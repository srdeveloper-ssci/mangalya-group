import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title: "Amenities That Matter",
    desc: "What Modern Homebuyers Really Want in 2026",
    img: "/blogs/amenities.png",
    tags: ["Technology", "Other Category"],
    slug: "/blogs/amenities-that-matter",
  },
  {
    title: "Inside Mangalya Novena Greens",
    desc: "A New Standard for Modern Living",
    img: "/blogs/novena.png",
    tags: ["Technology", "Other Category"],
    slug: "/blogs/mangalya-novena-greens",
  },
  {
    title: "Mangalya Projects",
    desc: "Mangalya Projects Are Turning Heads in Noida West & Ghaziabad",
    img: "/blogs/mangalya.png",
    tags: ["Technology"],
    slug: "/blogs/mangalya-projects",
  },
  {
    title: "Urban Living",
    desc: "Greater Noida Is the Future of Urban Living",
    img: "/blogs/urban.png",
    tags: ["Technology", "Other Category"],
    slug: "/blogs/urban-living",
  },
];

export default function BlogGrid() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-6 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {blogs.map((blog, index) => (
          <Link
            key={index}
            href={blog.slug}
            className="group relative h-64 md:h-72 overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <Image
              src={blog.img}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority={index < 2}
            />
            <div />

            {/* Tags - Top Right */}
            <div className="absolute top-3 right-3 md:top-5 md:right-5 flex gap-2 z-20 flex-wrap justify-end">
              {blog.tags.map((tag, i) => (
                <span
                  key={i}
                  className="font-poppins font-light bg-yellow-400 text-black text-[10px] px-3 py-1.5 rounded-full whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Content - Bottom Bar (Full Width) */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/30 px-5 md:px-6 py-4 md:py-5 flex justify-between items-end gap-4">
              {/* Text Container */}
              <div className="flex-1 min-w-0">
                <h3 className="font-poppins text-[15px] md:text-[20px] font-medium text-white leading-tight mb-1">
                  {blog.title}
                </h3>
                <p className="font-poppins font-light text-[10px] text-gray-100 opacity-100 line-clamp-1">
                  {blog.desc}
                </p>
              </div>

              {/* Arrow - Bottom Right */}
              <div className="flex-shrink-0 text-white text-2xl md:text-3xl font-light">
                →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
