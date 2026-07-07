export type Currency = "PKR" | "USD" | "AED" | "GBP" | "EUR" | "SAR" | "TRY";

export const currencyData = {
  PKR: {
    symbol: "₨",
    flag: "🇵🇰",
    rate: 1,
  },
  USD: {
    symbol: "$",
    flag: "🇺🇸",
    rate: 280,
  },
  AED: {
    symbol: "د.إ",
    flag: "🇦🇪",
    rate: 76,
  },
  GBP: {
    symbol: "£",
    flag: "🇬🇧",
    rate: 380,
  },
  EUR: {
    symbol: "€",
    flag: "🇪🇺",
    rate: 325,
  },
  SAR: {
    symbol: "﷼",
    flag: "🇸🇦",
    rate: 74,
  },
  TRY: {
    symbol: "₺",
    flag: "🇹🇷",
    rate: 7,
  },
};

export function formatPrice(
  amountPKR: number,
  currency: Currency
) {
  const info = currencyData[currency];

  if (currency === "PKR") {
    return `${info.flag} ${info.symbol}${amountPKR.toLocaleString()}`;
  }

  return `${info.flag} ${info.symbol}${(
    amountPKR / info.rate
  ).toLocaleString(undefined, {
    maximumFractionDigits: 0,
  })}`;
}
