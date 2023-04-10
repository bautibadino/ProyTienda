import React, { useContext } from 'react'
import { Context } from '../../Context/Context'


export const Cart = () => {
  const itemToAdd = useContext(Context)
  console.log(itemToAdd)
  return (
    <>
        <h4>tu carrito 🤩</h4>
        <ul>
            <li>
                <img src="" alt=""/>
                <p>aqui va el titulo</p>
                <p>aqui va el precio</p>
                <p>aqui va la cantidad</p>
            </li>
        </ul>
    </>
  )
}
