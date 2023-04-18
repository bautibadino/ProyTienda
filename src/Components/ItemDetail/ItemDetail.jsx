import React, { useContext, useState } from "react";
import { ItemQuantitySelector } from "./itemQuantitySelector";
import { Context } from "../../Context/Context";


export const ItemDetail = ({ item }) => {
  const [counter, setCounter] = useState(1);
  const value = useContext(Context);
  const { addToCart, cart } = value;
  const { producto, precio, caracteristicas, url_imagen, category, id, stock } = item;
    console.log(item)
  const onAdd = (counter) => {
    addToCart(item, counter);
    setCounter(1);
  };

  const handleCounterChange = (value) => {
    setCounter(value);
  };
  return (
    <div className="w-100 item-detail">
      <div className="contenedor-img w-75 d-flex flex-column h-100 align-items-center justify-content-center">
          <img src={url_imagen} alt="" className="" />
        <div className="container">
          <div className="detalle-producto">
            <h4>{producto}</h4>
            <p>{caracteristicas}</p>
            <p>{precio}</p>
            <ItemQuantitySelector
              value={counter}
              onValueChange={handleCounterChange}
              onAdd={onAdd}
            />
          </div>


        </div>
      </div>
    </div>
  );
};
