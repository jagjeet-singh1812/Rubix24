const express = require("express");
const { connectDB } = require("./db/connectDb");
require("dotenv").config();

const app = express();
const cors = require("cors");
app.use("/uploads", express.static("./uploads"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/mentor", require('./routes/mentor'));
app.use("/mentee", require('./routes/mentee'));
app.use("/common", require("./routes/api"));

const port = process.env.PORT || 8090;

(async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server running at ${port}..`);
    });
  } catch (error) {
    console.log(error);
  }
})();
