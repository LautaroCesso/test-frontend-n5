import React from "react";
import "./product-row.scss";
import { Td, Tr } from "@chakra-ui/react";

export function ProductRow({ name, price, amountToAddToCart }) {
  return (
    <Tr className="product-row">
      <Td className="product-row__name" title={name}>
        {name}
      </Td>
      <Td className="product-row__amount">{amountToAddToCart}</Td>
      <Td className="product-row__price">${price}</Td>
      <Td className="product-row__total">${amountToAddToCart * price}</Td>
    </Tr>
  );
}
