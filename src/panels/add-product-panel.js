import { Button, Input, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../apis/products-api";
import { Loading } from "../components/loading";
import useAxiosFunction from "../hooks/useAxiosFunction";
import { setProducts } from "../slices/productsSlice";
import "./add-product-panel.scss";

export function AddProductPanel() {
  const [productsFromApi, error, loading, axiosFetch] = useAxiosFunction();
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.products.list);
  const [formState, changeForm] = useState({ name: "", amount: 1, price: 0 });
  const { name, amount, price } = formState;
  const toast = useToast();

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

      toast({
        title: "Producto creado exitosamente. :)",
        description:
          "Vuelva al panel principal para verlo en la lista, o continue cargando mas productos.",
        status: "success",
        duration: 10000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Valores incorrectos. :(",
        description:
          "Por favor revise los campos del formulario, ingrese todos los datos necesarios de forma correcta. Debe cargar un nombre, ademas la cantidad no puede ser menor que 1 y el precio no puede ser menor que 0.",
        status: "error",
        duration: 10000,
        isClosable: true,
      });
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
      {loading ? (
        <Loading />
      ) : (
        <form
          className="add-product-panel__form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Text mb="8px">Nombre:</Text>
          <Input
            variant="outline"
            placeholder="Escriba aqui el nombre del producto"
            name="name"
            value={name}
            onChange={(e) => onChangeForm(e, "name")}
          />

          <Text mt="8px" mb="8px">
            Cantidad:
          </Text>
          <input
            name="amount"
            value={amount}
            onChange={(e) => onChangeForm(e, "amount")}
            type="number"
          />

          <Text mt="16px" mb="8px">
            Precio:
          </Text>
          <input
            name="price"
            value={price}
            onChange={(e) => onChangeForm(e, "price")}
            type="number"
          />

          <div className="add-product-panel__form__submit-button-container">
            <Button mt="16px" colorScheme="green" type="submit">
              Agregar producto
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
