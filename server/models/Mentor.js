const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    // required: true,
    // unique: true,
  },
  password: {
    type: String,
    // required: true,
  },
  coverImage: {
    type: String,
  },
  work_email: {
    type: String,
    // required: true,
    // unique:true,
  },
  is_verified: {
    type: Boolean,
    default: false,
  },
  job_title: {
    type: String,
    enum: ["Academic", "Tech", "Career"],
    // required: true,
  },
  skills: {
    type: [String], // Array of skills
    // required: true
  },
  bio: {
    type: String,
  },
  linkedin_url: {
    type: String,
  },
  twitter_url: {
    type: String,
  },
  github_url: {
    type: String,
  },
  personality_score: {
    type: Number,
    default:0,
  },
  reviews: {
    type: [String], // Array of review strings
  },
  slots: {
    type: [Date], // Array of time slots
  },
  subscribed: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mentee" }], // Array of Mentee IDs
  },
  premium_price: {
    type: Number,
  },
  standard_price: {
    type: Number,
  },
  lite_price: {
    type: Number,
  },
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
