import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/Home';
import SearchPage from './pages/Search';
import StrategyDetails from './pages/StrategyDetails';
import Layout from "./components/Layout";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="search" element={<SearchPage/>}/>
                    <Route path="strategy/:id" element={<StrategyDetails/>}/>
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
