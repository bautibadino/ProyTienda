import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import { Link, useNavigate } from 'react-router-dom'

export const Cart = () => {
  const {cart, handleSetCart} = useContext(Context)

  const navigate = useNavigate();

  const handleCheckOut = () =>{
    navigate('/carrito/checkout');
  }


  if (cart.length === 0) {
    return (
      <div>
        <p>no hay productos en el carrito</p>
        <Link to='/'>regresar</Link>
      </div>
    )
  } else {
    return (
      <div className='contenedor-carrito'> 
        <h4>Carrito</h4>
        <ul className='lista-carrito'>
          {cart.map((item) => (
            <li className='item-carrito' key={item.id}>
              <img src={item.url_imagen} alt="" />
              <p>{item.cantidad}</p>
              <p>{item.producto}</p>
              <p>{item.precio}</p>
              <p>total: ${parseInt(item.precio.replace('$', '')) * item.cantidad}</p>
              <button onClick={() => handleSetCart(item.id)}>x</button>
            </li>
          ))} 
        </ul>
        <button onClick={handleCheckOut}>Comprar todo</button>
      </div>
    )
  }
}
