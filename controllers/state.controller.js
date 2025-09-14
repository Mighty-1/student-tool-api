const stateService = require("../services/state.service");

exports.getStates = async (req, res) => {
  try {
    const states = await stateService.getAllStates();
    res.json(states);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createState = async (req, res) => {
  try {
    res.status(201).json(await stateService.createState(req.body));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateState = async (req, res) => {
  try {
    res.json(await stateService.updateState(req.params.id, req.body));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteState = async (req, res) => {
  try {
    await stateService.deleteState(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
