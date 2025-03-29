import React from "react";
import "../style/Login.css";

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <label className="label">User Id</label>
        <input type="text" name="uid" className="input" />

        <label className="label">Password</label>
        <input type="password" name="pwd" className="input" />

        <input type="submit" value="Log In" className="button" />
      </form>
    </div>
  );
}

export default Login;
