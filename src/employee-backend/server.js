require("dotenv").config({ path: './config.env' });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON data

// Connect to MongoDB
mongoose.connect(process.env.ATLAS_URI || "mongodb://localhost:27017/employees")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.log("❌ MongoDB Connection Error:", err));

// Employee Schema
const EmployeeSchema = new mongoose.Schema({
  employeeID: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  tpNumber: { type: String, required: true },
  address: { type: String, required: true },
  idNo: { type: String, required: true },
  gender: { type: String, required: true },
  emergencyNo: { type: String, required: true },
  district: { type: String, required: true },
});

const Employee = mongoose.model("Employee", EmployeeSchema);

// API to Add Employee
app.post("/add-employee", async (req, res) => {
  try {
    const { employeeID, name, category, tpNumber, address, idNo, gender, emergencyNo, district } = req.body;

    // Validate request body
    if (!employeeID || !name || !category || !tpNumber || !address || !idNo || !gender || !emergencyNo || !district) {
      return res.status(400).json({ error: "❌ All fields are required" });
    }

    const newEmployee = new Employee({
      employeeID,
      name,
      category,
      tpNumber,
      address,
      idNo,
      gender,
      emergencyNo,
      district,
    });

    await newEmployee.save();
    res.status(201).json({ message: "✅ Employee Added", employee: newEmployee });
  } catch (error) {
    res.status(500).json({ error: "❌ Error adding employee" });
  }
});

// API to Fetch Employees
app.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find().sort({ employeeID: 1 }); // Sort by employeeID
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: "❌ Error fetching employees" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// Salary Schema
const SalarySchema = new mongoose.Schema({
  employeeID: { type: String, required: true },
  employeeName: { type: String, required: true },
  employeeCategory: { type: String, required: true },
  dailyRate: { type: Number, required: true },
  workingDays: { type: Number, required: true },
  otHours: { type: Number, required: true },
  payPerHourOt: { type: Number, required: true },
  etfEpf: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Salary = mongoose.model("Salary", SalarySchema);

// API to Add Salary Details
app.post("/salary", async (req, res) => {
  try {
    const {
      employeeID,
      employeeName,
      employeeCategory,
      dailyRate,
      workingDays,
      otHours,
      payPerHourOt,
      etfEpf,
    } = req.body;

    // Validate request body
    if (
      !employeeID ||
      !employeeName ||
      !employeeCategory ||
      !dailyRate ||
      !workingDays ||
      !otHours ||
      !payPerHourOt ||
      !etfEpf
    ) {
      return res.status(400).json({ error: "❌ All fields are required" });
    }

    // Create a new salary document
    const newSalary = new Salary({
      employeeID,
      employeeName,
      employeeCategory,
      dailyRate,
      workingDays,
      otHours,
      payPerHourOt,
      etfEpf,
    });

    // Save to MongoDB
    await newSalary.save();
    res.status(201).json({ message: "✅ Salary details added successfully", salary: newSalary });
  } catch (error) {
    console.error("Error adding salary details:", error);
    res.status(500).json({ error: "❌ Error adding salary details" });
  }
});

// API to Fetch Salary Details
app.get("/salaries", async (req, res) => {
  try {
    const salaries = await Salary.find().sort({ createdAt: -1 }); // Sort by most recent
    res.status(200).json(salaries);
  } catch (error) {
    console.error("Error fetching salary details:", error);
    res.status(500).json({ error: "❌ Error fetching salary details" });
  }
});

