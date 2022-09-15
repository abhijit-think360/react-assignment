import "./PersonalDetailsPage.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
// import App, {AppContext} from "App.js"
// import App, {AppContext} from "../../App";
import { infoContext } from "../../infoContext";
import forms from "../../constants/forms";
const axios = require("axios");

function PersonalDetailsPage() {
  // const AppContext = useContext(AppContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // ---------------------usercontext----------------
  // const [User, setUser] = useContext(infoContext);
  // console.log(User);
  // const username = User.hasOwnProperty("username") ? User["username"] : ""
  // const username = User["username"]
  // ---------------------usercontext----------------
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
  // ------------------------using_get_request---------------
  // document.setItem("firstname",firstName)
  // document.getElementById("firstName").value = "testing@gmail.com";
  useEffect(() => {
    console.log("hello ");
    axios
      .get("http://localhost:8080/api/v1/getPersonalDetails", {
        params: {
          username: localStorage.getItem("username"),
        },
      })
      .then(function (response) {
        document.getElementById("firstName").value = response.FirstName;
        document.getElementById("lastName").value = response.LastName;
        document.getElementById("email").value = response.Email;
        document.getElementById("phoneno").value = response.Phone;
      });
  }, []);
  // ------------------------using_get_request----------------

  function onSubmit(e) {
    e.preventDefault();
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    // localStorage.setItem("savedEmail",savedEmail);
    // console.log(AppContext.firstName);
    // --------------------------------------------------

    // axios({
    //   method: 'post',
    //   url: 'http://localhost:8080/personalDetails',
    //   data: {
    //     "firstName": document.getElementById("First Name").textContent,
    //     "lastName":  document.getElementById("Last Name").textContent,
    //     // "firstName" : "abhishek"
    //   }
    // });

    // ----------------------------------------------
    // const Authorization ="anupam"
    // const headers = {
    //   [Authorization]: Authorization,
    //   "Content-Type": "application/json",
    // };

    // ------------------------post_requet_call--------------------------

    // const body = { data: {  "username" : localStorage.getItem("username"),
    //                         "firstName": document.getElementById("firstName").value,
    //                         "lastName" : document.getElementById("lastName").value,
    //                         "email" : document.getElementById("email").value,
    //                         "phone" : document.getElementById("phoneno").value,
    //                         }, to: "" };
    const body = {
      username: localStorage.getItem("username"),
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phoneno").value,
    };
    let notificationResponse = axios.post(
      // "http://localhost:8080/personalDetails",
      `http://localhost:8080/api/v1/addPersonalDetails`,
      JSON.stringify(body)
    );

    // ------------------------post_requet_call-------------------------------
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
              <input
                type={element.type}
                id={element.elementId}
                className="input-label"
              ></input>
            </div>
          ))}
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
}

export default PersonalDetailsPage;
