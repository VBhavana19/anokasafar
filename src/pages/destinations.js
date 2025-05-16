import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './destinations.css';

const Destinations = () => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const cities = [
        {
            name: "Paris",
            country: "France",
            image: "/paris.jpg",
            description: "Experience the city of love and lights",
            highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame"]
        },
        {
            name: "Tokyo",
            country: "Japan",
            image: "/tokyo.jpg",
            description: "Where tradition meets innovation",
            highlights: ["Shibuya Crossing", "Mount Fuji", "Imperial Palace"]
        },
        {
            name: "Venice",
            country: "Italy",
            image: "/venice.jpg",
            description: "Float through the city of canals",
            highlights: ["Grand Canal", "St. Mark's Basilica", "Rialto Bridge"]
        },
        {
            name: "Dubai",
            country: "UAE",
            image: "/dubai.jpg",
            description: "Experience luxury in the desert",
            highlights: ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall"]
        },
        {
            name: "New York",
            country: "USA",
            image: "/newyork.jpg",
            description: "The city that never sleeps",
            highlights: ["Times Square", "Central Park", "Statue of Liberty"]
        },
        {
            name: "Sydney",
            country: "Australia",
            image: "/sydney.jpg",
            description: "Harbor city with iconic landmarks",
            highlights: ["Opera House", "Harbour Bridge", "Bondi Beach"]
        }
    ];

    return (
        <div className="destinations-page">
            <header className="destinations-hero">
                <div className="hero-content">
                    <h1>Explore Dream Destinations</h1>
                    <p>Discover the world's most captivating cities</p>
                </div>
            </header>

            <section className="cities-grid" ref={ref}>
                {cities.map((city, index) => (
                    <motion.div
                        className="city-card"
                        key={city.name}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="city-image">
                            <img src={city.image} alt={city.name} />
                            <div className="city-overlay">
                                <h3>{city.name}</h3>
                                <span>{city.country}</span>
                            </div>
                        </div>
                        <div className="city-info">
                            <p>{city.description}</p>
                            <div className="highlights">
                                <h4>Highlights</h4>
                                <ul>
                                    {city.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                            <button className="explore-btn">Explore {city.name}</button>
                        </div>
                    </motion.div>
                ))}
            </section>

            <section className="destination-features">
                <div className="feature">
                    <i className="fas fa-globe-americas"></i>
                    <h3>Worldwide Destinations</h3>
                    <p>Explore cities across all continents</p>
                </div>
                <div className="feature">
                    <i className="fas fa-ticket-alt"></i>
                    <h3>Exclusive Deals</h3>
                    <p>Get the best prices for your dream trip</p>
                </div>
                <div className="feature">
                    <i className="fas fa-concierge-bell"></i>
                    <h3>Premium Service</h3>
                    <p>24/7 support during your journey</p>
                </div>
            </section>
        </div>
    );
};

export default Destinations;