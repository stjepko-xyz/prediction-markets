"use client";

import * as React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import Image from "next/image";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  image?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const Modal = ({
  open,
  onOpenChange,
  image,
  title,
  description,
  children,
}: ModalProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="mb-4">
            <div className="flex items-center gap-4">
              <Image
                src={image}
                alt={title}
                width={40}
                height={40}
                className="rounded-md object-cover shrink-0"
              />
              <div>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
              </div>
            </div>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="px-4">
        <DrawerHeader className="text-left px-0">
          <div className="flex items-center gap-4">
            <Image
              src={image}
              alt={title}
              width={40}
              height={40}
              className="rounded-md object-cover shrink-0"
            />
            <div>
              <DrawerTitle>{title}</DrawerTitle>
              <DrawerDescription>{description}</DrawerDescription>
            </div>
          </div>
        </DrawerHeader>
        {children}
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Modal;
