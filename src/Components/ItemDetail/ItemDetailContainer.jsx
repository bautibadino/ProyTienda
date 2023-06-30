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
