import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import productos from '../../data/productos.json'

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setLoading(true);
      
      setTimeout(() => {
        resolve(productos.find((producto) => producto.id === id));
        setLoading(false)
      }, 700);
    });

    getItem.then((res) => setItem(res));
  }, [id]);
  console.log();

  return(
    <section className="animate__animated animate__lightSpeedInRight container">
      {loading ? <h1>Cargando...</h1> :  <ItemDetail item={item}/>}
    </section>
  ) 
}
