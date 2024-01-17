const User = require("../models/user_schema");
const Post = require("../models/post_schema");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

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
        res.status(200).json({ user, accessToken, role: "user" });
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
    const { name, email, password, district, address, phone } = req.body;
    if (!password || !email || !name || !district || !address || !phone) {
      return res.status(400).json({ msg: "Not all fields have been entered." });
    }
    const user = await User.create({
      name,
      email,
      password,
      district,
      address,
      phone,
    });

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/register_event", async (req, res) => {
  try {
    const { id, event_id } = req.body;
    console.log(id, event_id);
    const user = await User.findByIdAndUpdate(
      id,
      { $push: { events: event_id } },
      { new: true }
    );
    res.status(200).json(user);
  } catch (err) {}
});

router.get("/get_event_registered", async (req, res) => {
  try {
    const { id } = req.body;
    const user = await User.findById(id);
    res.status(200).json(user.events);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/get_all_events", async (req, res) => {
  try {
    const events = await User.find({});
    res.status(200).json(events);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// show all post for a user
router.get("/get_all_posts", async (req, res) => {
  try {
    const posts = await Posts.find({});
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
