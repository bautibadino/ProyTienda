import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";
import "./cardStyle.css";

export const Card = ({ item }) => {
  //desestructuracion del item para usar sus propiedades
  const { url_imagen, producto, caracteristicas, precio } = item;

  //navegacion a item detail usando el id del item
  const id = useParams();
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/item/${id}`);
  };

  // logica para recortar descripcion en previsualizacion de cards
  const separatedWords = caracteristicas.split(" ");
  separatedWords.length = 10;
  const newDescription = separatedWords.join(" ");

  return (
    <MDBCard className="w-25 p-3 m-2 ">
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
      >
        <div className="grid-1-card">
          <MDBCardImage src={url_imagen} fluid alt={producto} />
          <a>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </div>
      </MDBRipple>
      <MDBCardBody>
        <div className="grid-2-card">
          <MDBCardTitle>{producto}</MDBCardTitle>
          <MDBCardText className="descripcion-card">
            {newDescription}...
          </MDBCardText>
        </div>
        <div className="grid-3-card">
          <strong><MDBCardText>${precio}</MDBCardText></strong>
          <MDBBtn onClick={() => handleClick(item.id)}>Ver detalle</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};
