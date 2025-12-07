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
import { useOrder } from "@/context/order-context";

interface OrderFormProps {
  className?: string;
}

const OrderForm = ({ className }: OrderFormProps) => {
  const { side, setSide, action, setAction, selectedMarket } = useOrder();
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted:", { action, side, amount, selectedMarket });
    // TODO: Handle order submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("grid items-start gap-4", className)}
    >
      <Tabs
        className="gap-4"
        value={action}
        onValueChange={(value) => setAction(value as "buy" | "sell")}
      >
        <TabsList>
          <TabsTrigger value="buy">Buy</TabsTrigger>
          <TabsTrigger value="sell">Sell</TabsTrigger>
        </TabsList>
        <TabsContent value="buy">
          <OrderButtons side={side} action={action} onChange={setSide} />
        </TabsContent>
        <TabsContent value="sell">
          <OrderButtons side={side} action={action} onChange={setSide} />
        </TabsContent>
      </Tabs>
      <div className="flex flex-col gap-2">
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
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
