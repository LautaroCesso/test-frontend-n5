import React from "react";
import { ProductList } from "../components/product-list";
import { useSelector } from "react-redux";

export function CartPanel() {
  return (
    <div className="cart-panel">
      <h1>Carrito</h1>
      <ProductList products={useSelector((state) => state.cart.products)} />
    </div>
  );
}
