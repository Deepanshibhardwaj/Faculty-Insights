const Teacher = require('../models/Teacher');

const enterTeachers = async () => {
  try {
    const insertedTeachers = await Teacher.create(teachers);
    console.log('Teachers inserted successfully:', insertedTeachers);
  } catch (error) {
    console.error('Error inserting teachers:', error);
  }
};

const teachers = [

    {
        name: "Dr. Vikas Saxena ",
        position: "Director & Head",
        photo: "./Vikassaxena.jpeg",
        cabinNumber: "227",
        email: "vikas.saxena@mail.jiit.ac.in",
        password: 123456
    },
    {
        name: "Dr. Parmeet Kaur Sodhi",
        position: "Associate Professor",
        image: "./ParmeetKaur.jpg",
        cabinNumber: "244",
        email: "parmeetkaur.sodhi@mail.jiit.ac.in",
        password: 123456
    },
    {
        name: "Dr. Niyati Aggrawal",
        position: "Assistant Professor",
        image: "./niyatiagarwal.jpg",
        cabinNumber: "218",
        email: "niyati.aggrawal@mail.jiit.ac.in",
        password: 123456
    },
    {
        name: "Dr. Shivendra Vikram Singh",
        position: "Assistant Professor",
        image: "./black.jpg",
        cabinNumber: "235",
        email: "shivendrav.singh@mail.jiit.ac.in",
        password: 123456
    },
    {
        name: "Dr.K.Rajalakshmi",
        position: "Assistant Professor",
        image: "./rajlakshmi.jpg",
        cabinNumber: "204",
        email: "k.rajalakshmi@mail.jiit.ac.in",
        password: 123456
    }
];

enterTeachers();