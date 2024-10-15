import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const StrategyHeader = ({ strategy }) => {
    return (
        <Row className="align-items-center mb-4">
            <Col>
                <h1>Factsheet: <span className="text-primary">{strategy.name}</span></h1>
            </Col>
            <Col className="text-end">
                <div className="performance-box">
                    <span className="performance-value">{strategy.performance}</span>
                </div>
            </Col>
        </Row>
    );
};

export default StrategyHeader;
