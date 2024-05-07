import React from "react";
import girlImage from "../../../assets/girl_image.png";
import girlStyles from "./girl.module.css";

export default function GirlComponent() {
  return (
    <div className={girlStyles.girlContainer}>
      <img src={girlImage} alt="Girl" className={girlStyles.image}></img>
    </div>
  );
}
