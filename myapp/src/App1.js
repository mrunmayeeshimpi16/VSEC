import { BrowserRouter, Routes, Route } from "react-router";
import Input from "./Input";
import Display from "./Display";

function App1() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Input />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App1;