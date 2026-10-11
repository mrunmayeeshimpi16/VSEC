import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ticket from "./Ticket";
import Bill from "./Bill";

function MovieApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ticket />} />
        <Route path="/bill" element={<Bill />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MovieApp;