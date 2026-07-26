"use client";

import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";

export default function CalendlyButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <PopupButton
      url="https://calendly.com/infopurvextechstudio/30min"
      rootElement={document.body}
      text="Book Free Consultation"
      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105"
    />
  );
}