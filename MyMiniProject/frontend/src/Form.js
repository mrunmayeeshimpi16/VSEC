import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const location = useLocation();
  const edit = location.state || {};

  const [form, setForm] = useState({
    name: edit.name || "",
    email: edit.email || "",
    phone: edit.phone || "",
    event: edit.event || "Wedding",
    venue: edit.venue || "Indoor Hall",
    package: edit.package || "Silver",
    addons: edit.addons || "Photographer",
    guests: edit.guests || "",
    date: edit.date || "",
    description: edit.description || ""
  });

  // Base price by event
  const basePrices = {
    Wedding: 50000,
    Birthday: 15000,
    Conference: 30000,
    Party: 20000,
    Workshop: 10000
  };

  // Multiplier by package
  const multipliers = { Silver: 1, Gold: 1.5, Platinum: 2 };

  // Addon price
  const addonPrices = {
    Photographer: 8000,
    "Live Music": 5000,
    "Live Anchor": 10000,
    "Customized Cake": 3500,
    Fireworks: 7000,
    "Balloon Decoration": 3000
  };

  // Calculate total
  const total =
    basePrices[form.event] * multipliers[form.package] +
    addonPrices[form.addons];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = edit._id
      ? "http://localhost:5000/bookings/" + edit._id
      : "http://localhost:5000/bookings";

    await fetch(url, {
      method: edit._id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, total })
    });

    navigate("/list");
  };

  return (
    <div className="page-container">
      <div className="card">
        <h1>✨ Event Booking System</h1>
        <p className="subtitle">
          {edit._id ? "Update booking details" : "Manage every celebration with ease"}
        </p>

        <form onSubmit={handleSubmit}>
          <h4 className="section-title">Customer Information</h4>

          <label>Full Name</label>
          <input name="name" value={form.name} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />

          <label>Phone Number</label>
          <input name="phone" value={form.phone} onChange={handleChange} required />

          <h4 className="section-title">Event Details</h4>

          <label>Event Type</label>
          <select name="event" value={form.event} onChange={handleChange}>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Conference</option>
            <option>Party</option>
            <option>Workshop</option>
          </select>

          <label>Venue Type</label>
          <select name="venue" value={form.venue} onChange={handleChange}>
            <option>Indoor Hall</option>
            <option>Outdoor Lawn</option>
            <option>Banquet Hall</option>
            <option>Farmhouse</option>
            <option>Rooftop</option>
          </select>

          <label>Package</label>
          <select name="package" value={form.package} onChange={handleChange}>
            <option>Silver</option>
            <option>Gold</option>
            <option>Platinum</option>
          </select>

          <label>Add-ons</label>
          <select name="addons" value={form.addons} onChange={handleChange}>
            <option>Photographer</option>
            <option>Live Music</option>
            <option>Live Anchor</option>
            <option>Customized Cake</option>
            <option>Fireworks</option>
            <option>Balloon Decoration</option>
          </select>

          <label>Number of Guests</label>
          <input type="number" name="guests" value={form.guests} onChange={handleChange} required />

          <label>Event Date</label>
          <input type="date" name="date" value={form.date} onChange={handleChange} required />

          <label>Special Requests</label>
          <textarea name="description" value={form.description} onChange={handleChange} rows="3" />

          <div className="total-box">
            Estimated Cost: ₹{total.toLocaleString()}
          </div>

          <button type="submit">
            {edit._id ? "Update Booking" : "Book Event"}
          </button>
        </form>

        <button className="link-btn" onClick={() => navigate("/list")}>
          View All Bookings →
        </button>
      </div>
    </div>
  );
}

export default Form;