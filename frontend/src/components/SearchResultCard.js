import React from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";

const SearchResultCard = ({id, image, name, description}) => {
    return (
        <Card className="mb-4" style={{width: '100%'}}>
            <Row noGutters>
                {/* Left Column for the Image */}
                <Col md={4}>
                    <Card.Img
                        src={image}
                        alt={name}
                        style={{height: '100%', objectFit: 'cover'}}
                    />
                </Col>

                {/* Right Column for Text and Button */}
                <Col md={8}>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Link to={`/strategy/${id}`}>
                            <Button variant="primary">View Details</Button>
                        </Link>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};

export default SearchResultCard;
