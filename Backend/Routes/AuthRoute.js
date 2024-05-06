const express = require('express');
const router = express.Router();
const { StudentLogin, TeacherLogin, createTeacher } = require('../Controllers/auth');
const upload = require('../middleware/multer');

router.post('/student-login', StudentLogin);
router.post('/teacher-login', TeacherLogin);
router.post('/teacher-signup',upload.single('image'),createTeacher);

module.exports = router;
