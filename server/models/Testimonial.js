const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testimonialScheme = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  testimonial: {
    type: String,
    required: true,
  },
  job: {
    type: String,
  },
  pledgeYear: {
    type: Number,
  },
  gradYear: {
    type: Number,
  },
  imageLink: {
    type: String,
    required: true,
  },
});

const Testimonial = mongoose.model("Testimonial", testimonialScheme);

module.exports = Testimonial;
