import React from "react";
import { ProductList } from "../components/product-list";
import "./main-panel.scss";

import { useLocation } from "wouter";

export function MainPanel() {
  const [path, pushLocation] = useLocation();

  return (
    <div className="main-panel">
      <header className="main-panel__header">
        <h1>Productos</h1>
        <button onClick={() => pushLocation("/cart")}>Carrito</button>
      </header>
      <ProductList />
    </div>
  );
}
