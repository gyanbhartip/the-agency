import React from "react";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, uname, pass, securityQuestion, securityAnswer } =
      document.forms[0];
    console.log(
      email.value,
      uname.value,
      pass.value,
      securityQuestion.value,
      securityAnswer.value
    );
  };
  return (
    <section className="form-container">
      <h1>Welcome to The Agency</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
          />
        </div>
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
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="pass"
            id="password"
            placeholder="Enter your password"
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
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default Register;
