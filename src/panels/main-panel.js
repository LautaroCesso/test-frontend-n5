import React from "react";
import ProductCardList from "../components/product-card-list";
import "./main-panel.scss";

export default function MainPanel({ loading }) {
  return (
    <div className="main-panel">
      <ProductCardList loading={loading} />
    </div>
  );
}
