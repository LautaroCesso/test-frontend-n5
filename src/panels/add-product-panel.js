import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../apis/products-api";
import { Message } from "../components/message";
import useAxiosFunction from "../hooks/useAxiosFunction";
import { setProducts } from "../slices/productsSlice";

export function AddProductPanel() {
  const [productsFromApi, error, loading, axiosFetch] = useAxiosFunction();
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.products.list);
  const [formState, changeForm] = useState({ name: "", amount: 1, price: 0 });
  const [message, changeMessage] = useState({ content: "", type: "" });
  const { name, amount, price } = formState;
  const { content, type } = message;

  const handleSubmit = (event) => {
    if (!(amount < 1 || price < 0 || name === "")) {
      axiosFetch({
        axiosInstance: axios,
        method: "post",
        url: "/products",
        requestConfig: formState,
      }).then(() =>
        axiosFetch({
          axiosInstance: axios,
          method: "get",
          url: "/products",
        })
      );

      changeMessage({
        content: "Producto creado exitosamente",
        type: "success",
      });
    } else {
      changeMessage({ content: "Valores invalidos", type: "error" });
    }

    event.preventDefault();
  };

  useEffect(() => {
    if (productsFromApi.length) {
      dispatch(
        setProducts({
          productsFromApi: [
            ...productState,
            productsFromApi[productsFromApi.length - 1],
          ],
        })
      );
    }
  }, [productsFromApi]);

  function onChangeForm(event, label) {
    let { value } = event.target;

    if (label === "price" || label === "amount") value *= 1;

    changeForm({ ...formState, [label]: value });
  }

  return (
    <div className="add-product-panel">
      <header className="add-product-panel__header">
        <h1>Add new product</h1>
      </header>
      {content ? (
        <Message
          className="add-product-panel__message"
          content={content}
          type={type}
        />
      ) : null}

      <form
        className="add-product-panel__form__input-container"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label className="add-product-panel__form__field">
          Nombre:
          <input
            name="name"
            value={name}
            onChange={(e) => onChangeForm(e, "name")}
          />
        </label>

        <label className="add-product-panel__form__field">
          Cantidad:
          <input
            name="amount"
            value={amount}
            onChange={(e) => onChangeForm(e, "amount")}
            type="number"
          />
        </label>

        <label className="add-product-panel__form__field">
          Precio:
          <input
            name="price"
            value={price}
            onChange={(e) => onChangeForm(e, "price")}
            type="number"
          />
        </label>

        <input type="submit" value="Agregar producto" />
      </form>
    </div>
  );
}
