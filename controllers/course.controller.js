const courseService = require("../services/course.service");

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await courseService.getAllCourses();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCourses = async (req, res) => {
  const { instituteId } = req.query;
  // const { instituteId } = req.params;
  try {
    const courses = await courseService.getCoursesByInstitute(instituteId);
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSubjects = async (req, res) => {
  const {id} = req.params;
  try {
    const course = await courseService.getCourseSubjects(id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json({
      olevel: course.olevelSubjects,
      jamb: course.jambSubjects,
      compulsoryJamb: course.compulsoryJambSubjects,
      compulsoryOlevel: course.compulsoryOlevelSubjects,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createCourse = async (req, res) => {
  try {
    res.status(201).json(await courseService.createCourse(req.body));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    res.json(await courseService.updateCourse(req.params.id, req.body));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    await courseService.deleteCourse(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
