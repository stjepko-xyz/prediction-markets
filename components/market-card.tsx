"use client";

import { useOrder } from "@/context/order-context";
import { Button } from "@/components/ui/button";

interface MarketCardProps {
  id: string;
  title: string;
  yesAsk?: number;
  yesBid?: number;
  noAsk?: number;
  noBid?: number;
  noSubTitle?: string;
}

const MarketCard = ({
  id,
  title,
  yesAsk = 0,
  yesBid = 0,
  noAsk = 0,
  noBid = 0,
  noSubTitle = "",
}: MarketCardProps) => {
  const { side, setSide, market, setMarket } = useOrder();

  const isSelected = market?.ticker === id;

  const handleClick = (newSide: "yes" | "no") => {
    setSide(newSide);
    setMarket({
      ticker: id,
      yesAsk,
      yesBid,
      yesSubTitle: title,
      noAsk,
      noBid,
      noSubTitle,
    });
  };

  return (
    <div id={id} className="flex justify-between items-center border-b py-4">
      <h5 className="w-40">{title}</h5>
      <h3>73%</h3>
      <div className="flex gap-2">
        <Button
          variant="outline"
          data-state={isSelected && side === "yes" ? "on" : "off"}
          className="font-semibold hover:bg-green-100 hover:text-green-700 data-[state=on]:bg-green-100 data-[state=on]:text-green-700"
          onClick={() => handleClick("yes")}
        >
          Yes
        </Button>
        <Button
          variant="outline"
          data-state={isSelected && side === "no" ? "on" : "off"}
          className="font-semibold hover:bg-red-100 hover:text-red-700 data-[state=on]:bg-red-100 data-[state=on]:text-red-700"
          onClick={() => handleClick("no")}
        >
          No
        </Button>
      </div>
    </div>
  );
};

export default MarketCard;
