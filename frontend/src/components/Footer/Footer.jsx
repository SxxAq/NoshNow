import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={assets.logo1} alt="" />
          <p>
            Discover NoshNow, your go-to for delicious meals delivered straight
            to you. From fresh salads to savory rolls, indulgent desserts, and
            more – we bring restaurant-quality flavors to your doorstep. Enjoy
            easy online ordering and elevate your dining experience.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-345-8970</li>
            <li>contact@noshnow.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Noshnow.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
