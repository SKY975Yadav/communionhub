import React, { useState } from 'react';

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'Community Prayer', date: '2023-12-01', location: 'City Hall', category: 'Religious' },
    { id: 2, title: 'Charity Run', date: '2023-12-05', location: 'Central Park', category: 'Charity' },
  ]);
  const [filter, setFilter] = useState('All');
  const [newEvent, setNewEvent] = useState({ title: '', date: '', location: '', category: '' });

  const handleAddEvent = (e) => {
    e.preventDefault();
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    setNewEvent({ title: '', date: '', location: '', category: '' });
  };

  const filteredEvents = filter === 'All' ? events : events.filter(event => event.category === filter);

  return (
    <div className="events-page">
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

      <h1>Event Listing</h1>
      <div className="filter-section">
        <label>Filter by Category:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>

      <div className="event-list">
        {filteredEvents.map(event => (
          <div key={event.id} className="event-card">
            <h2>{event.title}</h2>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Category:</strong> {event.category}</p>
          </div>
        ))}
      </div>

      <div className="add-event-section">
        <h2>Add New Event</h2>
        <form onSubmit={handleAddEvent}>
          <input
            type="text"
            placeholder="Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            required
          />
          <input
            type="date"
            placeholder="Date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={newEvent.location}
            onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
            required
          />
          <select
            value={newEvent.category}
            onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
            required
          >
            <option value="">Select Category</option>
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </select>
          <button type="submit">Add Event</button>
        </form>
      </div>
    </div>
  );
};

export default Events;