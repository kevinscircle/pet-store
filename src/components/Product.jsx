import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import { useState } from "react";

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  function addItem(item) {
    console.log("item here");
  }

  function handleQuantity(qty) {
    console.log("quantity changed", qty);
    setQuantity(qty);
  }

  function getTotal() {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  }

  return (
    <div className="product">
      <img src={props.data.image} alt="yarn-ball toy" />

      <h2>{props.data.title}</h2>
      <div className="prices">
        <div className="total">
          Total: <span>${getTotal()}</span>
        </div>
        <div className="price">
          Price:<span> ${props.data.price.toFixed(2)}</span>
        </div>
      </div>

      <div className="quantity-button">
        <QuantityPicker onChange={handleQuantity}></QuantityPicker>
        <button className="cart-button" onClick={addItem}>
          Add Item
        </button>
      </div>
    </div>
  );
}

export default Product;
