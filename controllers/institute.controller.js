const instituteService = require("../services/institute.service");

exports.getInstitutes = async (req, res) => {
  const { stateId, typeId } = req.query;
  try {
    const institutes = await instituteService.getInstitutesByStateAndType(
      stateId,
      typeId
    );
    res.json(institutes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createInstitute = async (req, res) => {
  try {
    const institute = await instituteService.createInstitute(req.body);
    return res.status(201).json(institute);
  } catch (err) {
    // return a 400 if it's a validation-like message, otherwise 500
    const msg = err.message || "Server error";
    if (msg.match(/state not found|type could not/i)) {
      return res.status(400).json({ message: msg });
    }
    return res.status(500).json({ message: msg });
  }
};


exports.updateInstitute = async (req, res) => {
  try {
    const updatedInstitute = await instituteService.updateInstitute(
      req.params.id,
      req.body
    );
    if (!updatedInstitute)
      return res.status(404).json({ message: "Institute not found" });
    res.json(updatedInstitute);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteInstitute = async (req, res) => {
  try {
    const deletedInstitute = await instituteService.deleteInstitute(req.params.id);
    if (!deletedInstitute)
      return res.status(404).json({ message: "Institute not found" });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllInstitutes = async (req, res) => {
  try {
    const institutes = await instituteService.getAllInstitutes();
    res.json(institutes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};