import CompanyInsight from "./Company/CompanyInsight";
import ExploreMoreBtn from "./ExploreBtn/ExploreMoreBtn";
import insightStyles from "./insights.module.css";

export default function Insights() {
  return (
    <div className={insightStyles.container}>
      <CompanyInsight />
      <ExploreMoreBtn />
    </div>
  );
}
