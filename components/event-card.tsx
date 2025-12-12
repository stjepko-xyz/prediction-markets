"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import OrderModal from "./order-modal";
import OrderButtons from "./order-buttons";
import { useOrder } from "@/context/order-context";
import { toPercent, formatCurrency } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface EventCardProps {
  id: string;
  title: string;
  image?: string;
  volume?: number;
  markets: Array<{
    ticker?: string;
    yesSubTitle: string;
    yesAsk?: number | string;
    yesBid?: number | string;
    noSubTitle?: string;
    noAsk?: number | string;
    noBid?: number | string;
  }>;
}

const EventCard = ({ id, title, image, volume, markets }: EventCardProps) => {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { setSide, setMarket, market } = useOrder();
  return (
    <Card className="flex p-4 gap-4 w-full justify-between">
      {(title || image || markets) && (
        <div className="flex flex-col flex-1 space-y-4">
          {(title || image) && (
            <div className="flex items-start justify-between gap-4 mb-4">
              {title && (
                <Link href={`/event/${id}`} className="hover:underline">
                  <h5 className="line-clamp-2 font-semibold">{title}</h5>
                </Link>
              )}
              <div className="flex h-[40px] w-[40px]">
                {image && !imageError && (
                  <Image
                    src={image}
                    alt={title}
                    width={40}
                    height={40}
                    className="rounded-md object-cover shrink-0"
                    onError={() => setImageError(true)}
                  />
                )}
              </div>
            </div>
          )}
          {markets && (
            <div className="flex flex-col flex-1 space-y-2">
              {markets.slice(0, 2).map((market, index) => {
                const marketData = {
                  ticker: market?.ticker ?? `${id}-market-${index}`,
                  yesAsk: market?.yesAsk ?? 0,
                  yesBid: market?.yesBid ?? 0,
                  yesSubTitle: market?.yesSubTitle ?? "",
                  noAsk: market?.noAsk ?? 0,
                  noBid: market?.noBid ?? 0,
                  noSubTitle: market?.noSubTitle ?? "",
                };

                const handleChange = (side: "yes" | "no") => {
                  setSide(side);
                  setMarket(marketData);
                  setOrderModalOpen(true);
                };

                if (markets?.length === 1) {
                  return (
                    <OrderButtons
                      key={index}
                      market={marketData}
                      onChange={handleChange}
                      fullWidth
                      showSide
                      showChance
                    />
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-4"
                    >
                      <span className="line-clamp-1">
                        {market?.yesSubTitle}
                      </span>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">
                          {toPercent(market?.yesAsk ?? 0)}
                        </p>
                        <OrderButtons
                          market={marketData}
                          onChange={handleChange}
                          showSide
                        />
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
      )}
      {volume && (
        <Tooltip>
          <TooltipTrigger className="w-fit">
            <span className="text-muted-foreground">
              {formatCurrency(volume)}
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p>Total volume</p>
          </TooltipContent>
        </Tooltip>
      )}

      <OrderModal
        open={orderModalOpen}
        onOpenChange={setOrderModalOpen}
        image={image}
        title={title}
        description={market?.yesSubTitle}
      />
    </Card>
  );
};

export default EventCard;
