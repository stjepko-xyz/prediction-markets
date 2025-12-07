"use client";

import * as React from "react";
import Modal from "./modal";
import OrderForm from "./order-form";

const OrderModal = ({
  open,
  onOpenChange,
  type,
  image,
  title,
  description,
}) => {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={title}
      description={description}
      image={image}
    >
      <OrderForm type={type} />
    </Modal>
  );
};

export default OrderModal;
