import "./HomePage.css";
import { Link } from "react-router-dom";
import companyLogo from "../pages/company_logo.png";

function HomePage() {
  return (
    <div className="home-page">
      <div className="header">
        <span>Think360</span>

        <Link to="/loginPage">
          <span>Log In</span>
        </Link>
      </div>
      <div className="company-logo-container">
        <img src={companyLogo} className="Company-logo" alt="logo" />
      </div>
    </div>
  );
}

export default HomePage;
