import React from "react";
import "./main.css";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>Taste the Magic of Every Bite</h1>
          <p>
            From street-side chaat to royal curries — bring authentic flavors to
            your kitchen.
          </p>
          <p>
            From the sizzling streets to the comfort of your home kitchen,
            discover recipes, flavors, and food stories that bring people
            together.
          </p>
          <button className="cart-btn explore-btn">Explore Menu</button>
        </div>
      </div>
      <Products/>
    </>
  );
};

export default Home;
