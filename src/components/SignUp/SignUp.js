import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContex";

const SignUp = () => {
  let { createUser } = useContext(AuthContext);
  let [error, setErro] = useState(null);
  const submitHandler = (event) => {
    event.preventDefault();
    let form = event.target;
    let email = form.email.value;
    let password = form.password.value;
    let confirm = form.confirm.value;
    if (password !== confirm) {
      setErro("Your password does not match ");
      return;
    }

    createUser(email, password)
      .then((result) => {
        let user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
    form.reset();
    console.log(email, password, confirm);
  };
  return (
    <div className="login-container">
      <h1 className="loginTitle">Sign UP</h1>
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
        <div className="form-control">
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            placeholder="Provide same password"
            name="confirm"
            required
          />
        </div>
        <p className="text-red-500">{error}</p>
        <input className="btn-submit" type="submit" value="Sign Up" />
        <p className="create-account-pra">
          Already have an account?{" "}
          <Link className="create-account" to="/login">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
