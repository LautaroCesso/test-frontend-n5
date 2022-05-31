import React from "react";
import data from "../products.json";

export function ProductList() {
  const { products } = data;

  return (
    <ul className="product-list">
      {products.map((product) => {
        const { name, price, amount, id } = product;

        return (
          <div
            className="product-list__product-container"
            key={`product__${id}`}
          >
            <div>Foto?</div>
            <div>
              <span>{name}</span>
              <div>
                <span>precio: ${price}</span>
                <div>{amount ? `Stock: ${amount}` : "No Stock"}</div>
              </div>
              <a href="#">Añadir al carrito</a>
            </div>
          </div>
        );
      })}
    </ul>
  );
}
