import React, { useState } from 'react'

export const ItemCounter = ({stock}) => {
    const [counter, setCounter] = useState(1)
    const handleSumar = () => setCounter(counter + 1)
    const handleRestar = () => setCounter(counter - 1)

  return (
    <div className='container-counter'>
        <button className="custom-btn btn-16" onClick={handleRestar}>-1</button>
        <span>{counter}</span>
        <button className="custom-btn btn-16" onClick={handleSumar}>+1</button>
    </div>
  )
}
