const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/feedbackDB")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log(err));

// API routes
app.use("/api/feedback", feedbackRoutes);

// SERVE FRONTEND (LAN ACCESS)
app.use(express.static(path.join(__dirname, "../frontend")));

// Start server on local network
app.listen(5000, "0.0.0.0", () => {
  console.log("🚀 Server running on local network");
  console.log("👉 Feedback: http://192.168.1.14:5000/feedback.html");
  console.log("👉 Admin: http://192.168.1.14:5000/admin.html");
});
