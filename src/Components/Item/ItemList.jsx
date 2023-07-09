import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Item } from "./Item";
import { Card } from "../CARDS/Card";


export const ItemList = ({ productos }) => {
  console.log(productos);
  const {category} = useParams()
  
  const pagesTitle = (category) => {
    switch (category) {
      case "iphone":
        document.title = "iPhone";
        break;
      case "macbook":
        document.title = "MacBook";
        break;
      case "ipad":
        document.title = "iPad";
        break;
      case 'products':
        document.title = 'Todos los productos'
        break;
      case 'carrito':
        document.title = 'Carrito'
        break;
    }
  }

  
  useEffect(() => {
    pagesTitle(category)
  }, [category])
  return (
    <div className="cards d-flex flex-row justify-content-center align-items-center flex-wrap">
      {productos.map((producto) => {
        return <Card key={producto.id} item={producto} />;
      })}
    </div>
  );
};
