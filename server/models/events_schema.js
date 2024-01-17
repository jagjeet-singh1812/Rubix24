const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: Date,
  location: String,
  isVirtual: Boolean,
  photos: String,
});

module.exports = mongoose.model("Event", eventSchema);
