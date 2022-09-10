import "./GovtIdDetailsPage.css";
import forms from "../../constants/forms";

import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

// forms.forEach(myFunction);
// var myForm;
// function myFunction(item){
//   if(item.id == 'Governmnet ID Details'){
//     myForm = item;
//     console.log(item);
//   }
// }

// myForm

var inputFieldMetaData;
let i;
for (i = 0; i < forms.length; i++) {
  if (forms[i].id == "Governmnet ID Details") {
    inputFieldMetaData = forms[i].govtIdDetails;
  }
}

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
      {/* <div className="govt-id-details-form-container">
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
          <Link to="/personalDetailsPage">
            <div className="submit-btn-container">
              <input type="submit" value="Previous" />
            </div>
          </Link>
          <button type="submit">Submit</button>
        </form>
      </div> */}
      {/* <div className="govt-id-details-form-container">
        {forms.map((form) => {
          if (form.id === "Governmnet ID Details")
            return (
              <div>
                <h1>{form.id}</h1>
                <form
                  key={form.id}
                  className="govt-id-details-form"
                  onSubmit={onSubmit}
                >
                  {form.personalDetails.map((element) => (
                    <div>
                      <label key={element.elementId}>
                        {element.label + " :"}
                      </label>
                      <br />
                      <input
                        type={element.type}
                        className="input-label"
                      ></input>
                      <br />
                    </div>
                  ))}
                  <button type="submit">Submit</button>
                </form>
              </div>
            )
        })}
      </div> */}
      <div className="govt-id-details-form-container">
        <h1>Governmnet ID Details</h1>
        <form className="govt-id-details-form" onSubmit={onSubmit}>
          {inputFieldMetaData.map((element) => (
            <div>
              <label>{element.label + " :"}</label>
              <br />
              <input type={element.type} className="input-label"></input>
            </div>
          ))}
          <Link to="/personalDetailsPage">
            <div className="submit-btn-container">
              <input type="submit" value="Previous" />
            </div>
          </Link>
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
}

export default GovtIdDetailsPage;
