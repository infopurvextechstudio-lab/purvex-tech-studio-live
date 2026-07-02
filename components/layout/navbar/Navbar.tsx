"use client";
import ThemeToggle from "./ThemeToggle";
import Container from "@/components/shared/container/Container";
import Logo from "@/components/layout/logo/Logo";
import NavLinks from "./NavLinks";
import CTAButton from "./CTAButton";
import CurrencySwitcher from "./CurrencySwitcher";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl supports-[backdrop-filter]:bg-[#050816]/60">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavLinks />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">

           

          <ThemeToggle />

          <CurrencySwitcher />

            {/* CTA */}
            <CTAButton />

          </div>

        </div>
      </Container>
    </header>
  );
}