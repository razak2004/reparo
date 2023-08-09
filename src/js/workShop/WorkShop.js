import "../../css/workShop/workshop.css";
function WorkShop() {
  return (
    <div className="workshop">
      <WorkshopNavBar />
    </div>
  );
}
export default WorkShop;

function WorkshopNavBar() {
  return (
    <div className="workNavBar">
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
