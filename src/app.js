const express = require("express");
const cors = require("cors");
const userroutes =  require("./routes/userRoutes.js");

const app = express();

// Middleware
app.use(cors());

app.use(express.json());

// Health Check API
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "SmartStudy AI API running"
  });
});

app.use("/api/auth", userroutes);

module.exports = app;