import React, { useState } from "react";
import "./product.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { ProductCounter } from "./product-counter";

export function Product({ name, price, amount, id }) {
  const [selectedAmount, setSelectedAmount] = useState(1);
  const dispatch = useDispatch();

  const isInCart = window.location.pathname === "/cart";

  return (
    <div className={`product ${isInCart ? "list" : "card"}-format`}>
      <span>{name}</span>
      <span>${price}</span>

      {!isInCart ? (
        <div className="product__stock-info">
          <span
            className={`product__stock-info ${
              amount ? "in-stock" : "out-of-stock"
            }`}
          >
            {amount ? "EN STOCK" : "SIN STOCK"}
          </span>
          <ProductCounter
            value={selectedAmount}
            onValueChange={(value) => setSelectedAmount(value)}
            maxValue={amount}
          />
          <button
            className="product__stock-info__add-to-cart-button"
            onClick={() => dispatch(addToCart({ name, price, amount, id }))}
          >
            Añadir al carrito
          </button>
        </div>
      ) : null}
    </div>
  );
}
