import "./PersonalDetailsPage.css";
import { Link } from "react-router-dom";


function PersonalDetailsPage() {
  return (
    <div className="personal-details-page">
      <div className="header">
        <span>Think360</span>
        <span>Log In</span>
      </div>
      <div className="personal-details-form-container">
        <h1>Personal Details</h1>
        <form className="personal-details-form">
          <label>First Name :</label>
          <br />
          <input type="text" className="input-label" />
          <br />
          <label>Last Name :</label>
          <br />
          <input type="text" className="input-label" />
          <br />
          <Link to='/govtIdDetailsPage'><div className="submit-btn-container">
            <input type="submit" value="Next" />
          </div></Link>
        </form>
      </div>
    </div>
  );
}

export default PersonalDetailsPage;
