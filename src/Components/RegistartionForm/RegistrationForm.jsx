import { useState } from "react";
import { validate } from "email-validator";
import error from "../../assets/icons/error.svg";
import { useNavigate } from "react-router-dom";
import registrationFormStyles from "./registration.module.css";

export default function RegistrationForm() {
  //initializing states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  //intializeing useNavigate hook
  const navigate = useNavigate();

  //handles email error on submitting form
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = validate(email);
    if (!isValidEmail) {
      setEmailError("Enter a valid email address.");
    } else {
      setEmailError("");
      navigate("/success");
    }
  };

  return (
    <div className={registrationFormStyles.formContainer}>
      <h2 className={registrationFormStyles.formHead}>Registration Form</h2>
      <h1 className={registrationFormStyles.head}>
        <span>Start your success</span>
        <br />
        <span> Journey here!</span>
      </h1>
      <form
        className={registrationFormStyles.inputFields}
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Enter your name"
          className={registrationFormStyles.nameField}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <input
          placeholder="Enter your email"
          className={registrationFormStyles.emailField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        {emailError && (
          <span className={registrationFormStyles.emailError}>
            <img
              src={error}
              alt="error-icon"
              className={registrationFormStyles.errorIcon}
            />
            {emailError}
          </span>
        )}
        <br />
        <button
          type="submit"
          className={registrationFormStyles.submitbtn}
          disabled={name === "" || email === ""}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
