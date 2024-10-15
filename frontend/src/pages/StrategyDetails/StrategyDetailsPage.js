import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Row, Col, Button, ProgressBar, Table } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'; // For charting

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
            "price": "€49.99/month"
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
            "price": "€79.99/month"
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
            "price": "€99.99/month"
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
            "price": "€39.99/month"
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
            "price": "€69.99/month"
        }
    ];

const StrategyDetails = () => {
    const { id } = useParams(); // Get the ID from the URL
    const strategy = mockResults.find((item) => item.id === parseInt(id)); // Find the strategy by ID

    if (!strategy) {
        return <div>Strategy not found!</div>;
    }

    // Chart mock data for demonstration
    const performanceData = [
        { date: '2023-01', value: 100 },
        { date: '2023-02', value: 120 },
        { date: '2023-03', value: 130 },
        { date: '2023-04', value: 125 },
        // Add more data points
    ];

    return (
        <Container className="mt-5">
            {/* 1. Header */}
            <Card className="mb-4">
                <Card.Body>
                    <h2>{strategy.name}</h2>
                    <p>{strategy.description}</p>
                </Card.Body>
            </Card>

            {/* 2. Rating */}
            <Card className="mb-4">
                <Card.Body>
                    <h4>Rating</h4>
                    {/* Placeholder rating, you can replace with actual stars */}
                    <p>⭐⭐⭐⭐⭐</p>
                </Card.Body>
            </Card>

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

            {/* 4. Chart */}
            <Card className="mb-4">
                <Card.Body>
                    <h4>Performance Chart</h4>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={performanceData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="value" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </Card.Body>
            </Card>

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

            {/* 6. Description */}
            <Card className="mb-4">
                <Card.Body>
                    <h4>Description</h4>
                    <p>{strategy.details}</p>
                </Card.Body>
            </Card>

            {/* 7. Return */}
            <Card className="mb-4">
                <Card.Body>
                    <h4>Return</h4>
                    <ProgressBar now={parseInt(strategy.return)} label={`${strategy.return}`} />
                </Card.Body>
            </Card>

            {/* 8. Risk */}
            <Card className="mb-4">
                <Card.Body>
                    <h4>Risk</h4>
                    <p>{strategy.risk}</p>
                </Card.Body>
            </Card>

            {/* 9. Return to Risk */}
            <Card className="mb-4">
                <Card.Body>
                    <h4>Return to Risk</h4>
                    <p>{strategy.returnToRisk}</p>
                </Card.Body>
            </Card>

            {/* 10. Subscribe Section */}
            <Card className="mb-4">
                <Card.Body className="text-center">
                    <h4>Subscribe Now</h4>
                    <p>Price: {strategy.price}</p>
                    <Button variant="primary">Subscribe</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default StrategyDetails;
