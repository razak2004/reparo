import "./App.css";

function App() {
  return (
    <div className="login">
      <div className="circle"></div>
      <form className="loginContainer">
        <h2>Login</h2>
        <InputContainer name="Mobile Number" id="number" span="call" />
        <InputContainer name="Password" id="password" span="dialpad" />
        <h5>forget password ?</h5>
        <button type="submit">Submit</button>
      </form>
      <div className="circ2"></div>
    </div>
  );
}

function InputContainer(prop) {
  return (
    <div className="inputContainer">
      <p>{prop.name}</p>
      <div className="cont">
        <span className="material-symbols-outlined">{prop.span}</span>
        <input id={prop.id} />
      </div>
    </div>
  );
}

export default App;
