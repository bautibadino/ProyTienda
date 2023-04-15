import React, { useContext, useState } from 'react'
import {ImCart} from 'react-icons/im'
import { ItemDetail } from './ItemDetail/ItemDetail'
import context from 'react-bootstrap/esm/AccordionContext'


export const CartWidget = () => {
    const cart = useContext(context)
    console.log(cart);
  return (
    <button className='bg-dark p-2 rounded border border-white'>
      <ImCart className="carrito" size="1.3em" color="white"/>
    </button>
  )
}
