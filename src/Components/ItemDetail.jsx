import React from 'react'
import { useParams } from 'react-router-dom'
import { ItemCounter } from './itemCounter';

export const ItemDetail = ({item}) => {

  const { producto, precio, caracteristicas, url_imagen, category, id, stock } = item
  console.log(producto);
  console.log(stock);
  return (
    <div className="detail-conteiner">
      <img src={url_imagen} className="card-img-top" alt={producto} />
      <div className="texto-detalle">
        <h5 className="card-title">{producto}</h5>
        <p className="card-text">{caracteristicas}</p>
        <ItemCounter/>
        <button className='btn btn-info'>Agregar a mi carrito</button>
      </div>
    </div>
  )
}
