import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/HomePage Components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
