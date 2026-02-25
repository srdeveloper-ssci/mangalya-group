"use client";
import Link from "next/link";

export default function DisclaimerSection() {
  return (
    <section className="md:py-16 py-8 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2
          className="font-medium font-poppins mb-1 tracking-tight text-[25px] md:text-[50px]"
          style={{
            fontFamily: "'Arial', sans-serif",
            letterSpacing: "-0.5px",
          }}
        >
          Disclaimer
        </h2>

        {/* Cursive subtitle */}
        <p className="font-handwritten font-regular text-[20px] md:text-[25px] mb-4">
          Thank you for visiting
        </p>

        {/* Google Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div
            className="flex items-center gap-2 px-4 py-2.5 bg-white"
            style={{
              border: "1px solid #dfe1e5",
              borderRadius: "24px",
              boxShadow: "0 1px 6px rgba(32,33,36,.1)",
            }}
          >
            {/* Google Multicolor SVG Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="24"
              height="24"
              style={{ flexShrink: 0 }}
            >
              <path
                fill="#4285F4"
                d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
              />
              <path
                fill="#34A853"
                d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
              />
              <path
                fill="#FBBC05"
                d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
              />
              <path
                fill="#EA4335"
                d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
              />
            </svg>

            {/* URL */}
            <span
              className="flex-1 text-left"
              style={{
                fontSize: "0.9rem",
                color: "#4d5156",
                fontFamily: "arial, sans-serif",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              www.mangalyagroup.in
            </span>

            {/* Mic Icon */}
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                flexShrink: 0,
              }}
              aria-label="Search by voice"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path
                  fill="#4285f4"
                  d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z"
                />
                <path
                  fill="#34a853"
                  d="M17 12c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-2.08c3.39-.49 6-3.39 6-6.92h-2z"
                />
              </svg>
            </button>

            {/* Lens / Camera Icon */}
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                flexShrink: 0,
              }}
              aria-label="Search by image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 192"
                width="20"
                height="20"
              >
                <circle
                  cx="96"
                  cy="96"
                  r="36"
                  fill="none"
                  stroke="#4285f4"
                  strokeWidth="14"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="36"
                  fill="none"
                  stroke="#ea4335"
                  strokeWidth="14"
                  strokeDasharray="56.5 56.5"
                  strokeDashoffset="0"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="36"
                  fill="none"
                  stroke="#fbbc05"
                  strokeWidth="14"
                  strokeDasharray="56.5 56.5"
                  strokeDashoffset="-56.5"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="36"
                  fill="none"
                  stroke="#34a853"
                  strokeWidth="14"
                  strokeDasharray="56.5 56.5"
                  strokeDashoffset="-113"
                />
                <rect
                  x="140"
                  y="140"
                  width="40"
                  height="14"
                  rx="7"
                  fill="#4285f4"
                  transform="rotate(45 140 140)"
                />
              </svg>
            </button>

            {/* Divider */}
            <div
              style={{
                width: "1px",
                height: "24px",
                background: "#dfe1e5",
                flexShrink: 0,
              }}
            />

            {/* AI Mode Button with Google gradient border */}
            <button
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(90deg, #4285f4, #ea4335, #fbbc05, #34a853) border-box",
                border: "1.5px solid transparent",
                color: "#1a73e8",
                flexShrink: 0,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L9.5 9.5L2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z"
                  fill="#4285f4"
                />
              </svg>
              AI Mode
            </button>
          </div>
        </div>

        {/* Disclaimer Text */}
        <p
          className="mx-auto mb-10"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "0.85rem",
            color: "#555",
            lineHeight: "1.75",
            maxWidth: "860px",
            textAlign: "center",
          }}
        >
          This is the only official website of Mangalya Group (“Company”). Users
          are advised not to rely on information from any other website claiming
          association with the Company. All content on this website, including
          brochures and marketing materials, is provided for informational
          purposes only and is subject to change without notice. No information
          on this website constitutes advertising, marketing, booking, selling,
          an offer for sale, or an invitation to purchase any unit or project.
          Users acknowledge that no reliance has been placed on this information
          for any booking or purchase decision.
        </p>

        {/* Enquire Now Button */}
        <Link
          href="/contact"
          style={{
            display: "inline-block",
            backgroundColor: "#111",
            color: "#fff",
            padding: "12px 48px",
            fontSize: "0.85rem",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "0.03em",
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          onMouseOver={(e) =>
            ((e.target as HTMLElement).style.backgroundColor = "#333")
          }
          onMouseOut={(e) =>
            ((e.target as HTMLElement).style.backgroundColor = "#111")
          }
        >
          Enquire Now
        </Link>
      </div>
    </section>
  );
}
