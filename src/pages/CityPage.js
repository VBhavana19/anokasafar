import React from 'react';
import { useParams } from 'react-router-dom';

const cityData = {
    CDG: {
        name: 'BALI · INDONESIA',
        description: 'Experience the beauty of Bali with our exclusive packages.',
        image: '/bali2.jpg'
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
        <div
            style={{
                maxWidth: 420,
                margin: '48px auto',
                background: '#fff',
                borderRadius: 18,
                boxShadow: '0 6px 32px rgba(0,0,0,0.10)',
                padding: 0,
                overflow: 'hidden',
                fontFamily: 'inherit'
            }}
        >
            <img
                src={city.image}
                alt={city.name}
                style={{
                    width: '100%',
                    height: 220,
                    objectFit: 'cover',
                    borderTopLeftRadius: 18,
                    borderTopRightRadius: 18
                }}
            />
            <div style={{ padding: '28px 24px 20px 24px' }}>
                <h1 style={{
                    fontSize: 28,
                    fontWeight: 700,
                    margin: 0,
                    color: '#232323',
                    letterSpacing: 1
                }}>{city.name}</h1>
                <p style={{
                    fontSize: 17,
                    color: '#555',
                    margin: '18px 0 32px 0',
                    lineHeight: 1.5
                }}>{city.description}</p>
                <button
                    style={{
                        width: '100%',
                        background: '#ff9800',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 8,
                        padding: '14px 0',
                        fontSize: 20,
                        fontWeight: 600,
                        cursor: 'pointer',
                        boxShadow: '0 2px 8px rgba(255,152,0,0.10)',
                        transition: 'background 0.2s'
                    }}
                    onClick={() => alert('Booking functionality coming soon!')}
                >
                    Book Now
                </button>
            </div>
        </div>
    );
}