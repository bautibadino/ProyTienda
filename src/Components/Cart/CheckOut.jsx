import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../Context/Context";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const CheckOut = () => {
  const cart = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [datos, setDatos] = useState({});
  const [totalCheckoutitems, setTotalCheckoutitems] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = () => {
    let total = 0;
    for (let i = 0; i < cart.cart.length; i++) {
      const itemCart = cart.cart[i];
      const totalItem = Number(itemCart.precio) * itemCart.cantidad;
      total += totalItem;
    }
    setTotalCheckoutitems(total);
    console.log(total);
  };

  const handleSubmit = (e) => {
    handleCheckout();
    e.preventDefault();
    const ventas = collection(db, "orders");
    const newVenta = {
      buyer: datos,
      items: cart.cart,
      date: new Date(),
    };
    addDoc(ventas, newVenta);

  };

  useEffect(() => {
    handleCheckout();

  }, [cart]);

  return (
    <div className="container-checkout">



      <div className="productos-checkout">
        <h4>Tus productos</h4>
        {cart.cart.length === 0 ? (
          <>
            <p>no hay productos en el carrito</p>
            <MDBBtn outline className="p-3 d-flex align-items-center">
              <Link to="/">regresar</Link>
            </MDBBtn>
          </>
        ) : null}
        <ul className="lista-productos">
          {cart.cart.map((item) => (
            <li className="product-checkout" key={item.id}>
              <img src={item.url_imagen} alt="" />
              <p>{item.cantidad}</p>
              <p>{item.producto}</p>
              <p>{item.precio}</p>
              <p>
                total :{" "}
                {parseInt(item.precio.replace("$", "")) * item.cantidad}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="datos-checkout">
        <h4>Datos de envio</h4>
        <form>

        <div class="row">
    <div class="col">
      <input
              onChange={handleChange}
              type="text"
              name="nombre"
              className="form-control"
              placeholder="Nombre"
              value={datos.nombre}
            />
    </div>
    <div class="col">
      <input
              onChange={handleChange}
              type="text"
              name="apellido"
              className="form-control"
              placeholder="Apellido"
              value={datos.apellido}
            />
    </div>
  </div>

          <input
            onChange={handleChange}
            type="text"
            name="direccion"
            className="form-control"
            placeholder="Direccion"
            value={datos.direccion}
          />
          <input
            onChange={handleChange}
            type="text"
            name="ciudad"
            className="form-control"
            placeholder="Ciudad"
            value={datos.ciudad}
          />
          <input
            onChange={handleChange}
            type="text"
            name="provincia"
            className="form-control"
            placeholder="Provincia"
            value={datos.provincia}
          />
          <input
            onChange={handleChange}
            type="text"
            name="codigoPostal"
            className="form-control"
            placeholder="Codigo Postal"
            value={datos.codigoPostal}
          />
          <input
            onChange={handleChange}
            type="text"
            name="email"
            className="form-control"
            placeholder="Email"
            value={datos.email}
          />

          <button onClick={() => (handleCheckout, handleSubmit)} type="button" className="btn btn-primary">
            Comprar
          </button>
        </form>
      </div>
    </div>
  );
};
