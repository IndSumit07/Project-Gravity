import React, { useState } from "react";
import FeaturedProductCard from "../../Cards/FeaturedProductCard";
import newArrivals from "../../Products/FeaturedProducts/NewArrivals";
import topRated from "../../Products/FeaturedProducts/topRated";
import bestSeller from "../../Products/FeaturedProducts/bestSeller";
import featuredMenPromotion from "../../assets/Featured-Men-Pic.png";
import { Link } from "react-router-dom";
import featuredWomenPromotion from "../../assets/Featured-Women-Pic.png";
const GenderCollection = () => {
  const [genderCollectionSection, setGenderCollectionSection] = useState("men");
  const handleGenderCollectionSection = (prop) => {
    setGenderCollectionSection(prop);
  };
  return (
    <div className="w-full min-h-[100vh] h-auto py-10 px-10">
      {/* Heading */}
      <div className="flex justify-center items-center pt-5">
        <h1 className="text-4xl text-[#1E1E1E] font-bold">Gender Collection</h1>
      </div>

      {/* Gender Collection Navigation */}
      <div className="flex justify-center items-center gap-5 py-10">
        <p
          onClick={() => {
            handleGenderCollectionSection("men");
          }}
          className={`cursor-pointer text-lg font-medium transition-all duration-300 ${
            GenderCollection === "newArrivals"
              ? "text-black -translate-y-2"
              : "text-gray-600 "
          }`}>
          Men
          {genderCollectionSection === "men" ? (
            <hr className="border-black border-[1.5px]" />
          ) : (
            ""
          )}
        </p>
        <p
          onClick={() => {
            handleGenderCollectionSection("women");
          }}
          className={`cursor-pointer text-lg font-medium transition-all duration-300 ${
            genderCollectionSection === "women"
              ? "text-black -translate-y-2"
              : "text-gray-600"
          }`}>
          Women
          {genderCollectionSection === "women" ? (
            <hr className="border-black border-[1.5px]" />
          ) : (
            ""
          )}
        </p>
        <p
          onClick={() => {
            handleGenderCollectionSection("kids");
          }}
          className={`cursor-pointer text-lg font-medium transition-all duration-300 ${
            genderCollectionSection === "kids"
              ? "text-black -translate-y-2 "
              : "text-gray-600"
          }`}>
          Kids
          {genderCollectionSection === "kids" ? (
            <hr className="border-black border-[1.5px]" />
          ) : (
            ""
          )}
        </p>
      </div>

      {/* Featured Products */}
      <div className="flex flex-wrap gap-8  justify-center items-center mb-24">
        {genderCollectionSection === "men"
          ? newArrivals.map((product) => (
              <FeaturedProductCard props={product} />
            ))
          : genderCollectionSection === "women"
          ? topRated.map((product) => <FeaturedProductCard props={product} />)
          : bestSeller.map((product) => (
              <FeaturedProductCard props={product} />
            ))}
      </div>

      {/* Offers Section */}
      <div className="w-full h-auto flex gap-8 px-7 ">
        <div className="w-1/2 h-[300px] bg-[#000000] relative overflow-hidden">
          <img
            className="w-52 absolute right-12 "
            src={featuredMenPromotion}
            alt=""
          />
          <h3 className="text-[white] absolute top-10 left-10 text-2xl font-medium">
            Weekend Sale
          </h3>
          <h1 className="text-[#4662df] absolute top-20 left-10 text-5xl font-black">
            Men's Fashion
          </h1>
          <h3 className="absolute top-36 text-2xl left-10 text-white">
            Flat <span className="text-[#4662df] font-semibold">70% off</span>
          </h3>
          <Link
            className="text-white px-4 py-3  absolute top-52 border-white border left-10 hover:bg-[#4662df] hover:border-[#4662df] transition-all duration-300 hover:text-black text-lg font-bold rounded-full"
            to="/men">
            Shop Now
          </Link>
        </div>
        <div className="w-1/2 h-[300px] bg-[#D5C5C0] relative overflow-hidden">
          <img
            className="w-full absolute -right-28   "
            src={featuredWomenPromotion}
            alt=""
          />
          <h3 className="text-[black] absolute top-10 left-10 text-2xl font-medium">
            Weekend Sale
          </h3>
          <h1 className="text-[#59281C] absolute top-20 left-10 text-5xl font-black">
            Women's Wear
          </h1>
          <h3 className="absolute top-36 text-2xl left-10 text-black">
            Flat <span className="text-[#59281C] font-semibold">70% off</span>
          </h3>
          <Link
            className="text-[#59281C] px-4 py-3  absolute top-52 border-[#59281C] border left-10 hover:bg-[#59281C] hover:border-[#59281C] transition-all duration-300 hover:text-black text-lg font-bold rounded-full"
            to="/men">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GenderCollection;
