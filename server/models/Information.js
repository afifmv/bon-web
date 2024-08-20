const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const informationSchema = new Schema({
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
});

const Information = mongoose.model("Information", informationSchema);

module.exports = Information;
