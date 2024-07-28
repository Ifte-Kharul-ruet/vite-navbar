// components/ExampleCarouselImage.js

import React from "react";

const ExampleCarouselImage = ({ text }) => {
  return (
    <div
      style={{
        height: "400px",
        background: "#777",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {text}
    </div>
  );
};

export default ExampleCarouselImage;
