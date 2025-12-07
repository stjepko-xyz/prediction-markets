"use client";

import Modal from "./modal";
import OrderForm from "./order-form";

interface OrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  side: "yes" | "no";
  image?: string;
  title?: string;
  description?: string;
}

const OrderModal = ({
  open,
  onOpenChange,
  side,
  image,
  title,
  description,
}: OrderModalProps) => {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={title}
      description={description}
      image={image}
    >
      <OrderForm side={side} />
    </Modal>
  );
};

export default OrderModal;
