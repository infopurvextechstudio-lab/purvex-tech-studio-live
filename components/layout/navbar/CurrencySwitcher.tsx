"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
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

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white backdrop-blur-xl transition hover:bg-white/10"
      >
        <span>{currencyData[currency].flag}</span>
        <span>{currencyData[currency].symbol}</span>
        <span className="font-medium">{currency}</span>
        <ChevronDown size={16} />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-3 w-48 rounded-2xl border border-white/10 bg-[#0B1220] p-2 shadow-2xl">
          {currencies.map((item) => (
            <button
              key={item}
              onClick={() => {
                setCurrency(item);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                currency === item
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-white/10"
              }`}
            >
              <span>{currencyData[item].flag}</span>
              <span>{currencyData[item].symbol}</span>
              <span>{item}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}