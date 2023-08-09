import "../../css/user/user.css";
import Home from "./Home";

function User() {
  return (
    <div className="user">
      <NavBar />
      <Home />
    </div>
  );
}

export default User;

function NavBar() {
  return (
    <div className="navBar">
      <button>
        <span class="material-symbols-outlined">{"Home"}</span>
        <p>{"Home"}</p>
      </button>
      <button>
        <span class="material-symbols-outlined">person_pin</span>
        <p>{"Profile"}</p>
      </button>
      <button>
        <span class="material-symbols-outlined">notifications</span>
        <p>{"Notify"}</p>
      </button>
      <button>
        <span class="material-symbols-outlined">deployed_code_history</span>
        <p>{" Activity"}</p>
      </button>
      <button>
        <span class="material-symbols-outlined">Settings</span>
        <p>{"Setting"}</p>
      </button>
    </div>
  );
}
