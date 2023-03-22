import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const ItemList = (props) => {

  const { productos } = props;
  
  console.log(productos);
  
  return (
    <div className="cards">
    {productos.map((producto) => (
      <div key={producto.id} className="card">
        <img
          src={producto.url_imagen}
          className="card-img-top"
          alt={producto.title}
        />
        <div className="card-body">
          <h5 className="card-title">{producto.producto}</h5>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => handleVerDetalle(producto.id)}
        >
          Ver detalle
        </button>
        <div className="card-footer">
          <small className="text-muted"></small>
        </div>
      </div>
    ))}
  </div>
  )
}
