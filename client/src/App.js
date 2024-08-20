import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import WhyRush from "./components/WhyRush/WhyRush";
import Executives from "./components/Executives/Executives";
import DTP from "./components/DTP/DTP";
import Sports from "./components/Sports/Sports";
import Rush from "./components/Rush/Rush";
import Testimonials from "./components/Testimonials/Testimonials";
import Athletes from "./components/Athletes/Athletes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/whyrush" element={<WhyRush />} />
      <Route path="/executives" element={<Executives />} />
      <Route path="/dtp" element={<DTP />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/rush" element={<Rush />} />
      <Route path="/athletes" element={<Athletes />} />
    </Routes>
  );
}

export default App;
