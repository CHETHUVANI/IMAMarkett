import React from "react";
import Hero from "../components/Hero";
import Grocery from "../components/Grocery";
import IndustrialStore from "../components/IndustrialStore";
import OurPolicy from "../components/OurPolicy";

const Home = () => {
  return (
    <div>
      <Hero />
      <Grocery />
      <IndustrialStore />
      <OurPolicy />
    </div>
  );
};

export default Home;
