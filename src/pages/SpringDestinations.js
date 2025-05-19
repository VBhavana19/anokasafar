import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './SpringDestinations.css';

const SpringDestinations = () => {
    const destinations = [
        {
            name: "Cherry Blossoms in Japan",
            location: "Tokyo, Japan",
            image: "/spring-japan.jpg",
            description: "Experience the magical sakura season in Japan",
            highlights: ["Ueno Park", "Mount Yoshino", "Maruyama Park"]
        },
        {
            name: "Tulip Fields",
            location: "Amsterdam, Netherlands",
            image: "/spring-netherlands.jpg",
            description: "Witness the colorful tulip fields in full bloom",
            highlights: ["Keukenhof Gardens", "Noordoostpolder", "Flower Strip"]
        },
        {
            name: "Valley of Flowers",
            location: "Uttarakhand, India",
            image: "/spring-india.jpg",
            description: "Trek through the vibrant Himalayan valley",
            highlights: ["Alpine Meadows", "Rare Flowers", "Mountain Views"]
        }
    ];

    return (
        <div className="spring-destinations">
            <motion.header 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="spring-header"
            >
                <h1>SPRING DESTINATIONS</h1>
                <p>Discover the World's Most Beautiful Spring Getaways</p>
            </motion.header>

            <section className="destination-grid">
                {destinations.map((dest, index) => (
                    <motion.div 
                        key={dest.name}
                        className="destination-card"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="card-image">
                            <img src={dest.image} alt={dest.name} />
                            <div className="location-tag">{dest.location}</div>
                        </div>
                        <div className="card-content">
                            <h2>{dest.name}</h2>
                            <p>{dest.description}</p>
                            <div className="highlights">
                                <h3>Highlights</h3>
                                <ul>
                                    {dest.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                            <Link to={`/book/${dest.name}`} className="book-btn">
                                Plan Your Trip
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </section>
        </div>
    );
};

export default SpringDestinations;