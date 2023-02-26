import React, { useContext, useState } from "react";
import { CartContext } from "../../context/Cart";
import "./Cart.css";

import { BsFillBagFill } from "react-icons/bs";

const Cart = () => {
  const { cart, openCart, showCart, handleAddToCart, handleRemoveFromCart } =
    useContext(CartContext);
  console.log(cart);

  return (
    <div
      style={{
        position: "absolute",
      }}
    >
      <div
        className="cartContainer"
        style={{
          left: openCart ? "0" : "-2000px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 .6rem",
          }}
        >
          <h1>Cart</h1>
          <span
            style={{ fontSize: "2rem", cursor: "pointer" }}
            onClick={showCart}
          >
            [x]
          </span>
        </div>

        {cart.length < 1 ? (
          <div className="emptyCart cartItem">Cart is empty</div>
        ) : (
          <div className="cartItemContainer">
            {cart.map((item) => (
              <div className="cartItem" key={item.id}>
                <div className="itemDescription">
                  <img src={item.image} alt="Item thumbnail" />
                  <div className="itemNamePrice">
                    <span>{item.name}</span>
                  </div>
                </div>
                <div className="addAndRemoveItem">
                  <span className="add" onClick={() => handleAddToCart(item)}>
                    +
                  </span>
                  <span
                    className="remove"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    -
                  </span>
                </div>
                <div className="totalPrice">
                  <span>{item.quantity}</span>
                  <span>x</span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
