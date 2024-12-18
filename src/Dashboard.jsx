import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { API_ENDPOINT } from './Api';

const Dashboard = () => {
  const [user, setUser ] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser  = async () => {
      try {
        const response = JSON.parse(localStorage.getItem('token'));
        setUser (response.data);
      } catch (error) {
        navigate('/login');
      }
    };

    fetchUser ();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Container className="mt-4">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>Pharmacy Dashboard</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/medications">Medications</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
      </Navbar>
      <h2>Welcome, {user ? user.username : 'User '}</h2>
      <p>Manage your pharmacy operations here.</p>
    </Container>
  );
};

export default Dashboard;