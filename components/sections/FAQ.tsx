"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does a website take to complete?",
    answer:
      "Most business websites are delivered within 1–3 weeks depending on the project scope and requirements.",
  },
  {
    question: "Do you provide WordPress and custom development?",
    answer:
      "Yes. We build websites using WordPress, Next.js, React and other modern technologies based on your business needs.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can modernize your current website with improved UI/UX, performance and SEO.",
  },
  {
    question: "What is included in Career Branding?",
    answer:
      "Career Branding includes ATS Resume Writing, LinkedIn Optimization, Portfolio Websites, Cover Letters and personal branding solutions.",
  },
  {
    question: "Do you provide SEO services?",
    answer:
      "Yes. We offer Technical SEO, Local SEO, AEO, GEO and website optimization to improve online visibility.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. We provide maintenance, security updates, backups and continuous technical support after project delivery.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#050816] py-28">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Have Questions?
          </h2>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >

                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="border-t border-white/10 px-6 py-5 text-slate-300 leading-7">
                  {faq.answer}
                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}