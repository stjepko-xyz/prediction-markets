"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface OrderButtonsProps {
  side: "yes" | "no";
  action: "buy" | "sell";
  onChange: (value: "yes" | "no") => void;
}

const OrderButtons = ({ side, action, onChange }: OrderButtonsProps) => {
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
          Yes
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
          No
        </div>
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default OrderButtons;
