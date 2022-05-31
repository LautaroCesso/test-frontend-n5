import React from "react";
import "./product-list.scss";
import data from "../products.json";

export function ProductList() {
  const { products } = data;

  return (
    <section className="product-list">
      {products.map((product) => {
        const { name, price, amount, id } = product;

        return (
          <div className="product-list__product" key={`product__${id}`}>
            <div>Foto?</div>
            <div className="product-list__product__info">
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
    </section>
  );
}
