const express = require("express");
const multer = require("multer");
const router = express.Router();
const Mentor = require("../models/Mentor");
const jwt = require("jsonwebtoken");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, `./uploads`);
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    return cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/api/auth/register",
  upload.single("coverImage"),
  async (req, res) => {
    try {
      const {
        name,
        password,
        email,
        work_email,
        bio,
        linkdin_url,
        twitter_url,
        github_url,
        premium_price,
        standard_price,
        lite_price,
        skills,
      } = req.body;

      const newMentor = new Mentor({
        name,
        password,
        email,
        work_email,
        coverImage: req.file.filename,
        is_verified: false,
        bio,
        linkdin_url,
        twitter_url,
        github_url,
        personality_score: 0,
        reviews: [],
        slots: [],
        subscribed: [],
        premium_price,
        standard_price,
        lite_price,
        skills,
      });

      await newMentor.save();
      return res.status(201).json({ msg: "Registration successful",id: newMentor._id});
    } catch (error) {
      res.send({
        msg: "Internal error",
      });
    }
  }
);

router.post('/auth/login', async (req, res) => {
  try{
    const {email, password} = req.body;
    const mentor = Mentor.find({email: email});
    if(!mentor){
      return res.status(404).json({msg: "User not found"});
    }
    if(mentor.password !== password){
      return res.status(401).json({msg: "Invalid credentials"});
    }
    const token = jwt.sign({id: mentor._id, type: "mentor"}, process.env.SECRET_KEY);
    return res.status(200).json({token});
  }catch(err){
    console.log(err);
    res.status(500).json({error: String(err)});
  }
})

module.exports = router;
