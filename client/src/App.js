import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WhyRush from "./components/WhyRush/WhyRush";
import Executives from "./components/Executives/Executives";
import DTP from "./components/DTP/DTP";
import Sports from "./components/Sports/Sports";
import Rush from "./components/Rush/Rush";
import Testimonials from "./components/Testimonials/Testimonials";
import Athletes from "./components/Athletes/Athletes";
import "./App.css";

function App() {
  return (
    <div className="page">
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
      <footer class="footer">
        <p>&copy; 2024 Beta Theta Pi, UBC. All rights reserved.</p>
        <p class="signature">
          Designed and developed by{" "}
          <a
            href="https://github.com/afifmv"
            target="_blank"
            rel="noopener noreferrer"
          >
            Afif
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
