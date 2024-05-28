import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";

import EmployeeAnalyticCard from "../../components/employeeAnalyticCard";

import "./index.css";

import ArrowLeftIcon from '../../assets/arrow-left-2.svg'

function App() {

    const [employees, setEmployees] = useState([
        {name:"Maya Patel", job:"Software Enginner",num:500},
        {name:"Evelyn Garcia", job:"Marketing Manager",num:750},
        {name:"Chloe Bennett", job:"Graphic Designer",num:350},
        {name:"Omar Khan", job:"Civil Enginner",num:200},
        {name:"Noah Davis", job:"High School Teacher",num:800},
        {name:"Ava Lee", job:"Customer Service Represantative",num:900}
    ])

  return (
    <div className="container">
      <div className="top-title">
        <button>
            <img src={ArrowLeftIcon} alt="svg" />
        </button>
        <span>Employee Analytics</span>
      </div>
      <div class="card-group">
        {
            employees.map(employee=><EmployeeAnalyticCard name = {employee.name} job={employee.job} num={employee.num}/>)
        }
      </div>
    </div>
  );
}

export default App;
