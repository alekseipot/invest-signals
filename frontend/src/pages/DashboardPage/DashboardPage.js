import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Container, Card } from 'react-bootstrap';

const DashboardPage = () => {
    const { user } = useContext(AuthContext);

    return (
        <Container className="d-flex align-items-center justify-content-center mt-5">
            <Card className="p-4 shadow">
                <Card.Body>
                    <h2 className="text-center mb-4">Dashboard</h2>
                    <p className="text-center">Welcome, {user.email}!</p>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default DashboardPage;
