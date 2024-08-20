const express = require("express");
const Information = require("../models/Information.js");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const information = await Information.find();
    res.json(information);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { name, information } = req.body;
  const newInformation = new Information({
    name,
    information,
  });

  try {
    const savedInformation = await newInformation.save();
    res.status(201).json(savedInformation);
    console.log("Sabed");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
