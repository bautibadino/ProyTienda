import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Item } from "./Item";

export const ItemList = ({ productos }) => {
  return (
    <div className="cards">
      {productos.map((producto) => {
        return <Item key={producto.id} producto={producto} />;
      })}
    </div>
  );
};
