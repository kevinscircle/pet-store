import "./Admin.css";
import { useState, useEffect } from "react";
import DataService from "../services/DataService";

function Admin() {
  const [allCoupons, setAllCoupons] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const [product, setProduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
  });

  function handleProduct(event) {
    const text = event.target.value;
    console.log("text changed", text);

    const name = event.target.name;
    console.log("name is me", name);
    console.log("im chnaged", event);

    // copy, modify the copy, set the copy

    const copy = { ...product }; // js spread operator -> read about it // needed to copy array/ objects

    // if(name === "title"){
    //     copy.title = text;
    // } else if(name === 'image'){
    //     copy.image = text;
    // }else if(name === 'category'){
    //     copy.category = text;
    // }else if(name === 'price'){
    //     copy.price = text;
    // }

    copy[name] = text;
    setProduct(copy);
  }

  async function addProduct() {
    console.log("the product", product);
    // fix price

    let fixedProd = { ...product };
    fixedProd.price = parseFloat(fixedProd.price);

    let copy = [...allProducts];
    copy.push(fixedProd);
    setAllProducts(copy);

    // send the prod to the server

    let resp = DataService.saveProducts(fixedProd);
    console.log("resp", resp);
  }
  ///////////////////coupon
  const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
  });

  function handleCoupon(event) {
    const text = event.target.value;

    const name = event.target.name;

    console.log("", text, name);

    const copy = { ...coupon };

    copy[name] = text;
    setCoupon(copy);
  }

  function addCoupon() {
    console.log("the coupon", coupon);

    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  }

  // use Effect -> load data
  // load data retrieves the products from the server
  // and put the data into allProducts state var

  async function loadData() {
    let data = await DataService.getProducts();
    setAllProducts(data);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="admin page">
      <h1>Store Administration</h1>

      <div className="parent">
        <div className="products">
          <div className="container">
            <div className="card-product">
              <h4 className="coupon">Register a Prouct</h4>
              {/* <div className="inputBox">
                <input type="text" required="required" />
                <span className="user">Product</span>
              </div> */}

              <div className="inputBox">
                <input
                  type="text"
                  required="required"
                  onChange={handleProduct}
                  name="title"
                />
                <span>Title</span>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  required="required"
                  onChange={handleProduct}
                  name="image"
                />
                <span>Image</span>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  required="required"
                  onChange={handleProduct}
                  name="category"
                />
                <span>Category</span>
              </div>
              <div className="inputBox">
                <input
                  type="number"
                  required="required"
                  onChange={handleProduct}
                  name="price"
                />
                <span>Price</span>
              </div>

              <button className="save" onClick={addProduct}>
                Save Product
              </button>
            </div>
          </div>

          {allProducts.map((prod) => (
            <li className="prod">
              <img src={prod.image} alt="" />
              <h5>{prod.title}</h5>
              <label> ${prod.price}</label>
            </li>
          ))}
        </div>

        <div className="coupons">
          <div className="container">
            <div className="card-coupon">
              <h4 className="coupon">Register a Coupon</h4>
              <div className="inputBox">
                <input
                  type="text"
                  required="required"
                  onChange={handleCoupon}
                  name="code"
                />
                <span className="user">Code</span>
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  required="required"
                  onChange={handleCoupon}
                  name="discount"
                />
                <span>Discount</span>
              </div>

              <button className="save" onClick={addCoupon}>
                Save Coupon
              </button>
            </div>
          </div>

          {allCoupons.map((cp) => (
            <li>
              {cp.code} - {cp.discount}%
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
