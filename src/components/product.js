import React, { useState } from "react";
import "./product.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { ProductCounter } from "./product-counter";
import { editAmount } from "../slices/productsSlice";

export function Product({ name, price, amount, id, amountToAddToCart }) {
  const [selectedAmount, setSelectedAmount] = useState(1);
  const dispatch = useDispatch();

  const isInCart = window.location.pathname === "/cart";

  function onAddToCartClick() {
    dispatch(addToCart({ name, price, amountToAddToCart: selectedAmount, id }));
    dispatch(editAmount({ id, selectedAmount }));
  }

  if (selectedAmount > amount) {
    setSelectedAmount(amount);
  }

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
            onClick={onAddToCartClick}
          >
            Añadir al carrito
          </button>
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
