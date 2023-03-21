import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
        setLoading(false);
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

  return (
    <div className="container">
      <ul>
        {productos.map((producto) => (
          <div className="card d-flex flex-column" style={{ width: "18rem" }}>
            <li key={producto.id}>{producto.title}</li>
            <img src={producto.image} alt={producto.title} />
            <button
              className="btn btn-primary"
              onClick={ () => handleVerDetalle(producto.id)}
            >
              ver detalle
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};
