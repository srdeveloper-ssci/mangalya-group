"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const isProjectActive = () => {
    return pathname.startsWith("/projects");
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
    { href: "/crs-activities", label: "CSR Activities" },
  ];

  const projectLinks = [
    { href: "/projects/mangalya-novena-green", label: "Mangalya Novena Green" },
    { href: "/projects/mangalya-anant", label: "Mangalya Anant" },
    { href: "/projects/mangalya-ophira", label: "Mangalya Ophira" },
    { href: "/projects/other-ventures", label: "Other Ventures" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white font-['Montserrat']">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="flex items-center h-[60px] lg:h-[70px]">
            {/* LEFT – Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="Mangalya Group"
                  width={130}
                  height={40}
                  priority
                  className="object-contain w-[100px] sm:w-[115px] lg:w-[135px] h-auto"
                />
              </Link>
            </div>

            {/* SPACER */}
            <div className="hidden lg:block flex-1 min-w-[60px] max-w-[150px]"></div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center flex-1 justify-center">
              <ul className="flex items-center gap-10 xl:gap-12 text-[15px] xl:text-[16px] font-medium text-gray-600">
                {navLinks.slice(0, 2).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative py-2 transition-colors duration-200 whitespace-nowrap
                        ${
                          isActive(link.href)
                            ? "text-[#16a34a] font-semibold"
                            : "hover:text-[#16a34a]"
                        }
                      `}
                    >
                      {link.label}
                      {/* Active Indicator */}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-[#16a34a] rounded-full transition-transform duration-300 origin-left
                          ${isActive(link.href) ? "scale-x-100" : "scale-x-0"}
                        `}
                      />
                    </Link>
                  </li>
                ))}

                {/* Dropdown Menu */}
                <li className="relative group">
                  <button
                    className={`relative flex items-center gap-1.5 py-2 cursor-pointer transition-colors duration-200 whitespace-nowrap
                      ${
                        isProjectActive()
                          ? "text-[#16a34a] font-semibold"
                          : "hover:text-[#16a34a]"
                      }
                    `}
                  >
                    <span>Our Project</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    {/* Active Indicator */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-[#16a34a] transition-transform duration-300 origin-left
                        ${isProjectActive() ? "scale-x-100" : "scale-x-0"}
                      `}
                    />
                  </button>

                  {/* Dropdown Content */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {/* Arrow */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 shadow-lg" />

                    <div className="relative w-[240px] bg-white text-gray-900 shadow-2xl overflow-hidden border border-gray-200">
                      {/* Ongoing Project */}
                      <div className="px-4 py-3 border-b border-gray-200">
                        <p className="text-[11px] uppercase tracking-wide text-gray-500 font-semibold mb-2">
                          Ongoing Project
                        </p>
                        <Link
                          href="/projects/mangalya-novena-green"
                          className={`block px-3 py-2.5 text-[13px] font-['Poppins'] rounded transition-colors duration-200 ${
                            isActive("/projects/mangalya-novena-green")
                              ? "bg-[#16a34a]/15 text-[#16a34a] font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          Mangalya novena green
                        </Link>
                        <Link
                          href="/projects/mangalya-anant"
                          className={`block px-3 py-2.5 text-[13px] font-['Poppins'] rounded transition-colors duration-200 ${
                            isActive("/projects/mangalya-anant")
                              ? "bg-[#16a34a]/15 text-[#16a34a] font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          Mangalya Anant
                        </Link>
                      </div>

                      {/* Delivered Project */}
                      <div className="px-4 py-3 border-b border-gray-200">
                        <p className="text-[11px] uppercase tracking-wide text-gray-500 font-semibold mb-2">
                          Delivered Project
                        </p>
                        <Link
                          href="/projects/mangalya-ophira"
                          className={`block px-3 py-2.5 text-[13px] font-['Poppins'] rounded transition-colors duration-200 ${
                            isActive("/projects/mangalya-ophira")
                              ? "bg-[#16a34a]/15 text-[#16a34a] font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          Mangalya Ophira
                        </Link>
                      </div>

                      {/* Other Ventures */}
                      <div className="px-4 py-3 border-b border-gray-200">
                        <p className="text-[11px] uppercase tracking-wide text-gray-500 font-semibold mb-2">
                          Other Ventures
                        </p>
                        <Link
                          href="https://snowvillage.in/"
                          className={`block px-3 py-2.5 text-[13px] font-['Poppins'] rounded transition-colors duration-200 ${
                            isActive("https://snowvillage.in/")
                              ? "bg-[#16a34a]/15 text-[#16a34a] font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          Snow Village
                        </Link>
                        <Link
                          href="https://cozylounge.in/"
                          className={`block px-3 py-2.5 text-[13px] font-['Poppins'] rounded transition-colors duration-200 ${
                            isActive("https://cozylounge.in/")
                              ? "bg-[#16a34a]/15 text-[#16a34a] font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          Cozy
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

                {navLinks.slice(2).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative py-2 transition-colors duration-200 whitespace-nowrap
                        ${
                          isActive(link.href)
                            ? "text-[#16a34a] font-semibold"
                            : "hover:text-[#16a34a]"
                        }
                      `}
                    >
                      {link.label}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-[#16a34a] rounded-full transition-transform duration-300 origin-left
                          ${isActive(link.href) ? "scale-x-100" : "scale-x-0"}
                        `}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT SPACER */}
            <div className="hidden lg:block w-[80px]"></div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden ml-auto p-2 rounded-md hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between items-end">
                {/* Top line */}
                <span
                  className={`h-[3px] w-full bg-black rounded transition-all duration-300
        ${mobileMenuOpen ? "rotate-45 translate-y-[8.5px]" : ""}
      `}
                />

                {/* Middle short line */}
                <span
                  className={`h-[3px] w-[70%] bg-black rounded transition-all duration-300
        ${mobileMenuOpen ? "opacity-0" : ""}
      `}
                />

                {/* Bottom line */}
                <span
                  className={`h-[3px] w-full bg-black rounded transition-all duration-300
        ${mobileMenuOpen ? "-rotate-45 -translate-y-[8.5px]" : ""}
      `}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300
          ${mobileMenuOpen ? "visible" : "invisible"}
        `}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300
            ${mobileMenuOpen ? "opacity-100" : "opacity-0"}
          `}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-[60px] right-0 w-[85%] max-w-[320px] h-[calc(100vh-60px)] bg-white shadow-2xl transition-transform duration-300 ease-out overflow-y-auto
            ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Menu Links */}
          <ul className="py-4 px-3 space-y-1">
            {navLinks.slice(0, 2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 text-[15px] transition-all duration-200
                    ${
                      isActive(link.href)
                        ? "bg-[#16a34a]/10 text-[#16a34a] font-semibold rounded-xl"
                        : "text-gray-700 hover:bg-gray-50 hover:pl-5"
                    }
                  `}
                >
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}

            {/* Mobile Dropdown */}
            <li>
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[15px] transition-all duration-200
                  ${
                    isProjectActive()
                      ? "bg-[#16a34a]/10 text-[#16a34a] font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  }
                `}
              >
                <span>Our Project</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    mobileDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mobile Dropdown Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out
                  ${mobileDropdownOpen ? "max-h-[400px] opacity-100 mt-2" : "max-h-0 opacity-0"}
                `}
              >
                <div className="ml-2 bg-gray-50 overflow-hidden border border-gray-200">
                  <div className="px-4 pt-3 pb-2">
                    <p className="text-[11px] uppercase text-gray-500 font-semibold mb-2">
                      Ongoing Project
                    </p>
                    <Link
                      href="/projects/mangalya-novena-green"
                      className={`block py-2 px-2 rounded text-[13px] transition-colors duration-200 ${
                        isActive("/projects/mangalya-novena-green")
                          ? "bg-[#16a34a]/15 text-[#16a34a] font-medium"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      Mangalya novena green
                    </Link>
                    <Link
                      href="/projects/mangalya-anant"
                      className={`block py-2 px-2 rounded text-[13px] transition-colors duration-200 ${
                        isActive("/projects/mangalya-anant")
                          ? "bg-[#16a34a]/15 text-[#16a34a] font-medium"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      Mangalya Anant
                    </Link>
                  </div>

                  <div className="px-4 pt-3 pb-2 border-t border-gray-200">
                    <p className="text-[11px] uppercase text-gray-500 font-semibold mb-2">
                      Delivered Project
                    </p>
                    <Link
                      href="/projects/mangalya-ophira"
                      className={`block py-2 px-2 rounded text-[13px] transition-colors duration-200 ${
                        isActive("/projects/mangalya-ophira")
                          ? "bg-[#16a34a]/15 text-[#16a34a] font-medium"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      Mangalya Ophira
                    </Link>
                  </div>

                  <div className="px-4 pt-3 pb-3 border-t border-gray-200">
                    <p className="text-[11px] uppercase text-gray-500 font-semibold mb-2">
                      Other Ventures
                    </p>

                    <Link
                      href="https://snowvillage.in/"
                      className={`block py-2 px-2 rounded text-[13px] transition-colors duration-200 ${
                        pathname.includes("snowvillage")
                          ? "bg-[#16a34a]/15 text-[#16a34a] font-medium"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      Snow Village
                    </Link>

                    <Link
                      href="https://cozylounge.in/"
                      className={`block py-2 px-2 rounded text-[13px] transition-colors duration-200 ${
                        pathname.includes("cozylounge")
                          ? "bg-[#16a34a]/15 text-[#16a34a] font-medium"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      Cozy
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            {navLinks.slice(2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] transition-all duration-200
                    ${
                      isActive(link.href)
                        ? "bg-[#16a34a]/10 text-[#16a34a] font-semibold"
                        : "text-gray-700 hover:bg-gray-50 hover:pl-5"
                    }
                  `}
                >
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-gray-100 bg-gray-50">
            <p className="text-xs text-gray-500 text-center">
              © 2025 Mangalya Group
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
