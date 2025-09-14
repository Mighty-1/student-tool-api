const State = require("../models/State.model");

exports.getAllStates = () => State.find();

exports.createState = (data) => State.create(data);

exports.updateState = (id, data) =>
  State.findByIdAndUpdate(id, data, { new: true });

exports.deleteState = (id) => State.findByIdAndDelete(id);
