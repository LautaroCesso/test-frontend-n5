import React from "react";
import "./product-list.scss";
import data from "../products.json";
import { Product } from "./product";

export function ProductList({ products = data.products }) {
  return (
    <section className="product-list">
      {products.map((product) => {
        return <Product key={`product__${product.id}`} {...product} />;
      })}
    </section>
  );
}
