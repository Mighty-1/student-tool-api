const mongoose = require("mongoose");

const instituteTypeSchema = new mongoose.Schema({
  instType: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("InstituteType", instituteTypeSchema);
