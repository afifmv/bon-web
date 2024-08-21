const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const athletesSchema = new Schema({
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

const Athletes = mongoose.model("Athletes", athletesSchema);

module.exports = Athletes;
