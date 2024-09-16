import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props) {
  function addItem(item) {
    console.log("item here");
  }

  return (
  
      <div className="product">
        <img src={props.data.image} alt="yarn-ball toy" />

        <h2>{props.data.title}</h2>
        <div>Price:{props.data.price}</div>
        <div className="quantity-button">
          <QuantityPicker></QuantityPicker>
          <button className="btn btn-sm btn-primary" onClick={addItem}>
            Add Item
          </button>
        </div>
      </div>

   
  );
}

export default Product;
