import React from "react";
import ProductCardList from "../components/product-card-list";
import "./main-panel.scss";
import { useDispatch } from "react-redux";
import { setProducts } from "../slices/productsSlice";
import useAxios from "../hooks/useAxios";
import axios from "../apis/products-api";
import { useEffect } from "react";

export default function MainPanel() {
  const dispatch = useDispatch();

  const [productsFromApi, error, loading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/products",
  });

  useEffect(() => {
    dispatch(setProducts({ productsFromApi }));
  }, [productsFromApi]);

  return (
    <div className="main-panel">
      <ProductCardList loading={loading} />
    </div>
  );
}
