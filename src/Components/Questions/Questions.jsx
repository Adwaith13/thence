import questionStyles from "./questions.module.css";
import arrow from "../../assets/arrow.svg";

export default function Questions() {
  return (
    <div className={questionStyles.questionContainer}>
      <div className={questionStyles.leftContainer}>
        <p className={questionStyles.leftText1}>What’s on your mind</p>
        <h1 className={questionStyles.leftText2}>Ask Questions</h1>
        <img src={arrow} alt="arrow-img" className={questionStyles.arrow}></img>
      </div>
      <div className={questionStyles.rightContainer}>
        <p className={questionStyles.question1}>Do you offer freelancers?</p>
        <hr />
        <p className={questionStyles.question2}>
          <span>What’s the guarantee that I will be satisfied </span>
          <br />
          <span>with the hired talent?</span>
        </p>
        <hr />
        <p className={questionStyles.question3}>
          Can I hire multiple talents at once?
        </p>
        <p className={questionStyles.answer}>
          <span>
            If unhappy with a project, communicate with the freelancer, allow
            for revisions, and
          </span>
          <br />
          <span>
            refer to the agreement. Escalate to platform support if needed,
            considering
          </span>
          <br />
          <span>
            mediation. Review policies, seek collaborative solutions for
            resolution.
          </span>
        </p>
        <hr />
        <p className={questionStyles.question4}>
          Why should I not go to an agency directly?
        </p>
        <hr />
        <p className={questionStyles.question5}>
          Who can help me pick a right skillset and duration for me?
        </p>
        <hr />
      </div>
    </div>
  );
}
