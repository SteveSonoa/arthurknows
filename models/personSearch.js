const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSearchSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  company: String,
  city: String,
  state: String,
  date: { type: Date, default: Date.now }
});

const PersonSearch = mongoose.model("PersonSearch", personSearchSchema);

module.exports = PersonSearch;
