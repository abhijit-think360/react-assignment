import "./SummaryPage.css";
import { Link } from "react-router-dom";
// import forms from "../../constants/forms";
import forms from "../constants/forms";

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
          <h3>Personal Details</h3>
          {personalDetailsMetaData.map((element) => {
            return (
              <div>
                <div className="summary-item">
                  <div className="summary-item-element">
                    <span>{element.label}</span>
                    <span>DummyData</span>
                  </div>
                </div>
              </div>
            );
          })}
          <h3>Government ID Details</h3>
          {govtIdDetailsMetaData.map((element) => {
            return (
              <div>
                <div className="summary-item">
                  <div className="summary-item-element">
                    <span>{element.label}</span>
                    <span>DummyData</span>
                  </div>
                </div>
              </div>
            );
          })}
          <h3>Address Details</h3>
          {addressDetailsMetaData.map((element) => {
            return (
              <div>
                <div className="summary-item">
                  <div className="summary-item-element">
                    <span>{element.label}</span>
                    <span>DummyData</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SummaryPage;
