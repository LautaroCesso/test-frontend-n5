import "./App.scss";
import { MainPanel } from "./panels/main-panel";
import { CartPanel } from "./panels/cart-panel";

import { Route } from "wouter";

function App() {
  return (
    <div className="App">
      <header className="App-header">My Ssr Frontend test</header>
      <Route path="/" component={MainPanel} />
      <Route path="/cart" component={CartPanel} />
    </div>
  );
}

export default App;
