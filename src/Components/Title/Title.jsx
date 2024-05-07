import React from "react";
import titleStyles from "./title.module.css";

export default function Title() {
  return (
    <div className={titleStyles.titleContainer}>
      <p className={titleStyles.title}>Success stories</p>
      <h2 className={titleStyles.body}>
        <span>Every success journey</span>
        <br></br>
        <span>we’ve encountered.</span>
      </h2>
    </div>
  );
}
