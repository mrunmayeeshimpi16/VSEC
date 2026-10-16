import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function List() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const loadBookings = async () => {
    const res = await fetch("http://localhost:5000/bookings");
    const data = await res.json();
    setBookings(data);
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const deleteBooking = async (id) => {
    if (!window.confirm("Delete this booking?")) return;
    await fetch("http://localhost:5000/bookings/" + id, { method: "DELETE" });
    loadBookings();
  };

  return (
    <div className="page-container">
      <div className="card">
        <h1>All Bookings</h1>
        <p className="subtitle">
          {bookings.length === 0
            ? "No bookings yet"
            : `${bookings.length} booking(s) recorded`}
        </p>

        <button className="link-btn" onClick={() => navigate("/")}>
          ← Add New Booking
        </button>

        <div className="list">
          {bookings.length === 0 ? (
            <p className="empty">No bookings yet.</p>
          ) : (
            bookings.map((b) => (
              <div className="booking-item" key={b._id}>
                <h3>{b.name} — {b.event}</h3>
                <p>📍 {b.venue}</p>
                <p>📦 {b.package} Package</p>
                <p>➕ {b.addons}</p>
                <p>📧 {b.email}</p>
                <p>📞 {b.phone}</p>
                <p>👥 {b.guests} guests</p>
                <p>📅 {b.date}</p>
                {b.description && <p>📝 {b.description}</p>}
                <p className="total-line">
  💰 Total: ₹{b.total ? b.total.toLocaleString() : "N/A"}
</p>

                <div className="actions">
                  <button className="edit-btn" onClick={() => navigate("/", { state: b })}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => deleteBooking(b._id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default List;