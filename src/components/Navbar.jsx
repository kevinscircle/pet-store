import { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import DataContext from "../state/DataContext";

function Navbar() {
  const { user, cart } = useContext(DataContext);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/">
          <span>Pet</span>Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <img src="../../img/dalmatian.png" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/catalog"
              >
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/admin">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <label className="btn btn-outline-light btn-lg">{user.name}</label>
            <Link className="btn btn-outline-warning ms-3 btn-lg cart-container" to="/cart">
              <span className="position-absolute badge rounded-pill bg-info">{cart.length}</span> <img className="cart" src='./img/shopping-cart.png' alt=''></img>View Cart
            </Link>
          </form>
        </div>
      </div>
    </nav>

    // <nav className="fixed-nav-bar">
    //     <div className="logo"><span>Pet</span>Store</div>

    // </nav>
  );
}
export default Navbar;
