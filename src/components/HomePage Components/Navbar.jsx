import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[100px] bg-[#1e1e1e] text-white flex justify-between items-center px-20">
      <div className="text-2xl font-black">Gravity.Shop</div>
      <div className="flex justify-center items-center gap-10 text-[#ababab]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg font-medium hover:text-white hover:mb-4 transition-all duration-300 ${
              isActive ? "text-white border-b-2 mb-4" : ""
            }`
          }>
          Home
        </NavLink>
        <NavLink
          to="/all"
          className={({ isActive }) =>
            `text-lg font-medium hover:text-white hover:mb-4 transition-all duration-300 ${
              isActive ? "text-white border-b-2 mb-4" : ""
            }`
          }>
          All Products
        </NavLink>
        <NavLink
          to="/men"
          className={({ isActive }) =>
            `text-lg font-medium hover:text-white hover:mb-4 transition-all duration-300 ${
              isActive ? "text-white border-b-2 mb-4" : ""
            }`
          }>
          Men
        </NavLink>
        <NavLink
          to="/women"
          className={({ isActive }) =>
            `text-lg font-medium hover:text-white hover:mb-4 transition-all duration-300 ${
              isActive ? "text-white border-b-2 mb-4" : ""
            }`
          }>
          Women
        </NavLink>
        <NavLink
          to="/kids"
          className={({ isActive }) =>
            `text-lg font-medium hover:text-white hover:mb-4 transition-all duration-300 ${
              isActive ? "text-white border-b-2 mb-4" : ""
            }`
          }>
          Kids
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-lg font-medium hover:text-white hover:mb-4 transition-all duration-300 ${
              isActive ? "text-white border-b-2 mb-4" : ""
            }`
          }>
          Contact
        </NavLink>
      </div>
      <div className="flex gap-4">
        <i className="text-2xl font-medium ri-search-line"></i>
        <i className="text-2xl font-medium ri-shopping-cart-line"></i>
      </div>
    </div>
  );
};

export default Navbar;
