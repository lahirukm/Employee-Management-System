# Employee Management System

## 📌 Project Overview

This is a full-stack Employee Management System developed using:

- React (Frontend)
- Node.js (Backend)
- MongoDB (Database)

The system allows users to manage employee details efficiently.

---

## 🚀 CI/CD Pipeline (Assignment 1)

This project uses **GitHub Actions** for Continuous Integration.

### 🔹 CI Workflow

- Automatically runs on every push to `main`
- Installs dependencies
- Builds the React application
- Ensures the project runs without errors

### 📁 Workflow File

```
.github/workflows/ci.yml
```

### ✔ Status

- CI pipeline successfully runs on GitHub Actions

---

## 🌐 Live Deployment

The application is deployed online.

👉 **Frontend (Vercel):** [https://your-frontend-url.vercel.app](https://employee-management-system-git-main-lahirusampaths-projects.vercel.app/)
👉 **Backend (Render):** [https://your-backend-url.onrender.com](https://employee-management-system-a513.onrender.com/)

> Replace the above URLs with your actual deployed links.

---

## 🐳 Docker Setup (Assignment 2)

This project is containerized using Docker and Docker Compose.

### 📦 Services

- Frontend → React app (Port 3000)
- Backend → Node.js API (Port 5000)
- Database → MongoDB (Port 27017)

### 🚀 Run with Docker

```bash
docker compose up --build
```

### 🌐 Access Locally

- Frontend → http://localhost:3000
- Local Backend -> http://localhost:5000
- Live Backend -> https://employee-management-system-a513.onrender.com

---

## 📁 Project Structure

```
my-app/
├── .github/
│   └── workflows/
│       └── ci.yml
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── src/
│   └── employee-backend/
│       ├── Dockerfile
│       └── server.js
```

---

## ⚙️ Technologies Used

- React
- Node.js
- MongoDB
- Docker
- GitHub Actions

---

## 🎯 Key Features

- Employee management system
- Full-stack application
- Containerized using Docker
- Automated CI pipeline with GitHub Actions
- Cloud deployment (Vercel + Render)

---

## 👨‍💻 Authors

- **K.M.L Sampath**  
  ITBIN-2211-0277

- **M.N.S.K Bandara**  
  ITBIN-2211-0152

Lahiru Sampath
