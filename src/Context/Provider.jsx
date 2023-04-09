import React from 'react'
import { Context } from './Context'

export const Provider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [counter, setCounter] = useState(1);
  
    const addToCart = () => {
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
    <Context.Provider addToCart={addToCart}> {children} </Context.Provider>
  )
}
