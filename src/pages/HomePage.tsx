import React, { useState } from "react";
import "./HomePage.scss";

import cancerPrevention from "../assets/Cancer-Prevention.png";

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="content-container">
        <img src={cancerPrevention} className="hero-container" alt="hero"></img>
        <h1>
          A personalized cancer prevention website should provide valuable
          information and resources tailored to individual users to help them
          understand their risk factors, make informed decisions, and take
          proactive steps to reduce their risk of cancer.
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
