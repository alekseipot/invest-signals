import React, {useEffect, useState} from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom';

const AppNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if a JWT token exists in localStorage to determine if the user is logged in
        const token = localStorage.getItem("jwtToken");
        setIsAuthenticated(!!token);
    }, []);

    const handleLogout = () => {
        // Remove the token from localStorage and update authentication state
        localStorage.removeItem("jwtToken");
        setIsAuthenticated(false);
        navigate("/"); // Redirect to home after logout
    };

    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
            <NavbarBrand tag={Link} to="/search">Search</NavbarBrand>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="justify-content-end" style={{ width: "100%" }} navbar>
                    <NavItem>
                        <NavLink href="https://github.com/alekseipot/invest-signals">GitHub</NavLink>
                    </NavItem>
                    {isAuthenticated ? (
                        <>
                            <NavItem>
                                <NavLink tag={Link} to="/dashboard">My Dashboard</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" onClick={handleLogout}>Logout</NavLink>
                            </NavItem>
                        </>
                    ) : (
                        <NavItem>
                            <NavLink tag={Link} to="/login">Login</NavLink>
                        </NavItem>
                    )}
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default AppNavbar;