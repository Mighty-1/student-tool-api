const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');

router.get('/all-courses', courseController.getAllCourses);
router.get('/get-courses-by-institute', courseController.getCourses);
router.get('/subjects/:id', courseController.getSubjects);
router.post('/add-course', courseController.createCourse);
router.put('/update-course/:id', courseController.updateCourse);
router.delete('/delete/:id', courseController.deleteCourse);

module.exports = router;
