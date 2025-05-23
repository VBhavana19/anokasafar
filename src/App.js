import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FlightTicketCarousel from './pages/test';
import Destinations from './pages/destinations';
import SpringDestinations from './pages/SpringDestinations';
import CityPage from './pages/CityPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<FlightTicketCarousel />} />
        {/* Add more routes as needed */}
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/spring-destinations" element={<SpringDestinations />} />
        <Route path="/city/:code" element={<CityPage />} />
      </Routes>
    </Router>
  );
}

export default App;
