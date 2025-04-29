import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/HomePage Components/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Collections from "./pages/Collection";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/collections/:category" element={<Collections />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default App;
