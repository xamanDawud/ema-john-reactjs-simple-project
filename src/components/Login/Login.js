import React from "react";
import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/UserContex";

import "./Login.css";

const Login = () => {
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let { signIn } = useContext(AuthContext);
  let navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    let form = event.target;
    let email = form.email.value;
    let password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
    form.reset();
    console.log(email, password);
  };
  return (
    <div className="login-container">
      <h1 className="loginTitle">Login</h1>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Provide your email"
            name="email"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Provide your password"
            name="password"
            required
          />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
        <p className="create-account-pra">
          New ema john?{" "}
          <Link className="create-account" to="/signup">
            Create new account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
