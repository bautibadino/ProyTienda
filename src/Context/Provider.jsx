import React, { useState } from 'react'
import { Context } from './Context'

export const Provider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [counter, setCounter] = useState(1);
    const [item, setItem] = useState({});
  

    const addToCart = (item, quantity) => {
        const itemToAdd = {
          id: item.id,
          producto: item.producto,
          precio: item.precio,
          url_imagen: item.url_imagen,
          cantidad: counter,
        };
    
        
        setCart([...cart, itemToAdd ]);
        setCounter(1);
      };
      
  return (
    <Context.Provider value={{addToCart, cart}}> {children} </Context.Provider>
  )
}
