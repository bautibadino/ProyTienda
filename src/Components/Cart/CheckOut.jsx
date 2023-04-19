import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../Context/Context";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { MDBBtn } from "mdb-react-ui-kit";


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
    return total;
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
    // CONTAINER GENERAL CHECKOUT
    <Container className="d-flex flex-row">
      <div className="productos-checkout">
        {/* SI EL CARRITO TIENE 0 PRODUCTOS MUESTRA ESTO */}
        <h4>Tus productos</h4>
        {cart.cart.length === 0 ? (
          <>
            <p>no hay productos en el carrito</p>
            <MDBBtn outline className="p-3 d-flex align-items-center">
              <Link to="/">regresar</Link>
            </MDBBtn>
          </>
        ) : (
          // SI EL CARRITO TIENE MAS DE 0 PRODUCTOS MUESTRA LO SIGUIENTE
          <div className="">
            <div className="">
              <div className="w-100 row align-items-start space-between">
                <div className="d-flex align-items-center justify-content-center col w-25">
                  <span></span>
                </div>
                <div className="d-flex align-items-center justify-content-center col w-25">
                  <small>unidades</small>
                </div>
                <div className="d-flex align-items-center justify-content-center col w-25">
                  <small>producto</small>
                </div>
                <div className="d-flex align-items-center justify-content-center col w-25">
                  <small>precio</small>
                </div>
              </div>
              <ul className="lista-productos">
                {/* LISTA CARRO */}
                {cart.cart.map((item) => (
                  <li
                    className="product-checkout d-flex justify-content-around align-items-center"
                    key={item.id}
                  >
                    <img
                      className="d-flex align-items-center justify-content-center w-25"
                      src={item.url_imagen}
                      alt=""
                    />
                    <small className="d-flex align-items-center justify-content-center w-25">
                      {item.cantidad}
                    </small>
                    <small className="d-flex align-items-center justify-content-center flex-wrap w-25">
                      {item.producto}
                    </small>
                    <small className="d-flex align-items-center justify-content-center w-25">
                      ${item.precio}
                    </small>
                  </li>
                ))}
              </ul>
            </div>
          </div>
            )}
            <strong>TOTAL: ${totalCheckoutitems}</strong>
          </div>
      


      <div className="datos-checkout">
          <div className="">
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

              <button
                onClick={() => (handleCheckout, handleSubmit)}
                type="button"
                className="btn btn-primary"
              >
                Comprar
              </button>
            </form>
          </div>
        </div>
    </Container>
  );
};
