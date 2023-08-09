import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./js/App";
import User from "./js/user/User";
import WorkShop from "./js/workShop/WorkShop";

let login = true;
let user = false;
let workshop = true;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {login === false && <Login />}
    {user === true && <User />}
    {workshop === true && <WorkShop />}
  </React.StrictMode>
);
