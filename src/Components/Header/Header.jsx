import headLogo from "../../assets/icons/head_logo.svg";
import headerStyles from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className={headerStyles.headerContainer}>
        <img src={headLogo} alt="Logo" className={headerStyles.logo}></img>
        <div className={headerStyles.headerButtons}>
          <Link to="/form" className={headerStyles.link}>
            <button className={headerStyles.projectsbtn}>Get Projects </button>
          </Link>
          <button className={headerStyles.talentbtn}>Onboard Talent</button>
        </div>
      </div>
    </>
  );
}
