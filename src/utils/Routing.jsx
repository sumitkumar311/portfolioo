import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home"; // 👈 Create or import your Home component
import About from "../components/About";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* 👈 Add this route */}
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Routing;
