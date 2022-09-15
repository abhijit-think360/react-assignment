import "./SummaryPage.css";
import { Link, useNavigate } from "react-router-dom";
// import forms from "../../constants/forms";
import forms from "../constants/forms";
const axios = require("axios");

function SummaryPage() {
  var personalDetailsMetaData;
  let i;
  for (i = 0; i < forms.length; i++) {
    if (forms[i].id == "Personal Details") {
      personalDetailsMetaData = forms[i].personalDetails;
    }
  }

  var govtIdDetailsMetaData;
  let j;
  for (j = 0; j < forms.length; j++) {
    if (forms[j].id == "Governmnet ID Details") {
      govtIdDetailsMetaData = forms[j].govtIdDetails;
    }
  }

  var addressDetailsMetaData;
  let k;
  for (k = 0; k < forms.length; k++) {
    if (forms[k].id == "Address Details") {
      addressDetailsMetaData = forms[k].addressDetails;
    }
  }

  let navigate = useNavigate();

  // ------------------------using_get_request---------------
  // ________________________for_personal_info_____________
  axios
    .get("http://localhost:8080/api/v1/getPersonalDetails", {
      params: {
        username: localStorage.getItem("username"),
      },
    })
    .then(function (response) {
      document.getElementById("firstName").textContent = response.FirstName;
      document.getElementById("lastName").textContent = response.LastName;
      document.getElementById("email").textContent = response.Email;
      document.getElementById("phoneno").textContent = response.Phone;
    });

  //  ___________________________for_gov_details__________________
  axios
    .get("http://localhost:8080/api/v1/getGovtIdDetails", {
      params: {
        username: localStorage.getItem("username"),
      },
    })
    .then(function (response) {
      document.getElementById("AadharNumber").textContent =
        response.AadharNumber;
      document.getElementById("panNumber").textContent = response.panNumber;
      // document.getElementById("email").value = response.email
      // document.getElementById("phoneno").value = response.phoneno
    });

  // ________________________adress_details_____________________
  axios
    .get("http://localhost:8080/api/v1/getAddressDetails", {
      params: {
        username: localStorage.getItem("username"),
      },
    })
    .then(function (response) {
      document.getElementById("FlatNumber").textContent = response.FlatNumber;
      document.getElementById("BuildingName").textContent =
        response.BuildingName;
      document.getElementById("City").textContent = response.City;
      document.getElementById("addressState").textContent =
        response.addressState;
    });
  // ------------------------using_get_request----------------

  function handleEdit() {
    navigate("/personalDetailsPage");
  }
  return (
    <div className="summary-page">
      <div className="header">
        <span>Think360</span>
        <span>Log In</span>
      </div>
      {/* <div className="summary-form-container">
        <form className="summary-form">
          <h1>Summary</h1>
          <div className="personal-details-summary">
            <h3>Personal Details</h3>
            <form className="summary-row summary-page-personal-details-form">
              <label>First Name :</label>
              <input type="text" className="input-label" />
              <label>Last Name :</label>
              <input type="text" className="input-label" />
              <br />
            </form>
          </div>
          <div className="gov-id-details-summary">
            <h3>Government ID Details</h3>
            <form className="summary-row summary-page-gov-id-details-form">
              <label>Aadhar Number :</label>
              <input type="text" className="input-label" />
              <label>PAN Number :</label>
              <input type="text" className="input-label" />
              <br />
            </form>
          </div>
          <div className="gov-id-details-summary">
            <h3>Address Details</h3>
            <form className="summary-row summary-page-address-details-form">
              <label>City :</label>
              <input type="text" className="input-label" />
              <label>State :</label>
              <input type="text" className="input-label" />
              <br />
            </form>
          </div>
          <Link to="/summaryPage">
            <div className="submit-btn-container">
              <input type="submit" value="Submit" />
            </div>
          </Link>
          <br />
          <Link to="/personalDetailsPage">
            <div className="submit-btn-container">
              <input type="submit" value="Edit" />
            </div>
          </Link>
        </form>
      </div> */}
      <div>
        <h1>Summary</h1>
        <div className="summary-container">
          <div className="summary-section">
            <h3>Personal Details</h3>
            <div className="summary-section-content">
              {personalDetailsMetaData.map((element) => {
                return (
                  <div className="summary-item">
                    <div className="summary-item-element">
                      <span>{element.label + ": "}</span>
                      <span id={element.elementId}></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="summary-section">
            <h3>Government ID Details</h3>
            <div className="summary-section-content">
              {govtIdDetailsMetaData.map((element) => {
                return (
                  <div className="summary-item">
                    <div className="summary-item-element">
                      <span>{element.label + ": "}</span>
                      <span id={element.elementId}></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="summary-section">
            <h3>Address Details</h3>
            <div className="summary-section-content">
              {addressDetailsMetaData.map((element) => {
                return (
                  <div className="summary-item">
                    <div className="summary-item-element">
                      <span>{element.label + ": "}</span>
                      <span id={element.elementId}></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="summary-edit-button-container">
            <button type="button" onClick={handleEdit}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryPage;
