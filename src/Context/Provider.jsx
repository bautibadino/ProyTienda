import React, { useState } from "react";
import { Context } from "./Context";

export const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState({});

  const addToCart = (item, quantity) => {
    const { id, producto, precio, url_imagen } = item;
    const numberPrice = Number(precio);
    const total = numberPrice * quantity;
    let totalCheckoutitems = 0;
    const itemToAdd = {
      id: item.id,
      producto: item.producto,
      precio: item.precio,
      url_imagen: item.url_imagen,
      cantidad: quantity,
      total: total
    };

    for (let i = 0; i < cart.length; i++) {
      const itemCart = cart[i];
      const totalItem = Number(itemCart.precio) * itemCart.cantidad;
      totalCheckoutitems += totalItem;
    }

    console.log(totalCheckoutitems);
    

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

  return (
    <Context.Provider value={{ addToCart, cart, handleSetCart }}>
      {" "}
      {children}{" "}
    </Context.Provider>
  );
};
