import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Row, Col, Button, ProgressBar, Table } from 'react-bootstrap';
import './StrategyDetails.css';
import StrategyHeader from './components/StrategyHeader';
import StrategyChart from './components/StrategyChart';

const StrategyDetails = () => {
    const { id } = useParams(); // Get the ID from the URL
    const [strategy, setStrategy] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch strategy details from the backend
        const fetchStrategy = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/strategies/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStrategy(data);
            } catch (error) {
                console.error('Error fetching strategy:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStrategy();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!strategy) {
        return <div>Strategy not found!</div>;
    }

    return (
        <Container className="mt-5">
            {/* 1. Header */}
            <StrategyHeader strategy={strategy} />

            {/* New Row with Description, Strategy Rating, and Performance Chart */}
            <Row className="align-items-start mb-4">
                <Col lg={6} xs={12}>
                    {/* 2. Description */}
                    <Card className="mb-4">
                        <Card.Body>
                            <h4>Description</h4>
                            <p>{strategy.details}</p>
                        </Card.Body>
                    </Card>

                    {/* 3. Strategy Rating */}
                    <Card className="mb-4">
                        <Card.Body>
                            <h4>Strategy rating</h4>
                            <Table>
                                <tbody>
                                <tr>
                                    <td>Chance</td>
                                    <td className="text-end">⭐⭐⭐⭐⭐</td>
                                </tr>
                                <tr>
                                    <td>Risk</td>
                                    <td className="text-end">⭐⭐⭐⭐</td>
                                </tr>
                                <tr>
                                    <td>Comfort</td>
                                    <td className="text-end">⭐⭐⭐⭐⭐</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={6} xs={12}>
                    {/* 4. Performance Chart */}
                    <Card className="mb-4">
                        <Card.Body>
                            <h4>Performance Chart</h4>
                            <StrategyChart />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Other Sections */}
            <Row className="align-items-center mb-4">
                <Col lg={6} xs={12}>
                    {/* 5. Basic Data */}
                    <Card className="mb-4">
                        <Card.Body>
                            <h4>Basic Data</h4>
                            <Table>
                                <tbody>
                                <tr>
                                    <td>Start Date</td>
                                    <td>12/1999</td>
                                </tr>
                                <tr>
                                    <td>End Date</td>
                                    <td>09/2024</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} xs={12}>
                    {/* 6. Capital Section */}
                    <Card className="mb-4">
                        <Card.Body>
                            <h4>Capital</h4>
                            <Row>
                                <Col>
                                    <p><strong>Start 12/1999</strong></p>
                                    <p>Benchmark: {strategy.capital.start}</p>
                                </Col>
                                <Col>
                                    <p><strong>End of 09/2024</strong></p>
                                    <p>Benchmark: {strategy.capital.benchmark}</p>
                                    <p>Strategy: {strategy.capital.end}</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="align-items-center mb-4">
                <Col lg={6} xs={12}>
                    {/* 7. Return */}
                    <Card className="mb-4">
                        <Card.Body>
                            <h4>Return</h4>
                            <ProgressBar now={parseInt(strategy.return)} label={`${strategy.return}`} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} xs={12}>
                    {/* 8. Risk */}
                    <Card className="mb-4">
                        <Card.Body>
                            <h4>Risk</h4>
                            <p>{strategy.risk}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="align-items-center mb-4">
                <Col lg={6} xs={12}>
                    {/* 9. Return to Risk */}
                    <Card className="mb-4">
                        <Card.Body>
                            <h4>Return to Risk</h4>
                            <p>{strategy.returnToRisk}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="align-items-center mb-4">
                <Col>
                    {/* 10. Subscribe Section */}
                    <Card className="mb-4">
                        <Card.Body className="text-center">
                            <h4>Subscribe Now</h4>
                            <p>Price: {strategy.price}</p>
                            <Button variant="primary">Subscribe</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default StrategyDetails;
