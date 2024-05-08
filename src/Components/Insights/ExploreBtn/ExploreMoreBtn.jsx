import arrowBtn from "../../../assets/arrowbtn.svg";
import exploreBtnStyles from "./explorebtn.module.css";

export default function ExploreMoreBtn() {
  return (
    <button className={exploreBtnStyles.btn}>
      Explore more
      <img
        src={arrowBtn}
        alt="arrow-btn"
        className={exploreBtnStyles.arrowIcon}
      ></img>
    </button>
  );
}
