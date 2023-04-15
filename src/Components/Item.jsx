import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const Item = ( {producto} ) => {

  const id = useParams();
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/item/${id}`)
  }

  return (

      
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
          className="button-card"
          onClick={() => handleClick(producto.id)}
        >
          Ver detalle
        </button>
      </div>
  )
}
