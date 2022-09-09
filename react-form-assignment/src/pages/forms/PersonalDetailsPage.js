import "./PersonalDetailsPage.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function PersonalDetailsPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function onChangeFirstName(e) {
    setFirstName(e.target.value);
  }
  function onChangeLastName(e) {
    setLastName(e.target.value);
  }
  let navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    navigate("/govtIdDetailsPage");
  }

  return (
    <div className="personal-details-page">
      <div className="header">
        <span>Think360</span>
        <span>Log In</span>
      </div>
      <div className="personal-details-form-container">
        <h1>Personal Details</h1>
        <form className="personal-details-form" onSubmit={onSubmit}>
          <label>First Name :</label>
          <br />
          <input
            type="text"
            className="input-label"
            value={firstName}
            onChange={onChangeFirstName}
          />
          <br />
          <label>Last Name :</label>
          <br />
          <input
            type="text"
            className="input-label"
            value={lastName}
            onChange={onChangeLastName}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default PersonalDetailsPage;
