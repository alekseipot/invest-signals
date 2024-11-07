import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Container, Card, Row, Col, Button } from 'react-bootstrap';
import './StrategyDetails.css';
import StrategyHeader from './components/StrategyHeader';
import StrategyChart from './components/StrategyChart';
import Ratings from "./components/Ratings";
import StrategyCharacteristics from "./components/StrategyCharacteristics";

const StrategyDetails = () => {
    const {id} = useParams(); // Get the ID from the URL
    const [strategy, setStrategy] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch strategy details from the backend
        const fetchStrategy = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/public/strategies/${id}`);
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
            <StrategyHeader strategy={strategy}/>

            {/* New Row with Description, Strategy Rating, and Performance Chart */}
            <Row className="align-items-start mb-4">
                <Col lg={6} xs={12}>
                    {/* 2. Description */}
                    <Card className="mb-4">
                        <Card.Body>
                            <h4>Description</h4>
                            <p>{strategy.description}</p>
                        </Card.Body>
                    </Card>
                    <Ratings ratings={strategy.ratings}/>

                </Col>

                <Col lg={6} xs={12}>
                    {/* 4. Performance Chart */}
                    <Card className="mb-4">
                        <Card.Body>
                            <h4>Performance Chart</h4>
                            <StrategyChart/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <StrategyCharacteristics characteristics={strategy.characteristics} />

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
