const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const logRoutes = require("./routes/logRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);
mongoose.connect("mongodb://localhost:27017/time_tracking", {
  
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/logs", logRoutes);

// Serve the dashboard files
const dashboardPath = path.join(__dirname, "../dashboard");
app.use("/analytics-dashboard", express.static(dashboardPath));

app.listen(3000, () => console.log("Server running on port 3000"));
