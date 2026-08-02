"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-500/10 bg-[#040816]">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#06B6D420,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-20">

        {/* Top */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Company */}
          <div className="md:col-span-2">

            <div className="flex items-center gap-3">

            <Image
  src="/logo/logo.png"
  alt="Purvex Tech Studio"
  width={300}
  height={280}
  priority
  className="h-42 w-auto lg:h-36 object-contain transition-transform duration-300 hover:scale-105"
/>

              {/* <div>

                <h2 className="text-2xl font-black text-white lg:text-3xl">
                  Purvex Tech Studio
                </h2>

                <p className="text-sm text-cyan-400">
                  Build • Automate • Grow
                </p>

              </div> */}

            </div>

            <p className="mt-6 max-w-md text-[15px] leading-7 text-slate-400">
              Helping startups, businesses and professionals grow through
              premium websites, branding and scalable digital
              solutions.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Mail className="text-cyan-400" size={18} />
                infopurvextechstudio@gmail.com
              </div>

             


            </div>

          </div>

          {/* Business */}
          <div>

            <h3 className="mb-5 text-lg font-bold text-white">
              Business
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">

              <li><Link href="/services">Website Development</Link></li>
              <li><Link href="/services">WordPress</Link></li>
              <li><Link href="/services">Shopify</Link></li>
              <li><Link href="/services">AI Automation</Link></li>
              <li><Link href="/services">SEO • AEO • GEO</Link></li>

            </ul>

          </div>

          {/* Career */}
          <div>

            <h3 className="mb-5 text-lg font-bold text-white">
              Career
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">

              <li><Link href="/services">ATS Resume</Link></li>
              <li><Link href="/services">LinkedIn</Link></li>
              <li><Link href="/services">Portfolio</Link></li>
              <li><Link href="/services">Cover Letter</Link></li>
              <li><Link href="/services">Personal Branding</Link></li>

            </ul>

          </div>

          {/* Company */}
          <div>

            <h3 className="mb-5 text-lg font-bold text-white">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">

              <li><Link href="/about">About</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/blog">Blog</Link></li>

            </ul>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col gap-8 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">

          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Purvex Tech Studio. All Rights Reserved.
          </p>

          {/* Social */}

          <div className="flex justify-center gap-4">

            <a
              href="https://linkedin.com/company/purvex-tech-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:border-cyan-400 hover:bg-cyan-500"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="https://www.instagram.com/purvextechstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:border-pink-500 hover:bg-pink-600"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://www.tiktok.com/@purvextechstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white hover:text-black"
            >
              <FaTiktok size={18} />
            </a>

          </div>

          {/* Back To Top */}

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="mx-auto flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-500 lg:mx-0"
          >
            Back To Top

            <ArrowUp size={18} />
          </button>

        </div>

      </div>

    </footer>
  );
}