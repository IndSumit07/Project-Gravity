import React from "react";
import heroImg from "../../assets/Hero-Img.png";
const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-100px)] bg-[#1E1E1E] text-white px-20 flex justify-center items-center">
      <div className="w-1/2 h-full flex justify-center items-center flex-col py-20">
        <h3 className="font-[Borel]  text-5xl font-medium text-[#0066CB]">
          Season Sale
        </h3>

        <h1 className="text-8xl text-center mb-8 font-black tracking font-[oswald]">
          Let's Welcome Summer
        </h1>

        <h3 className="text-3xl text-[#8d8989] font-semibold mb-12">
          Min 35-75 % Off
        </h3>
        <div className="flex gap-10">
          <button className="text-xl bg-[#0066CB] px-5 py-3 rounded-sm font-semibold hover:bg-[#0051a8] transition-all duration-300 hover:scale-90">
            Shop Now
          </button>
          <button className="border border-white px-5 py-3 text-xl font-semibold transition-all duration-300 hover:border-[#0066CB] hover:bg-[#0066CB] rounded-sm hover:scale-90">
            Read More
          </button>
        </div>
      </div>
      <div className="w-1/2 h-full flex justify-center items-start overflow-hidden">
        <img
          src={heroImg}
          className="h-[700px] object-start bg-cover "
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
