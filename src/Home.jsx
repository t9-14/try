import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Pharmacy</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/medications">Medications</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <h1>Welcome to Our Pharmacy</h1>
        <p>Your health is our priority. Browse our medications and contact us for any inquiries.</p>
      </Container>
    </>
  );
};

export default Home;