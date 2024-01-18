const express = require("express");
const multer = require("multer");
const router = express.Router();
const Mentor = require("../models/Mentor");
const mongoose = require("mongoose");

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
      return res
        .status(201)
        .json({ msg: "Registration successful", id: newMentor._id });
    } catch (error) {
      res.send({
        msg: "Internal error",
      });
    }
  }
);

router.put("/api/mentor-personality/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { personality_score } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ msg: "Invalid mentor ID" });
    }

    // Find the mentor by id and update the personality_score
    const updatedMentor = await Mentor.findByIdAndUpdate(
      id,
      { $set: { personality_score } },
      { new: true } // This option returns the modified document
    );

    if (!updatedMentor) {
      return res.status(404).send({ msg: "Mentor not found" });
    }

    res.status(200).json({
      msg: "Personality score updated successfully",
      mentor: updatedMentor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

router.get("/api/getSingleMentor/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const mentor = await Mentor.findById(id);

    if (!mentor) {
      return res.status(205).send({
        msg: "Mentor is not registered",
      });
    }
    res.status(200).send({
      data: mentor,
    });
  } catch (error) {
    res.status(500).send({
      msg: "Internal Server Error",
      error,
    });
  }
});

router.get("/api/all", async (req, res) => {
  try {
    const mentor = await Mentor.find({});
    return res.status(200).send({
      data: mentor,
    });
  } catch (error) {
    res.status(500).send({
      msg: "Internal Server Error",
      error,
    });
  }
});
module.exports = router;
