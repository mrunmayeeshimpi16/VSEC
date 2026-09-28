import { useLocation, useNavigate } from "react-router";

function Display() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state || {};

  return (
    <div className="display-container">
      <h2>Student Details</h2>
      <h3>Name: {data.name}</h3>
      <h3>Age: {data.age}</h3>
      <h3>Department: {data.department}</h3>
      <h3>Gender: {data.gender}</h3>
      <h3>Roll No: {data.rollNo}</h3>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

export default Display;