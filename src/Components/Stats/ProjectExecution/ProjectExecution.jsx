import spark from "../../../assets/icons/spark.svg";
import projectStyles from "./project.module.css";

export default function ProjectExecution() {
  return (
    <div className={projectStyles.projectContainer}>
      <img src={spark} alt="spark" className={projectStyles.sparkimage}></img>
      <h1 className={projectStyles.head}>40%</h1>
      <p className={projectStyles.text}>
        <span>Achieved reduction in</span>
        <br />
        <span> project execution time</span>
        <br />
        <span>by optimising team</span>
        <br />
        <span>availability</span>
        <br />
      </p>
    </div>
  );
}
