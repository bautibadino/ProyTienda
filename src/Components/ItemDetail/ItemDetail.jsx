import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Description from "./Description";
import { ItemQuantitySelector } from "./itemQuantitySelector";
import { Context } from "../../Context/Context";


export const ItemDetail = ({ item  }) => {

  const algo = useContext(Context)

  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(1);

  const addToCart = () => {
      const itemToAdd = {
        id: item.id,
        producto: item.producto,
        precio: item.precio,
        url_imagen: item.url_imagen,
        cantidad: counter,
      };
  
      
      setCart([...cart, itemToAdd ]);
      setCounter(1);
    };
    

  const { producto, precio, caracteristicas, url_imagen, category, id, stock } =
    item;

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
