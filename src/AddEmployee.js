import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./App.css";

function AddEmployee() {
  const [employeeID, setEmployeeID] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [tpNumber, setTpNumber] = useState("");
  const [address, setAddress] = useState("");
  const [idNo, setIdNo] = useState("");
  const [gender, setGender] = useState("");
  const [emergencyNo, setEmergencyNo] = useState("");
  const [district, setDistrict] = useState("");
  const [employees, setEmployees] = useState([]); // State to store employee data
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Function to fetch employee data from the backend
  const fetchEmployees = async () => {
    try {
      const response = await fetch("http://localhost:5000/employees");
      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }
      const data = await response.json();
      setEmployees(data); // Store the fetched data in the state
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  // Fetch employees when the component loads
  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeData = {
      employeeID,
      name,
      category,
      tpNumber,
      address,
      idNo,
      gender,
      emergencyNo,
      district,
    };

    try {
      const response = await fetch("http://localhost:5000/add-employee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeData),
      });

      if (response.ok) {
        alert("✅ Employee data saved successfully!");
        setEmployeeID("");
        setName("");
        setCategory("");
        setTpNumber("");
        setAddress("");
        setIdNo("");
        setGender("");
        setEmergencyNo("");
        setDistrict("");

        // Refresh the employee list
        fetchEmployees();
      } else {
        alert("❌ Failed to save employee data");
      }
    } catch (error) {
      alert("❌ Error connecting to server");
    }
  };

  // Filter employees based on the search query
  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.employeeID.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to download the employee table as a PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Employee List", 14, 10); // Title of the PDF

    // Define the table columns and rows
    const tableColumn = [
      "Employee ID",
      "Name",
      "Category",
      "TP Number",
      "Address",
      "ID No",
      "Gender",
      "Emergency No",
      "District",
    ];
    const tableRows = [];

    // Add each employee's data to the rows
    filteredEmployees.forEach((employee) => {
      const employeeData = [
        employee.employeeID,
        employee.name,
        employee.category,
        employee.tpNumber,
        employee.address,
        employee.idNo,
        employee.gender,
        employee.emergencyNo,
        employee.district,
      ];
      tableRows.push(employeeData);
    });

    // Add the table to the PDF
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20, // Start position of the table
    });

    // Save the PDF
    doc.save("employee_list.pdf");
  };

  return (
    <div className="add-employee-container">
      <div className="container mt-4">
        <div className="row">
          {/* Left Column: Form */}
          <div className="col-md-5">
            <div className="card p-4 shadow">
              <h2 className="employee-title mb-4">Enter Employee Details</h2>
              <form className="employee-form" onSubmit={handleSubmit}>
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
                  <label className="form-label">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Category:</label>
                  <select
                    className="form-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Supervisor">Supervisor</option>
                    <option value="Masonry">Masonry</option>
                    <option value="Carpenter">Carpenter</option>
                    <option value="Welder">Welder</option>
                    <option value="Plumber">Plumber</option>
                    <option value="Heavy Vehicle Driver">HR</option>
                    <option value="Light Vehicle Driver">LR</option>
                    <option value="Electrician">Electrician</option>
                    <option value="Management Assistant">Management Assistant</option>
                    <option value="Machine Operator">Machine Operator</option>
                    <option value="Cleaner">Cleaner</option>
                    <option value="JSO">JSO</option>
                    <option value="OIC">OIC</option>
                    <option value="CSO">CSO</option>
                    <option value="Labour">Labour</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">TP Number:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={tpNumber}
                    onChange={(e) => setTpNumber(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Address:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">ID No:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={idNo}
                    onChange={(e) => setIdNo(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Gender:</label>
                  <select
                    className="form-select"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Emergency No:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={emergencyNo}
                    onChange={(e) => setEmergencyNo(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">District:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Table */}
          <div className="col-md-7">
            <div className="card right-card p-4 shadow">
              <h2 className="employee-title mb-4">Employee List</h2>

              {/* Search Bar */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Employee Name or ID"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th>Employee ID</th>
                      <th>Name</th>
                      <th>Category</th>
                      <th>TP Number</th>
                      <th>Address</th>
                      <th>ID No</th>
                      <th>Gender</th>
                      <th>Emergency No</th>
                      <th>District</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEmployees.length > 0 ? (
                      filteredEmployees.map((employee) => (
                        <tr key={employee._id}>
                          <td>{employee.employeeID}</td>
                          <td>{employee.name}</td>
                          <td>{employee.category}</td>
                          <td>{employee.tpNumber}</td>
                          <td>{employee.address}</td>
                          <td>{employee.idNo}</td>
                          <td>{employee.gender}</td>
                          <td>{employee.emergencyNo}</td>
                          <td>{employee.district}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="9" className="text-center">
                          No employees found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Download Button */}
              <button
                className="btn btn-success mt-3"
                onClick={downloadPDF}
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;