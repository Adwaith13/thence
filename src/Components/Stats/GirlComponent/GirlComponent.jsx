import girlImage from "../../../assets/images/girl_image.png";
import girlStyles from "./girl.module.css";

export default function GirlComponent() {
  return (
    <div className={girlStyles.girlContainer}>
      <img src={girlImage} alt="Girl" className={girlStyles.image}></img>
    </div>
  );
}
