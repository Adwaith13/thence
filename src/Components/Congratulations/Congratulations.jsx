import logo from "../../assets/icons/head_logo.svg";
import tick from "../../assets/icons/tick.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import congratulationsStyles from "./congratulations.module.css";

export default function Congratulations() {
  const navigate = useNavigate();
  const [remainingTime, setRemainingTime] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => Math.max(0, prevTime - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <img
        src={logo}
        alt="logo-icon"
        className={congratulationsStyles.icon}
      ></img>
      <div className={congratulationsStyles.container}>
        <img
          src={tick}
          alt="success-icon"
          className={congratulationsStyles.successIcon}
        ></img>
        <h2 className={congratulationsStyles.success}>Success Submitted</h2>
        <h1 className={congratulationsStyles.congratulations}>
          Congratulations
        </h1>
        <p className={congratulationsStyles.text}>
          <span>Your request has been successfully submitted to us. We</span>
          <br />
          <span>will validate your information and reach out to your</span>
          <br />
          <span>shortly with updates</span>
        </p>
        <p className={congratulationsStyles.redirect}>
          Redirecting you to Homepage in{" "}
          <span className={congratulationsStyles.timer}>
            {remainingTime} Seconds
          </span>
        </p>
      </div>
    </>
  );
}
