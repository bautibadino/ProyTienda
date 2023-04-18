import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Item } from "./Item";
import { Card } from "./Card";


export const ItemList = ({ productos }) => {
  console.log(productos);
  return (
    <div className="cards d-flex flex-row justify-content-center align-items-center flex-wrap">
      {productos.map((producto) => {
        return <Card key={producto.id} item={producto} />;
      })}
    </div>
  );
};
