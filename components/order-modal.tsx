"use client";

import Modal from "./modal";
import OrderForm from "./order-form";

interface OrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  image?: string;
  title?: string;
  description?: string;
}

const OrderModal = ({
  open,
  onOpenChange,
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
      <OrderForm />
    </Modal>
  );
};

export default OrderModal;
