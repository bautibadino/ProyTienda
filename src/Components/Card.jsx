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

export const Card = ({ item }) => {
  const { url_imagen, producto, caracteristicas, precio } = item;
  const id = useParams();
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/item/${id}`);
  };
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
          {caracteristicas}
        </MDBCardText>
        </div>
        <div className="grid-3-card">
          <MDBCardText>${precio}</MDBCardText>
          <MDBBtn onClick={() => handleClick(item.id)}>Ver detalle</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};
