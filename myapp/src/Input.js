import { useState } from "react";
import { useNavigate } from "react-router";
import "./Input.css";

function Input() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    department: "",
    gender: "",
    rollNo: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <h2>Student Details</h2>

      <div className="field">
        <label>Name:</label>
        <input name="name" onChange={handleChange} />
      </div>

      <div className="field">
        <label>Age:</label>
        <input name="age" onChange={handleChange} />
      </div>

      <div className="field">
        <label>Department:</label>
        <input name="department" onChange={handleChange} />
      </div>

      <div className="field">
        <label>Gender:</label>
        <input name="gender" onChange={handleChange} />
      </div>

      <div className="field">
        <label>Roll No:</label>
        <input name="rollNo" onChange={handleChange} />
      </div>

      <button onClick={() => navigate("/display", { state: form })}>
        Next
      </button>
    </div>
  );
}

export default Input;