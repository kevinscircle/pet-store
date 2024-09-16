import "./Footer.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
// import { faCat } from '@awesome.me/kit-KIT_CODE/icons/sharp/solid'
// import { faDog } from '@awesome.me/kit-KIT_CODE/icons/sharp-duotone/solid'

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { all } from '@awesome.me/kit-KIT_CODE/icons';

function Footer() {
  // library.add(...all)
  // const element = <FontAwesomeIcon icon={FontAwesomeIcon.['fa-facebook-f']} />

  // const element = <FontAwesomeIcon icon={byPrefixAndName.fas['house']} />

  // const element = (
  //   <div>
  //     <FontAwesomeIcon icon={faHouse} />
  //     <FontAwesomeIcon icon={faCat} />
  //     <FontAwesomeIcon icon={faDog} />
  //   </div>
  // )

  return (
    <div className="footer">
      <div className="footer-flex">
        <div>
          Powered by <span className="bold underline">Zillow</span>
        </div>
        <div className="flex-copyright">
          <div>
            Copyright <span>&copy;</span> 2024
          </div>
          <div className="bold">Privacy Policy</div>
        </div>

        {/* https://docs.fontawesome.com/web/setup/packages */}

        <div className="social-links">
          {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f"/> */}
          <i className="fa-brands fa-facebook-f">f</i>
          <i className="fa-brands fa-linkedin-in">l</i>
          <i className="fa-brands fa-youtube">y</i>
        </div>
      </div>

      <div className="site-container">
        <ul className="footer-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#catalog">Catalog</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
