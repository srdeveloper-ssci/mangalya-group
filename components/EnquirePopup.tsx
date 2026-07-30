"use client";

import { formSchema, toE164, url } from "@/lib/formValidation";
import { Dispatch, SetStateAction, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Types
type ToastType = "success" | "error";

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

interface ToastState {
  show: boolean;
  message: string;
  type: ToastType;
}

/* 🔗 Project → Brochure map */
const BROCHURE_MAP: Record<string, string> = {
  "mangalya-novena-green":
    "/our-projects/mangalya-novena-green/Novena-Greens-Brochure.pdf",
  "mangalya-anant": "/our-projects/mangalya-anant/anant_brochure.pdf",
  "mangalya-ophira": "/our-projects/mangalya-ophira/ophira_brochure.pdf",
};

// Toast Component
const Toast = ({ message, type, onClose }: ToastProps) => {
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div className="fixed top-5 right-5 z-[60] animate-slide-in">
      <div
        className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px]`}
      >
        {type === "success" ? (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        )}
        <span className="flex-1 text-sm font-medium">{message}</span>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

interface BrochureOverride {
  name: string;
  href: string;
}

export default function EnquirePopup({
  open,
  setOpen,
  brochure,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  /** Explicit brochure to download. Falls back to the current project route when omitted. */
  brochure?: BrochureOverride;
}) {
  const pathname = usePathname();
  const projectSlug = pathname.split("/").pop() || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (message: string, type: ToastType) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" });
    }, 5000);
  };

  if (!open) return null;

  const validate = () => {
    const err: any = {};

    if (!name.trim()) err.name = "Name required";

    if (!email.trim()) err.email = "Email required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      err.email = "Invalid email";

    if (!number.trim()) err.number = "Number required";
    else if (!/^\d{10}$/.test(number)) err.number = "Enter 10 digit number";

    if (!acceptTerms)
      err.acceptTerms = "Please accept terms and privacy policy";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async () => {
    if (submitting) return;

    if (!validate()) return;

    try {
      setSubmitting(true);

      // 🔹 Yup validation
      await formSchema.validate(
        {
          name,
          email,
          phone: number,
        },
        { abortEarly: false },
      );

      // 🔹 Convert phone to E.164
      const formattedPhone = toE164(number);
      if (!formattedPhone) {
        showToast("Invalid phone number", "error");
        setSubmitting(false);
        return;
      }

      console.log("Sending to API route:", url);

      // 🔹 API Call (now going through local proxy)
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          location: `Brochure - ${brochure?.name ?? projectSlug}`,
          name,
          email,
          phone: formattedPhone,
          more: message, // UI message → backend more
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || "Submission failed");
      }

      // 🔹 If API success → Download brochure
      const brochureHref = brochure?.href ?? BROCHURE_MAP[projectSlug];
      if (!brochureHref) {
        showToast("Brochure not found", "error");
        setSubmitting(false);
        return;
      }

      // Small delay before download to ensure toast appears
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = brochureHref;
        link.download = brochureHref.split("/").pop()!;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 500);

      showToast("Brochure downloaded successfully!", "success");

      // 🔹 Reset form
      setName("");
      setEmail("");
      setNumber("");
      setMessage("");
      setAcceptTerms(false);
      setErrors({});

      // Close popup after successful submission
      setTimeout(() => {
        setOpen(false);
      }, 1500);
    } catch (error: any) {
      console.error("Submission error:", error);
      showToast(error.message || "Something went wrong", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Toast Container */}
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() =>
            setToast({ show: false, message: "", type: "success" })
          }
        />
      )}

      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Blur BG */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />

        {/* Popup */}
        <div className="relative w-full max-w-[420px] mx-4 sm:mx-0 bg-[#f7f7f7] rounded-md shadow-2xl px-5 sm:px-8 py-6 sm:py-7">
          <h2 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6">
            Enquire Now
          </h2>

          <div className="space-y-5">
            {/* Name */}
            <div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your Full name"
                className="w-full h-[52px] rounded-2xl border px-5 text-sm bg-white"
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name}</p>
              )}
            </div>


            {/* Number */}
            <div>
              <input
                value={number}
                maxLength={10}
                onChange={(e) => setNumber(e.target.value.replace(/\D/g, ""))}
                placeholder="Enter Number"
                className="w-full h-[52px] rounded-2xl border px-5 text-sm bg-white"
              />
              {errors.number && (
                <p className="text-xs text-red-500 mt-1">{errors.number}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full h-[52px] rounded-2xl border px-5 text-sm bg-white"
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
              )}
            </div>


            {/* Message (optional) */}
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message"
              className="w-full rounded-2xl border px-5 py-3 text-sm bg-white resize-none"
            />

            {/* Consent Checkbox */}
            <div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="enquireAcceptTerms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 mt-1 cursor-pointer"
                />
                <label
                  htmlFor="enquireAcceptTerms"
                  className="text-sm text-gray-600 cursor-pointer"
                >
                  Accept{" "}
                  <Link
                    href="/privacy"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    terms
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    privacy policy
                  </Link>
                </label>
              </div>
              {errors.acceptTerms && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.acceptTerms}
                </p>
              )}
            </div>

            <div className="pt-4 flex">
              <button
                disabled={submitting}
                onClick={handleSubmit}
                className="w-full sm:w-auto bg-black text-white px-10 py-3 text-sm rounded-sm hover:bg-gray-900 transition disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
