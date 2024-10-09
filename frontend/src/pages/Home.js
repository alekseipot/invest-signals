import React from 'react';
import '../App.css';
import AppNavbar from '../components/AppNavbar';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <AppNavbar/>
            <Container className="mt-5">
                <h1 className="text-center mb-4">Welcome to Investment Strategies</h1>
                <p className="text-center mb-5">Subscribe to the best investment strategies for a profitable future!</p>

                {/* Cards section */}
                <Row>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src="/images/stock_market_strategies.jpg" />
                            <Card.Body>
                                <Card.Title>Stock Market Strategies</Card.Title>
                                <Card.Text>
                                    Get the most effective strategies for stock market investments with high returns.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src="/images/real_estate_strategies.jpg" />
                            <Card.Body>
                                <Card.Title>Real Estate Strategies</Card.Title>
                                <Card.Text>
                                    Invest in the best real estate opportunities with long-term profitability.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src="/images/cryptocurrency_strategies.jpg" />
                            <Card.Body>
                                <Card.Title>Cryptocurrency Strategies</Card.Title>
                                <Card.Text>
                                    Stay ahead in the crypto market with expert-backed strategies.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;