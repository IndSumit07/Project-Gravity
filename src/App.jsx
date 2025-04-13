import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/HomePage Components/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default App;
