import logo from "../../assets/icons/head_logo.svg";
import close from "../../assets/icons/close.svg";
import closeBtnStyles from "./closebtn.module.css";
import { Link } from "react-router-dom";

export default function CloseBtn() {
  return (
    <div className={closeBtnStyles.closeContainer}>
      <img src={logo} alt="logo" className={closeBtnStyles.logo}></img>
      <button className={closeBtnStyles.closeBtn}>
        <Link to="/">
          <img src={close} alt="close-icon"></img>
        </Link>
      </button>
    </div>
  );
}
