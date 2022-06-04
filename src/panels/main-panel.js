import React from "react";
import { Navbar } from "../components/navbar";
import { ProductList } from "../components/product-list";
import "./main-panel.scss";

export function MainPanel({ loading }) {
  return (
    <div className="main-panel">
      <Navbar />
      <ProductList loading={loading} />
    </div>
  );
}
