import React from 'react';
import { Card, Table, Col, Row } from 'react-bootstrap';

const StrategyCharacteristics = ({ characteristics }) => {
    return (
        <>
            {characteristics && characteristics.length > 0 && (
                characteristics.map((characteristic, index) => {
                    // Create rows for every 2 characteristics
                    if (index % 2 === 0) {
                        return (
                            <Row className="align-items-start mb-4" key={index}>
                                {/* First column */}
                                <Col lg={6} xs={12}>
                                    <Card className="mb-4">
                                        <Card.Body>
                                            <h4>{characteristics[index].title}</h4>
                                            <Table>
                                                <tbody>
                                                {Object.entries(characteristics[index].properties).map(([key, value], i) => (
                                                    <tr key={i}>
                                                        <td>{key}</td>
                                                        <td>{value}</td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Second column, if available */}
                                {characteristics[index + 1] && (
                                    <Col lg={6} xs={12}>
                                        <Card className="mb-4">
                                            <Card.Body>
                                                <h4>{characteristics[index + 1].title}</h4>
                                                <Table>
                                                    <tbody>
                                                    {Object.entries(characteristics[index + 1].properties).map(([key, value], i) => (
                                                        <tr key={i}>
                                                            <td>{key}</td>
                                                            <td>{value}</td>
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                </Table>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )}
                            </Row>
                        );
                    }
                    return null; // Avoid rendering an extra row for the second column of each pair
                })
            )}
        </>
    );
};

export default StrategyCharacteristics;
