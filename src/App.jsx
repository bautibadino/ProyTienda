import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  ItemList,
  ItemListContainer,
  ItemDetailContainer,
} from "./Components/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/index.css";
import { Cart } from "./Components/Cart/Cart";
import { Provider } from "./Context/Provider";
import { CheckOut } from "./Components/Cart/CheckOut";

const App = () => {
  return (
    <BrowserRouter>
      <Provider>
        <Navbar />
        <section>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/carrito/checkout" element={<CheckOut/>} />
        </Routes>
        </section>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
