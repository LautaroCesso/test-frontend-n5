import React, { useState } from "react";
import "./product-card.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { ProductCounter } from "./product-counter";
import { editAmount } from "../slices/productsSlice";
import { Icon } from "@chakra-ui/icons";
import { FaCartPlus } from "react-icons/fa";
import { Button, Heading, Stack, useColorMode } from "@chakra-ui/react";

export function ProductCard({ name, price, amount, id }) {
  const [selectedAmount, setSelectedAmount] = useState(1);
  const { colorMode } = useColorMode();

  const dispatch = useDispatch();

  function onAddToCartClick() {
    dispatch(
      addToCart({ name, price, amount, amountToAddToCart: selectedAmount, id })
    );
    dispatch(editAmount({ id, selectedAmount }));
  }

  if (selectedAmount > amount) {
    setSelectedAmount(amount);
  }

  return (
    <div className={`product-card ${colorMode === "dark" ? colorMode : ""}`}>
      <Stack align="center">
        <Heading title={name} className="product-card__product-name" size="md">
          {name}
        </Heading>
        <Heading size="xs">${price}</Heading>
      </Stack>

      <div className="product-card__stock-info">
        <span
          className={`product-card__stock-info ${
            amount ? "in-stock" : "out-of-stock"
          }`}
        >
          {amount ? "EN STOCK" : "SIN STOCK"}
        </span>
        {amount ? (
          <>
            <ProductCounter
              value={selectedAmount}
              onValueChange={setSelectedAmount}
              maxValue={amount}
            />
            <Button
              className="product-card__stock-info__add-to-cart-button"
              onClick={onAddToCartClick}
              rightIcon={<Icon as={FaCartPlus} />}
              colorScheme="messenger"
              disabled={!selectedAmount}
              size="sm"
              variant="solid"
            >
              Añadir al carrito
            </Button>
          </>
        ) : null}
      </div>
    </div>
  );
}
