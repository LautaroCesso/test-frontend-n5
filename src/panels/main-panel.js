import React from "react";
import { Navbar } from "../components/navbar";
import { ProductCardList } from "../components/product-card-list";
import "./main-panel.scss";

export function MainPanel({ loading }) {
  return (
    <div className="main-panel">
      <Navbar />
      <ProductCardList loading={loading} />
    </div>
  );
}
