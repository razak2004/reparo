import "../css/App.css";
import { useState } from "react";

let logObj = {};

function Login() {
  const [mobileNumber, setMobileNumber] = useState(0);
  const [password, setPassword] = useState("");
  const [call, setCall] = useState("white");
  const [passCol, setPass] = useState("white");
  const handleMobileNumber = (event) => {
    let n = event.target.value;
    if (validatePhoneNumber(n)) {
      setCall("#65fe08");
    } else {
      setCall("#ff637c");
    }
    setMobileNumber(n);
  };
  const handlePassword = (e) => {
    let n = e.target.value;

    if (validatePassword(n)) {
      setPass("#65fe08");
    } else {
      setPass("#ff637c");
    }
    setPassword(n);
  };
  const loginForm = (e) => {
    e.preventDefault();
    let mob = mobileNumber;
    let pass = password;
    let obj = {
      mobile: mob,
      password: pass,
    };
    logObj = obj;
  };

  return (
    <div className="login">
      <div className="circle"></div>
      <form className="loginContainer" onSubmit={loginForm}>
        <h2>Login</h2>
        <div className="inputContainer">
          <p style={{ color: call }}>Mobile Number </p>
          <div className="cont">
            <span className="material-symbols-outlined" style={{ color: call }}>
              call
            </span>
            <input
              pattern="[0-9]{10}"
              title="Number Should be in 10 digits"
              onChange={handleMobileNumber}
              style={{ borderBottom: "2px solid " + call }}
            />
          </div>
        </div>
        <div className="inputContainer">
          <p style={{ color: passCol }}>Password</p>
          <div className="cont">
            <span
              className="material-symbols-outlined"
              style={{ color: passCol }}
            >
              dialpad
            </span>
            <input
              pattern="[A-Za-z0-9]{6,10}"
              title="password Should be in 6 to 10 digits mixed up of alphabets and numbers"
              onChange={handlePassword}
              type="password"
              style={{ borderBottom: "2px solid " + passCol }}
            />
          </div>
        </div>

        <h5>forget password ?</h5>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
      <div className="circ2"></div>
    </div>
  );
}

export default Login;

function validatePhoneNumber(phoneNumber) {
  const regex = /^\d{10}$/; // Regular expression for 10 digits

  return regex.test(phoneNumber);
}
function validatePassword(pass) {
  let pattern = /^(?=.*[A-Za-z])(?=.*\d).{6,10}$/;

  // Test the password against the pattern
  return pattern.test(pass);
}
