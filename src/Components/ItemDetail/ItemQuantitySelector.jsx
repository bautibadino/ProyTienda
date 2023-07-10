import { MDBBtn } from "mdb-react-ui-kit";

export const ItemQuantitySelector = ({ value, onValueChange, onAdd }) => {
  
  const handleIncrement = () => {
    onValueChange(value + 1);
  };

  const handleDecrement = () => {
    onValueChange(value - 1);
  };

  const handleAddToCart = () => {
    onAdd(value);
  };

  return (
    <div className="counter-container d-flex flex-column align-items-center justify-content-center w-100">
      <div className="d-flex flex-row align-items-center w-100 justify-content-center mb-1r">
      <MDBBtn className=''>-</MDBBtn>
      <span className=''>{value}</span>
      <MDBBtn onClick={handleIncrement} className=''>+</MDBBtn>
      </div>
    <div className="d-flex flex-row align-items-center w-100 justify-content-center mb-1 mt-1">
      <MDBBtn outline onClick={handleAddToCart} >
        Comprar
      </MDBBtn>
    </div>
    </div>
  );
};
