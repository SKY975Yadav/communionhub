import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <header>
        <div className="logo">Communion Hub</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>

      <section className="about-section">
        <h1>About Communion App</h1>
        <p>
          Welcome to the Communion App, a platform dedicated to connecting people of all faiths and interests through meaningful events and community support. Our mission is to foster unity, understanding, and collaboration among diverse communities.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to create a space where individuals from different backgrounds can come together to share experiences, learn from one another, and build lasting connections. We believe that by celebrating our differences, we can create a more inclusive and compassionate world.
        </p>

        <h2>Our Vision</h2>
        <p>
          We envision a world where people of all faiths and interests can collaborate to address common challenges, support one another, and celebrate the richness of human diversity. Through the Communion App, we aim to make this vision a reality.
        </p>

        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <h3>G SaiKrishna</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <h3>G Saikrishna</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <h3>G Sanjeev Kumar</h3>
            <p>Community Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;