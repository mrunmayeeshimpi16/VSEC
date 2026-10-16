const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const client = new MongoClient("mongodb://127.0.0.1:27017");
let bookings;

async function start() {
  await client.connect();
  console.log("MongoDB Connected");
  bookings = client.db("eventDB").collection("bookings");

  // CREATE
  app.post("/bookings", async (req, res) => {
    await bookings.insertOne(req.body);
    res.send("Booking added");
  });

  // READ
  app.get("/bookings", async (req, res) => {
    const data = await bookings.find().toArray();
    res.json(data);
  });

  // UPDATE
  app.put("/bookings/:id", async (req, res) => {
    await bookings.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );
    res.send("Booking updated");
  });

  // DELETE
  app.delete("/bookings/:id", async (req, res) => {
    await bookings.deleteOne({ _id: new ObjectId(req.params.id) });
    res.send("Booking deleted");
  });

  app.listen(5000, () => console.log("Server running on port 5000"));
}

start();