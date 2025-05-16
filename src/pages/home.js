import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Existing Navigation */}
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

            {/* Existing Hero Section */}
            <header className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <h1>BOUTIQUE TRAVEL AGENCY</h1>
                        <h2>DISCOVER UNIQUE TRAVEL EXPERIENCES WITH VOYAGER</h2>
                        <Link to="/explore" className="btn btn-explore">EXPLORE</Link>
                    </div>
                </div>
            </header>

            {/* Seasonal Destinations Section */}
            <section className="destinations-section">
                <div className="container">
                    <div className="season-tabs">
                        <div className="season-item">
                            <h3>Spring Destinations</h3>
                            <div className="season-content">
                                <img src="/spring.jpg" alt="Spring Travel" />
                                <button className="season-btn">Explore Spring</button>
                            </div>
                        </div>
                        <div className="season-item">
                            <h3>Summer Destinations</h3>
                            <div className="season-content">
                                <img src="/summer.jpg" alt="Summer Travel" />
                                <button className="season-btn">Explore Summer</button>
                            </div>
                        </div>
                        <div className="season-item">
                            <h3>Winter Destinations</h3>
                            <div className="season-content">
                                <img src="/winter.jpg" alt="Winter Travel" />
                                <button className="season-btn">Explore Winter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trip Planning Section */}
            <section className="planning-section">
                <div className="container">
                    <h2>We'll Handle Your Trip For You</h2>
                    <div className="planning-grid">
                        <div className="planning-card">
                            <i className="fas fa-map-marked-alt"></i>
                            <h4>Popular Places</h4>
                            <p>Discover the most sought-after destinations</p>
                        </div>
                        <div className="planning-card">
                            <i className="fas fa-hotel"></i>
                            <h4>Hotel Booking</h4>
                            <p>Find perfect accommodations worldwide</p>
                        </div>
                        <div className="planning-card">
                            <i className="fas fa-plane"></i>
                            <h4>Flight Booking</h4>
                            <p>Book your flights with best deals</p>
                        </div>
                        <div className="planning-card">
                            <i className="fas fa-hiking"></i>
                            <h4>Tours & Activities</h4>
                            <p>Experience local adventures and tours</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <h2>Our Favorite Travelers</h2>
                    <div className="testimonials-slider">
                        <div className="testimonial-card">
                            <img src="/images/traveler1.jpg" alt="Traveler" />
                            <h4>Sarah Johnson</h4>
                            <p>"Amazing experience with Voyager! They planned everything perfectly."</p>
                        </div>
                        <div className="testimonial-card">
                            <img src="/images/traveler2.jpg" alt="Traveler" />
                            <h4>Mike Chen</h4>
                            <p>"Professional service and unforgettable destinations."</p>
                        </div>
                        <div className="testimonial-card">
                            <img src="/images/traveler3.jpg" alt="Traveler" />
                            <h4>Emma Davis</h4>
                            <p>"The best travel agency I've ever worked with!"</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <h3>Voyager</h3>
                            <p>Your Journey Begins Here</p>
                        </div>
                        <div className="footer-links">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/destinations">Destinations</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer-social">
                            <h4>Follow Us</h4>
                            <div className="social-icons">
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;