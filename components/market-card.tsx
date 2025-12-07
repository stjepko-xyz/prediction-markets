"use client";

import { useOrder } from "@/context/order-context";
import { Button } from "@/components/ui/button";
import { toPercent } from "@/lib/utils";

interface MarketCardProps {
  id: string;
  title: string;
  yesAsk?: number | string;
  yesBid?: number | string;
  noAsk?: number | string;
  noBid?: number | string;
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

  const marketData = {
    ticker: id,
    yesAsk,
    yesBid,
    yesSubTitle: title,
    noAsk,
    noBid,
    noSubTitle,
  };

  const handleClick = (newSide: "yes" | "no") => {
    setSide(newSide);
    setMarket(marketData);
  };

  return (
    <div id={id} className="flex justify-between items-center border-b py-4">
      <h5 className="w-40">{title}</h5>
      <p className="font-semibold text-xl">{toPercent(yesAsk)}</p>
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
