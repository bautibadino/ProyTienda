import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { Spinner } from "react-bootstrap";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    
    setLoading(true);
    fetch("/src/data/productos.json")
      .then((response) => response.json())
      .then((data) => {
        if (category) {
          setProductos(data.filter((item) => item.category === category));
        } else {
          setProductos(data);
        }
        setTimeout(() => {
      setLoading(false)
        }, 1000);
      })
      .catch((error) => console.error(error));
  }, [category]);

  return (
    <div className="container">
      {loading ? <Spinner /> : <ItemList productos={productos} />}
    </div>
  );
};
