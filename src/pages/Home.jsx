import React from "react";
import Hero from "../components/HomePage Components/Hero";
import DealsSection from "../components/HomePage Components/DealsSection";
import Featured from "../components/HomePage Components/Featured";

const Home = () => {
  return (
    <div>
      <Hero />
      <DealsSection />
      <Featured />
    </div>
  );
};

export default Home;
