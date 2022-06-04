import React from "react";
import "./product-list.scss";
import { Product } from "./product";
import { useSelector } from "react-redux";
import { Message } from "./message";

export function ProductList({ products = [], loading = false }) {
  const productsFromAPI = useSelector((state) => state.products.list);
  const isInCart = window.location.pathname === "/cart";

  let contentToRender = (
    <Message
      className="product-list__empty-list-message"
      content="Actualmente no tiene ningun producto en su carrito"
      type="error"
    />
  );

  function renderProducts(products) {
    return products.map((product) => {
      return <Product key={`product__${product.id}`} {...product} />;
    });
  }

  if (products.length) {
    contentToRender = renderProducts(products);
  } else {
    if (!isInCart) {
      contentToRender = renderProducts(productsFromAPI);
    }
  }

  return (
    <section className="product-list">
      {loading ? "LOADING..." : contentToRender}
    </section>
  );
}
