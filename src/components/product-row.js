import React from "react";
import "./product-row.scss";
import { Heading, Stack, useColorMode } from "@chakra-ui/react";

export function ProductRow({ name, price, amountToAddToCart }) {
  const { colorMode } = useColorMode();

  return (
    <div className={`product-row ${colorMode === "dark" ? colorMode : ""}`}>
      <Stack align="center">
        <Heading size="md">{name}</Heading>
        <Heading size="xs">${price}</Heading>
      </Stack>

      <div className="product-row__info">
        <span>Unidades: {amountToAddToCart}</span>
        <br />
        <span>
          Precio acumulado en este producto: ${amountToAddToCart * price}
        </span>
      </div>
    </div>
  );
}
