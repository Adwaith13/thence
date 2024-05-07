import React from "react";
import cost from "../../../assets/cost.svg";
import expenseStyles from "./expenses.module.css";

export default function Expenses() {
  return (
    <div className={expenseStyles.expenseContainer}>
      <img src={cost} alt="cost" className={expenseStyles.costImg}></img>
      <p className={expenseStyles.costText}>MILLION</p>
      <p className={expenseStyles.text}>
        <span>Reduced client expenses </span>
        <br />
        <span>by saving on hiring and </span>
        <br />
        <span>employee costs.</span>
      </p>
    </div>
  );
}
