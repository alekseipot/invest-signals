import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StrategiesList from './pages/StrategiesList';
import Search from "./pages/Search";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path='/search' exact={true} element={<Search/>}/>
                <Route path='/strategies' exact={true} element={<StrategiesList/>}/>
            </Routes>
        </Router>
    )
}

export default App;
