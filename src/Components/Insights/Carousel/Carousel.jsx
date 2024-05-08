import React, { useState } from "react";
import carouselStyles from "./carousel.module.css";

export default function Carousel() {
  const [activeDot, setActiveDot] = useState(0);

  const handleDotClick = (index) => {
    setActiveDot(index);
  };

  return (
    <div className={carouselStyles.carousel}>
      <span
        className={`${carouselStyles.dot} ${
          activeDot === 0 && carouselStyles.active
        }`}
        onClick={() => handleDotClick(0)}
      ></span>
      <span
        className={`${carouselStyles.dot} ${
          activeDot === 1 && carouselStyles.active
        }`}
        onClick={() => handleDotClick(1)}
      ></span>
      <span
        className={`${carouselStyles.dot} ${
          activeDot === 2 && carouselStyles.active
        }`}
        onClick={() => handleDotClick(2)}
      ></span>
    </div>
  );
}
