// src/components/StrategyDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

// Sample mock data for demonstration
const mockResults = [
    {
        id: 1,
        name: 'Stock Market Strategy 1',
        description: 'Best strategy for high-return stock investments.',
        image: '/images/stock_market_strategies.jpg',
        details: 'Detailed information about Stock Market Strategy 1...',
    },
    {
        id: 2,
        name: 'Real Estate Strategy 1',
        description: 'Maximize long-term returns with real estate investments.',
        image: '/images/real_estate_strategies.jpg',
        details: 'Detailed information about Real Estate Strategy 1...',
    },
    {
        id: 3,
        name: 'Cryptocurrency Strategy 1',
        description: 'Gain insights into the volatile crypto market with this strategy.',
        image: '/images/cryptocurrency_strategies.jpg',
        details: 'Detailed information about Cryptocurrency Strategy 1...',
    },
    // Add more mock strategies here
];

const StrategyDetails = () => {
    const { id } = useParams(); // Get the ID from the URL
    const strategy = mockResults.find((item) => item.id === parseInt(id)); // Find the strategy by ID

    if (!strategy) {
        return <div>Strategy not found!</div>;
    }

    return (
        <Container className="mt-5">
            <Card>
                <Row noGutters>
                    {/* Left Column for the Image */}
                    <Col md={4}>
                        <Card.Img variant="top" src={strategy.image} style={{ height: '100%', objectFit: 'cover' }} />
                    </Col>

                    {/* Right Column for Text Details */}
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title>{strategy.name}</Card.Title>
                            <Card.Text>{strategy.details}</Card.Text>
                            <Button variant="primary">Subscribe</Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default StrategyDetails;
