import React from "react";
import img from "./img.svg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-description">
        <h1>contentful CMS</h1>
        <div className="text">
          <p>
            {" "}
            Pitchfork schlitz tonx, coloring book celiac tousled succulents
            ascot affogato cardigan jianbing crucifix seitan. Synth man braid
            everyday carry try-hard pour-over keffiyeh slow-carb sriracha
            chillwave banjo gochujang kinfolk small batch mustache.
          </p>
        </div>
      </div>
      <div className="image">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
