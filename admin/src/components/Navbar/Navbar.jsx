import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img className="logo" src={assets.logo2} alt="Logo" />
        <span className="admin-text">Admin Panel</span>
      </div>
      <div className="navbar-right">
        <img className="profile" src={assets.profile_image} alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
