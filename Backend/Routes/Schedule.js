const express = require('express');
const { scheduleByDayAndCode } = require('../Controllers/scheduleFinding');
const router = express.Router();

router.get('/:Code',scheduleByDayAndCode);

module.exports = router;
