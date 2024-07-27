import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const onLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo_2} alt="logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to="/">
          <li
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </li>
        </Link>
        <a href="#explore-menu">
          <li
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </li>
        </a>
        <a href="#app-download">
          <li
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            Mobile App
          </li>
        </a>
        <a href="#footer">
          {" "}
          <li
            onClick={() => setMenu("contact")}
            className={menu === "contact" ? "active" : ""}
          >
            Contact Us
          </li>
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
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
