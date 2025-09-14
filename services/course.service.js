const Course = require("../models/Course.model");

exports.getAllCourses = () => {
  return Course.find();
};

exports.getCoursesByInstitute = (instituteId) => {
  return Course.find({ institute: instituteId });
};

exports.getCourseSubjects = (courseId) => {
  return Course.findById(courseId).select("olevelSubjects jambSubjects compulsoryJambSubjects compulsoryOlevelSubjects");
};

exports.createCourse = (data) => Course.create(data);

exports.updateCourse = (id, data) =>
  Course.findByIdAndUpdate(id, data, { new: true });

exports.deleteCourse = (id) => Course.findByIdAndDelete(id);
