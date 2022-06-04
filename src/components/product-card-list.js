import React from "react";
import "./product-list.scss";
import { ProductCard } from "./product-card";
import { useSelector } from "react-redux";

export function ProductCardList({ products = [], loading = false }) {
  const productsFromAPI = useSelector((state) => state.products.list);

  function renderProducts(products) {
    return products.map((product) => {
      return <ProductCard key={`product__${product.id}`} {...product} />;
    });
  }

  return (
    <section className="product-list">
      {loading ? "LOADING..." : renderProducts(productsFromAPI)}
    </section>
  );
}
