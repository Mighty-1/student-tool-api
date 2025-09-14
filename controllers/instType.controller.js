const instTypeService = require('../services/instType.service');

exports.getInstTypes = async (req, res) => {
  try {
    const instTypes = await instTypeService.getAllInstTypes();
    res.json(instTypes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateInstType = async (req, res) => {
  try {
    const updatedInstType = await instTypeService.updateInstType(req.params.id, req.body);
    res.json(updatedInstType);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createInstType = async (req, res) => {
  try {
    const newInstType = await instTypeService.createInstType(req.body);
    res.status(201).json(newInstType);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteInstType = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedInstType = await instTypeService.deleteInstType(id);
    if (!deletedInstType) {
      return res.status(404).json({ message: 'Institute type not found' });
    }
    res.status(204).end("Deleted");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
