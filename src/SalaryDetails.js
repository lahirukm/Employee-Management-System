import React, { useState } from "react";

function SalaryDetails() {
  const [employeeID, setEmployeeID] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [employeeCategory, setEmployeeCategory] = useState("");
  const [dailyRate, setDailyRate] = useState("");
  const [workingDays, setWorkingDays] = useState("");
  const [otHours, setOtHours] = useState("");
  const [payPerHourOt, setPayPerHourOt] = useState("");
  const [etfEpf, setEtfEpf] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const salaryData = {
      employeeID,
      employeeName,
      employeeCategory,
      dailyRate: parseFloat(dailyRate), // Ensure it's a number
      workingDays: parseInt(workingDays), // Ensure it's a number
      otHours: parseInt(otHours), // Ensure it's a number
      payPerHourOt: parseFloat(payPerHourOt), // Ensure it's a number
      etfEpf: parseFloat(etfEpf), // Ensure it's a number
    };

    try {
      const response = await fetch("http://localhost:5000/salary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(salaryData),
      });

      if (response.ok) {
        alert("✅ Salary details submitted successfully!");
        setEmployeeID("");
        setEmployeeName("");
        setEmployeeCategory("");
        setDailyRate("");
        setWorkingDays("");
        setOtHours("");
        setPayPerHourOt("");
        setEtfEpf("");
      } else {
        alert("❌ Failed to submit salary details.");
      }
    } catch (error) {
      console.error("Error submitting salary details:", error);
      alert("❌ Error connecting to the server.");
    }
  };

  return (
    <div className="salary-request-container">
      <div className="card p-4 shadow">
        <h2 className="employee-title mb-4">Salary Request Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Employee ID:</label>
            <input
              type="text"
              className="form-control"
              value={employeeID}
              onChange={(e) => setEmployeeID(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Employee Name:</label>
            <input
              type="text"
              className="form-control"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Employee Category:</label>
            <select
              className="form-select"
              value={employeeCategory}
              onChange={(e) => setEmployeeCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              <option value="HR">HR</option>
              <option value="Supervisor">Supervisor</option>
              <option value="Manager">Manager</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Daily Rate (Rs):</label>
            <input
              type="number"
              className="form-control"
              value={dailyRate}
              onChange={(e) => setDailyRate(e.target.value)}
              placeholder="Enter Daily Rate in Rs"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Working Days:</label>
            <input
              type="number"
              className="form-control"
              value={workingDays}
              onChange={(e) => setWorkingDays(e.target.value)}
              placeholder="Enter Working Days"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">OT Hours:</label>
            <input
              type="number"
              className="form-control"
              value={otHours}
              onChange={(e) => setOtHours(e.target.value)}
              placeholder="Enter OT Hours"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Pay Per Hour OT (Rs):</label>
            <input
              type="number"
              className="form-control"
              value={payPerHourOt}
              onChange={(e) => setPayPerHourOt(e.target.value)}
              placeholder="Enter Pay Per Hour OT in Rs"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">ETF/EPF (Rs):</label>
            <input
              type="number"
              className="form-control"
              value={etfEpf}
              onChange={(e) => setEtfEpf(e.target.value)}
              placeholder="Enter ETF/EPF in Rs"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SalaryDetails;