import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const {id} = useParams()
 
  useEffect(() => {
    const obtenerDatos = async () => {
      const respuesta = await fetch('../src/data/productos.json');
      const datosJson = await respuesta.json();
      const itemEncontrado = datosJson.find((producto) => producto.id === parseInt(id));
      setItem(itemEncontrado);
    };
    
    obtenerDatos();
  }, [id]);

  return (
    <ItemDetail item={item} />
  )
}
