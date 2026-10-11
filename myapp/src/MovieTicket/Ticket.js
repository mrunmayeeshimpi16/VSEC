import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Ticket.css";

function Ticket() {
  const [name, setName] = useState("");
  const [tickets, setTickets] = useState("");
  const [price, setPrice] = useState("");
  const [show, setShow] = useState("10:00 AM");

  const navigate = useNavigate();

  const book = () => {
    const base = tickets * price;
    let total;

    if (show === "10:00 AM") total = base * 0.8;
    else if (show === "10:00 PM") total = base * 1.2;
    else total = base;

    navigate("/bill", {
      state: { name, tickets, price, show, total }
    });
  };

  return (
    <div className="container">
      <h1>Movie Ticket Booking</h1>

      <label>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <label>Tickets:</label>
      <input type="number" value={tickets} onChange={(e) => setTickets(e.target.value)} />

      <label>Price:</label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

      <label>Show Time:</label>
      <select value={show} onChange={(e) => setShow(e.target.value)}>
        <option>10:00 AM</option>
        <option>4:00 PM</option>
        <option>10:00 PM</option>
      </select>

      <button onClick={book}>Book Tickets</button>
    </div>
  );
}

export default Ticket;