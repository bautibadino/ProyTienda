import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //el uso del try catch es opcional, pero es una buena practica
    const getProducts = async () => {
        try {
        //para hacer una funcion async en un useEffect, es necesario declararla dentro del useEffect
        setLoading(true);
        const response = await fetch("src/data/productos.json");
        const data = await response.json();
        setProductos(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      };
    };
    getProducts()

  }, []);

    return(
      <>
        <ItemList productos={productos} />
      </>
    )
  }

