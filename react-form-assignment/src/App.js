import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login.js";
import HomePage from "./pages/HomePage";
import SummaryPage from "./pages/SummaryPage";

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
    HomePage()
  );
  // personalDetails());
}

export default App;
