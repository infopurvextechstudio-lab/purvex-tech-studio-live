import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6"; 
export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#040816]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563EB18,transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-5">

          {/* Company */}

          <div className="lg:col-span-2">

            <h2 className="text-3xl font-black text-white">
              Purvex Tech Studio
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Building modern businesses through premium websites,
              AI automation, digital growth and career excellence.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-slate-300">
                <Mail size={18} />
                infopurvextechstudio@gmail.com
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Phone size={18} />
                +92 XXX XXXXXXX
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={18} />
                Karachi, Pakistan
              </div>

            </div>

          </div>

          {/* Business */}

          <div>

            <h3 className="mb-5 text-xl font-bold text-white">
              Business
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>Web Development</li>

              <li>WordPress</li>

              <li>Shopify</li>

              <li>AI Automation</li>

              <li>SEO • AEO • GEO</li>

            </ul>

          </div>

          {/* Career */}

          <div>

            <h3 className="mb-5 text-xl font-bold text-white">
              Career
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>ATS Resume</li>

              <li>LinkedIn</li>

              <li>Portfolio</li>

              <li>Cover Letter</li>

              <li>Personal Branding</li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-5 text-xl font-bold text-white">
              Company
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>About</li>

              <li>Projects</li>

              <li>Pricing</li>

              <li>Contact</li>

              <li>Blog</li>

            </ul>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-8 lg:flex-row">

          <p className="text-slate-500">
            © 2026 Purvex Tech Studio. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5">

            <a
              href="https://linkedin.com/company/purvex-tech-studio/?originalSubdomain=pk"
              target="_blank"
              className="rounded-full border border-white/10 p-3 transition hover:bg-blue-600"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="https://www.instagram.com/purvextechstudio"
              target="_blank"
              className="rounded-full border border-white/10 p-3 transition hover:bg-pink-600"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://www.tiktok.com/@purvextechstudio"
              target="_blank"
              className="rounded-full border border-white/10 p-3 transition hover:bg-white hover:text-black"
            >
              <FaTiktok size={18} />
            </a>

          </div>

          <button className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-white transition hover:bg-white/10">

            Back To Top

            <ArrowUpRight size={18} />

          </button>

        </div>

      </div>

    </footer>
  );
}