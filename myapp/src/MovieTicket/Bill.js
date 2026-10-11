import { useLocation, useNavigate } from "react-router-dom";

function Bill() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Booking Confirmed</h1>
      <h3>Name: {state.name}</h3>
      <h3>Tickets: {state.tickets}</h3>
      <h3>Price: ₹{state.price}</h3>
      <h3>Show: {state.show}</h3>
      <hr />
      <h2>Total: ₹{state.total}</h2>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

export default Bill;