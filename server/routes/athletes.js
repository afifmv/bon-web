const express = require("express");
const Athletes = require("../models/Athletes.js");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const athletes = await Athletes.find();
    res.json(athletes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { name, information, image } = req.body;
  const newAthlete = new Athletes({
    name,
    information,
    image,
  });

  try {
    const savedAthlete = await newAthlete.save();
    res.status(201).json(savedAthlete);
    console.log("Saved");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
