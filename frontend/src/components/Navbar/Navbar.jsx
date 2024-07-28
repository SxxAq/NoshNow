import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const onLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    setIsMenuOpen(false); // Close the menu after logging out
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    setIsMenuOpen(false); // Close the menu after clicking an item
  };

  return (
    <div className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Link to="/">
        <img src={assets.logo_2} alt="logo" className="logo" />
      </Link>
      <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <Link to="/">
            <li
              onClick={() => handleMenuClick("home")}
              className={menu === "home" ? "active" : ""}
            >
              Home
            </li>
          </Link>
          <a href="#explore-menu">
            <li
              onClick={() => handleMenuClick("menu")}
              className={menu === "menu" ? "active" : ""}
            >
              Menu
            </li>
          </a>
          <a href="#app-download">
            <li
              onClick={() => handleMenuClick("mobile-app")}
              className={menu === "mobile-app" ? "active" : ""}
            >
              Mobile App
            </li>
          </a>
          <a href="#footer">
            <li
              onClick={() => handleMenuClick("contact")}
              className={menu === "contact" ? "active" : ""}
            >
              Contact Us
            </li>
          </a>
          {!token && (
            <li
              className="sign-in"
              onClick={() => {
                setShowLogin(true);
                setIsMenuOpen(false);
              }}
            >
              Sign In
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </div>
        {token && (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li
                onClick={() => {
                  navigate("/myorders");
                  setIsMenuOpen(false);
                }}
              >
                <img src={assets.bag_icon} alt="Orders" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={onLogout}>
                <img src={assets.logout_icon} alt="Logout" />
                <p>LogOut</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
