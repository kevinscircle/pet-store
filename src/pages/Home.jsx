import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home page">
      <h2>Welcome to Pet Store</h2>
      <div className="home-body">
        <img src="/img/selfie.jpg" alt="pet store" />
        {/* <Link className="btn btn-lg btn-warning" to='/catalog'>Check our Collection <i class="fa-solid fa-circle-chevron-right"></i></Link> */}
        <Link class="button-catalog" to='/catalog'>
          <div class="button-container">
            <span>Check our Collection</span>
            <span>Check our Collection</span>
          </div>
          <div class="arrowContainer">
          <i class="fa-solid fa-arrow-right"></i>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
