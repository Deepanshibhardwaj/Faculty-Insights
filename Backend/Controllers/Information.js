const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const scheduleData = require('./scheduleData.json');


function findSlotForTeacherInDay(day, teacherCode, schedule) {
  if (schedule.Column1 !== day) {
      return null; 
  }

  for (const [timeSlot, slotInfo] of Object.entries(schedule)) {
      if (timeSlot !== "Column1") {
          if (typeof slotInfo === 'string' && slotInfo.includes(teacherCode)) {
              const [groupRoom] = slotInfo.split('-').slice(-1);
              const [group, room] = groupRoom.split('/');
              return { timeSlot, group, room };
          }
      }
  }

  return null; // Teacher not found in any time slot
}

// Controller to fetch all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to fetch student by ID
const getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    console.error('Error fetching student by ID:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllTeachers = async (req, res) => {
    try {
      const teachers = await Teacher.find();
      res.json(teachers);
    } catch (error) {
      console.error('Error fetching teachers:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Controller to fetch teacher by ID
  const getTeacherById = async (req, res) => {
    const { id } = req.params;
    try {
      const teacher = await Teacher.findById(id);
      if (!teacher) {
        return res.status(404).json({ message: 'Teacher not found' });
      }
      res.json(teacher);
    } catch (error) {
      console.error('Error fetching teacher by ID:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  const scheduling = async(req, res) => {
    try {
      const { day, teacherCode } = req.params;
      const slotInfo = findSlotForTeacherInDay(day, teacherCode, scheduleData);
      if (slotInfo) {
        res.json(slotInfo);
      } else {
        res.status(404).json({ error: "Teacher not found in the schedule for the given day." });
      }
    } catch (error) {
        console.error('Error in scheduling:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = {
  getAllStudents,
  getStudentById,
  getTeacherById,
  getAllTeachers,
  scheduling
};
