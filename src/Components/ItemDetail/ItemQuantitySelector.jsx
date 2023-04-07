export const ItemQuantitySelector = ({ value, onValueChange }) => {
    const handleIncrement = () => {
      onValueChange(value + 1);
    };
  
    const handleDecrement = () => {
      onValueChange(value - 1);
    };
  
    return (
      <div className="counter-container">
        <button onClick={handleDecrement}>-</button>
        <span>{value}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    );
  };