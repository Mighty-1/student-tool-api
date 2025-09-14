const mongoose = require("mongoose");

const instituteSchema = new mongoose.Schema({
  instName: { type: String, required: true, unique: true },
  state: { type: mongoose.Schema.Types.ObjectId, ref: "State", required: true },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "InstituteType",
    required: true,
  },
});

module.exports = mongoose.model("Institute", instituteSchema);
