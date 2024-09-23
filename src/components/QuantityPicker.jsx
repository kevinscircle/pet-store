import { useState } from "react";

import "./QuantityPicker.css";

function QuantityPicker(props) {
  const [quantity, setQuantity] = useState(1); // inmutable  // variable, function 

  function handleIncrease() {
    let value = quantity + 1;
    // console.log("increase");

    setQuantity(value);

    props.onChange(value);  // call the parent function 
  }

  function handleDecrease() {
    // console.log("decrease");

    if(quantity === 1) return; // get out 
    let value = quantity - 1;

    setQuantity(value);

    props.onChange(value);  // call the parent function 

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
   
      <button className="paw-btn" onClick={handleIncrease}>  <img className="paw-plus" src="../../img/paw-print.png"></img></button>
    
    </div>
  );
}

export default QuantityPicker;




