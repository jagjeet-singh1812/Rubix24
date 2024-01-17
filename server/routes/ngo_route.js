const Ngo = require("../models/ngo_schema");
const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(404).json("User not found");
    } else {
      //   console.log(password, user.password);
      console.log(user);
      if (password === user.password) {
        const payload = {
          id: user._id,
          name: user.name,
          email: user.email,
        };
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
        res.status(200).json({ user, accessToken, role: "ngo" });
      } else {
        res.status(401).json("Wrong password");
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/register", async (req, res) => {
  try {
    const { name, email, ngo_id, password, district, address } = req.body;
    if (!name || !email || !ngo_id || !password || !district || !address) {
      return res.status(400).json({ msg: "Not all fields have been entered." });
    }
    const user = await Ngo.create({
      name,
      email,
      ngo_id,
      password,
      district,
      address,
    });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
