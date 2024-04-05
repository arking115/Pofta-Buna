import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardDev from './DashboardDev';
import DashboardPublic from './DashboardPublic';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DashboardPublic />} />
                <Route path="/dev" element={<DashboardDev />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
