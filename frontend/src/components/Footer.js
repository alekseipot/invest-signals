import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-light py-3 mt-auto">
            <Container>
                <p className="text-center mb-0">© {currentYear} Investment Strategies. All rights reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;
