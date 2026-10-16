import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";
import List from "./List";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;