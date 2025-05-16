import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './home.css';

const Home = () => {
    const [destinationRef, destinationInView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const [planningRef, planningInView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

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
            <motion.section 
                className="destinations-section"
                ref={destinationRef}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: destinationInView ? 1 : 0, y: destinationInView ? 0 : 100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
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
            </motion.section>

            {/* Animated Planning Section */}
            <motion.section 
                className="planning-section"
                ref={planningRef}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: planningInView ? 1 : 0, y: planningInView ? 0 : 100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: planningInView ? 1 : 0, y: planningInView ? 0 : 50 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        We'll Handle Your Trip For You
                    </motion.h2>
                    <div className="planning-grid">
                        {[0, 1, 2, 3].map((index) => (
                            <motion.div
                                key={index}
                                className="planning-card"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: planningInView ? 1 : 0, y: planningInView ? 0 : 50 }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            >
                                {/* Keep existing card content but wrap in motion.div */}
                                {index === 0 && (
                                    <>
                                        <i className="fas fa-map-marked-alt"></i>
                                        <h4>Popular Places</h4>
                                        <p>Discover the most sought-after destinations</p>
                                    </>
                                )}
                                {index === 1 && (
                                    <>
                                        <i className="fas fa-hotel"></i>
                                        <h4>Hotel Booking</h4>
                                        <p>Find perfect accommodations worldwide</p>
                                    </>
                                )}
                                {index === 2 && (
                                    <>
                                        <i className="fas fa-plane"></i>
                                        <h4>Flight Booking</h4>
                                        <p>Book your flights with best deals</p>
                                    </>
                                )}
                                {index === 3 && (
                                    <>
                                        <i className="fas fa-hiking"></i>
                                        <h4>Tours & Activities</h4>
                                        <p>Experience local adventures and tours</p>
                                    </>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

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