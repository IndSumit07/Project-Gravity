import React, { useState } from "react";
import FeaturedProductCard from "../../Cards/FeaturedProductCard";
import newArrivals from "../../Products/FeaturedProducts/NewArrivals";
import topRated from "../../Products/FeaturedProducts/topRated";
import bestSeller from "../../Products/FeaturedProducts/bestSeller";
const Featured = () => {
  const [featuredSection, setFeaturedSection] = useState("newArrivals");
  const handleFeaturedSection = (prop) => {
    setFeaturedSection(prop);
  };
  return (
    <div className="w-full min-h-[100vh] h-auto py-16 px-10">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl text-[#1E1E1E] font-bold">Featured Products</h1>
      </div>
      <div className="flex justify-center items-center gap-5 py-10">
        <p
          onClick={() => {
            handleFeaturedSection("newArrivals");
          }}
          className={`cursor-pointer text-lg font-medium text-gray-700 transition-all duration-300 ${
            featuredSection === "newArrivals" ? "text-black -translate-y-2" : ""
          }`}>
          New Arrival
          {featuredSection === "newArrivals" ? (
            <hr className="border-black border-[1.5px]" />
          ) : (
            ""
          )}
        </p>
        <p
          onClick={() => {
            handleFeaturedSection("topRated");
          }}
          className={`cursor-pointer text-lg font-medium text-gray-700 transition-all duration-300 ${
            featuredSection === "topRated" ? "text-black -translate-y-2" : ""
          }`}>
          Top Rated
          {featuredSection === "topRated" ? (
            <hr className="border-black border-[1.5px]" />
          ) : (
            ""
          )}
        </p>
        <p
          onClick={() => {
            handleFeaturedSection("bestSeller");
          }}
          className={`cursor-pointer text-lg font-medium text-gray-700 transition-all duration-300 ${
            featuredSection === "bestSeller" ? "text-black -translate-y-2 " : ""
          }`}>
          Best Sellers
          {featuredSection === "bestSeller" ? (
            <hr className="border-black border-[1.5px]" />
          ) : (
            ""
          )}
        </p>
      </div>
      <div className="flex flex-wrap gap-8  justify-center items-center">
        {featuredSection === "newArrivals"
          ? newArrivals.map((product) => (
              <FeaturedProductCard props={product} />
            ))
          : featuredSection === "topRated"
          ? topRated.map((product) => <FeaturedProductCard props={product} />)
          : bestSeller.map((product) => (
              <FeaturedProductCard props={product} />
            ))}
      </div>
    </div>
  );
};

export default Featured;
