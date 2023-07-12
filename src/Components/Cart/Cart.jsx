import React, { useContext, useEffect } from 'react'
import { Context } from '../../Context/Context'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './cartStyles.css'

export const Cart = () => {
  const {cart, handleSetCart, getTotalCheckout} = useContext(Context)
  const navigate = useNavigate();
  useEffect(() => {
    document.title = 'Carrito'
  }, [])
  const handleCheckOut = () =>{
    navigate('/carrito/checkout');
  }


  if (cart.length === 0) {
    return (
      <div className='carro-vacio'>
        <p>tu carrito esta vacío, regresa para elegir tu producto 📱</p>
        <Button ><Link className='btn btn-primary' to='/'>regresar</Link></Button>
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
              <p>${item.precio}</p>
              <p>${parseInt(item.precio.replace('$', '')) * item.cantidad}</p>
              <Button onClick={() => handleSetCart(item.id)}>x</Button>
            </li>
          ))} 
        </ul>
        <p className='mt-3 mb-3'>TOTAL: <strong>${getTotalCheckout(cart)}</strong></p>

        <Button onClick={handleCheckOut}>Comprar todo</Button>
      </div>
    )
  }
}
