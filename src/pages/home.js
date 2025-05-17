import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">Voyager</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/destinations">Explore Destinations</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/plan">Plan Your Trip</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/magazine">Magazine</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn btn-dark" to="/plan">PLAN YOUR TRIP</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <h1>Time For Your Next Adventure</h1>
                        <h2>DISCOVER UNIQUE TRAVEL EXPERIENCES WITH ANOKA SAFAR</h2>
                        <Link to="/explore" className="btn btn-explore">EXPLORE</Link>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Home;