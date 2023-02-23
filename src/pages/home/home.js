import React, { useContext } from "react";
import "./home.css";
import HeroBanner from "../../components/hero_banner/HeroBanner";
import Perks from "../../components/perks/Perks";
import BestSeller from "../../components/best_seller/BestSeller";
import InteriorPlant from "../../components/interior_plant/InteriorPlant";
import PlantCare from "../../components/plant_Care/PlantCare";
import Footer from "../../components/footer/Footer";
import { CartContext } from "../../context/Cart";
import Cart from "../../components/cart/Cart";

const Home = () => {
  const { openCart } = useContext(CartContext);
  return (
    <div className="home-container">
      <Cart />

      <HeroBanner />
      <Perks />
      <BestSeller />
      <InteriorPlant />
      <PlantCare />
      <Footer />
    </div>
  );
};

export default Home;
