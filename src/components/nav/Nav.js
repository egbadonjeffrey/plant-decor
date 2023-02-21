import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import PlantLogo from "../../images/plant-logo.png";

const Nav = () => {
  const [mobile, setMobile] = useState(false);
  const [menu, setMenu] = useState(false);
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

  // console.log(dimension.width);
  // console.log(mobile);

  const handleMenu = () => {
    setMenu(true);
    const { body } = document;
    body.style.overflow = "hidden";
  };

  const menuClose = () => {
    setMenu(false);
    const { body } = document;
    body.style.overflow = "";
  };

  return (
    <>
      <div>
        {mobile ? (
          <div className="nav-container">
            {mobile && (
              <div
                className="mobile-menu"
                style={{
                  left: menu ? "0" : "-500px",
                }}
              >
                <ul className="menu-items">
                  <li
                    onClick={menuClose}
                    style={{ position: "absolute", top: "10px", right: "10px" }}
                  >
                    [X]
                  </li>
                  <li>Shop</li>
                  <li>About Us</li>
                  <li>Contact</li>
                  <li
                    style={{ position: "absolute", top: "15px", left: "10px" }}
                  >
                    <BsFillBagFill />
                  </li>
                </ul>
              </div>
            )}
            <div>
              <ul className="mobile-navMenu" style={{ position: "relative" }}>
                <li>
                  <Link
                    to="/"
                    style={{
                      color: "#fff",
                      fontSize: "2rem",
                      fontWeight: "600",
                      fontFamily: "monospace",
                    }}
                  >
                    P
                  </Link>
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    gap: "2rem",
                  }}
                >
                  <AiOutlineMenu
                    style={{ width: "1.7rem", height: "1.7rem" }}
                    onClick={handleMenu}
                  />
                  <BsFillBagFill
                    style={{ width: "1.5rem", height: "1.5rem" }}
                  />
                </li>
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

            <span className="cart" style={{ position: "relative" }}>
              <BsFillBagFill style={{ width: "1.5rem", height: "1.5rem" }} />
              <span
                style={{
                  position: "absolute",
                  top: "-.3rem",
                  left: "1rem",
                  width: "1.3rem",
                  height: "1.3rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "14px",
                  fontWeight: "bold",
                  borderRadius: "50%",
                  background: "red",
                  color: "white",
                }}
              >
                5
              </span>
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
