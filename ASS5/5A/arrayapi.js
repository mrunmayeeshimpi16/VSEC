const express = require("express");
const app = express();

app.use(express.json());

let students = [
  { id: 1, name: "Rahul", age: 20, department: "IT", marks: 80 },
  { id: 2, name: "Priya", age: 21, department: "CS", marks: 90 },
  { id: 3, name: "Amit", age: 22, department: "IT", marks: 75 },
  { id: 4, name: "Sneha", age: 20, department: "CS", marks: 88 }
];

// GET all students
app.get("/abc", (req, res) => {
  res.send(students);
});

// POST - add a new student
app.post("/students", (req, res) => {
  students.push(req.body);
  res.send("Record added successfully");
});

// PUT - update a student by ID
app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find(s => s.id === id);

  if (student) {
    student.name = req.body.name;
    student.age = req.body.age;
    student.department = req.body.department;
    student.marks = req.body.marks;
    res.send("Student updated successfully");
  } else {
    res.send("Student not found");
  }
});

app.listen(3000);