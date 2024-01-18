const mongoose = require("mongoose");
const Mentor = require("./Mentor");

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  topicName: {
    type: String,
    required: true,
  },
  dateEvent: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  organizer:{
    type:mongoose.Types.ObjectId,
    ref:"Mentor"
  }
});

const EventModel = mongoose.model("Event", eventSchema);

module.exports = EventModel;
