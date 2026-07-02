"use client";

import Link from "next/link";

export default function CTAButton() {
  return (
    <Link
      href="#contact"
      className="rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:scale-105 hover:shadow-violet-500/40"
    >
      Get Started
    </Link>
  );
}