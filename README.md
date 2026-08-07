# Employee Management System

![CI Pipeline](https://github.com/lahirukm/Employee-Management-System/actions/workflows/ci.yml/badge.svg)

---

# Group Information

- **Student 1:** K.M.L. Sampath - ITBIN-2211-0277 - **Role:** Project Integration, Backend Development, CI/CD, Docker & Cloud Deployment
- **Student 2:** M.N.S.K. Bandara - ITBIN-2211-0152 - **Role:** Frontend Development & UI Design
- **Student 3:** G.G.S.A. Ananda - ITBIN-2211-0139 - **Role:** Testing, Documentation & Quality Assurance

---

# Project Description

The Employee Management System is a full-stack web application developed using **React.js**, **Node.js**, **Express.js**, and **MongoDB Atlas**. The system allows users to manage employee information and salary records through an easy-to-use interface.

The project demonstrates the implementation of modern software engineering practices including **GitHub Actions CI/CD**, **Docker containerization**, and **cloud deployment** using **Vercel** and **Render**.

---

# Live Deployment

### 🌐 Frontend (Vercel)

https://employee-management-system-git-main-lahirusampaths-projects.vercel.app/

### 🌐 Backend (Render)

https://employee-management-system-a513.onrender.com

---

# Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- React.js
- Node.js
- Express.js
- MongoDB Atlas
- Docker
- Docker Compose
- GitHub Actions (CI/CD)
- Vercel
- Render

---

# Features

- Employee Registration
- Employee List Management
- Salary Management
- REST API Integration
- MongoDB Atlas Database
- Docker Containerization
- Automated CI Pipeline
- Cloud Deployment

---

# Branch Strategy

The project follows the Git Flow branching strategy.

- **main** - Production branch
- **develop** - Development and testing branch
- **feature/*** - Individual feature development branches

---

# Individual Contributions

## K.M.L. Sampath (ITBIN-2211-0277)

- Designed the overall project architecture.
- Developed the Express.js backend APIs.
- Configured MongoDB Atlas database.
- Integrated frontend and backend.
- Configured GitHub Actions CI pipeline.
- Dockerized the application using Docker & Docker Compose.
- Deployed the frontend using Vercel.
- Deployed the backend using Render.
- Prepared the project documentation.

---

## M.N.S.K. Bandara (ITBIN-2211-0152)

- Developed the React frontend.
- Designed the Employee Management interface.
- Developed Salary Management pages.
- Connected frontend components with backend APIs.
- Improved user interface and user experience.

---

## G.G.S.A. Ananda (ITBIN-2211-0139)

- Performed system testing.
- Verified application functionality.
- Assisted with project documentation.
- Identified bugs and supported debugging.

---

# Setup & Installation Instructions

## Prerequisites

- Node.js (Version 18 or higher)
- Git
- Docker (Optional)

---

## Installation

### Clone the repository

```bash
git clone https://github.com/lahirukm/Employee-Management-System.git
```

### Navigate into the project

```bash
cd Employee-Management-System
```

### Install dependencies

```bash
npm install
```

### Start the application

```bash
npm start
```

### Run with Docker

```bash
docker compose up --build
```

---

# CI/CD Deployment Process

The project uses **GitHub Actions** for Continuous Integration.

The CI workflow automatically:

- Runs on every push to the **main** branch.
- Installs project dependencies.
- Builds the React application.
- Verifies the build process.
- Displays the workflow status through the GitHub Actions badge.

The application is deployed using:

- **Frontend:** Vercel
- **Backend:** Render

---

# Docker Deployment

Run the complete application using Docker Compose.

```bash
docker compose up --build
```

Services

| Service | Port |
|----------|------|
| React Frontend | 3000 |
| Express Backend | 5000 |
| MongoDB | 27017 |

---

# API Endpoints

## Get Employees

```http
GET /employees
```

## Add Employee

```http
POST /add-employee
```

## Get Salaries

```http
GET /salaries
```

## Add Salary

```http
POST /salary
```

---

# Project Structure

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
├── src
│   └── employee-backend
│       ├── server.js
│       ├── package.json
│       └── Dockerfile
│
├── public
├── src
├── package.json
└── README.md
```

---

# Challenges & Resolutions

### Challenge 1

MongoDB Atlas authentication failed after deployment.

**Resolution**

Updated the MongoDB Atlas credentials and configured the correct environment variable (`ATLAS_URI`) in Render.

---

### Challenge 2

Backend deployment failed due to incorrect environment variable configuration.

**Resolution**

Updated the environment variable key from `MONGO_URI` to `ATLAS_URI` to match the backend configuration.

---

### Challenge 3

Frontend API requests initially pointed to localhost after deployment.

**Resolution**

Updated the frontend API URL to the deployed Render backend URL.

---

# Build Status

### GitHub Actions

![CI Pipeline](https://github.com/lahirukm/Employee-Management-System/actions/workflows/ci.yml/badge.svg)

---

# Repository

https://github.com/lahirukm/Employee-Management-System

---

# License

This project was developed for academic purposes as part of the CI/CD and Docker Assignment.

---

⭐ If you found this project useful, consider giving it a star on GitHub.
