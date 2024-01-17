const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    district: String,
    address: String,
    phone: String,
    points: {
      type: Number,
      default: 0,
    },
    carbon_footprint: {
      type: [
        {
          date: Date,
          amount: Number,
        },
      ],
      default: [],
    },
    events: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
