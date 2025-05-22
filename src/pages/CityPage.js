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

    if (!city) return <div>City not found.</div>;

    return (
        <div style={{ maxWidth: 700, margin: '40px auto', padding: 24, background: '#fff', borderRadius: 12 }}>
            <h1>{city.name}</h1>
            <img src={city.image} alt={city.name} style={{ width: '100%', borderRadius: 8, marginBottom: 24 }} />
            <p style={{ fontSize: 20 }}>{city.description}</p>
        </div>
    );
}