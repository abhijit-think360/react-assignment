import logo from "./logo.svg";
import "./App.css";
// import Login from "./pages/login.js";
import HomePage from "./pages/HomePage";
import SummaryPage from "./pages/SummaryPage";
import LoginPage from "../src/pages/login";
import PersonalDetails from "./pages/forms/PersonalDetailsPage";
import GovtIdDetailsPage from "./pages/forms/GovtIdDetailsPage";
import AddressDetailsPage from "./pages/forms/AddressDetailsPage";
// import SummaryPage from "./pages/SummaryPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

export const AppContext = React.createContext();

// import PersonalDetails from "./pages/forms/PersonalDetails";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );
    // HomePage()
    <AppContext.Provider value="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="loginPage" element={<LoginPage />} />
          <Route path="personalDetailsPage" element={<PersonalDetails />} />
          <Route path="govtIdDetailsPage" element={<GovtIdDetailsPage />} />
          <Route path="addressDetailsPage" element={<AddressDetailsPage />} />
          <Route path="summaryPage" element={<SummaryPage />} />

          {/* <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
  // personalDetails());
}

export default App;
