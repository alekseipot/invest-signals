import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/Home';
import SearchPage from './pages/Search';
import StrategyDetails from './pages/StrategyDetails/StrategyDetailsPage';
import Layout from "./components/Layout";
import RegisterPage from "./pages/Login/RegisterPage";
import ForgotPasswordPage from "./pages/Login/ForgotPasswordPage";
import LoginPage from "./pages/Login/LoginPage";
import PrivateRoute from "./PrivateRoute";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import {AuthProvider} from "./context/AuthContext";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="search" element={<SearchPage/>}/>
                        <Route path="strategy/:id" element={<StrategyDetails/>}/>
                        <Route path="dashboard" element={<PrivateRoute element={<DashboardPage/>}/>}/>
                        <Route path="login" element={<LoginPage/>}/>
                        <Route path="register" element={<RegisterPage/>}/>
                        <Route path="forgot-password" element={<ForgotPasswordPage/>}/>
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
