import React from "react";
import { Link } from "react-router-dom";

const FeaturedProductCard = ({ props }) => {
  return (
    <Link to={`/product/${props.id}`}>
      <div className="w-[250px] h-[320px] bg-gray-500 overflow-hidden">
        <img src={props.image} alt="" className="bg-cover" />
      </div>
      <p className="text-sm font-medium mt-2 text-gray-00">Top and Suits</p>
      <h5 className="text-lg">White and red suit </h5>
      <div className="">
        <i className="text-yellow-500 fa-solid fa-star"></i>
        <i className="text-yellow-500 fa-solid fa-star"></i>
        <i className="text-yellow-500 fa-solid fa-star"></i>
        <i className="text-yellow-500 fa-solid fa-star"></i>
        <i className="text-yellow-500 fa-solid fa-star"></i>
        <p className="inline-block ml-2">(10)</p>
      </div>
      <div className="mt-1 font-bold text-lg">$149.00 - 250.00</div>
    </Link>
  );
};

export default FeaturedProductCard;
