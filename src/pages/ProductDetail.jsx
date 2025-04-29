import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // useNavigate for navigation
import newArrivals from "../Products/FeaturedProducts/NewArrivals";
import topRated from "../Products/FeaturedProducts/topRated";
import bestSeller from "../Products/FeaturedProducts/bestSeller";
import MenCollection from "../Products/Collections/MenCollection";
import WomenCollection from "../Products/Collections/WomenCollection";
import KidsCollection from "../Products/Collections/KidsCollection";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // useNavigate for navigation

  const allProducts = [
    ...newArrivals,
    ...topRated,
    ...bestSeller,
    ...MenCollection,
    ...WomenCollection,
    ...KidsCollection,
  ];

  const product = allProducts.find((item) => item.id === id);
  const [cart, setCart] = useState([]);
  const [isAdded, setIsAdded] = useState(false); // State to track if product is added

  if (!product)
    return <h2 className="text-center text-2xl mt-20">Product Not Found</h2>;

  const handleAddToCart = () => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      setIsAdded(true); // Set to true when product is added
      setTimeout(() => setIsAdded(false), 2000); // Reset the "Added" message after 2 seconds
      // After updating the cart, navigate to the cart page

      return updatedCart;
    });
    console.log("Product added to cart:", product);
  };

  return (
    <div className="w-full h-[calc(100vh-100px)] flex justify-center items-start gap-20 py-20">
      <div className="space-y-5">
        <div className="flex justify-center items-center w-[400px] bg-red-200 h-[400px] overflow-hidden">
          <img className="bg-cover w-[400px]" src={product.image} alt="" />
        </div>
      </div>

      <div className="h-full">
        <div>
          <p className="text-lg font-bold mb-5">Reebok</p>
        </div>

        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl mt-2 mb-1 text-[#575757] font-medium">
          {product.description}
        </p>
        <div className="flex gap-1 py-4 justify-start items-center">
          <i className="text-yellow-500 fa-solid fa-star"></i>
          <i className="text-yellow-500 fa-solid fa-star"></i>
          <i className="text-yellow-500 fa-solid fa-star"></i>
          <i className="text-yellow-500 fa-solid fa-star"></i>
          <i className="text-yellow-500 fa-solid fa-star"></i>
          <p className="inline-block ml-2">10 Reviews</p>
        </div>
        <p className="text-4xl font-bold mt-2">${product.price}</p>
        <div>
          <p className="text-lg font-semibold mt-6">Color: White</p>
        </div>
        <div>
          <p className="text-lg font-semibold mt-6 mb-3">Size</p>
        </div>
        <div className="w-full flex gap-4 mt-10">
          <div
            onClick={handleAddToCart}
            className="w-[320px] rounded-md py-3 bg-black text-white flex gap-4 justify-center items-center font-medium hover:opacity-85 transition-all duration-300 cursor-pointer">
            <button className="gap-2 flex justify-center items-center">
              <i className="ri-shopping-bag-4-line text-xl"></i>{" "}
              <p>Add to Cart</p>
            </button>
          </div>
          {/* Show "Added" message below the Add to Cart button */}
          {isAdded && (
            <p className="text-green-500 text-center mt-2">Added to Cart!</p>
          )}
          <div className="py-3 px-5 text-xl font-bold rounded-md bg-[#F8F6EE]">
            <i className="ri-heart-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
