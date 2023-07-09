import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../../firebase/Firebase'
import { Spinner } from 'react-bootstrap';


export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false)
  const { id } = useParams();

  const {category} = useParams()
  
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
  useEffect(() => {
    setLoading(true);
    const productosBase = collection(db, 'products');
    getDocs(productosBase)
    .then((result) => {
      let itemFiltered = result.docs.map((producto) => ({
        id: producto.id,
        ...producto.data(),
      }));
      itemFiltered = itemFiltered.filter((producto) => producto.id === id);
      setItem(itemFiltered[0]);
      setLoading(false);
    })
  }, [id]);

  return(
    <div className="d-flex animate__animated animate__lightSpeedInRight container">
      {loading ? <div className='container-spinner'><Spinner/> </div>:  <ItemDetail item={item}/>}
    </div>
  ) 
}
