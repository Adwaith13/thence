import GirlComponent from "./GirlComponent/GirlComponent";
import ProjectExecution from "./ProjectExecution/ProjectExecution";
import DeploymentDuration from "./DeploymentDuration/DeploymentDuration";
import Expenses from "./Expenses/Expenses";
import statStyles from "./stats.module.css";

export default function Stats() {
  return (
    <div className={statStyles.statsContainer}>
      <ProjectExecution />
      <DeploymentDuration />
      <Expenses />
      <GirlComponent />
    </div>
  );
}
