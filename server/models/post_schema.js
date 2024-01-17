const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  category: String,
  user_id: String,
  user_name: String,
});

module.exports = mongoose.model("Post", postSchema);
