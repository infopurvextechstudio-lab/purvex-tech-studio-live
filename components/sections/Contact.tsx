"use client";

import CalendlyButton from "../integration/CalendlyButton";

import {
  Mail,
  Clock3,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] py-20 lg:py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#06B6D420,transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading */}

        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-20">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 sm:text-sm">
            CONTACT PURVEX
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl lg:mt-8 lg:text-6xl">
            Let's Build Your
            <br />
            Next Big Project
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-400 sm:text-lg">
            Whether you need a premium website, AI automation,
            SEO, GEO, AEO or complete digital transformation,
            we're ready to help turn your ideas into reality.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">

          {/* LEFT */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:p-10">

            <div className="inline-flex rounded-2xl bg-cyan-500/10 p-4">

              <Sparkles
                className="text-cyan-400"
                size={26}
              />

            </div>

            <h3 className="mt-6 text-2xl font-black text-white lg:text-3xl">
              Let's Talk About Your Business
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              Every successful business starts with a conversation.
              Tell us your vision and we'll create a modern digital
              solution that helps your business grow faster.
            </p>

            <div className="mt-10 rounded-3xl border border-cyan-500/10 bg-[#0B1220]/70 p-5 lg:p-6">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-cyan-500/10 p-4">

                  <Mail
                    className="text-cyan-400"
                    size={22}
                  />

                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    Business Email
                  </p>

                  <a
                    href="mailto:infopurvextechstudio@gmail.com"
                    className="font-medium text-white transition hover:text-cyan-400 break-all"
                  >
                    infopurvextechstudio@gmail.com
                  </a>

                </div>

              </div>

            </div>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-3 text-slate-300">

                <Clock3
                  size={19}
                  className="text-cyan-400"
                />

                Response within 24 hours

              </div>

              <div className="flex items-center gap-3 text-slate-300">

                <ShieldCheck
                  size={19}
                  className="text-cyan-400"
                />

                100% Secure & Confidential

              </div>

              <div className="flex items-center gap-3 text-slate-300">

                <MessageCircle
                  size={19}
                  className="text-cyan-400"
                />

                Free Discovery Consultation

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <form
            action="https://formspree.io/f/mykqrbop"
            method="POST"
            className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:p-10"
          >

            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Business Email"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name (Optional)"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
            />

            <select
              name="service"
              required
              defaultValue=""
              className="w-full rounded-2xl border border-white/10 bg-[#0B1220] px-4 py-3.5 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
            >
              <option value="" disabled>
                Select Required Service
              </option>

              <option>Business Website</option>
              <option>E-Commerce Store</option>
              <option>AI Automation</option>
              <option>CRM & Workflow Automation</option>
              <option>SEO • GEO • AEO</option>
              <option>Brand Identity</option>
              <option>Career Branding</option>
              <option>ATS Resume</option>
              <option>Portfolio Website</option>
              <option>Custom Digital Solution</option>
            </select>            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell us about your project..."
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
            />

            <input
              type="hidden"
              name="_subject"
              value="New Purvex Website Inquiry"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-[length:200%] px-8 py-4 font-bold text-white transition-all duration-500 hover:scale-[1.02] hover:bg-right"
            >
              Start Your Project
              <ArrowRight size={18} />
            </button>

            <div className="pt-2">
              <CalendlyButton />
            </div>

            <p className="text-center text-xs leading-6 text-slate-500 sm:text-sm">
              By submitting this form, you agree to be contacted by
              <span className="font-medium text-slate-300">
                {" "}Purvex Tech Studio
              </span>
              {" "}regarding your project inquiry. We respect your privacy
              and never share your information with third parties.
            </p>

          </form>

        </div>

      </div>

    </section>
  );
}