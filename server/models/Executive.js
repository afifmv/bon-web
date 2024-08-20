const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const executiveSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  imageLink: {
    type: String,
    required: true,
    unique: true,
  },
  faculty: {
    type: String,
    required: true,
  },
  officer: {
    type: Boolean,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  rush: {
    type: Boolean,
    required: true,
  },
});

const Executive = mongoose.model("Executive", executiveSchema);

module.exports = Executive;
