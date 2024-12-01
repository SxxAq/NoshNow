import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <section className="explore-menu" id="explore-menu">
      <div className="explore-menu-header">
        <h2>Handpicked Just for You</h2>
        <p className="explore-menu-text">
          Each dish on our menu is carefully crafted to offer you the best
          culinary experience. Our chefs use the finest ingredients to create
          meals that are not only delicious but also nourishing. Explore our
          curated selections and enjoy a memorable dining experience.
        </p>
      </div>
      <div className="explore-menu-list" role="tablist">
        {menu_list.map((item, index) => (
          <button
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name,
              )
            }
            className={`explore-menu-list-item ${category === item.menu_name ? "active" : ""}`}
            role="tab"
            aria-selected={category === item.menu_name}
            aria-controls={`${item.menu_name.toLowerCase()}-panel`}
          >
            <img src={item.menu_image} alt="" aria-hidden="true" />
            <span>{item.menu_name}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ExploreMenu;
