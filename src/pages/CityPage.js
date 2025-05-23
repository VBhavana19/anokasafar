import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './CityPage.css';

const cityData = {
    CDG: {
        name: 'BALI · INDONESIA',
        description: 'This is the space to describe the service. Focus the description on how customers or clients can benefit from using this service; explain how it solves a problem, or makes life easier or more enjoyable. Be sure to include all the relevant details users will want to know, like pricing, duration, and location.',
        image: '/bali2.jpg',
        tags: ['City', 'Food', 'Shopping']
    },
    NRT: {
        name: 'KERALA · INDIA',
        description: 'Explore the backwaters and lush greenery of Kerala.',
        image: '/Kerala.jpg'
    },
    DPS: {
        name: 'HANOI · VIETNAM',
        description: 'Discover the vibrant culture of Hanoi.',
        image: '/hanoi2.jpg'
    },
    FLR: {
        name: 'TBILISI · GEORGIA',
        description: 'Enjoy the charm of Tbilisi, Georgia.',
        image: '/Tbilisi.jpg'
    }
};

export default function CityPage() {
    const { code } = useParams();
    const city = cityData[code];

    if (!city) return <div style={{ textAlign: 'center', marginTop: 60, fontSize: 22 }}>City not found.</div>;

    return (
        <div className="destination-details">
            <div className="destination-header">
                <div className="header-content">
                    <h1>{city.name}</h1>
                    <div className="destination-code">{code}</div>
                </div>
            </div>
            
            <div className="destination-content">
                <div className="description-section">
                    <h2>Description</h2>
                    <p>{city.description}</p>
                    
                    <div className="tags-section">
                        <h3>Tags</h3>
                        <div className="tags">
                            {city.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="action-buttons">
                    <button className="book-now">
                        BOOK NOW
                        <span className="arrow">→</span>
                    </button>
                    <Link to="/" className="all-destinations">
                        ALL DESTINATION
                        <span className="arrow">←</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}