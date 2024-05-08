const jwt = require('jsonwebtoken');
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const bcrypt = require('bcrypt');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'di2jwnbwk',
  api_key: 619198869444886,
  api_secret: 'jOxe7yAUGwQeAEgrHCtoa4EPKqQ',
});

const StudentLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await Student.findOne({ email });

    if (!student) {
      return res.status(404).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid =  bcrypt.compare(password, student.password);
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

    const isPasswordValid =  bcrypt.compare(password, teacher.password);
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

const createTeacher = async (req, res) => {
  try {
    const { name, position, cabinNumber, email, password, teacherCode } = req.body;
    

    if (!req.file || !req.file.path) {
      return res.status(400).json({ message: 'Photo upload failed' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const uploadedPhoto = await cloudinary.uploader.upload(req.file.path);

    const teacher = await Teacher.create({
      name,
      position,
      photo: uploadedPhoto.secure_url, 
      cabinNumber,
      email,
      password: hashedPassword,
      teacherCode
    });

    res.status(201).json({ message: 'Teacher created successfully', teacher });
  } catch (error) {
    console.error('Error creating teacher:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};



module.exports = { StudentLogin, TeacherLogin, createTeacher }