import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";

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
    </div>
  );
}

export default App;
