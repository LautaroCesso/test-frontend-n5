import React from "react";
import { ProductList } from "../components/product-list";

export function MainPanel() {
  return (
    <div className="main-panel">
      <h1>Products</h1>
      <ProductList />
    </div>
  );
}
