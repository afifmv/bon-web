const express = require("express");
const Executive = require("../models/Executive.js");
const router = express.Router();

// Get all experiences
router.get("/", async (req, res) => {
  try {
    const executives = await Executive.find();
    res.json(executives);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST endpoint
router.post("/", async (req, res) => {
  const { name, imageLink, faculty, officer, role, rush } = req.body;
  const newExecutive = new Executive({
    name,
    imageLink,
    faculty,
    officer,
    role,
    rush,
  });

  try {
    const savedExecutive = await newExecutive.save();
    res.status(201).json(savedExecutive);
    console.log("Sabed");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
