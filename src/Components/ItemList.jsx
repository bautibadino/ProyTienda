import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ItemList = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  const fetchItem = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setItem(data);
  };

  useEffect(() => {
    fetchItem();
  }, [id]);

  return (
    <div className="contenedor-item">
      <div className="">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="textos-item">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
      <div className="comprar-item">
        <h4>${item.price}</h4>
        <button className="btn btn-primary">Agregar al carrito</button>
      </div>
    </div>
  );
};
