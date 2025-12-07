"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import OrderModal from "./order-modal";

interface EventCardProps {
  id: string;
  title: string;
  image?: string;
  markets: Array<{
    yesSubTitle: string;
    probability?: number;
  }>;
}

const EventCard = ({ id, title, image, markets }: EventCardProps) => {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderType, setOrderType] = useState<"yes" | "no">("yes");
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="p-4 gap-4 w-full justify-between">
      {(title || image) && (
        <div className="flex items-start justify-between gap-4">
          {title && (
            <Link href={`/event/${id}`} className="hover:underline">
              <h5 className="line-clamp-2">{title}</h5>
            </Link>
          )}
          <div className="h-[40px] w-[40px]">
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
        <div className="space-y-2">
          {markets.slice(0, 2).map((market, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4"
            >
              <span className="line-clamp-1">{market?.yesSubTitle}</span>
              <div className="flex items-center gap-2">
                <h5>{market?.probability || "20"}%</h5>
                <div className="flex">
                  <ButtonGroup>
                    <Button
                      onClick={() => {
                        setOrderType("yes");
                        setOrderModalOpen(true);
                      }}
                      variant={"outline"}
                      size="sm"
                      className="bg-green-100 text-green-700"
                    >
                      Yes
                    </Button>

                    <Button
                      onClick={() => {
                        setOrderType("no");
                        setOrderModalOpen(true);
                      }}
                      variant={"outline"}
                      size="sm"
                      className="bg-red-100 text-red-700"
                    >
                      No
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <OrderModal
        open={orderModalOpen}
        onOpenChange={setOrderModalOpen}
        type={orderType}
        image={image}
        title={title}
        description="Place your order below"
      />
    </Card>
  );
};

export default EventCard;
