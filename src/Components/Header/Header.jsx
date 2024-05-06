import React from "react";
import headLogo from "../../assets/head_logo.png";
import headerStyles from "./header.module.css";

export default function Header() {
  return (
    <div className={headerStyles.headerContainer}>
      <img src={headLogo} alt="Logo" className={headerStyles.logo}></img>
      <div className={headerStyles.headerButtons}>
        <button className={headerStyles.projectsbtn}>Get Projects</button>
        <button className={headerStyles.talentbtn}>Onboard Talent</button>
      </div>
    </div>
  );
}
