import React, { useEffect, useState } from "react";
import { Context } from "./Context";
import { useParams } from "react-router-dom";

export const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState({});
  const {category} = useParams()
  const [cartLength, setCartLength] = useState(0)

  const pagesTitle = (category) => {
    switch (category) {
      case "iphone":
        document.title = "iPhone";
        break;
      case "macbook":
        document.title = "MacBook";
        break;
      case "ipad":
        document.title = "iPad";
        break;
      case 'products':
        document.title = 'Todos los productos'
        break;
      case 'carrito':
        document.title = 'Carrito'
        break;
        default:
          document.title = 'Apple Store'
        break
    }
  }

  
  useEffect(() => {
    pagesTitle(category)
  }, [category])

  const addToCart = (item, quantity) => {
    const numberPrice = Number(item.precio);

    const itemToAdd = {
      id: item.id,
      producto: item.producto,
      precio: item.precio,
      url_imagen: item.url_imagen,
      cantidad: quantity,
      total: numberPrice * quantity,
    };
    
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].cantidad += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, itemToAdd]);
    }
  };

  const handleSetCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const getTotalItems = (cart) => {
    let totalItems = 0;
    cart.forEach((itemCart) => {
      totalItems += itemCart.cantidad;
    });
    return totalItems;
  };

  const getTotalCheckout = (cart) => {
    const total = cart.reduce((accumulator, itemCart) => {
      const totalItem = Number(itemCart.precio) * itemCart.cantidad;
      return accumulator + totalItem;
    }, 0);
    return total;
  };

  const clearCart = () => {
    setCart([]);
  }

  return (
    <Context.Provider value={{ addToCart, cart, handleSetCart, getTotalCheckout, getTotalItems, clearCart, }}>
      {" "}
      {children}{" "}
    </Context.Provider>
  );
}
