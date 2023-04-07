import React, { useState } from 'react'
import {ImCart} from 'react-icons/im'
import { ItemDetail } from './ItemDetail/ItemDetail'


export const CartWidget = () => {
    
  return (
    <button className='bg-dark p-2 rounded border border-white'>
      <ImCart className="carrito" size="1.3em" color="white"/>
    </button>
  )
}
