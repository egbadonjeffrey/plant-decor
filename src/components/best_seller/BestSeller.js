import React, { useContext, useState } from "react";
import "./BestSeller.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import data from "../../data";
import { CartContext } from "../../context/Cart";

const BestSeller = () => {
  // const [cart, setCart] = useState([]);
  const { flowers } = data;
  const { handleAddToCart } = useContext(CartContext);

  // console.log(cart);

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
        {flowers.map((flower, index) => (
          <div className="product" key={index}>
            <div className="product-image-container">
              <img src={flower.image} alt="thumbnail one" />
            </div>
            <div className="product-image-description">
              <div className="product-title">
                <span>{flower.name}</span>
                <div>Stars</div>
              </div>

              <div className="price-add-action">
                <span>${flower.price}</span>
                <span onClick={() => handleAddToCart(flower)}>+</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
