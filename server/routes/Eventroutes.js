const express = require("express");
const router = express.Router();
const EventModel = require("../models/Event");
const Mentor = require("../models/Mentor");


router.post("/api/event", async (req, res) => {
  try {
    const { eventName, topicName, dateEvent, startTime, endTime } = req.body;
    console.log(req.body);
    const organizerId = req.headers.authorization; // Assuming this is the Mentor's ID

    // Check if the organizer (Mentor) exists
    const organizer = await Mentor.findById(organizerId);
    if (!organizer) {
      return res.status(404).json({ error: "Organizer not found" });
    }

    // Create a new event
    const newEvent = new EventModel({
      eventName,
      topicName,
      dateEvent,
      startTime,
      endTime,
      organizer: organizerId,
    });

    // Save the event to the database
    const savedEvent = await newEvent.save();

    // Optionally, you can update the organizer's events array or perform any other necessary actions

    res.status(201).json(savedEvent);
  } catch (error) {
    console.error("Error inserting event:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;