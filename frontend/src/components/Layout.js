import React from 'react';
import { Outlet } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import { Container } from 'react-bootstrap';

const Layout = () => {
    return (
        <div>
            {/* Navbar will be present on all pages */}
            <AppNavbar />

            {/* Container for the page content */}
            <Container className="mt-5">
                {/* Outlet is where the individual page content will be rendered */}
                <Outlet />
            </Container>
        </div>
    );
};

export default Layout;
