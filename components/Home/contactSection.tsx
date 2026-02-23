"use client";

import { useState } from "react";
import Link from "next/link";

// Instagram icon component
const InstagramIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle
      cx="12"
      cy="12"
      r="4"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    acceptTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        e.target instanceof HTMLInputElement && e.target.type === "checkbox"
          ? e.target.checked
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-white py-10 md:pt-16 px-6 md:px-12 lg:px-20 font-['Poppins']">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content - Order 2 on mobile, 1 on desktop */}
          <div className="order-2 lg:order-1">
            <h2 className="text-[25px] md:text-[30px] font-semibold text-gray-900 mb-4">
              Always Here to Help You
            </h2>
            <p className="text-gray-500 text-[13px] mb-10 max-w-md leading-[128%] font-light">
              Always here to help—fast, focused, and fully invested in your
              success. From quick support to big-picture strategy, we've got
              your back at every step.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 md:w-14 md:h-14 w-11 h-11 rounded-full bg-gray-900 flex items-center justify-center text-white flex-none">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="md:pt-1">
                  <h3 className="text-gray-900 font-medium text-[14px]">
                    Location
                  </h3>
                  <p className="text-[#707070] text-[12px] font-light leading-relaxed">
                    H-97, sec 63, Noida, 201301
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 md:w-14 md:h-14 w-11 h-11 rounded-full bg-gray-900 flex items-center justify-center text-white flex-none">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="md:pt-1">
                  <h3 className="text-gray-900 font-medium text-[14px]">
                    Email
                  </h3>
                  <a
                    href="mailto:info@mangalayagroup.in"
                    className="text-[#707070] text-[12px] font-light leading-relaxed"
                  >
                    info@mangalayagroup.in
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 md:w-14 md:h-14 w-11 h-11 rounded-full bg-gray-900 flex items-center justify-center text-white flex-none">
                  <InstagramIcon />
                </div>
                <div className="md:pt-1">
                  <h3 className="text-gray-900 font-medium text-[14px]">
                    Instagram
                  </h3>
                  <a
                    href="https://instagram.com/mangalya_group"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#707070] text-[12px] font-light leading-relaxed"
                  >
                    @mangalya_group
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form - Order 1 on mobile, 2 on desktop */}
          <div className="order-1 lg:order-2">
            <div className="bg-[#F4F5F7] shadow-2xl p-8 lg:p-10">
              <h3 className="text-[25px] md:text-[30px] font-semibold text-gray-900 mb-2">
                Get in Touch
              </h3>
              <p className="text-gray-500 text-[13px] mb-8">
                Your email will not be published. Required field are marked
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your Full name"
                    className="w-full px-4 py-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Number"
                    className="w-full px-4 py-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write a message..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 mt-1 cursor-pointer"
                    required
                  />
                  <label
                    htmlFor="acceptTerms"
                    className="text-gray-600 text-sm cursor-pointer"
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

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 text-sm"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
