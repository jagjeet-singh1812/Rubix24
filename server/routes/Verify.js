const express = require("express");
const router = express.Router();

const nodemailer = require("nodemailer");
const Mentor = require("../models/Mentor");

const sendMailforVerification = async (name, email, id) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_MAIL,
        pass: process.env.SENDER_PASSWORD,
      },
    });
    await transporter.sendMail({
      from: process.env.SENDER_MAIL,
      to: email,
      subject: "Email for verification",
      html: `<p>
          ${name} Click here to <a href="${process.env.BASE_FRONTEND_URL}/verifyforMentor/${id}">Verify</a>
        </p>`,
    });
  } catch (error) {
    console.log(error);
  }
};

router.post("/api/verify", async (req, res) => {
  try {
    const id = req.headers.authorization;
    const mentor_obj = await Mentor.findById(id);
    const { name, work_email, is_verified } = mentor_obj;
    console.log(mentor_obj);
    if (!work_email) {
      res.status(205).send({ msg: "Working email not found.." });
      return;
    }

    if (is_verified) {
      return res.status(202).send({
        mag: "You are verified",
      });
    }

    //check work_email

    sendMailforVerification(name, work_email, id);

    res.status(200).send({ msg: "Sent" });
  } catch (error) {
    return res.status(500).send({ msg: error });
  }
});

router.put("/api/verify-email/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Mentor.updateOne({ _id: id }, { $set: { is_verified: true } });
    return res.status(200).json({ msg: "Email Verified" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

module.exports = router;
