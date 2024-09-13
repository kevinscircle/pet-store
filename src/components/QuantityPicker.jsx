import { useState } from "react";

import "./QuantityPicker.css";

function QuantityPicker() {
  const [quantity, setQuantity] = useState(1); // inmutable  // variable, function 

  function handleIncrease() {
    let value = quantity + 1;
    // console.log("increase");

    setQuantity(value);
  }

  function handleDecrease() {
    // console.log("decrease");

    if(quantity === 1) return; // get out 
    let value = quantity - 1;

    setQuantity(value);

    // if (quantity <= 1) {
    //   setQuantity(1);
    // } else {
    //   setQuantity(value);
    // }
  }

  return (
    <div className="qt-picker">
      <button className="btn btn-sm btn-dark" disabled={quantity === 1} onClick={handleDecrease}>-</button>
      <span>{quantity}</span>
      <button className="btn btn-sm btn-dark"  onClick={handleIncrease}>+</button>
    </div>
  );
}

export default QuantityPicker;
