import React from "react";
import ReactDOM from "react-dom/client";
import ManageExploeesPage from "./pages/ManageExploeesPage";
import SettingsPage from "./pages/SettingsPage";
import EmployeeAnalyticPage from "./pages/EmployeeAnalyticPage";

import "./App.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EmployeeAnalyticPage />
  </React.StrictMode>,
);
