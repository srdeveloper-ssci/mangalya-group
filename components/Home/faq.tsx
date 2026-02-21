"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "Is the title of the property clear?",
    answer:
      "For all prestige properties, legal due diligence is carried out. We ensure that the land is freehold, marketable, and free from all encumbrances.",
  },
  {
    question: "What happens if construction or possession is delayed?",
    answer:
      "The project will be delivered as per committed timelines. Any delay beyond our control will be governed by the agreement and applicable RERA guidelines.",
  },
  {
    question: "How are instalments to be paid – is it time bound?",
    answer: "Yes, we at Prestige follow a time-linked payment plan.",
  },
  {
    question: "When do I get a confirmed allotment?",
    answer:
      "You will receive a formal allotment letter upon receipt of the 10% booking amount and post-dated cheques for the balance.",
  },
  {
    question: "When can I register my property?",
    answer:
      "Registration will be completed post development and after full payment of all applicable charges.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-white font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-[25px] md:text-[40px] font-semibold text-center font-poppins mb-14">
          Frequently Asked Questions(FAQ)
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* FAQ */}
          <div>
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="mb-4">
                  {/* Question */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full bg-gray-50 px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-medium text-gray-900 text-[16px] md:text-[18px] font-poppins ">
                      {item.question}
                    </span>
                    <span className="text-2xl text-gray-500">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div className="bg-emerald-50 px-6 py-4 border-b-4 border-emerald-500">
                      <p className="text-[13px] md:[15px] font-poppins font-light text-[#524F4F] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Image */}
          <div className="relative w-full h-[400px] lg:w-[400px] lg:h-[450px]">
  <Image
    src="/faq-img-new.png"
    alt="Building"
    fill
    className="object-cover"
  />
</div>
        </div>
      </div>
    </section>
  );
}
