const express = require('express');
const router = express.Router();
const {
  getAllStudents,
  getStudentById,
  getAllTeachers,
  getTeacherById,
  scheduling
} = require('../Controllers/Information');

// Routes for students
router.get('/students', getAllStudents);
router.get('/students/:id', getStudentById);

// Routes for teachers
router.get('/teachers', getAllTeachers);
router.get('/teachers/:id', getTeacherById);

// Route for scheduling
router.get('/schedule', scheduling);

module.exports = router;
