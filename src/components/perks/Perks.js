import React from "react";
import "./Perks.css";
import Shipping from "../../images/shipping.png";
import Wallet from "../../images/wallet.png";
import Support from "../../images/support.png";

const Perks = () => {
  return (
    <div className="perks">
      <div className="perk">
        <img src={Shipping} alt="free shipping thumbnail" />
        <div className="perk-description">
          <h2>Free Shipping</h2>
          <p>No charge for each delivery</p>
        </div>
      </div>
      <div className="perk">
        <img src={Wallet} alt="free shipping thumbnail" />
        <div className="perk-description">
          <h2>Quick Payment</h2>
          <p>100% secure payment</p>
        </div>
      </div>
      <div className="perk">
        <img src={Support} alt="free shipping thumbnail" />
        <div className="perk-description">
          <h2>24/7 Support</h2>
          <p>Quick support</p>
        </div>
      </div>
    </div>
  );
};

export default Perks;
