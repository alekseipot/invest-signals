import React, {useContext, useEffect, useState} from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

const AppNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the token from localStorage and update authentication state
        localStorage.removeItem("token");
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
                    {user ? (
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