const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sportsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  information: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
});

const Sports = mongoose.model("Sports", sportsSchema);

module.exports = Sports;
