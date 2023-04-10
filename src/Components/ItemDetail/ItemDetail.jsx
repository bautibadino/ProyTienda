import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Description from "./Description";
import { ItemQuantitySelector } from "./itemQuantitySelector";
import { Context } from "../../Context/Context";

export const ItemDetail = ({ item  }) => {
  const [counter, setCounter] = useState(1);
  const value = useContext(Context);
  const {addToCart, cart} = value;
  const { producto, precio, caracteristicas, url_imagen, category, id, stock } = item;
  
  const onAdd = (counter) => {
    addToCart(item, counter);
  };

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
        <button onClick={onAdd}  className="button-card">
          Agregar a mi carrito
        </button>
      </div>
    </div>
  );
};
