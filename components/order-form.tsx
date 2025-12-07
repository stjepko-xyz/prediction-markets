"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderButtons from "./order-buttons";

interface OrderFormProps {
  className?: string;
  side: "yes" | "no";
}

interface OrderState {
  action: "buy" | "sell";
  side: "yes" | "no";
  amount: string;
}

const OrderForm = ({ className, side }: OrderFormProps) => {
  const [order, setOrder] = useState<OrderState>({
    action: "buy",
    side: side,
    amount: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted:", order);
    // TODO: Handle order submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("grid items-start gap-4", className)}
    >
      <Tabs
        className="gap-4"
        value={order.action}
        onValueChange={(value) =>
          setOrder((prev) => ({ ...prev, action: value as "buy" | "sell" }))
        }
      >
        <TabsList>
          <TabsTrigger value="buy">Buy</TabsTrigger>
          <TabsTrigger value="sell">Sell</TabsTrigger>
        </TabsList>
        <TabsContent value="buy">
          <OrderButtons
            side={order.side}
            action={order.action}
            onChange={(side) => setOrder((prev) => ({ ...prev, side }))}
          />
        </TabsContent>
        <TabsContent value="sell">
          <OrderButtons
            side={order.side}
            action={order.action}
            onChange={(side) => setOrder((prev) => ({ ...prev, side }))}
          />
        </TabsContent>
      </Tabs>
      <div className="flex flex-col gap-2">
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput
            placeholder="0.00"
            value={order.amount}
            onChange={(e) =>
              setOrder((prev) => ({ ...prev, amount: e.target.value }))
            }
          />
          <InputGroupAddon align="inline-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <Button type="submit" variant={"outline"}>
          Trade
        </Button>
      </div>
    </form>
  );
};

export default OrderForm;
