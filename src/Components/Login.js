import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinHandler = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in , redirect to homepage...
        history.push("/");
      })

      .catch((e) => alert(e.message));
  };
  const registerHandler = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //created a user and logged in, redirect to home page
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        {/* <img className="logo" src={img} alt="" />*/}
        <i className="fas fa-tshirt text-warning logo">Kay Store</i>
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
          />
          <h5>Password</h5>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />
          <button
            onClick={signinHandler}
            type="submit"
            className="login-signin-btn"
          >
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to all conditions of Use and Privacy Notice
        </p>
        <button onClick={registerHandler}>Create your Account</button>
      </div>
    </div>
  );
}

export default Login;
