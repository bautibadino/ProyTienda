import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  ItemList,
  ItemListContainer,
  ItemDetailContainer,
} from "./Components/index";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "../src/index.css";
import { Cart } from "./Components/Cart/Cart";
import { Provider } from "./Context/Provider";
import { CheckOut } from "./Components/Cart/CheckOut";
import { Home } from "./Components/HomePage/Home";
import { Footer } from "./Components/Footer";


const App = () => {
  
  return (
    <BrowserRouter>
      <Provider>
        <Navbar />
        <section className="mw-100 overflow-hidden d-flex justify-content-center">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<ItemListContainer/>}/>
          <Route path="/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/carrito/checkout" element={<CheckOut/>} />
        </Routes>
        </section>
        <Footer/>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
