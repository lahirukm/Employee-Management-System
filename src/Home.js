import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; // Import the CSS file

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Main Content with Background Image */}
      <div className="home-page-container">
        <div className="container mt-5 text-white">
          <h1 className="text-center mb-4">Welcome to Employee Management Dashboard</h1>
          <p className="text-center">
            Use the navigation bar to explore different sections of the application.
          </p>
          <div className="text-center mt-4">
            <button
              className="btn btn-primary"
              onClick={() => navigate("/dashboard")}
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;