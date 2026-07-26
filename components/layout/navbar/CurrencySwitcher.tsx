"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useCurrency } from "@/context/CurrencyContext";
import { currencyData, Currency } from "@/lib/currency";

const currencies: Currency[] = [
  "PKR",
  "USD",
  "AED",
  "GBP",
  "EUR",
  "SAR",
  "TRY",
];

export default function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative z-[999]"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm font-medium text-white backdrop-blur-xl transition hover:border-cyan-400/40 hover:bg-white/10"
      >
        <span className="text-base">
          {currencyData[currency].flag}
        </span>

        <span>{currencyData[currency].symbol}</span>

        <span>{currency}</span>

        <ChevronDown
          size={16}
          className={`transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-52 overflow-hidden rounded-2xl border border-white/10 bg-[#0B1220] shadow-2xl">
          {currencies.map((item) => (
            <button
              key={item}
              onClick={() => {
                setCurrency(item);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 px-4 py-3 text-left transition ${
                currency === item
                  ? "bg-cyan-500 text-white"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="text-lg">
                {currencyData[item].flag}
              </span>

              <span className="w-6">
                {currencyData[item].symbol}
              </span>

              <span>{item}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}