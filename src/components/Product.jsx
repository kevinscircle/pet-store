import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props) {
  function addItem(item) {
    console.log("item here");
  }

  return (
    <div className="product">
      <img src="/img/yarn-ball.jpg" alt="yarn-ball toy" />

      <h2>{props.title}</h2>
      <div>Price:{props.price}</div>
      <div className="quantity-button">
        <QuantityPicker></QuantityPicker>
        <button className="btn btn-sm btn-primary" onClick={addItem}>Add Item</button>
      </div>
    </div>
  );
}

export default Product;
