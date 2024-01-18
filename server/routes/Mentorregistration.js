const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const Mentor = require("../models/Mentor");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./uploads`);
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});
const upload = multer({ storage: storage });

// var upload = multer({ dest: "uploads/" });

router.post(
  "/api/auth/register",
  upload.single("DisplayProfilePic"),
  async (req, res) => {
    try {
      const {
        Fullname,
        DisplayPassword,
        DisplayEmail,
        DisplayProfilePic,
        Bio,
        linkdin_url,
        twitter_url,
        github_url,
        premimum_price,
        standard_price,
        lite_price,
        skills,
      } = req.body;

      console.log("Backend:",req.body);

      //   const { filename, path } = req.files["DisplayProfilePic"][0];

      console.log(req.files);

      //   const newMentor = new Mentor({
      //     name: Fullname,
      //     email: DisplayEmail,
      //     password: DisplayPassword,
      //     profile_pic: {
      //       filename:filename,
      //       path: path,
      //     },
      //     work_email: DisplayEmail,
      //     bio: Bio,
      //     linkdin_url: linkdin_url,
      //     twitter_url: twitter_url,
      //     github_url: github_url,
      //     premium_price: premimum_price,
      //     standard_price: standard_price,
      //     lite_price: lite_price,
      //     skills: skills, // Assuming skills are already an array
      //   });

      //   const savedMentor = await newMentor.save();

       res.status(201).json({msg:"Success"});
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
