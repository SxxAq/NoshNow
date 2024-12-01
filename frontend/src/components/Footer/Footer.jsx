import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={assets.logo_2} alt="NoshNow Logo" />
          <p>
            Discover NoshNow, your go-to for delicious meals delivered straight
            to you. From fresh salads to savory rolls, indulgent desserts, and
            more – we bring restaurant-quality flavors to your doorstep.
          </p>
        </div>
        <div className="footer-content-center">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#delivery">Delivery</a>
            </li>
            <li>
              <a href="#privacy">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Contact Us</h2>
          <ul>
            <li>+1-212-345-8970</li>
            <li>contact@noshnow.com</li>
          </ul>
          <div className="footer-social-icons">
            <a href="#" aria-label="Facebook">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <p className="footer-copyright">© 2024 NoshNow. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
