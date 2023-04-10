import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Description from "./Description";
import { ItemQuantitySelector } from "./itemQuantitySelector";
import { Context } from "../../Context/Context";

export const ItemDetail = ({ item  }) => {
  const [counter, setCounter] = useState(1);
  const value = useContext(Context)
  const { producto, precio, caracteristicas, url_imagen, category, id, stock } =
    item;

  const {addToCart, cart} = value
  console.log(cart);
  const handleCounterChange = (value) => {
    setCounter(value);
  };


  return (
    <div className="detail-conteiner">
      <img src={url_imagen} className="card-img-top" alt={producto} />
      <div className="texto-detalle">
        <h5 className="card-title">{producto}</h5>
        <Description 
        text={caracteristicas}/> 
        <ItemQuantitySelector value={counter} onValueChange={handleCounterChange} />
        <button onClick={addToCart}  className="button-card">
          Agregar a mi carrito
        </button>
      </div>
    </div>
  );
};
