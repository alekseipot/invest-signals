import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // To handle the loading state

    useEffect(() => {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
        if (token) {
            try {
                const decoded = jwtDecode(token); // Decode the JWT
                // Check if token is expired
                const currentTime = Date.now() / 1000; // Current time in seconds
                if (decoded.exp && decoded.exp < currentTime) {
                    localStorage.removeItem('token'); // Remove expired token
                    setUser(null); // Set user to null if expired
                } else {
                    setUser({ email: decoded.sub }); // Assuming 'sub' contains the email
                }
            } catch (error) {
                console.error("Error decoding token:", error);
                localStorage.removeItem('token'); // Invalidate the token on error
                setUser(null); // Set user to null on error
            }
        } else {
            setUser(null); // No token, no user
        }
        setLoading(false); // Stop loading once the check is done  setUser({ email: decoded.sub }); // Assuming 'sub' contains the email
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Or a loading spinner, if preferred
    }

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
