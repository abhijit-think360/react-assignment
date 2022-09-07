import "./AddressDetailsPage.css";
import { Link } from "react-router-dom";


function AddressDetailsPage() {
  return (
    <div className="address-details-page">
      <div className="header">
        <span>Think360</span>
        <span>Log In</span>
      </div>
      <div className="address-details-form-container">
        <h1>Address Details Page</h1>
        <form className="address-details-form">
          <label>City :</label>
          <br />
          <input type="text" className="input-label" />
          <br />
          <label>State :</label>
          <br />
          <input type="text" className="input-label" />
          <br />
          <Link to='/addressDetailsPage'><div className="submit-btn-container">
            <input type="submit" value="Next" />
          </div></Link>
          <br/>
          <Link to='/govtIdDetailsPage'><div className="submit-btn-container">
            <input type="submit" value="Previous" />
          </div></Link>
        </form>
      </div>
    </div>
  );
}

export default AddressDetailsPage;
