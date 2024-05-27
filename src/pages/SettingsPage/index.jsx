import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";

import LineEdit from "../../components/lineEdit.jsx";
import NumberEdit from "../../components/numberEdit.jsx";
import LogOutButton from "../../components/bottomButton.jsx";

import "./index.css";

import ArrowLeftIcon from '../../assets/arrow-left-2.svg'

function App() {

  return (
    <div className="container">
      <div className="top-title">
        <button>
            <img src={ArrowLeftIcon} alt="svg" />
        </button>
        <span>Settings</span>
      </div>
      <div className="line-edit-group1">
        <LineEdit placeText={"Manage Billing"}/>
        <LineEdit placeText={"Contact Us"}/>
      </div>
      <div className="line-edit-group2">
        <LineEdit placeText={"Manage Employees"}/>
        <LineEdit placeText={"Employees Analytics"}/>
        <span>Get quick information on your team members usage</span>
      </div>
      <div className="line-edit-group3">
        <NumberEdit placeText={"Text Size"}/>
        <span>Atom Copilot interface text size</span>
      </div>
      <div class="log-out">
        <LogOutButton type={0} placeText={"Log Out"}/>
      </div>
    </div>
  );
}

export default App;
