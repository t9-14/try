import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';
import { API_ENDPOINT } from './Api';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser ] = useState(null);

  useEffect(() => {
    const fetchUser  = async () => {
      try {
        const response = JSON.parse(localStorage.getItem('token'));
        setUser (response.data);
        navigate('/dashboard');
      } catch (error) {
        navigate('/login');
      }
    };

    fetchUser ();
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await axios.post(`${API_ENDPOINT}/auth/login`, {
        username,
        password,
      });

      localStorage.setItem('token', JSON.stringify(response));
      setError('');

      navigate('/dashboard');
    } catch (error) {
      setError('Invalid username or password');
    }
    setLoading(false);
  };

  return (
    <Container className="mt-4">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Container>
  );
};

export default Login;