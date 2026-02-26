"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        { label: "Contact-Us", href: "/contact" },
        { label: "Blogs", href: "/blogs" },
      ],
    },
    {
      title: "Projects",
      links: [
        {
          label: "Mangalya Novena Green",
          href: "/projects/mangalya-novena-green",
        },
        { label: "Mangalya Anant", href: "/projects/mangalya-anant" },
        { label: "Mangalya Ophira", href: "/projects/mangalya-ophira" },
        { label: "Snow Village", href: "https://snowvillage.in/" },
        { label: "Cozy", href: "https://cozylounge.in/" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Disclaimer", href: "/disclaimer" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#292929] text-gray-100 font-['Montserrat']">
      {/* Main Footer Content */}
      <div className="w-full px-6 sm:px-10 lg:px-20 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo & Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img
                  src="/footer-logo.png"
                  alt="Mangalya Group"
                  className="w-40 h-auto mb-4"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building spaces that transcend ordinary living and inspire
                extraordinary moments.
              </p>
            </div>

            {/* Quick Links */}
            {footerSections[0] && (
              <div>
                <h4 className="text-white font-semibold text-base mb-6 relative pb-3">
                  {footerSections[0].title}
                  <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#16a34a]" />
                </h4>
                <ul className="space-y-3">
                  {footerSections[0].links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        className="text-gray-400 text-sm hover:text-[#16a34a] transition-colors duration-300 hover:pl-2 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Projects */}
            {footerSections[1] && (
              <div>
                <h4 className="text-white font-semibold text-base mb-6 relative pb-3">
                  {footerSections[1].title}
                  <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#16a34a]" />
                </h4>
                <ul className="space-y-3">
                  {footerSections[1].links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        className="text-gray-400 text-sm hover:text-[#16a34a] transition-colors duration-300 hover:pl-2 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold text-base mb-6 relative pb-3">
                Contact & Location
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#16a34a]" />
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+918273782839"
                    className="text-gray-300 text-sm hover:text-[#16a34a] transition-colors"
                  >
                    +91 8273782839
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@mangalayagroup.in"
                    className="text-gray-300 text-sm hover:text-[#16a34a] transition-colors break-all"
                  >
                    info@mangalayagroup.in
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Address
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    H-97, Sector 63,
                    <br />
                    Noida, 201301
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950 px-6 sm:px-10 lg:px-20 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-gray-300 text-sm">
            © {currentYear} Mangalya Group. All rights reserved. Powered by{" "}
            <a
              href="https://in.linkedin.com/company/tech-prizm"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#16a34a] transition-colors"
            >
              Tech Prizm
            </a>
          </p>
          <div className="flex gap-6">
            {footerSections[2]?.links.slice(0, 2).map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-gray-300 text-sm hover:text-[#16a34a] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}