import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="log-in-page">
      <div className="header">
        <span>Think360</span>
        <span>Log In</span>
      </div>
      <div className="log-in-form-container">
      <h1>Log in Page</h1>

        <form className="log-in-form">
          <label>E-mail :</label>
          <br />
          <input type="text" className="input-label" />
          <br />
          <label>Password :</label>
          <br />
          <input type="text" className="input-label" />
          <br />
          <Link to='/personalDetailsPage'><div className="submit-btn-container">
            <input type="submit" value="Log In" />
          </div></Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
