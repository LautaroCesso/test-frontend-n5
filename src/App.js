import "./App.scss";
import { MainPanel } from "./panels/main-panel";
import { CartPanel } from "./panels/cart-panel";
import { Route } from "wouter";
import { useDispatch } from "react-redux";
import { setProducts } from "./slices/productsSlice";
import useAxios from "./hooks/useAxios";
import axios from "./apis/products-api";
import { useEffect } from "react";
import { AddProductPanel } from "./panels/add-product-panel";
import { Navbar } from "./components/navbar";

function App() {
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
