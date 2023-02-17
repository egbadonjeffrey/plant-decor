import React from "react";
import "./PlantCare.css";
import Plantcare from "../../images/flower_care.png";
import sun from "../../images/sun.png";
import water from "../../images/water-drop.png";
import plant from "../../images/charm_plant-pot.png";
import temperature from "../../images/tabler_temperature.png";

const PlantCare = () => {
  return (
    <div className="plant-care-container">
      <div className="plant-care-description">
        <div className="intro">
          <h2>How to care for plants</h2>
          <p>Take care of plants with all your heart</p>
        </div>
        <div className="care-list">
          <ul>
            <li>
              <img src={sun} alt="sun thumbnail" />
              <div className="title lighting">
                <h2>Adjust Lighting</h2>
                <p>
                  When caring for indoor plants, make sure the room temperature
                  is neither too cold nor too hot
                </p>
              </div>
            </li>
            <li>
              <img src={water} alt="water thumbnail" />
              <div className="title water">
                <h2>Don't water too often</h2>
                <p>
                  Watering ornamental plants indoors does not have to be done
                  every day.
                </p>
              </div>
            </li>
            <li>
              <img src={plant} alt="Charm plant vase" />
              <div className="title plant">
                <h2>Don't water too often</h2>
                <p>
                  Watering ornamental plants indoors does not have to be done
                  every day.
                </p>
              </div>
            </li>
            <li>
              <img src={temperature} alt="thermometer thumbnail" />
              <div className="title fertilizer">
                <h2>Fertilize regularly</h2>
                <p>
                  The nutrients most indoor houseplants need are nitrogen for
                  balance and potassium for stem strength
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="plant-care-image">
        <img src={Plantcare} alt="Plant Care Thumbnail" />
      </div>
    </div>
  );
};

export default PlantCare;
