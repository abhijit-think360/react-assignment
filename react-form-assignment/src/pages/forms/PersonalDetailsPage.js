import "./PersonalDetailsPage.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
// import App, {AppContext} from "App.js"
// import App, {AppContext} from "../../App";
import forms from "../../constants/forms";

function PersonalDetailsPage() {
  // const AppContext = useContext(AppContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  var inputFieldMetaData;
  let i;
  for (i = 0; i < forms.length; i++) {
    if (forms[i].id == "Personal Details") {
      inputFieldMetaData = forms[i].personalDetails;
    }
  }

  function onChangeFirstName(e) {
    setFirstName(e.target.value);
    // setFirstName((prevAppContext)=>{
    //   return {...AppContext, firstName: e.target.value}
    // });
  }
  function onChangeLastName(e) {
    setLastName(e.target.value);
  }
  let navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    // console.log(AppContext.firstName);
    navigate("/govtIdDetailsPage");
  }

  return (
    <div className="personal-details-page">
      <div className="header">
        <span>Think360</span>
        <span>Log In</span>
      </div>
      {/* <div>
        {forms.map(form => (
         <div key={form.id}>
            <div> */}
      {/* <input type={form.personalDetails.type}></input> */}
      {/* <label key={form.personalDetails[0].elementId}>{form.personalDetails[0].label + ':'}</label>
              <input type={form.personalDetails[0].type}></input>
            </div>
          </div>
        ))}
      </div> */}
      {/* <div className="personal-details-form-container">
        {forms.map((form) => {
          if (form.id === "Personal Details")
            return (
              <div>
                <h1>{form.id}</h1>
                <form
                  key={form.id}
                  className="personal-details-form"
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
            );
          else return null;
        })}
      </div> */}
      {/* <div className="personal-details-form-container">
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
      </div> */}
      <div className="personal-details-form-container">
        <h1>Personal Details</h1>
        <form className="personal-details-form" onSubmit={onSubmit}>
          {inputFieldMetaData.map((element) => (
            <div>
              <label>{element.label + " :"}</label>
              <br />
              <input type={element.type} className="input-label"></input>
            </div>
          ))}
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
}

export default PersonalDetailsPage;
