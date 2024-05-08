import CompanyInsight from "./Company/CompanyInsight";
import ExploreMoreBtn from "./ExploreBtn/ExploreMoreBtn";
import Carousel from "./Carousel/Carousel";
import insightStyles from "./insights.module.css";

export default function Insights() {
  return (
    <div className={insightStyles.container}>
      <CompanyInsight />
      <Carousel />
      <ExploreMoreBtn />
    </div>
  );
}
