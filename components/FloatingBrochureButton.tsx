"use client";

import { useEffect, useRef, useState } from "react";
import { Download, FileText, X } from "lucide-react";
import EnquirePopup from "@/components/EnquirePopup";

const BROCHURES = [
  {
    name: "Mangalya Novena Green",
    href: "/our-projects/mangalya-novena-green/Novena-Greens-Brochure.pdf",
  },
  {
    name: "Mangalya Anant",
    href: "/our-projects/mangalya-anant/anant_brochure.pdf",
  },
  {
    name: "Mangalya Ophira",
    href: "/our-projects/mangalya-ophira/ophira_brochure.pdf",
  },
];

function FloatingBrochureButton() {
  const [open, setOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [selectedBrochure, setSelectedBrochure] = useState<
    (typeof BROCHURES)[number] | null
  >(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex items-stretch font-poppins"
      >
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Download project brochures"
          className="flex flex-col items-center gap-2 bg-black text-white rounded-r-lg px-2 py-4 shadow-lg hover:bg-[#008854] transition-colors duration-300"
        >
          {open ? (
            <X size={16} />
          ) : (
            <FileText size={16} />
          )}
          <span
            className="text-[11px] tracking-widest font-light [writing-mode:vertical-rl] rotate-180"
          >
            BROCHURES
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${open ? "max-w-[260px] opacity-100" : "max-w-0 opacity-0"
            }`}
        >
          <div className="flex flex-col bg-white shadow-lg rounded-r-lg overflow-hidden min-w-[220px] border border-l-0 border-black/10">
            {BROCHURES.map((brochure) => (
              <button
                key={brochure.href}
                type="button"
                onClick={() => {
                  setSelectedBrochure(brochure);
                  setFormOpen(true);
                  setOpen(false);
                }}
                className="group flex items-center justify-between gap-3 px-4 py-3 text-[13px] text-black border-b border-black/10 last:border-b-0 hover:bg-[#008854] hover:text-white transition-colors duration-200"
              >
                <span className="font-light">{brochure.name}</span>
                <Download
                  size={15}
                  className="shrink-0 opacity-70 group-hover:opacity-100"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <EnquirePopup
        open={formOpen}
        setOpen={setFormOpen}
        brochure={selectedBrochure ?? undefined}
      />
    </>
  );
}

export default FloatingBrochureButton;
