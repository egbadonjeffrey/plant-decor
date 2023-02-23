import React, { useState } from "react";
import Nav from "../nav/Nav";
import "./HeroBanner.css";
import { FiSearch } from "react-icons/fi";
import priceCircle from "../../images/point-product.png";
import descriptionBubble from "../../images/description_bubble.png";

const HeroBanner = () => {
  const [dracena, setDracena] = useState(false);
  const [petal, setPetal] = useState(false);
  const [rose, setRose] = useState(false);
  return (
    <div className="banner-container">
      <div className="effect-div-left">
        {dracena && (
          <div className="dracena-bubble">
            <span>$65.00</span>
            <span>Dracena Fragnas</span>
          </div>
        )}
        <img
          src={priceCircle}
          alt="top-point"
          onClick={() => alert("Price is $10")}
        />
        {rose && (
          <div className="rose-bubble">
            <span>$65.00</span>
            <span>Rose Fragnas</span>
          </div>
        )}
        <img
          src={priceCircle}
          className="bottom-point"
          alt="bottom-point"
          onClick={() => alert("Price is $10")}
        />
      </div>
      <div className="effect-div-right">
        {petal && (
          <div className="petal-bubble">
            <span>$65.00</span>
            <span>Petal Fragnas</span>
          </div>
        )}
        <img
          src={priceCircle}
          alt="point"
          onClick={() => alert("Price is $10")}
        />
      </div>
      <div className="nav">
        <Nav />
      </div>

      <div className="banner-intro">
        <div className="hero-text">
          <h1>Bring Serenity to Your Place With Interior Plants</h1>
          <p>
            find your dream plant for you home decoration with us, and we will
            make it happen.
          </p>
        </div>
        <div className="banner-search">
          <input
            type="text"
            placeholder="Search plant"
            className="search-plant"
          />
          <div
            className="search-image-container"
            onClick={() => alert("Clicked")}
          >
            <FiSearch
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                fontWeight: "600",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
