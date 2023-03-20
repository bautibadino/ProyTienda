import React, { useState, useEffect } from 'react'

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => setProductos(json))
    }, [])
    


  return (
    <div className='d-flex'>
        <ul>
            {productos.map(producto => (
                <div className="card d-flex flex-column" style={{width: '18rem'}}>
                <li key={producto.id}>{producto.title}</li>
                <img src={producto.image} alt={producto.title} />
                <button className="btn btn-primary">ver detalle</button>
                </div>
            ))}
        </ul>

    </div>
  )
}
