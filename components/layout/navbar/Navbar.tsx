"use client";

import dynamic from "next/dynamic";

import Container from "@/components/shared/container/Container";
import Logo from "@/components/layout/logo/Logo";
import NavLinks from "./NavLinks";
import CTAButton from "./CTAButton";
import CurrencySwitcher from "./CurrencySwitcher";
import CalendlyButton from "../../integration/CalendlyButton";

const MobileMenu = dynamic(() => import("./MobileMenu"), {
  ssr: false,
});

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-[999] border-b border-white/10 bg-[#050816]/85 backdrop-blur-2xl">
      <Container>
        <div className="flex h-[72px] items-center justify-between lg:h-20">
          {/* Logo */}
          <div className="origin-left scale-110">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <NavLinks />
          </nav>

          {/* Desktop Right */}
          <div className="hidden items-center gap-3 lg:flex">
            <CurrencySwitcher />

            <div className="hidden xl:block">
              <CalendlyButton />
            </div>

            <CTAButton />
          </div>

          {/* Mobile */}
          <div className="flex items-center lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}