import React from "react";
import "./product-list.scss";
import { Product } from "./product";
import { useSelector } from "react-redux";

export function ProductList({ products = [], loading = false }) {
  const productsFromAPI = useSelector((state) => state.products.list);

  products = products.length ? products : productsFromAPI;

  return (
    <section className="product-list">
      {loading
        ? "LOADING..."
        : products.map((product) => {
            return <Product key={`product__${product.id}`} {...product} />;
          })}
    </section>
  );
}
