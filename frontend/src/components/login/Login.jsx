import React from "react";
import "../../styles/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { uname, pass } = document.forms[0];
    console.log(uname.value, pass.value);
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
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="pass"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="submitBtn">
          Login
        </button>
        <Link to="/register">I'm a new user</Link>
        <Link to="/forgot">I forgot my password</Link>
      </form>
    </section>
  );
};

export default Login;
