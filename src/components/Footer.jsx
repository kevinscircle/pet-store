import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h2>Im a footer</h2>
      <div>
        Powered by <span className="bold underline">Zillow</span>
      </div>
      <div className="flex-copyright">
        <div>
          Copyright <span>&copy</span> 2024
        </div>
        <div className="bold">Privacy Policy</div>
      </div>

      <div className="contact-social-links">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        <i className="fa-brands fa-youtube"></i>
      </div>

      <ul className="footer-links">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
