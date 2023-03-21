import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "./spinner";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //el uso del try catch es opcional, pero es una buena practica
    try {
              const getProducts = async () => {
        //para hacer una funcion async en un useEffect, es necesario declararla dentro del useEffect
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProductos(data);
        // setLoading(false);
      };
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const navigate = useNavigate();

  const handleVerDetalle = (id) => {
    onSubmit(id);
  }; //handler para pasar id a la funcion onSubmit

  const onSubmit = (id) => {
    navigate(`/category/${id}`);
  }; //custom hook para navegar a la ruta de detalle de producto

// le falta el !loading
// le falta el !loading
// le falta el !loading
  if (loading) {
    return (
        <div className="cards">
        {
            productos.map((producto) => (
      <div key={producto.id} className="card">
        <img src={producto.image} className="card-img-top" alt={producto.title}/>
        <div className="card-body">
          <h5 className="card-title">{producto.title}</h5>
        </div>
          <button className="btn btn-primary" onClick={() => handleVerDetalle(producto.id)}>Ver detalle</button>
        <div className="card-footer">
            <small className="text-muted">{`Stock: ${producto.rating.count}`}</small>
        </div>
      </div>
            )
            )}
        </div>)
  }else{
    return (
        <Spinner/>
    );
  }
}; //aca se renderiza el componente ItemList
