import React from "react";
import "./product-row.scss";
import { Td, Tr } from "@chakra-ui/react";

export function ProductRow({ name, price, amountToAddToCart }) {
  return (
    <Tr className="product-row">
      <Td>{name}</Td>
      <Td>{amountToAddToCart}</Td>
      <Td>${price}</Td>
      <Td>${amountToAddToCart * price}</Td>
    </Tr>
  );
}
