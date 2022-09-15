import "./AddressDetailsPage.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import forms from "../../constants/forms";
const axios = require("axios");

function AddressDetailsPage() {
  const [city, setCity] = useState("");
  const [addressState, setAddressState] = useState("");

  var inputFieldMetaData;
  let i;
  for (i = 0; i < forms.length; i++) {
    if (forms[i].id == "Address Details") {
      inputFieldMetaData = forms[i].addressDetails;
    }
  }

  function onChangeCity(e) {
    setCity(e.target.value);
  }
  function onChangeAddressState(e) {
    setAddressState(e.target.value);
  }
  let navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    // localStorage.setItem("city", city);
    // localStorage.setItem("addressState", addressState);
    // -----------------------------post-request---------------------------------
    const body = {  "username" : localStorage.getItem("username"),
                            "FlatNumber": document.getElementById("flatNumber").value,
                            "BuildingName" : document.getElementById("buildingName").value,
                            "City" : document.getElementById("city").value,
                            "State" : document.getElementById("addressState").value,
                            };
    let notificationResponse =  axios.post(
      // "http://localhost:8080/personalDetails",
      `http://localhost:8080/api/v1/addAddressDetails`,
      JSON.stringify(body),
    );
    
    // --------------------------------post-request-------------------------------
    navigate("/summaryPage");
  }

  function handlePrevious(e) {
    e.preventDefault();
    navigate("/govtIdDetailsPage");
  }

  return (
    <div className="address-details-page">
      <div className="header">
        <span>Think360</span>
        <span>Log In</span>
      </div>
      {/* <div className="address-details-form-container">
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
          
          <br />
          <Link to="/govtIdDetailsPage">
            <div className="submit-btn-container">
              <input type="submit" value="Previous" />
            </div>
          </Link>
          <button type="submit">Submit</button>
        </form>
      </div> */}
      <div className="address-details-form-container">
        <h1>Address Details</h1>
        <form className="address-details-form" onSubmit={onSubmit}>
          {inputFieldMetaData.map((element) => (
            <div>
              <label>{element.label + " :"}</label>
              <br />
              <input type={element.type} id={element.elementId} className="input-label"></input>
            </div>
          ))}
          {/* <Link to="/govtIdDetailsPage">
            <div className="submit-btn-container">
              <input type="submit" value="Previous" />
            </div>
          </Link> */}
          <div className='address-details-form-action-buttons'>
            <button type="button" onClick={handlePrevious} style={{marginRight:'10px'}}>
              Previous
            </button>
            <button type="submit">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddressDetailsPage;
