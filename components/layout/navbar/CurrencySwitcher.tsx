"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const currencies = [
  { flag: "🇵🇰", code: "PKR" },
  { flag: "🇺🇸", code: "USD" },
  { flag: "🇬🇧", code: "GBP" },
  { flag: "🇦🇪", code: "AED" },
  { flag: "🇸🇦", code: "SAR" },
  { flag: "🇪🇺", code: "EUR" },
  { flag: "🇦🇺", code: "AUD" },
];

export default function CurrencySwitcher() {
  const [selected, setSelected] = useState(currencies[0]);

  return (
    <select
      value={selected.code}
      onChange={(e) => {
        const currency = currencies.find(
          (item) => item.code === e.target.value
        );
        if (currency) setSelected(currency);
      }}
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-md outline-none"
    >
      {currencies.map((item) => (
        <option
          key={item.code}
          value={item.code}
          className="bg-[#050816] text-white"
        >
          {item.flag} {item.code}
        </option>
      ))}
    </select>
  );
}