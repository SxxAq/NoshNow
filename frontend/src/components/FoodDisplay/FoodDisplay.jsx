import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const filteredFoodList = food_list.filter(
    (item) => category === "All" || category === item.category,
  );

  return (
    <section className="food-display" id="food-display">
      <div className="food-display-header">
        <h2>Top Dishes for You</h2>
        <p>Discover our chef's specially curated selection</p>
      </div>
      <div className="food-display-list">
        {filteredFoodList.map((item) => (
          <FoodItem
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
      {filteredFoodList.length === 0 && (
        <p className="no-items-message">
          No dishes available in this category.
        </p>
      )}
    </section>
  );
};

export default FoodDisplay;
