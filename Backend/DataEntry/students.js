
const bcrypt = require('bcrypt');
const Student = require('./models/Student');

const enterStudent = async () => {
  try {
    // Hash passwords
    const hashedStudents = await Promise.all(student.map(async (s) => {
      const hashedPassword = await bcrypt.hash(s.password, 10);
      return { ...s, password: hashedPassword };
    }));

    // Insert students into the database
    const insertedStudents = await Student.create(hashedStudents);
    console.log('Students inserted successfully:', insertedStudents);
  } catch (error) {
    console.error('Error inserting students:', error.message);
  }
};

const student = [
  {
    "name": "Diya",
    "rollNumber": "21103327",
    "email": "21103327@mail.jiit.ac.in",
    "password": "123456"
  },
  {
    "name": "Deepanshi",
    "rollNumber": "21103333",
    "email": "21103333@mail.jiit.ac.in",
    "password": "123456"
  },
  {
    "name": "Lakshay",
    "rollNumber": "21103324",
    "email": "21103324@mail.jiit.ac.in",
    "password": "123456"
  },
  {
    "name": "Vaibhav",
    "rollNumber": "21103328",
    "email": "21103328@mail.jiit.ac.in",
    "password": "123456"
  }
];

enterStudent();