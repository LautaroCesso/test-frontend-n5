import React from "react";
import "./product-list.scss";
import { Message } from "./message";
import { ProductRow } from "./product-row";

export function ProductRowList({ products = [], loading = false }) {
  function renderProducts(products) {
    return products.map((product) => {
      return <ProductRow key={`product__${product.id}`} {...product} />;
    });
  }

  return (
    <section className="product-row-list">
      {loading ? "LOADING..." : renderProducts(products)}
      {!products.length ? (
        <Message
          className="product-row-list__empty-list-message"
          content="Actualmente no tiene ningun producto en su carrito"
          type="error"
        />
      ) : null}
    </section>
  );
}
