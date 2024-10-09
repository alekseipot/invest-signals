import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SearchResultCard from '../components/SearchResultCard';

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('all');
    const [results, setResults] = useState([]);
    const [totalResults, setTotalResults] = useState(0);

    // Mock data for search results
    const mockResults = [
        {
            id: 1,
            name: 'Stock Market Strategy 1',
            description: 'Best strategy for high-return stock investments.',
            image: '/images/stock_market_strategies.jpg'
        },
        {
            id: 2,
            name: 'Real Estate Strategy 1',
            description: 'Maximize long-term returns with real estate investments.',
            image: '/images/real_estate_strategies.jpg'
        },
        {
            id: 3,
            name: 'Crypto Strategy 1',
            description: 'Maximize long-term returns with crypto currency investments.',
            image: '/images/cryptocurrency_strategies.jpg'
        }
    ];

    // Handle Search
    const handleSearch = () => {
        // For now, we filter the mockResults based on the searchQuery and category
        const filteredResults = mockResults.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (category === 'all' || item.name.toLowerCase().includes(category))
        );
        setResults(filteredResults);
        setTotalResults(filteredResults.length);
    };

    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">Search Investment Strategies</h1>

            {/* Search Form */}
            <Form className="mb-4">
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="searchQuery">
                            <Form.Control
                                type="text"
                                placeholder="Enter search query..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="category">
                            <Form.Control
                                as="select"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="all">All Categories</option>
                                <option value="stock">Stock Market</option>
                                <option value="real-estate">Real Estate</option>
                                <option value="crypto">Cryptocurrency</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Button variant="primary" onClick={handleSearch}>Search</Button>
                    </Col>
                </Row>
            </Form>

            {/* Display Total Results */}
            {totalResults > 0 && (
                <p>Total Results: {totalResults}</p>
            )}

            {/* Search Results */}
            <Row>
                {results.map(result => (
                    <Col md={12} key={result.id}>
                        <SearchResultCard
                            image={result.image}
                            name={result.name}
                            description={result.description}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default SearchPage;
