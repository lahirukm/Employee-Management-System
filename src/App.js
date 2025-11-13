import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddEmployee from "./AddEmployee";
import SalaryDetails from "./SalaryDetails";
import BankDetails from "./BankDetails";
import Profit from "./Profit";
import Home from "./Home";
import Navbar from "./Header"; // Import the Navbar component
import "./App.css"; // Import the CSS file

function App() {
  return (
    <Router>
      <div className="App">
        {/* Add the Navbar here */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Set Home as the default route */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/salary-details" element={<SalaryDetails />} />
          <Route path="/bank-details" element={<BankDetails />} />
          <Route path="/profit" element={<Profit />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;