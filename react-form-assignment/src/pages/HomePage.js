import "./HomePage.css";
import { Link } from "react-router-dom";
import companyLogo from "../pages/company_logo.png";
import React from "react";

import { useState } from "react";

// export const AppContext =  React.createContext();

function HomePage() {
  const [AppState, setAppState] = useState({'isLoggedIn':false});
  const isLoggedIn = AppState.isLoggedIn; 

  function handleLogin() {
    setAppState(!AppState);
  }

  return (
    <div className="home-page">
      <div className="header">
        <span>Think360</span>

        <Link to="/loginPage">
          <span onClick={handleLogin}>{AppState ? "Log In" : "Log Out"}</span>
        </Link>
      </div>
      <div className="company-logo-container">
        <img src={companyLogo} className="Company-logo" alt="logo" />
      </div>
    </div>
  );
}

export default HomePage;
