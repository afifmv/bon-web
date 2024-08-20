const express = require("express");
const Testimonial = require("../models/Testimonial.js");
const router = express.Router();

// Get all experiences
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const { name, testimonial, job, pledgeYear, gradYear, imageLink } = req.body;
  const newTestimonial = new Testimonial({
    name,
    testimonial,
    job,
    pledgeYear,
    gradYear,
    imageLink,
  });

  try {
    const savedTestimonial = await newTestimonial.save();
    res.status(201).json(savedTestimonial);
    console.log("Saved");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
