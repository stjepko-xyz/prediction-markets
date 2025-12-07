"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface OrderContextType {
  side: "yes" | "no";
  setSide: (side: "yes" | "no") => void;
  action: "buy" | "sell";
  setAction: (action: "buy" | "sell") => void;
  selectedMarket: string | null;
  setSelectedMarket: (marketId: string | null) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [side, setSide] = useState<"yes" | "no">("yes");
  const [action, setAction] = useState<"buy" | "sell">("buy");
  const [selectedMarket, setSelectedMarket] = useState<string | null>(null);

  return (
    <OrderContext.Provider
      value={{
        side,
        setSide,
        action,
        setAction,
        selectedMarket,
        setSelectedMarket,
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
