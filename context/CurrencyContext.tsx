"use client";

import { createContext, useContext, useState } from "react";

export type Currency =
  | "PKR"
  | "USD"
  | "AED"
  | "GBP"
  | "EUR"
  | "SAR"
  | "TRY";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

const CurrencyContext =
  createContext<CurrencyContextType | null>(null);

export function CurrencyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currency, setCurrency] =
    useState<Currency>("PKR");

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);

  if (!context)
    throw new Error(
      "useCurrency must be used inside CurrencyProvider"
    );

  return context;
}