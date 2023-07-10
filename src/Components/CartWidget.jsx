import React, { useContext, useEffect, useState } from 'react'
import {ImCart} from 'react-icons/im'
import { ItemDetail } from './ItemDetail/ItemDetail'
import context from 'react-bootstrap/esm/AccordionContext'


export const CartWidget = () => {
    
  return (
    <button className='bg-dark p-2 border-0'>
      <ImCart className="" size="1.3em" color="white"/>
    </button>
  )
}
