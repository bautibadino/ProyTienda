import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { Spinner } from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import { list } from "firebase/storage";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    const productosBase = collection(db, 'products');
    getDocs(productosBase)
      .then((result) => {          
        let lista = [];
        lista = result.docs.map((producto) => ({
        id: producto.id,
        ...producto.data(),
    }));
        if(!category) {
        lista = lista;
      } else{
        lista = lista.filter((producto) => producto.category === category);
      }
      //ordenamos alfabeticamente
      lista.sort((a, b) => {
        const productoA = a.producto.toUpperCase();
        const productoB = b.producto.toUpperCase();
      
        if (productoA < productoB) {
          return -1;
        }
        if (productoA > productoB) {
          return 1;
        }
        return 0;
      });

        setProductos(lista);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="container w-100 animate__animated animate__fadeInLeftBig">
      {loading ? <div className='container-spinner'><Spinner/></div> : <ItemList productos={productos} />}
    </div>
  );
};
