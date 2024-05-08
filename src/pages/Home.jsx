import Header from "../Components/Header/Header";
import Title from "../Components/Title/Title";
import Stats from "../Components/Stats/Stats";
import Insights from "../Components/Insights/Insights";
import Questions from "../Components/Questions/Questions";
import Footer from "../Components/Footer/Footer";
import componentStyles from "../styles/component.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <Title />
      <div className={componentStyles.statsInsightsContainer}>
        <Stats />
        <Insights />
      </div>
      <Questions />
      <Footer />
    </>
  );
}
