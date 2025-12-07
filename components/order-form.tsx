"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface OrderFormProps {
  className?: string;
  type: "yes" | "no";
}

const OrderForm = ({ className, type }: OrderFormProps) => {
  return (
    <form className={cn("grid items-start gap-6", className)}>
      <Tabs defaultValue="buy">
        <TabsList>
          <TabsTrigger value="buy">Buy</TabsTrigger>
          <TabsTrigger value="sell">Sell</TabsTrigger>
        </TabsList>
        <TabsContent value="buy">
          <ToggleGroup type="single" defaultValue={type}>
            <ToggleGroupItem size={"lg"} value="yes" aria-label="Toggle bold">
              Yes
            </ToggleGroupItem>
            <ToggleGroupItem
              value="no"
              size={"lg"}
              aria-label="Toggle strikethrough"
            >
              No
            </ToggleGroupItem>
          </ToggleGroup>
        </TabsContent>
        <TabsContent value="sell"></TabsContent>
      </Tabs>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <Button type="submit" variant={"outline"}>
        Trade
      </Button>
    </form>
  );
};

export default OrderForm;
