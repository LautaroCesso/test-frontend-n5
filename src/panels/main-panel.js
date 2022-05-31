import React from "react";
import { ProductList } from "../components/product-list";
import "./main-panel.scss";

export function MainPanel() {
  return (
    <div className="main-panel">
      <header className="main-panel__header">
        <h1>Productos</h1>
        <a>Carrito</a>
      </header>
      <ProductList />
    </div>
  );
}
