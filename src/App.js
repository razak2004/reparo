import "./App.css";

function App() {
  return (
    <div className="login">
      <div className="circle"></div>
      <div className="loginContainer">
        <h2>Login</h2>
        <InputContainer />
        <InputContainer />
      </div>
      <div className="circ2"></div>
    </div>
  );
}

function InputContainer() {
  return (
    <div className="inputContainer">
      <p>Mobile Number </p>
      <input />
    </div>
  );
}

export default App;
