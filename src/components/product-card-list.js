import React from "react";
import "./product-card-list.scss";
import ProductCard from "./product-card";
import { useSelector } from "react-redux";
import Loading from "./loading";

export default function ProductCardList({ loading = false }) {
  const productsFromAPI = useSelector((state) => state.products.list);

  function renderProducts(products) {
    return products.map((product) => {
      return <ProductCard key={`product__${product.id}`} {...product} />;
    });
  }

  return (
    <section className="product-card-list">
      {loading ? <Loading /> : renderProducts(productsFromAPI)}
    </section>
  );
}
