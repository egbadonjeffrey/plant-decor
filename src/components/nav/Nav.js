import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [mobile, setMobile] = useState(false);
  const [dimension, setDimension] = useState({ width: window.innerWidth });

  useEffect(() => {
    if (window !== undefined) {
      console.log(window.innerWidth);
      const handleResize = () => {
        setDimension({
          width: window.innerWidth,
        });
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (dimension.width < 500) {
      setMobile(true);
    } else if (dimension.width > 500) {
      setMobile(false);
    }
  }, [dimension]);

  console.log(dimension.width);
  console.log(mobile);

  return (
    <>
      {mobile ? (
        <div className="nav-container">
          <div>
            <ul className="mobile-navMenu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Menu</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="nav-container">
          <ul className="nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>

          <span className="cart">Cart</span>
        </div>
      )}
    </>
  );
};

export default Nav;
