import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Add useNavigate for redirecting after success
import { Button, Form, Card, Container, Row, Col, Alert } from 'react-bootstrap';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate(); // For navigation after successful registration

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error message
        setSuccess(null); // Reset success message

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                setSuccess('User registered successfully!');
                setTimeout(() => navigate('/login'), 2000); // Redirect to login after 2 seconds
            } else {
                const data = await response.text(); // Assuming the error message is a plain string
                setError(data || 'Registration failed');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <Container className="d-flex align-items-center justify-content-center">
            <Row>
                <Col md={12}>
                    <Card className="p-4 shadow">
                        <Card.Body>
                            <h2 className="text-center mb-4">Register</h2>

                            {/* Display success or error messages */}
                            {error && <Alert variant="danger">{error}</Alert>}
                            {success && <Alert variant="success">{success}</Alert>}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100">
                                    Register
                                </Button>
                            </Form>
                            <div className="mt-3 text-center">
                                Already have an account? <Link to="/login">Login</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default RegisterPage;
