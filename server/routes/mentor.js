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
    const mentor = await Mentor.findOne({email: email});
    if(!mentor){
      return res.status(404).json({msg: "User not found"});
    }
    // console.log(mentor);
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

router.get("/getMentor/:id", async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id);
    return res.status(200).json({ mentor });
  } catch (error) {
    return res.status(500).json({ error: String(error) });
  }
});

router.get("/getMentors", async (req, res) => {
  try {
    const { skills, lite_price_min, lite_price_max, job_title, is_verified } = req.query;

    // console.log(req.query);

    // Building the filter object based on provided query parameters
    const filter = {};
    if (skills && skills.length>0) filter.skills = { $in: skills.split(',') };
    if (lite_price_min !== undefined) filter.lite_price = { $gte: parseInt(lite_price_min) };
    if (lite_price_max !== undefined) {
      if (!filter.lite_price) filter.lite_price = {};
      filter.lite_price.$lte = parseInt(lite_price_max);
    }
    if (job_title && job_title.length>0) filter.job_title = { $in: job_title.split(',') };
    if (is_verified !== undefined) filter.is_verified = Boolean(is_verified);

    // Query the mentors collection with the constructed filter
    const mentors = await Mentor.find(filter);

    res.json(mentors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
