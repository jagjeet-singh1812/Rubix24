const mongoose = require("mongoose");

const ngoSchema = new mongoose.Schema(
  {
    name: String,
    ngo_id: String,
    email: String,
    password: String,
    district: String,
    address: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ngo", ngoSchema);
