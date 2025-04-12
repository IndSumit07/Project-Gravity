import React from "react";
import Hero from "../components/HomePage Components/Hero";
import DealsSection from "../components/HomePage Components/DealsSection";
import Featured from "../components/HomePage Components/Featured";
import GenderCollection from "../components/HomePage Components/GenderCollection";

const Home = () => {
  return (
    <div>
      <Hero />
      <DealsSection />
      <Featured />
      <GenderCollection />
    </div>
  );
};

export default Home;
