import "./PersonalDetails.css";

function PersonalDetails() {
  return (
    <div className="personal-details-page">
      <div className="header">
        <span>Think360</span>
        <span>Log In</span>
      </div>
      <div className="personal-details-form-container">
        <form className="personal-details-form">
          <label>First Name :</label>
          <br />
          <input type="text" className="input-label" />
          <br />
          <label>Last Name :</label>
          <br />
          <input type="text" className="input-label" />
          <br />
          <div className="submit-btn-container">
            <input type="button" value="Next" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalDetails;
