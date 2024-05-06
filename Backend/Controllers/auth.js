const jwt = require('jsonwebtoken');
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const bcrypt = require('bcrypt');

const StudentLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await Student.findOne({ email });

    if (!student) {
      return res.status(404).json({ message: 'Invalid email or password' });
    }

    if (typeof student.password !== 'string' || typeof password !== 'string') {
      return res.status(500).json({ message: 'Invalid password data type' });
    }

    const isPasswordValid = await bcrypt.compare(password, student.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    

    const token = jwt.sign({ id: student._id }, 'Diya', { expiresIn: '1h' });

    res.status(200).json({ token , student});
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const TeacherLogin = async (req, res) => {
  
  try {
    const { email, password } = req.body;
    const teacher = await Teacher.findOne({ email });

    if (!teacher) {
      return res.status(404).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, teacher.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: teacher._id }, 'Diya', { expiresIn: '1h' });

    res.status(200).json({ token, teacher });
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { StudentLogin, TeacherLogin }