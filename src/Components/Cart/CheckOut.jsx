import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../Context/Context";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import { MDBBtn } from "mdb-react-ui-kit";


export const CheckOut = () => {
  const cart = useContext(Context);
  const {getTotalCheckout, getTotalItems, clearCart} = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [datos, setDatos] = useState({});
  const [totalCheckoutitems, setTotalCheckoutitems] = useState(0);
  const [pedidoAceptado, setPedidoAceptado] = useState(false);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });

  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    getTotalCheckout(cart.cart)
    getTotalItems(cart.cart)
    
    setLoading(true);
    const ventas = collection(db, "orders");

    const newVenta = {
      buyer: datos,
      items: cart.cart,
      date: new Date(),
    };
    if(cart.cart.length === 0) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
    }
    else{
      setPedidoAceptado(true);
      await addDoc(ventas, newVenta);
      setLoading(false);
  
      setTimeout(() => {
        setPedidoAceptado(false);
      }, 2500);
      clearCart()
    };
    }
  
  console.log(totalCheckoutitems)

  return (
    // CONTAINER GENERAL CHECKOUT
    <Container className="d-flex flex-row">
      <div className="productos-checkout">
        {/* SI EL CARRITO TIENE 0 PRODUCTOS MUESTRA ESTO   */}
        <h4>Tus productos</h4>
        {cart.cart.length === 0 ? (
          <div className="carro-vacio">
            <p>no hay productos en el carrito</p>
            <MDBBtn outline className="p-3 d-flex align-items-center">
              <Link to="/">regresar</Link>
            </MDBBtn>
          </div>
        ) : (
          // SI EL CARRITO TIENE MAS DE 0 PRODUCTOS MUESTRA LO SIGUIENTE
          <div className="">
            <div className="">
              <div className="w-100 row align-items-start space-between">
                <div className="d-flex align-items-center justify-content-center col w-25">
                  <span></span>
                </div>
                <div className="d-flex align-items-center justify-content-center col w-25 p-2 border-bottom">
                  <small>unidades</small>
                </div>
                <div className="d-flex align-items-center justify-content-center col w-25 p-2 border-bottom">
                  <small>producto</small>
                </div>
                <div className="d-flex align-items-center justify-content-center col w-25 p-2 border-bottom">
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
            <form onSubmit={handleSubmit}>
              <div className="row g-0">
                <div className="col">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="Nombre"
                    value={datos.nombre}
                    required
                  />
                </div>
                <div className="col">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="apellido"
                    className="form-control"
                    placeholder="Apellido"
                    value={datos.apellido}
                    required
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
                required
              />
              <input
                onChange={handleChange}
                type="text"
                name="ciudad"
                className="form-control"
                placeholder="Ciudad"
                value={datos.ciudad}
                required
              />
              <input
                onChange={handleChange}
                type="text"
                name="provincia"
                className="form-control"
                placeholder="Provincia"
                value={datos.provincia}
                required
              />
              <input
                onChange={handleChange}
                type="text"
                name="codigoPostal"
                className="form-control"
                placeholder="Codigo Postal"
                value={datos.codigoPostal}
                required
              />
              <input
                onChange={handleChange}
                type="text"
                name="email"
                className="form-control"
                placeholder="Email"
                value={datos.email}
                required
              />

              <button
                type='submit'
                className="btn btn-primary"
              >
                Comprar
              </button>

            </form> 

                  {
                    pedidoAceptado ? 
                    <div className="mt-4 alert alert-success text-center animate__animated animate__backInRight" role="alert">
                      Gracias por tu compra ❤️
                  </div> : null
                  }
                  {
                    error ? <div className="mt-4 alert alert-danger text-center animate__animated animate__backInRight" role="alert">
                      No hay productos en el carrito
                      </div> : null
                  }
              
          </div>
        </div>
    </Container>
  );
};
