import React from "react";
import { useParams } from "react-router-dom";
import newArrivals from "../Products/FeaturedProducts/NewArrivals";
import topRated from "../Products/FeaturedProducts/topRated";
import bestSeller from "../Products/FeaturedProducts/bestSeller";

const ProductDetail = () => {
  const { id } = useParams();

  // Combine all product arrays
  const allProducts = [...newArrivals, ...topRated, ...bestSeller];

  // Find the product by ID
  const product = allProducts.find((item) => item.id === id);

  if (!product)
    return <h2 className="text-center text-2xl mt-20">Product Not Found</h2>;

  return (
    <div className="w-full h-[calc(100vh-100px)] flex justify-center items-start gap-20 py-20">
      <div className="space-y-5">
        <div className="flex justify-center items-center w-[400px] bg-red-200 h-[400px] overflow-hidden">
          <img className="bg-cover w-[400px]" src={product.image} alt="" />
        </div>
        <div className="flex gap-[12px]">
          <div className="w-[91px] h-[91px] hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
            <img src={product.image} alt="" />
          </div>
          <div className="w-[91px] h-[91px] hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
            <img src={product.image} alt="" />
          </div>
          <div className="w-[91px] h-[91px] hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
            <img src={product.image} alt="" />
          </div>
          <div className="w-[91px] h-[91px] hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
            <img src={product.image} alt="" />
          </div>
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
          <p className="text-lg font-semibold mt-6 flex justify-start items-center gap-2  ">
            Color <i className="text-[4px] ri-circle-fill text-[gray]"></i>{" "}
            <span className="text-[#6c6a6a]">White</span>
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold mt-6 mb-3">Size</p>
          <div className="flex gap-3">
            <div className="w-[50px] h-[40px] flex justify-center items-center border border-[#948e8e] rounded-sm font-bold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
              25
            </div>
            <div className="w-[50px] h-[40px] flex justify-center items-center border border-[#948e8e] rounded-sm font-bold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
              26
            </div>
            <div className="w-[50px] h-[40px] flex justify-center items-center border border-[#948e8e] rounded-sm font-bold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
              27
            </div>
            <div className="w-[50px] h-[40px] flex justify-center items-center border border-[#948e8e] rounded-sm font-bold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
              28
            </div>
          </div>
          <div className="w-full flex gap-4 mt-10">
            <div className="w-[320px] rounded-md py-3 bg-black text-white flex gap-4 justify-center items-center font-medium hover:opacity-85 transition-all duration-300 cursor-pointer">
              <button className="gap-2 flex justify-center items-center">
                <i className="ri-shopping-bag-4-line text-xl"></i>{" "}
                <p>Add to Cart</p>
              </button>
            </div>
            <div className="py-3 px-5 text-xl font-bold rounded-md bg-[#F8F6EE]">
              <i className="ri-heart-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
