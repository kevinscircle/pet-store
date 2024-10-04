import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home page">
      <div className="home-title">
              <h2>Welcome to Pet Store</h2>
      </div>

      <div className="home-body">
        <img src="/img/selfie.jpg" alt="pet store" />
        {/* <Link className="btn btn-lg btn-warning" to='/catalog'>Check our Collection <i class="fa-solid fa-circle-chevron-right"></i></Link> */}
        <Link className="button-catalog" to='/catalog'>
          <div className="button-container">
            <span>Check our Collection</span>
            <span>Check our Collection</span>
          </div>
          <div className="arrowContainer">
          <i className="fa-solid fa-arrow-right"></i>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
