"use client";

import Container from "@/components/shared/container/Container";
import Logo from "@/components/layout/logo/Logo";
import NavLinks from "./NavLinks";
import CTAButton from "./CTAButton";
import CurrencySwitcher from "./CurrencySwitcher";
import CalendlyButton from "../../integration/CalendlyButton";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-[999] border-b border-white/10 bg-[#050816]/85 backdrop-blur-2xl">
      <Container>
        <div className="flex h-[72px] lg:h-20 items-center justify-between">

          {/* Logo */}
          <div className="scale-110 origin-left">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <NavLinks />
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-3">
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