import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, ItemList, ItemListContainer, ItemDetailContainer} from "./Components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../src/index.css'

const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route 
        path="/" 
        element={<ItemListContainer/>} />
        <Route 
        path="/category" 
        element={<ItemListContainer/>
      } />
        {/* <Route 
        path="/category/:ca" 
        element={<ItemDetailContainer/>} /> */}
      </Routes>
    </BrowserRouter>

  );
};

export default App;
