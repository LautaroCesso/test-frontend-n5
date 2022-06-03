import React from "react";
import { ProductList } from "../components/product-list";
import { useSelector } from "react-redux";

export function CartPanel() {
  const products = useSelector((state) => state.cart.products);
  const total = products.reduce((total, product) => {
    total += product.price * product.amountToAddToCart;

    return total;
  }, 0);

  return (
    <div className="cart-panel">
      <h1>Carrito</h1>
      <ProductList products={products} />
      <div>Total ${total}</div>
    </div>
  );
}
