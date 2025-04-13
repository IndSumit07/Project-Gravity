import React from "react";
import { useParams } from "react-router-dom";
import MenCollection from "../Products/Collections/MenCollection";
import WomenCollection from "../Products/Collections/WomenCollection";
import KidsCollection from "../Products/Collections/KidsCollection";
import FeaturedProductCard from "../Cards/FeaturedProductCard";
const Collections = () => {
  const { category } = useParams();
  const heading =
    category === "all"
      ? "All Collections"
      : category === "men"
      ? "Men Collections"
      : category === "women"
      ? "Women Collections"
      : "Kids Collections";
  const products =
    category === "all"
      ? [...MenCollection, ...WomenCollection, ...KidsCollection]
      : category === "men"
      ? MenCollection
      : category === "women"
      ? WomenCollection
      : KidsCollection;

  return (
    <div className="w-full min-h-[calc(100vh-100px)] h-auto py-10 px-10">
      <div>
        <h1 className="text-center text-4xl font-bold">{heading}</h1>
      </div>
      <div className="flex gap-8 flex-wrap py-10 justify-center items-center">
        {products.map((product) => (
          <FeaturedProductCard props={product} />
        ))}
      </div>
    </div>
  );
};

export default Collections;
