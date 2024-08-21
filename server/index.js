const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Executive = require("./models/Executive");
const Information = require("./models/Information");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
const testimonialRoutes = require("./routes/testimonial.js");
const executiveRoutes = require("./routes/executive.js");
const informationRoutes = require("./routes/information.js");
const sportsRoutes = require("./routes/sports.js");
const athletesRoutes = require("./routes/athletes.js");

app.use("/api/testimonial", testimonialRoutes);
app.use("/api/executive", executiveRoutes);
app.use("/api/information", informationRoutes);
app.use("/api/sports", sportsRoutes);
app.use("/api/athletes", athletesRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
