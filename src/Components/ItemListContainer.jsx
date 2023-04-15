import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { Spinner } from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("/src/data/productos.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (category) {
  //         setProductos(data.filter((item) => item.category === category));
  //       } else {
  //         setProductos(data);
  //       }
  //       setLoading(false);
  //     })
  //     .catch((error) => console.error(error));
  // }, [category]);

  //firebase
  useEffect(() =>{
    setLoading(true)
    const productosBase = collection(db, 'products')
    getDocs(productosBase)
    .then((result) => {
      const lista = result.docs.map((producto) =>{
        return {
          id: producto.id,
          ...producto.data()
      }
    })
    setProductos(lista)

    setLoading(false)
    });
  }, [category])
  return (
    <div className="container animate__animated animate__fadeInLeftBig">
      {loading ?<div className='container-spinner'><Spinner/> </div>: <ItemList productos={productos} />}
    </div>
  );
};
