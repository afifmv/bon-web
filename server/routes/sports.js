const express = require("express");
const Sports = require("../models/Sports.js");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const sports = await Sports.find();
    res.json(sports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { name, information, image } = req.body;
  const newSports = new Sports({
    name,
    information,
    image,
  });

  try {
    const savedSports = await newSports.save();
    res.status(201).json(savedSports);
    console.log("Saved");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
