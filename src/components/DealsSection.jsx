import React from "react";
import homeGirlPic from "../assets/home-girl-pic.png";

const DealsSection = () => {
  return (
    <div className="w-full h-auto min-h-[100vh] bg-white">
      <div className="w-full h-[140px] flex justify-between items-center px-20 py-20">
        <div className="flex gap-5 justify-center items-center">
          <i className="ri-truck-line text-[#0066CB] text-5xl"></i>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Free Shipping</h3>
            <p className="font-medium">On all orders over 1999</p>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <i className="ri-shake-hands-line text-[#0066CB] text-5xl"></i>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Secure Payments</h3>
            <p className="font-medium">We ensure secure payments</p>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <i className="ri-money-dollar-box-line text-[#0066CB] text-5xl"></i>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">100% money back</h3>
            <p className="font-medium">30 days return policy</p>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <i className="ri-question-answer-line text-[#0066CB] text-5xl"></i>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Online support</h3>
            <p className="font-medium">24/7 online support</p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[calc(100vh-140px)] bg-[#ECF0F2] py-20 px-20 overflow-hidden">
        <div className="absolute top-0 -left-16 overflow-hidden">
          <img className="h-[600px] bg-cover" src={homeGirlPic} alt="" />
        </div>
        <div className="absolute top-28 right-24 flex flex-col justify-center items-center w-auto ">
          <h3 className="text-5xl font-bold text-[#0166CB] mb-5">
            New Arrivals
          </h3>
          <h1 className="text-8xl font-black text-[#480C28] mb-10">
            Women's Style
          </h1>
          <h3 className="text-5xl font-medium text-[#545454] mb-10">
            Up to 75% Off
          </h3>
          <button className="text-xl px-6 py-4 rounded-full border border-black hover:bg-black hover:text-white transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealsSection;
