const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: 
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  email: {type: String, required: true},
  company: { type: String, required: false },
  gender: { type: String, required: false },
  title: { type: String, required: false },
  google_oAuth_token: { type: String, required: false },
  google_calendar_token: { type: String, required: false },
  billingTier: { type: Number, required: false },
  sarcasm: { type: Number, required: false },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
