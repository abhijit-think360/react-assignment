import "./login.css";

function Login() {
  return (
    <div className="log-in-page">
      <div className="header">
        <span>Think360</span>
        <span>Log In</span>
      </div>
      <div className="log-in-form-container">
        <form className="log-in-form">
          <label>E-mail :</label>
          <br />
          <input type="text" className="input-label" />
          <br />
          <label>Password :</label>
          <br />
          <input type="text" className="input-label" />
          <br />
          <div className="submit-btn-container">
            <input type="submit" value="Log In" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
