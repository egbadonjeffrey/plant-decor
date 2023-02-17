import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      console.log(window.innerWidth);
      if (window.innerWidth < 500) {
        setMobile(true);
      } else if (window.innerWidth > 500) {
        setMobile(false);
      }
    }
  }, []);

  console.log(window.innerWidth);

  return (
    <div className="nav-container">
      {mobile ? (
        <div>
          <ul className="mobile-navMenu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Menu</li>
          </ul>
        </div>
      ) : (
        <>
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

          <div className="cart">Cart</div>
        </>
      )}
    </div>
  );
};

export default Nav;
