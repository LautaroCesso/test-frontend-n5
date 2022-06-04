import React, { useEffect, useState } from "react";
import { ProductRowList } from "../components/product-row-list";
import { useDispatch, useSelector } from "react-redux";
import { clearCartProducts } from "../slices/cartSlice";
import { setProducts } from "../slices/productsSlice";
import axios from "../apis/products-api";
import useAxiosFunction from "../hooks/useAxiosFunction";
import { Message } from "../components/message";

export function CartPanel() {
  const products = useSelector((state) => state.cart.products);
  const [successBuyMessage, setSuccessBuyMessage] = useState("");
  const [productsFromApi, error, loading, axiosFetch] = useAxiosFunction();
  const total = products.reduce((total, product) => {
    total += product.price * product.amountToAddToCart;

    return total;
  }, 0);

  const dispatch = useDispatch();

  function clearCart() {
    dispatch(clearCartProducts());

    axiosFetch({
      axiosInstance: axios,
      method: "get",
      url: "/products",
    });
  }

  async function buyProducts() {
    if (products.length) {
      for (let i = 0; i < products.length; i++) {
        const { id, amount, name, price, amountToAddToCart } = products[i];

        console.log(amount, amountToAddToCart);

        await axiosFetch({
          axiosInstance: axios,
          method: "put",
          url: `/products/${id}`,
          requestConfig: {
            id,
            name,
            price,
            amount: amount - amountToAddToCart,
          },
        });
      }

      dispatch(clearCartProducts());

      axiosFetch({
        axiosInstance: axios,
        method: "get",
        url: "/products",
      });

      setSuccessBuyMessage("Compra realizada con exito");
    }
  }

  useEffect(() => {
    if (productsFromApi.length) {
      dispatch(setProducts({ productsFromApi }));
    }
  }, [productsFromApi]);

  return (
    <div className="cart-panel">
      <h1>Carrito</h1>
      <section className="cart-panel__buttons">
        {successBuyMessage ? (
          <Message
            className="cart-panel__success-buy-message"
            content={successBuyMessage}
            type="success"
          />
        ) : null}
        <button disabled={!products.length} onClick={clearCart}>
          Clear
        </button>
        <button disabled={!products.length} onClick={buyProducts}>
          Finalizar compra
        </button>
      </section>
      <ProductRowList products={products} />
      <div>Total ${total}</div>
    </div>
  );
}
