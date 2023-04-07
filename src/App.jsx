import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, ItemList, ItemListContainer, ItemDetailContainer} from "./Components/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../src/index.css'
import { Cart } from "./Components/Cart/Cart";

const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route 
        path="/" 
        element={<ItemListContainer/>} />
        <Route 
        path="/:category" 
        element={<ItemListContainer/>
      } />
        <Route 
        path="/item/:id" 
        element={<ItemDetailContainer/>} /> 
        <Route 
        path="/carrito" 
        element={<Cart/>} /> 
      </Routes>

    </BrowserRouter>

  );
};

export default App;
