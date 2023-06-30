import React, { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { Button, Container, NavLink, Spinner } from "react-bootstrap";
import './homeStyles.css'
import { storage } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
export const Home = () => {

  const [imageUrls, setImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let navigate = useNavigate()
  const routeChange = () =>{
    let path = '/products'
    navigate(path)
  }
  const getImageUrl = async (imageName) => {
    const imageRef = ref(storage, `homePage/${imageName}`);
    try {
      const imageUrl = await getDownloadURL(imageRef);
      return imageUrl;
    } catch (error) {
      console.error("Error al obtener la URL de descarga de la imagen:", error);
      return null;
    }
  };
  const arrayImages = ['iphone.png', 'nubes.png', 'macbook.png'];
  
  const loadImages = async ()  =>{
    setIsLoading(true);
    //asignamos un array vacio para que al traer las imagenes luego de la iteracion, se haga un array de las url
    const urls = []
    //iteramos para que mediante la funcion asincronica de arriba podamos obtener esos links
    for(const imageName of arrayImages){
      const imageUrl = await getImageUrl(imageName);
      //si obtenemos las url pusheamos al array
      if(imageUrl){
        urls.push(imageUrl);
      }

    }
    setImageUrls(urls)
    setIsLoading(false)
  }

  useEffect(()=> {
    loadImages()
  },[])

  return (
    <Container fluid>
      {isLoading ? (
        <div className='container-spinner'><Spinner/></div>
      ) : (
        <>
          <div className="titulo animate__animated animate__fadeInDown">
            <h1>Tus dispositivos Apple</h1>
            <p>al alcance de tu mano</p>
            <Button onClick={routeChange}>VER PRODUCTOS</Button>
          </div>
          <div className="">
            <img className="iphone animate__animated animate__fadeInTopLeft" src={imageUrls[0]} alt="iphone" />
          </div>
          <div className="macbook-container">
            <img className="macbook animate__animated animate__fadeInBottomRight" src={imageUrls[2]} alt="macbook" />
          </div>
        </>
      )}
    </Container>
  )
      }