import "./login.css";
import { Link,useNavigate } from "react-router-dom";


function LoginPage() {
  const navigate = useNavigate()

const savedEmail = localStorage.getItem("savedEmail")
const savedPassword = localStorage.getItem('savedPassword')


function submitLogin(){
const email = document.getElementById('emailInput').value
const password = document.getElementById('passwordInput').value
if(email===savedEmail && password === savedPassword){
// alert('login success')
navigate("/personalDetailsPage")
}
else{
  alert("login failed")
}
}
  return (
    <div className="log-in-page">
      <div className="header">
        <span>Think360</span>
        <span>Log In</span>
      </div>
      <div className="log-in-form-container">
      <h1>Log in</h1>

        <form className="log-in-form">
          <label>E-mail :</label>
          <br />
          <input type="text" id="emailInput" className="input-label" />
          <br />
          <label>Password :</label>
          <br />
          <input type="text" id="passwordInput" className="input-label" />
          <br />
          {/* <Link to='/personalDetailsPage'> */}
            <div className="submit-btn-container">
            <input onClick={submitLogin} type="submit" value="Log In" />
          </div>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
