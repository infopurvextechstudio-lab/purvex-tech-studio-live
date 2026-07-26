"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

import Logo from "@/components/layout/logo/Logo";
import CTAButton from "./CTAButton";
import CurrencySwitcher from "./CurrencySwitcher";
import CalendlyButton from "../../integration/CalendlyButton";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Career Branding",
        href: "/services/career-branding",
      },
      {
        title: "Business Solutions",
        href: "/services/business-solutions",
      },
    ],
  },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Pricing", href: "/pricing" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  return (
    <>
      {/* Hamburger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="fixed right-4 top-4 z-[999999] flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0B1120]/95 text-white shadow-xl backdrop-blur-2xl transition hover:border-cyan-400/40 hover:bg-white/10 lg:hidden"
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[999998] bg-black/70 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[999999] flex h-screen w-[90%] max-w-[370px] flex-col rounded-l-3xl border-l border-white/10 bg-[#07122b]/95 shadow-2xl backdrop-blur-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
          <Logo />

          <button
            onClick={() => setOpen(false)}
            className="rounded-xl border border-white/10 p-2 text-white transition hover:border-cyan-400/40 hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-3 overflow-y-auto px-6 py-6">
          {links.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");

            if (item.children) {
              return (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                >
                  <button
                    onClick={() =>
                      setServicesOpen(!servicesOpen)
                    }
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-lg font-semibold text-white"
                  >
                    {item.title}

                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      servicesOpen
                        ? "max-h-60"
                        : "max-h-0"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block border-t border-white/5 px-6 py-3 text-sm transition ${
                          pathname === child.href
                            ? "text-cyan-400"
                            : "text-slate-300 hover:text-white"
                        }`}
                      >
                        {child.title}
                      </Link>
                    ))}

                    <Link
                      href="/services"
                      className="block border-t border-white/5 px-6 py-3 text-sm font-semibold text-cyan-400"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-2xl px-5 py-4 text-lg font-semibold transition ${
                  active
                    ? "bg-cyan-500/10 text-cyan-400"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="space-y-5 border-t border-white/10 bg-white/[0.02] p-6">
          <CurrencySwitcher />

          <CalendlyButton />

          <div className="w-full">
            <CTAButton />
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Purvex Tech Studio
        </div>
      </aside>
    </>
  );
}