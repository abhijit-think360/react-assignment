import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginPage from '../src/pages/login'
import PersonalDetails from './pages/forms/PersonalDetailsPage'
import GovtIdDetailsPage from './pages/forms/GovtIdDetailsPage'
import AddressDetailsPage from './pages/forms/AddressDetailsPage'
import SummaryPage from './pages/SummaryPage'

import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="loginPage" element={<LoginPage />} />
      <Route path="personalDetailsPage" element={<PersonalDetails />} />
      <Route path="govtIdDetailsPage" element={<GovtIdDetailsPage />} />
      <Route path="addressDetailsPage" element={<AddressDetailsPage />} />
      <Route path="summaryPage" element={<SummaryPage />} />

      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
