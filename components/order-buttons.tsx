"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface OrderButtonsProps {
  side: "yes" | "no";
  action: "buy" | "sell";
  market: {
    ticker: string;
    yesAsk: number | string;
    yesBid: number | string;
    yesSubTitle: string;
    noAsk: number | string;
    noBid: number | string;
    noSubTitle: string;
  } | null;
  onChange: (value: "yes" | "no") => void;
}

const OrderButtons = ({
  side,
  action,
  market,
  onChange,
}: OrderButtonsProps) => {
  return (
    <ToggleGroup
      type="single"
      value={side}
      onValueChange={(val) => val && onChange(val as "yes" | "no")}
      className="w-full"
    >
      <ToggleGroupItem
        value="yes"
        variant="outline"
        className="w-full text-md font-semibold h-12 data-[state=on]:bg-green-100 data-[state=on]:text-green-700"
        aria-label="Toggle Yes"
      >
        <div className="flex items-baseline gap-1">
          <span className="text-xs">{action}</span>
          {action === "buy" &&
            `Yes ${Number(market?.yesAsk ?? 0).toFixed(2)} ¢`}
          {action === "sell" &&
            `Yes ${Number(market?.yesBid ?? 0).toFixed(2)} ¢`}
        </div>
      </ToggleGroupItem>
      <ToggleGroupItem
        value="no"
        variant="outline"
        className="w-full text-md font-semibold h-12 data-[state=on]:bg-red-100 data-[state=on]:text-red-700"
        aria-label="Toggle No"
      >
        <div className="flex items-baseline gap-1">
          <span className="text-xs">{action}</span>
          {action === "buy" && `No ${Number(market?.noAsk ?? 0).toFixed(2)} ¢`}
          {action === "sell" && `No ${Number(market?.noBid ?? 0).toFixed(2)} ¢`}
        </div>
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default OrderButtons;
