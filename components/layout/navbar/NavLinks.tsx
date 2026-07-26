"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

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

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {links.map((item) => {
        const active =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));

        if ("children" in item) {
          return (
            <div key={item.title} className="group relative">
              <Link
                href={item.href}
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
                  active
                    ? "text-cyan-400"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.title}
                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </Link>

              <div className="invisible absolute left-0 top-full mt-4 w-64 translate-y-2 rounded-2xl border border-white/10 bg-[#0B1120]/95 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                <Link
                  href="/services"
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-cyan-400 transition hover:bg-cyan-500/10"
                >
                  View All Services
                </Link>

                <div className="my-2 h-px bg-white/10" />

{item.children?.map((child) => {
  const childActive = pathname === child.href;

  return (
    <Link
      key={child.href}
      href={child.href}
      className={`block rounded-xl px-4 py-3 text-sm transition ${
        childActive
          ? "bg-cyan-500/10 text-cyan-400"
          : "text-white/80 hover:bg-cyan-500/10 hover:text-cyan-400"
      }`}
    >
      {child.title}
    </Link>
  );
})}
              </div>
            </div>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group relative text-sm font-medium transition-colors duration-300 ${
              active
                ? "text-cyan-400"
                : "text-white/80 hover:text-white"
            }`}
          >
            {item.title}

            <span
              className={`absolute -bottom-1 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ${
                active ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}