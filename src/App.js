import "./App.scss";
import MainPanel from "./panels/main-panel";
import CartPanel from "./panels/cart-panel";
import { Route } from "wouter";
import AddProductPanel from "./panels/add-product-panel";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/" component={MainPanel} />
      <Route path="/add-product" component={AddProductPanel} />
      <Route path="/cart" component={CartPanel} />
    </div>
  );
}

export default App;
