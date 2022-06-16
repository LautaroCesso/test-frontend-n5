import "./App.scss";
import MainPanel from "./panels/main-panel";
import CartPanel from "./panels/cart-panel";
import { Route } from "wouter";
import AddProductPanel from "./panels/add-product-panel";
import Navbar from "./components/navbar";
import { useDispatch } from "react-redux";
import useAxios from "./hooks/useAxios";
import { setProducts } from "./slices/productsSlice";
import axios from "./apis/products-api";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const [productsFromApi, error, loading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/products",
  });

  useEffect(() => {
    const productsInLocalStorage =
      JSON.parse(localStorage.getItem("products")) || [];

    if (!productsInLocalStorage.length) {
      dispatch(setProducts({ productsFromApi }));
    } else {
      dispatch(setProducts({ productsFromApi: productsInLocalStorage }));
    }
  }, [productsFromApi]);

  return (
    <div className="App">
      <Navbar />
      <Route path="/">
        <MainPanel loading={loading} />
      </Route>
      <Route path="/add-product" component={AddProductPanel} />
      <Route path="/cart" component={CartPanel} />
    </div>
  );
}

export default App;
