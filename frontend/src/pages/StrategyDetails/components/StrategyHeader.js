import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const StrategyHeader = ({ strategy }) => {
    return (
        <Card className="mb-4">
            <Card.Body>
                <Row>
                    <Col md={8}>
                        <h3>{strategy.name}</h3>
                        <p>{strategy.description}</p>
                    </Col>
                    <Col md={4}>
                        <div className="text-right">
                            <h5>Performance: {strategy.performance}%</h5>
                            <p>Risk: {strategy.riskLevel}</p>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default StrategyHeader;
