import React from "react";
import { ProductList } from "../components/product-list";
import "./main-panel.scss";
import { useLocation } from "wouter";

export function MainPanel({ loading }) {
  const [path, pushLocation] = useLocation();

  return (
    <div className="main-panel">
      <header className="main-panel__header">
        <h1>Productos</h1>
        <div className="main-panle__header__buttons">
          <button onClick={() => pushLocation("/add-product")}>
            + publicar nuevo producto
          </button>
          <button onClick={() => pushLocation("/cart")}>Carrito</button>
        </div>
      </header>
      <ProductList loading={loading} />
    </div>
  );
}
