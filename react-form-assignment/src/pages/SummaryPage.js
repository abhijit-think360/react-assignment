import "./SummaryPage.css";
import { Link } from "react-router-dom";

function SummaryPage() {
  return (
    <div className="summary-page">
      <div className="header">
        <span>Think360</span>
        <span>Log In</span>
      </div>
      <div className="summary-form-container">
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
      </div>
    </div>
  );
}

export default SummaryPage;
