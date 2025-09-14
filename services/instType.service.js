const InstituteType = require('../models/InstituteType.model');

exports.getAllInstTypes = () => InstituteType.find();

exports.updateInstType = (id, data) => InstituteType.findByIdAndUpdate(id, data, { new: true });

exports.createInstType = (data) => InstituteType.create(data);

exports.deleteInstType = (id) => InstituteType.findByIdAndDelete(id);