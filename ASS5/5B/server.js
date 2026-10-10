const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let students;

async function main() {
  await client.connect();
  console.log("MongoDB Connected");

  students = client.db("studentDB").collection("students");

  // CREATE
  app.post("/students", async (req, res) => {
    await students.insertOne(req.body);
    res.send("Student Added");
  });

  // READ
  app.get("/students", async (req, res) => {
    const data = await students.find().toArray();
    res.json(data);
  });

  // UPDATE
  app.put("/students/:id", async (req, res) => {
    await students.updateOne(
      { id: Number(req.params.id) },
      { $set: req.body }
    );
    res.send("Student Updated");
  });

  app.listen(3000);
  console.log("Server running on port 3000");
}

main();