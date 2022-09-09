import "./GovtIdDetailsPage.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function GovtIdDetailsPage() {
  const [aadharNumber, setAadharNumber] = useState("");
  const [panNumber, setPanNumber] = useState("");

  function onChangeAadharNumber(e) {
    setAadharNumber(e.target.value);
  }
  function onChangePanNumber(e) {
    setPanNumber(e.target.value);
  }
  let navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    localStorage.setItem("aadharNumber", aadharNumber);
    localStorage.setItem("panNumber", panNumber);
    navigate("/addressDetailsPage");
  }

  return (
    <div className="govt-id-details-page">
      <div className="header">
        <span>Think360</span>
        <span>Log In</span>
      </div>
      <div className="govt-id-details-form-container">
        <h1>Govt ID Details</h1>
        <form className="gov-id-details-form" onSubmit={onSubmit}>
          <label>Aadhar Number :</label>
          <br />
          <input
            type="text"
            className="input-label"
            value={aadharNumber}
            onChange={onChangeAadharNumber}
          />
          <br />
          <label>PAN Number :</label>
          <br />
          <input
            type="text"
            className="input-label"
            value={panNumber}
            onChange={onChangePanNumber}
          />
          <br />
          {/* <Link to='/addressDetailsPage'><div className="submit-btn-container"> */}

          {/* </div></Link> */}
          <br />
          <Link to="/personalDetailsPage">
            <div className="submit-btn-container">
              <input type="submit" value="Previous" />
            </div>
          </Link>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default GovtIdDetailsPage;
