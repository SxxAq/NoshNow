import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./FoodItem.css";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="food-item">
      <div
        className="food-item-image"
        style={{ backgroundImage: `url(${url}/images/${image})` }}
      >
        <div className="food-item-overlay">
          <span className="food-item-price">${price}</span>
        </div>
      </div>
      <div className="food-item-content">
        <h3 className="food-item-name">{name}</h3>
        <p className="food-item-description">{description}</p>
        <div className="food-item-actions">
          {!cartItems[id] ? (
            <button className="add-to-cart" onClick={() => addToCart(id)}>
              Add to Cart
            </button>
          ) : (
            <div className="food-item-counter">
              <button
                className="counter-btn minus"
                onClick={() => removeFromCart(id)}
              >
                <span>-</span>
              </button>
              <span className="counter-value">{cartItems[id]}</span>
              <button
                className="counter-btn plus"
                onClick={() => addToCart(id)}
              >
                <span>+</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
