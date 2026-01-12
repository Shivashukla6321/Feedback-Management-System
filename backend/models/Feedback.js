const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  mood: {
    type: String,
    enum: ["happy", "ok", "sad"],
    required: true
  },
  reason: {
    type: String,
    required: function () {
      return this.mood === "sad";
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Feedback", feedbackSchema);
