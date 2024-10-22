import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import StarsReview from "./StarsReview";

const Ratings = ({ratings}) => {

    return (
        <Card className="mb-4">
            <Card.Body>
                <h4>Strategy rating</h4>
                <Table>
                    <tbody>
                    {ratings?.map((rating, index) => (
                        <tr key={index}>
                            <td>{rating.label}</td>
                            {/* Rendering stars or rating value based on BigDecimal rating */}
                            <td className="text-end">
                                <StarsReview rating={rating.rating} size={16}/> {/* Adjust size as needed */}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default Ratings;
