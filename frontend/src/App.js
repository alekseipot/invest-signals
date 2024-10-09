import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import SearchPage from './pages/Search';
import StrategyDetails from './pages/StrategyDetails';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/strategy/:id" element={<StrategyDetails />} /> {/* Using element prop */}
            </Routes>
        </Router>
    );
};

export default App;
