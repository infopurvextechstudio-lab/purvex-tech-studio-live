"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import type { Currency } from "@/lib/currency";

type CurrencyContextType = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
};

const CurrencyContext = createContext<CurrencyContextType | null>(null);

export function CurrencyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currency, setCurrencyState] =
    useState<Currency>("PKR");

  useEffect(() => {
    const saved =
      localStorage.getItem("currency");

    if (saved) {
      setCurrencyState(saved as Currency);
    }
  }, []);

  const setCurrency = (value: Currency) => {
    setCurrencyState(value);
    localStorage.setItem("currency", value);
  };

  const value = useMemo(
    () => ({
      currency,
      setCurrency,
    }),
    [currency]
  );

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);

  if (!context) {
    throw new Error(
      "useCurrency must be used inside CurrencyProvider"
    );
  }

  return context;
}