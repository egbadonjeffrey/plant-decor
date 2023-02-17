import React from "react";
import Nav from "../nav/Nav";
import "./HeroBanner.css";
import { FiSearch } from "react-icons/fi";

const HeroBanner = () => {
  return (
    <div className="banner-container">
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
