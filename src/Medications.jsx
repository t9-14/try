import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import { API_ENDPOINT } from './Api';

const Medications = () => {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINT}/medications`);
        setMedications(response.data);
      } catch (error) {
        console.error('Error fetching medications:', error);
      }
    };

    fetchMedications();
  }, []);

  return (
    <Container className="mt-4">
      <h2>Available Medications</h2>
      <div className="d-flex flex-wrap">
        {medications.map((med) => (
          <Card key={med.id} style={{ width: ' 18rem', margin: '1rem' }}>
            <Card.Body>
              <Card.Title>{med.name}</Card.Title>
              <Card.Text>{med.description}</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Medications;
