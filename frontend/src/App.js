import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StrategiesList from './pages/StrategiesList';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path='/strategies' exact={true} element={<StrategiesList/>}/>
            </Routes>
        </Router>
    )
}

export default App;
