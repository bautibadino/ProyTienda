import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import productos from '../data/productos.json';

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setLoading(true);

      setTimeout(() => {
        setLoading(false)
      }, 1500);
      setTimeout(() => {
        resolve(productos.find((producto) => producto.id === id));
      }, 1000);
      
    });

    getItem.then((res) => setItem(res));
  }, [id]);


  return(
    <section className="container">
      {loading ? <h1>Cargando...</h1> :  <ItemDetail item={item} />}
    </section>
  )
}
