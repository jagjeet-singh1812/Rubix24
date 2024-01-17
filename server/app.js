const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.use(require("cors")());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/reset", async (req, res) => {
  await require("./seed");
  res.send("Database reset");
});

app.use("/user", require("./routes/user_route"));
app.use("/ngo", require("./routes/ngo_route"));

(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Abhii:123@cluster0.0quvycf.mongodb.net/CodeStorm?retryWrites=true&w=majority"
    );
    const port = process.env.PORT || 8000;
    app.listen(port, "0.0.0.0", () => {
      console.log(`Server started and running on port ${port}.......`);
    });
  } catch (error) {
    console.log(error);
  }
})();
