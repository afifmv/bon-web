import React from "react";
import Header from "./Header/Header";
import Index from "./Index/Index";
import PhotoGrid from "./DTP/PhotoGrid";
import "./foo.css";

function Home() {
  return (
    <div className="home-bg">
      <Header />
      <Index />
    </div>
  );
}

export default Home;
