import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login.js";
import PersonalDetails from "./pages/forms/PersonalDetails";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route
          exact
          path="/personalDetails"
          element={<PersonalDetails />}
        ></Route>
      </Routes>
      <Link to="/">Login</Link>
      <Link to="/personalDetails">PersonalDetails</Link>
    </Router>
  );
  // personalDetails());
}

export default App;
