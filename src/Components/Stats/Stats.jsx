import GirlComponent from "./GirlComponent/GirlComponent";
import ProjectExecution from "./ProjectExecution/ProjectExecution";
import DeploymentDuration from "./DeploymentDuration/DeploymentDuration";

export default function Stats() {
  return (
    <>
      <GirlComponent />
      <ProjectExecution />
      <DeploymentDuration />
    </>
  );
}
