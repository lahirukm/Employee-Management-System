import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faMoneyCheckAlt, faUniversity, faChartLine } from "@fortawesome/free-solid-svg-icons";
import "./App.css"; // Import the CSS file

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Title Section */}
      <div className="dashboard-title-container">
        <h2 className="dashboard-title">Employee Management Dashboard</h2>
      </div>

      {/* Cards Section */}
      <Container fluid className="p-4">
        <Row>
          <Col md={3}>
            <Card className="mb-4 shadow">
              <Card.Body>
                <Card.Title>Add Employee</Card.Title>
                <Card.Text>
                  Manage employee details and add new employees to the system.
                </Card.Text>
                <Button
                  variant="primary"
                  className="w-100"
                  onClick={() => navigate("/add-employee")}
                >
                  <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                  Add Employee
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="mb-4 shadow">
              <Card.Body>
                <Card.Title>Salary Details</Card.Title>
                <Card.Text>
                  View and manage employee salary details.
                </Card.Text>
                <Button
                  variant="success"
                  className="w-100"
                  onClick={() => navigate("/salary-details")}
                >
                  <FontAwesomeIcon icon={faMoneyCheckAlt} className="me-2" />
                  Salary Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="mb-4 shadow">
              <Card.Body>
                <Card.Title>Bank Details</Card.Title>
                <Card.Text>
                  Manage employee bank account information.
                </Card.Text>
                <Button
                  variant="info"
                  className="w-100"
                  onClick={() => navigate("/bank-details")}
                >
                  <FontAwesomeIcon icon={faUniversity} className="me-2" />
                  Bank Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="mb-4 shadow">
              <Card.Body>
                <Card.Title>Profit</Card.Title>
                <Card.Text>
                  Analyze and view company profit details.
                </Card.Text>
                <Button
                  variant="warning"
                  className="w-100"
                  onClick={() => navigate("/profit")}
                >
                  <FontAwesomeIcon icon={faChartLine} className="me-2" />
                  Profit
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;