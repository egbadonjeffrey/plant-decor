import React from "react";
import "./BestSeller.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Flower1 from "../../images/flower1.png";
import Flower2 from "../../images/flower2.png";
import Flower3 from "../../images/flower3.png";

const BestSeller = () => {
  return (
    <div className="best-seller-container">
      <div className="best-seller-content best-seller-text">
        <h3>Best Seller Product</h3>

        <div className="best-seller-action">
          <span> See all collection</span>
          <AiOutlineArrowRight
            className="arrow"
            style={{ fontSize: "2rem", color: "#4f4f4f" }}
          />
        </div>
      </div>
      <div className="best-seller-content best-seller-products">
        <div className="product">
          <div className="product-image-container">
            <img src={Flower1} alt="thumbnail one" />
          </div>
          <div className="product-image-description">
            <div className="product-title">
              <span>Cammile</span>
              <div>Stars</div>
            </div>

            <div className="price-add-action">
              <span>$65</span>
              <span>+</span>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="product-image-container">
            <img src={Flower2} alt="thumbnail one" />{" "}
          </div>{" "}
          <div className="product-image-description">
            <div className="product-title">
              <span>Cammile</span>
              <div>Stars</div>
            </div>

            <div className="price-add-action">
              <span>$65</span>
              <span>+</span>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="product-image-container">
            <img src={Flower3} alt="thumbnail one" />
          </div>
          <div className="product-image-description">
            <div className="product-title">
              <span>Cammile</span>
              <div>Stars</div>
            </div>

            <div className="price-add-action">
              <span>$65</span>
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
