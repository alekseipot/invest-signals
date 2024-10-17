import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Row, Col, Button, ProgressBar, Table } from 'react-bootstrap';
import './StrategyDetails.css';
import StrategyHeader from "./components/StrategyHeader";
import StrategyChart from "./components/StrategyChart";

// Sample mock data
const mockResults = [
        {
            "id": 1,
            "name": "Stock Market Strategy 1",
            "description": "Best strategy for high-return stock investments.",
            "image": "/images/stock_market_strategies.jpg",
            "details": "This strategy focuses on blue-chip stocks with strong growth potential. It targets well-established companies and aims for long-term capital appreciation.",
            "capital": {
                "start": "100,000 €",
                "end": "2,528,150 €",
                "benchmark": "370,490 €"
            },
            "return": "15%",
            "risk": "Moderate",
            "returnToRisk": "High",
            "price": "€49.99/month",
            "performance": "+13.93% p.a."
        },
        {
            "id": 2,
            "name": "Real Estate Strategy 1",
            "description": "Maximize long-term returns with real estate investments.",
            "image": "/images/real_estate_strategies.jpg",
            "details": "This strategy focuses on purchasing undervalued real estate in growing areas. It’s perfect for long-term investors looking for stable and secure returns through property investment.",
            "capital": {
                "start": "150,000 €",
                "end": "3,150,000 €",
                "benchmark": "500,000 €"
            },
            "return": "10%",
            "risk": "Low",
            "returnToRisk": "Medium",
            "price": "€79.99/month",
            "performance": "+9.85% p.a."
        },
        {
            "id": 3,
            "name": "Cryptocurrency Strategy 1",
            "description": "Gain insights into the volatile crypto market with this strategy.",
            "image": "/images/cryptocurrency_strategies.jpg",
            "details": "Focused on top cryptocurrencies like Bitcoin and Ethereum, this strategy seeks to take advantage of the market’s volatility to achieve significant returns in a short timeframe.",
            "capital": {
                "start": "50,000 €",
                "end": "1,500,000 €",
                "benchmark": "300,000 €"
            },
            "return": "25%",
            "risk": "High",
            "returnToRisk": "High",
            "price": "€99.99/month",
            "performance": "+18.22% p.a."
        },
        {
            "id": 4,
            "name": "Bond Market Strategy 1",
            "description": "Secure your portfolio with reliable government and corporate bonds.",
            "image": "/images/bond_market_strategies.jpg",
            "details": "This strategy focuses on safe, government-issued bonds and investment-grade corporate bonds, offering stable returns with minimal risk.",
            "capital": {
                "start": "200,000 €",
                "end": "1,000,000 €",
                "benchmark": "850,000 €"
            },
            "return": "6%",
            "risk": "Low",
            "returnToRisk": "Medium",
            "price": "€39.99/month",
            "performance": "+5.10% p.a."
        },
        {
            "id": 5,
            "name": "Commodity Strategy 1",
            "description": "Invest in precious metals and energy resources.",
            "image": "/images/commodity_strategies.jpg",
            "details": "This strategy focuses on commodities like gold, silver, and oil. It’s designed to protect against inflation and provide stable returns during economic downturns.",
            "capital": {
                "start": "120,000 €",
                "end": "980,000 €",
                "benchmark": "450,000 €"
            },
            "return": "12%",
            "risk": "Moderate",
            "returnToRisk": "High",
            "price": "€69.99/month",
            "performance": "+11.30% p.a."
        }
    ];

const StrategyDetails = () => {
    const { id } = useParams(); // Get the ID from the URL
    const strategy = mockResults.find((item) => item.id === parseInt(id)); // Find the strategy by ID

    if (!strategy) {
        return <div>Strategy not found!</div>;
    }


    return (
        <Container className="mt-5">
            {/* 1. Header */}
            <StrategyHeader strategy={strategy}/>

            <Row className="align-items-center mb-4">
                <Col lg={6} xs={12}>
                    {/* 2. Rating */}
                    <Card className="mb-4">
                        <Card.Body>
                            <h4>Strategy rating</h4>
                            <Table>
                                <tbody>
                                <tr>
                                    <td>chance</td>
                                    <td className="text-end">⭐⭐⭐⭐⭐</td>
                                </tr>
                                <tr>
                                    <td>risk</td>
                                    <td className="text-end">⭐⭐⭐⭐</td>
                                </tr>
                                <tr>
                                    <td>comfort</td>
                                    <td className="text-end">⭐⭐⭐⭐⭐</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} xs={12}>
                    {/* 3. Basic Data */}
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
            </Row>

            <Row className="align-items-center mb-4">
                <Col lg={6} xs={12}>
                    {/* 6. Description */}
                    <Card className="mb-4">
                        <Card.Body>
                            <h4>Description</h4>
                            <p>{strategy.details}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} xs={12}>
                    {/* 4. Chart */}
                    <Card className="mb-4">
                        <Card.Body>
                            <h4>Performance Chart</h4>
                            <StrategyChart/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="align-items-center mb-4">
                <Col lg={6} xs={12}>
                    {/* 5. Capital Section */}
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
                <Col lg={6} xs={12}>
                    {/* 7. Return */}
                    <Card className="mb-4">
                        <Card.Body>
                            <h4>Return</h4>
                            <ProgressBar now={parseInt(strategy.return)} label={`${strategy.return}`} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="align-items-center mb-4">
                <Col lg={6} xs={12}>
                    {/* 8. Risk */}
                    <Card className="mb-4">
                        <Card.Body>
                            <h4>Risk</h4>
                            <p>{strategy.risk}</p>
                        </Card.Body>
                    </Card>
                </Col>
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
