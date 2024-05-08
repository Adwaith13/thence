import arrow from "../../assets/icons/arrow.svg";
import add from "../../assets/icons/add.svg";
import subtract from "../../assets/icons/subtract.svg";
import questionStyles from "./questions.module.css";

export default function Questions() {
  return (
    <div className={questionStyles.questionContainer}>
      <div className={questionStyles.leftContainer}>
        <p className={questionStyles.leftText1}>What’s on your mind</p>
        <h1 className={questionStyles.leftText2}>Ask Questions</h1>
        <img src={arrow} alt="arrow-img" className={questionStyles.arrow}></img>
      </div>
      <div className={questionStyles.rightContainer}>
        <p className={questionStyles.question1}>
          Do you offer freelancers?
          <img
            src={add}
            alt="add-icon"
            className={questionStyles.addIcon1}
          ></img>
        </p>
        <hr />
        <p className={questionStyles.question2}>
          <span>
            What’s the guarantee that I will be satisfied
            <img
              src={add}
              alt="add-icon"
              className={questionStyles.addIcon2}
            ></img>
          </span>
          <br />
          <span>with the hired talent?</span>
        </p>
        <hr />
        <p className={questionStyles.question3}>
          Can I hire multiple talents at once?
          <img
            src={subtract}
            alt="subtract-icon"
            className={questionStyles.subtractIcon}
          ></img>
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
          <img
            src={add}
            alt="add-icon"
            className={questionStyles.addIcon3}
          ></img>
        </p>
        <hr />
        <p className={questionStyles.question5}>
          <span>
            Who can help me pick a right skillset
            <img
              src={add}
              alt="add-icon"
              className={questionStyles.addIcon4}
            ></img>
          </span>
          <br />
          <span>and duration for me?</span>
        </p>
      </div>
    </div>
  );
}
