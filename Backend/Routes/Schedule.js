const express = require('express');
const router = express.Router();

class ScheduleController {
    constructor(scheduleData) {
        this.scheduleData = scheduleData;
    }

    getSchedule(day) {
        return this.scheduleData.find(schedule => schedule.Column1 === day) || null;
    }

    updateSchedule(day, newSchedule) {
        const scheduleIndex = this.scheduleData.findIndex(schedule => schedule.Column1 === day);
        if (scheduleIndex !== -1) {
            this.scheduleData[scheduleIndex] = { ...this.scheduleData[scheduleIndex], ...newSchedule };
            return true;
        }
        return false;
    }
}

const scheduleData = [
    { Column1: "Monday", "9-9.50 AM": "Event 1", "10-10.50 AM": "Event 2" },
    { Column1: "Tuesday", "9-9.50 AM": "Event 3", "10-10.50 AM": "Event 4" },
];

const scheduleController = new ScheduleController(scheduleData);

router.get('/:day', (req, res) => {
    const { day } = req.params;
    const schedule = scheduleController.getSchedule(day);
    if (schedule) {
        res.json(schedule);
    } else {
        res.status(404).json({ message: 'Schedule not found for the specified day' });
    }
});

router.put('/:day', (req, res) => {
    const { day } = req.params;
    const newSchedule = req.body;
    const updated = scheduleController.updateSchedule(day, newSchedule);
    if (updated) {
        res.json({ message: 'Schedule updated successfully' });
    } else {
        res.status(404).json({ message: 'Failed to update schedule. Day not found' });
    }
});

module.exports = router;
