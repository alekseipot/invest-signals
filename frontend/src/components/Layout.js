import React from 'react';
import { Outlet } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

const Layout = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Navbar will be present on all pages */}
            <AppNavbar />

            {/* flex-grow-1 is added to ensure the content area expands */}
            <Container className="flex-grow-1 mt-5">
                <Outlet />
            </Container>

            {/* Footer will be present on all pages */}
            <Footer />
        </div>
    );
};

export default Layout;
