"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface Market {
  ticker: string;
  yesAsk: number;
  yesBid: number;
  yesSubTitle: string;
  noAsk: number;
  noBid: number;
  noSubTitle: string;
}

interface OrderContextType {
  side: "yes" | "no";
  setSide: (side: "yes" | "no") => void;
  action: "buy" | "sell";
  setAction: (action: "buy" | "sell") => void;
  market: Market | null;
  setMarket: (market: Market | null) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [side, setSide] = useState<"yes" | "no">("yes");
  const [action, setAction] = useState<"buy" | "sell">("buy");
  const [market, setMarket] = useState<Market | null>(null);

  return (
    <OrderContext.Provider
      value={{
        side,
        setSide,
        action,
        setAction,
        market,
        setMarket,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
}
