import React, { useState } from "react";
import "./product.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { ProductCounter } from "./product-counter";
import { editAmount } from "../slices/productsSlice";
import { Icon } from "@chakra-ui/icons";
import { FaCartPlus } from "react-icons/fa";
import { Button, Heading, Stack } from "@chakra-ui/react";

export function Product({ name, price, amount, id, amountToAddToCart }) {
  const [selectedAmount, setSelectedAmount] = useState(1);
  const dispatch = useDispatch();

  const isInCart = window.location.pathname === "/cart";

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
    <div className={`product ${isInCart ? "list" : "card"}-format`}>
      <Stack align="center">
        <Heading size="md" as="h4">
          {name}
        </Heading>
        <Heading size="xs">${price}</Heading>
      </Stack>

      {!isInCart ? (
        <div className="product__stock-info">
          <span
            className={`product__stock-info ${
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
                className="product__stock-info__add-to-cart-button"
                onClick={onAddToCartClick}
                rightIcon={<Icon as={FaCartPlus} />}
                colorScheme="messenger"
                size="sm"
                variant="solid"
              >
                Añadir al carrito
              </Button>
            </>
          ) : null}
        </div>
      ) : (
        <div className="product__in-cart-info">
          <span>Unidades: {amountToAddToCart}</span>
          <br />
          <span>
            Precio acumulado en este producto: ${amountToAddToCart * price}
          </span>
        </div>
      )}
    </div>
  );
}
