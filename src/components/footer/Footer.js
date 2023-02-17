import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="newsletter-container">
        <div className="footer-content">
          <div className="newsletter">
            <h2>NewsLetter</h2>
            <div className="subscribe">
              <input
                type="text"
                placeholder="Enter your email"
                className="newsletter-email"
              />
              <div
                className="newsletter-button-container"
                onClick={() => alert("Clicked")}
              >
                Subscribe
              </div>
            </div>
          </div>
          <div className="footer-links">
            <div>
              <h3>Support</h3>
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3>Useful Links</h3>
              <ul>
                <li>Payment & Tax</li>
                <li>Terms of service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3>Our Menu</h3>
              <ul>
                <li>Best Product</li>
                <li>Category</li>
              </ul>
            </div>
            <div>
              <h3>Address</h3>
              <ul>
                <li>
                  JL. Setiabudhi No. 193 Sukasari, Bandung West Java, Indonesia
                </li>
                <li>egbadonjeffrey.dev@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <span>Designed by davixq</span>
        <span>Developed by ScarlettCoder</span>
        <span> &copy; 2023 </span>
      </div>
    </footer>
  );
};

export default Footer;
