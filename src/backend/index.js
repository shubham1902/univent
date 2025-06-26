const express = require("express");
const eventRoutes = require("./routes/eventRoute");

const app = express();
app.use("/api/events", eventRoutes);
app.use("/api/events", eventRoutes);
const connectDB = require("./db");
require("dotenv").config();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hey what's up");
  console.log("hello world");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

connectDB();
