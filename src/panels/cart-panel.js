import React from "react";
import { ProductList } from "../components/product-list";

export function CartPanel() {
  return (
    <div className="cart-panel">
      <h1>Carrito</h1>
      <ProductList />
    </div>
  );
}
