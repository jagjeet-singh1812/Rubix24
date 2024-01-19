const express = require("express");
const { connectDB } = require("./db/connectDb");
require("dotenv").config();

const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.static("uploads"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/mentor", require('./routes/mentor'));
app.use("/mentee", require('./routes/mentee'));
app.use("/common", require("./routes/api"));
app.use("/",require('./routes/Mentorregistration'))
app.use(require('./routes/Eventroutes'))
app.use(require('./routes/Verify'))

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
