# Employee Management System

![CI Status](https://github.com/lahirukm/Employee-Management-System/actions/workflows/ci.yml/badge.svg)

## 📌 Project Overview

This is a full-stack **Employee Management System** developed using modern web technologies to manage employee records and salary information efficiently.

### 💻 Tech Stack

- React.js (Frontend)
- Node.js & Express.js (Backend)
- MongoDB Atlas (Database)
- Docker & Docker Compose
- GitHub Actions (CI/CD)
- Vercel (Frontend Deployment)
- Render (Backend Deployment)

---

## ✨ Features

- 👨‍💼 Add Employee Details
- 📋 View Employee List
- 💰 Manage Employee Salaries
- ☁️ MongoDB Atlas Cloud Database
- 🔄 REST API using Express.js
- 🐳 Docker Containerization
- ⚙️ Automated CI Pipeline with GitHub Actions
- 🌐 Cloud Deployment using Vercel & Render

---

# 🚀 CI/CD Pipeline (Assignment 1)

This project uses **GitHub Actions** to automate the Continuous Integration process.

## 🔹 CI Workflow

The workflow automatically:

- Runs on every push to the `main` branch
- Installs project dependencies
- Builds the React application
- Verifies the application builds successfully
- Displays workflow status using the GitHub Actions badge

### 📁 Workflow File

```text
.github/workflows/ci.yml
```

### ✅ CI Status

The badge at the top of this README displays the latest workflow status.

---

# 🌐 Live Deployment

### Frontend (Vercel)

https://employee-management-system-git-main-lahirusampaths-projects.vercel.app/

### Backend (Render)

https://employee-management-system-a513.onrender.com

### API Endpoints

Get Employees

```http
GET /employees
```

Get Salaries

```http
GET /salaries
```

Add Employee

```http
POST /add-employee
```

Add Salary

```http
POST /salary
```

---

# 🐳 Docker Setup (Assignment 2)

This project is fully containerized using Docker and Docker Compose.

## 📦 Services

| Service | Port |
|---------|------|
| React Frontend | 3000 |
| Express Backend | 5000 |
| MongoDB | 27017 |

## 🚀 Run the Application

```bash
docker compose up --build
```

## 🌐 Local Access

Frontend

```text
http://localhost:3000
```

Backend

```text
http://localhost:5000
```

Live Backend

```text
https://employee-management-system-a513.onrender.com
```

---

# 📁 Project Structure

```text
Employee-Management-System
│
├── .github
│   └── workflows
│       └── ci.yml
│
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
│
├── frontend
│
├── src
│   └── employee-backend
│       ├── server.js
│       ├── package.json
│       └── Dockerfile
│
├── README.md
```

---

# ⚙️ Technologies Used

- React.js
- Node.js
- Express.js
- MongoDB Atlas
- Docker
- Docker Compose
- GitHub Actions
- Vercel
- Render

---

# 🔄 CI/CD Workflow

```
Developer
      │
      ▼
Push to GitHub
      │
      ▼
GitHub Actions
      │
      ▼
Install Dependencies
      │
      ▼
Build React Project
      │
      ▼
Workflow Passed ✅
```

---

# 📸 Screenshots

> Add screenshots of the application here.

Example

- Home Page
- Employee Management
- Salary Management
- GitHub Actions Workflow
- Docker Containers

---

# 📈 Future Improvements

- Employee Authentication
- JWT Login System
- Role-Based Access Control
- Employee Search & Filtering
- Attendance Management
- Payroll Reports
- Dashboard Analytics

---

# 👨‍💻 Authors

- **K.M.L Sampath**  
  ITBIN-2211-0277

- **M.N.S.K Bandara**  
  ITBIN-2211-0152

- **G.G.S.A Ananda**  
  ITBIN-2211-0139



---

# 📄 License

This project was developed for academic purposes as part of the **CI/CD and Docker Assignment**.

---

## ⭐ Repository

If you found this project helpful, please consider giving it a ⭐ on GitHub.
