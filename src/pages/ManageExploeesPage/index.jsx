import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";

import BottomButton from "../../components/bottomButton.jsx";
import EmployCard from "../../components/employCard.jsx";

import "./index.css";

import ArrowLeftIcon from '../../assets/arrow-left-2.svg'

function App() {

    const [employees, setEmployees] = useState([
        {name:"Maya Patel", job:"Software Enginner"},
        {name:"Evelyn Garcia", job:"Marketing Manager"},
        {name:"Chloe Bennett", job:"Graphic Designer"},
        {name:"Omar Khan", job:"Civil Enginner"},
        {name:"Noah Davis", job:"High School Teacher"},
        {name:"Ava Lee", job:"Customer Service Represantative"}
    ])

  return (
    <div className="container">
      <div className="top-title">
        <button>
            <img src={ArrowLeftIcon} alt="svg" />
        </button>
        <span>Manage Employees</span>
      </div>
      <div class="card-group">
        {
            employees.map(employee=><EmployCard name = {employee.name} job={employee.job}/>)
        }
      </div>
      <div class="add-emp">
        <BottomButton placeText={"Add Employee"} type={2} />
      </div>
    </div>
  );
}

export default App;
