const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  course: { type: String, required: true },
  institute: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Institute",
    required: true,
  },
  olevelSubjects: [{ type: String }],
  jambSubjects: [{ type: String }],
  compulsoryJambSubjects: [{ type: String }],
  compulsoryOlevelSubjects: [{ type: String }],
});

module.exports = mongoose.model("Course", courseSchema);
