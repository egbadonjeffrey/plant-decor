import React from "react";
import "./InteriorPlant.css";
import LivingRoom from "../../images/banner_flower3.png";
import workStation from "../../images/banner_flower2.png";
import cabinet from "../../images/banner_flower1.png";

const InteriorPlant = () => {
  return (
    <div className="interior-plant">
      <h2>Interior Plant Reference</h2>
      <p>make your home so comfortable with refreshing plants</p>
      <div className="interior-container">
        <div className="interior-left">
          <div className="living-room">
            <div className="overlay">
              <h2>living room</h2>
            </div>
          </div>
          <div className="work-station">
            <div className="overlay">
              <h2>work station</h2>
            </div>
          </div>
        </div>
        <div className="interior-right">
          <div className="overlay">
            <h2>cabinet</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorPlant;
