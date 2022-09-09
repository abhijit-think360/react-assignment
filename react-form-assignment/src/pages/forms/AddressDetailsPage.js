import "./AddressDetailsPage.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function AddressDetailsPage() {
  const [city, setCity] = useState("");
  const [addressState, setAddressState] = useState("");

  function onChangeCity(e) {
    setCity(e.target.value);
  }
  function onChangeAddressState(e) {
    setAddressState(e.target.value);
  }
  let navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    localStorage.setItem("city", city);
    localStorage.setItem("addressState", addressState);
    navigate("/summaryPage");
  }

  return (
    <div className="address-details-page">
      <div className="header">
        <span>Think360</span>
        <span>Log In</span>
      </div>
      <div className="address-details-form-container">
        <h1>Address Details</h1>
        <form className="address-details-form" onSubmit={onSubmit}>
          <label>City :</label>
          <br />
          <input
            type="text"
            className="input-label"
            value={city}
            onChange={onChangeCity}
          />
          <br />
          <label>State :</label>
          <br />
          <input
            type="text"
            className="input-label"
            value={addressState}
            onChange={onChangeAddressState}
          />
          <br />
          {/* <Link to='/summaryPage'><div className="submit-btn-container">
            <input type="submit" value="Submit" />
          </div></Link> */}
          <br />
          <Link to="/govtIdDetailsPage">
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

export default AddressDetailsPage;
