import React, { useEffect } from "react";
import { ProductList } from "../components/product-list";
import { useDispatch, useSelector } from "react-redux";
import { clearCartProducts } from "../slices/cartSlice";
import { setProducts } from "../slices/productsSlice";
import axios from "../apis/products-api";
import useAxiosFunction from "../hooks/useAxiosFunction";

export function CartPanel() {
  const products = useSelector((state) => state.cart.products);
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

  useEffect(() => {
    if (productsFromApi.length) {
      dispatch(setProducts({ productsFromApi }));
    }
  }, [productsFromApi]);

  return (
    <div className="cart-panel">
      <h1>Carrito</h1>
      <button disabled={!products.length} onClick={clearCart}>
        Clear
      </button>
      <ProductList products={products} />
      <div>Total ${total}</div>
    </div>
  );
}
