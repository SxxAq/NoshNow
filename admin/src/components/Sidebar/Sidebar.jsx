import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <NavLink to="/add" className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <span>Add Items</span>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <span>List Items</span>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <span>Orders</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
