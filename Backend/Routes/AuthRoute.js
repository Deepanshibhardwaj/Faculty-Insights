const express = require('express');
const router = express.Router();
const { StudentLogin, TeacherLogin } = require('../Controllers/auth');


router.post('/student-login', StudentLogin);
router.post('/teacher-login', TeacherLogin);

module.exports = router;
