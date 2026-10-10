const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
  // 1. Connect to MongoDB
  await client.connect();
  console.log("MongoDB Connected");

  // 2. Select database and collection
  const db = client.db("studentDB");
  const students = db.collection("students");

  // 3. INSERT - Add a student
  await students.insertOne({
    name: "Rahul",
    age: 20,
    course: "IT"
  });
  console.log("Student Added");

  // 4. FIND - Read all students
  const data = await students.find().toArray();
  console.log(data);

  // 5. UPDATE - Change age of Rahul
  await students.updateOne(
    { name: "Rahul" },
    { $set: { age: 21 } }
  );
  console.log("Student Updated");

  // 6. DELETE - Remove Rahul
  await students.deleteOne({ name: "Rahul" });
  console.log("Student Deleted");

  // 7. Close connection
  await client.close();
}

main();