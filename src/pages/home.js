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

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            const flightIcon = document.querySelector('.flight-icon');
            if (flightIcon) {
                const maxMove = window.innerWidth - 50; // Adjust 50 based on icon size
                const move = (maxMove * scrollPercent) / 100;
                flightIcon.style.setProperty('--scroll', `${move}px`);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);









    const cityTickets = [
        {
            place: 'BALI · INDONESIA',
            code: 'CDG',
            image: '/bali2.jpg',
        },
        {
            place: 'KERALA · INDIA',
            code: 'NRT',
            image: '/Kerala.jpg',
        },
        {
            place: 'HANOI · VIETNAM',
            code: 'DPS',
            image: '/hanoi2.jpg',
        },
        {
            place: 'TBILISI · GEORGIA',
            code: 'FLR',
            image: '/Tbilisi.jpg',
        },
    ];
    
    function TicketGrid() {
      return (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '24px',
          padding: '40px 0 0 0',
          borderTop: '4px solid #ededed',
          background: '#f7f7f7'
        }}>
          {cityTickets.map((item, idx) => (
            <div key={idx} style={{
              width: 420,
              background: '#f6f6f6',
              borderRadius: 8,
              border: '2px solid #eaeaea',
              boxShadow: '0 4px 18px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              marginBottom: 24,
            }}>
              <div style={{ padding: 0, textAlign: 'center', background: '#ededed' }}>
                <h2 style={{
                  padding: '18px 0 0 0',
                  fontSize: 30,
                  fontWeight: 500,
                  margin: 0,
                  letterSpacing: 1,
                  color: '#313131'
                }}>{item.place}</h2>
              </div>
              <img
                src={item.image}
                alt={item.place}
                style={{ width: '100%', height: 340, objectFit: 'cover', border: 0 }}
              />
              <div style={{
                padding: '18px 28px 0 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ fontSize: 44, fontWeight: 400, fontFamily: 'monospace' }}>{item.code}</div>
                <div style={{
                  width: 120,
                  height: 32,
                  background: 'repeating-linear-gradient(90deg, #232323 0 7px, transparent 7px 12px)',
                  borderRadius: 3,
                  marginLeft: 16
                }} />
              </div>
              <div style={{
                borderTop: '2px dashed #e1e1e1',
                margin: '16px 0 0 0',
                padding: '14px 28px 14px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: 26,
                color: '#474747'
              }}>
                <span style={{ fontSize: 24 }}>EXPLORE</span>
                <span style={{
                  fontSize: 33,
                  border: '2px solid #232323',
                  borderRadius: '50%',
                  width: 36,
                  height: 36,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>&#8594;</span>
              </div>
            </div>
          ))}
        </div>
      );
    }        








    return (
        <div className="home">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">Anokha safar</Link>
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
                             <li className="nav-item">
                                <Link className="nav-link" to="/test">Test</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <h1>DISCOVER UNIQUE TRAVEL EXPERIENCES WITH ANOKA SAFAR</h1>
                      
                        <Link to="/explore" className="btn btn-explore">EXPLORE</Link>
                    </div>
                </div>
            </header>

            <div className="flight-path-container">
                <div className="flight-path">
                    <div className="flight-icon">
                        <i className="fas fa-plane"></i>
                    </div>
                    <div className="path-line"></div>
                </div>
            </div>

            

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
             <TicketGrid />




            
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
                                <Link to="/spring-destinations" className="season-btn">Explore Spring</Link>
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