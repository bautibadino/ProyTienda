import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, ItemList, ItemListContainer } from "./Components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../src/index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/productos" element={<ItemListContainer/>} />
        <Route path="/category/:id" element={<ItemList/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
