import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const {id} = useParams()
  useEffect(() => {
    const obtenerDatos = async () => {
      const respuesta = await fetch('src/data/productos.json');
      const datosJson = await respuesta.json();
      setItem(datosJson.find((obj) => obj.id === parseInt(id)));
    };

    obtenerDatos();
  }, []);

  return (
    <div>{id}</div>
  )
}
