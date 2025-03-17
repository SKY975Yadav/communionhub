import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <header>
        <div className="logo">Communion App</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <h1>Connecting People Across Faiths & Interests</h1>
        <p>Connecting people of all faiths through events and community support.</p>
        <button onClick={() => navigate('/events')}>Explore Events</button>
      </section>
    </div>
  );
};

export default Home;