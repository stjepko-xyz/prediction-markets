"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { toPercent, cn } from "@/lib/utils";
import { Market } from "@/lib/types";

interface OrderButtonsProps {
  market: Market | null;
  onChange: (value: "yes" | "no") => void;
  fullWidth?: boolean;
  showSide?: boolean;
  showChance?: boolean;
  className?: string;
}

const OrderButtons = ({
  market,
  onChange,
  fullWidth = false,
  showSide = true,
  showChance = false,
  className,
}: OrderButtonsProps) => {
  if (!market) return null;

  return (
    <ButtonGroup
      className={cn(fullWidth && "flex flex-1 w-full h-full", className)}
    >
      <Button
        onClick={() => onChange("yes")}
        variant="outline"
        size="sm"
        className={cn(
          "bg-green-100 text-green-700",
          fullWidth && "flex-1 h-full text-md"
        )}
      >
        {showSide && "Yes"}
        {showSide && showChance && " "}
        {showChance && toPercent(market.yesAsk)}
      </Button>
      <Button
        onClick={() => onChange("no")}
        variant="outline"
        size="sm"
        className={cn(
          "bg-red-100 text-red-700",
          fullWidth && "flex-1 h-full text-md"
        )}
      >
        {showSide && "No"}
        {showSide && showChance && " "}
        {showChance && toPercent(market.noAsk)}
      </Button>
    </ButtonGroup>
  );
};

export default OrderButtons;
