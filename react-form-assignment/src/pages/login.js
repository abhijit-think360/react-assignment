import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import users from "../constants/users.js";

function LoginPage() {
  let navigate = useNavigate();
  var [username, setUsername] = useState("");
  var [password, setPassword] = useState("");

  function onChangeUsername(e) {
    setUsername(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function showAlert() {
    alert("Wrong username or password\nPlease retry.");
    // document.getElementsByClassName("input-label").value = "";
  }

  function checkValidUser(username, password) {
    let i;
    for (i = 0; i < users.length; i++) {
      if (users[i].username == username && users[i].password == password) {
        return true;
      }
    }
    return false;
  }

  function onSubmit(e) {
    e.preventDefault();
    const userName = e.target[0].value;
    const password = e.target[1].value;
    if (checkValidUser(userName, password)) {
      navigate("/personalDetailsPage");
    } else {
      showAlert();
      setUsername("");
      setPassword("");
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
          <input
            type="text"
            size={15}
            value={username}
            onChange={onChangeUsername}
            className="input-label"
            required
          />
          <br />
          <label>Password :</label>
          <br />
          <input
            type="password"
            size={15}
            value={password}
            onChange={onChangePassword}
            className="input-label"
            required
          />
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
