import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import users from "../constants/users.js";

function LoginPage() {
  let navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    const userName = e.target[0].value;
    const password = e.target[1].value;
    let i;
    for (i = 0; i < users.length; i++) {
      if (users[i].username == userName && users[i].password == password) {
        navigate("/personalDetailsPage");
      }
    }
  }

  return (
    <div className="log-in-page">
      <div className="header">
        <span>Think360</span>
        <span>Log In</span>
      </div>
      <div className="log-in-form-container">
        <h1>Log in</h1>

        <form className="log-in-form" onSubmit={onSubmit}>
          <label>Username :</label>
          <br />
          <input type="text" className="input-label" />
          <br />
          <label>Password :</label>
          <br />
          <input type="text" className="input-label" />
          <br />
          <div className="submit-btn-container">
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
