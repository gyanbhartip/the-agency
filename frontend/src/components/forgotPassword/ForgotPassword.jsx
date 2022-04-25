import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { uname, securityQuestion, securityAnswer } = document.forms[0];
    console.log(uname.value, securityQuestion.value, securityAnswer.value);
  };
  return (
    <section className="form-container">
      <h1>Welcome to The Agency</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">User ID: </label>
          <input
            type="text"
            name="uname"
            id="username"
            placeholder="Enter your user ID"
          />
        </div>
        <div className="input-group">
          <label htmlFor="securityQuestion">Choose a security question</label>
          <select
            name="securityQuestion"
            id="securityQuestion"
            className="dropdown"
            defaultValue={"Choose a security question"}
          >
            <option value="Choose a security question" disabled>
              Select your question
            </option>
            <option value="Fortiayti or babji">Fortinayti or babji </option>
            <option value="babji or ikisbokisserisiks">
              babji or ikisbokisserisiks
            </option>
            <option value="ikisbokisserisiks or balesteysin fayvvf">
              ikisbokisserisiks or balesteysin fayvvf
            </option>
            <option value="balesteysin fayvvf or lucitik">
              balesteysin fayvvf or lucitik
            </option>
          </select>
          <div className="input-group">
            <label htmlFor="securityAnswer">Answer </label>
            <input
              type="text"
              name="securityAnswer"
              id="securityAnswer"
              placeholder="Enter your answer"
            />
          </div>
        </div>
        <button type="submit" className="submitBtn">
          Get Password
        </button>
        <Link to="/login">Back to Login</Link>
      </form>
    </section>
  );
};

export default ForgotPassword;
