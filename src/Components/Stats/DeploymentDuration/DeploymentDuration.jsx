import deployedIMG from "../../../assets/icons/deployed.svg";
import deploymentStyles from "./deployment.module.css";

export default function DeploymentDuration() {
  return (
    <div className={deploymentStyles.deployedContainer}>
      <img
        src={deployedIMG}
        alt="deployed-img"
        className={deploymentStyles.image}
      ></img>
      <div className={deploymentStyles.deployedText}>
        <h2 className={deploymentStyles.days}>10 DAYS</h2>
        <br></br>
        <p className={deploymentStyles.staff}>Staff Deployment</p>
      </div>
    </div>
  );
}
