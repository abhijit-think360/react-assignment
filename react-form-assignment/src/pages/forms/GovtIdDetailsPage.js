import "./GovtIdDetailsPage.css";
import { Link } from "react-router-dom";


function GovtIdDetailsPage() {
  return (
    <div className="govt-id-details-page">
      <div className="header">
        <span>Think360</span>
        <span>Log In</span>
      </div>
      <div className="govt-id-details-form-container">
        <h1>Govt ID Details Page</h1>
        <form className="gov-id-details-form">
          <label>Aadhar Number :</label>
          <br />
          <input type="text" className="input-label" />
          <br />
          <label>PAN Number :</label>
          <br />
          <input type="text" className="input-label" />
          <br />
          <Link to='/addressDetailsPage'><div className="submit-btn-container">
            <input type="submit" value="Next" />
          </div></Link>
          <br/>
          <Link to='/personalDetailsPage'><div className="submit-btn-container">
            <input type="submit" value="Previous" />
          </div></Link>
        </form>
      </div>
    </div>
  );
}

export default GovtIdDetailsPage;
