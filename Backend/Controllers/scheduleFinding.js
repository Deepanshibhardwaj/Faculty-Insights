const scheduleData = require('./scheduleData.json');
const TeacherCode = require('./TeacherCode.json');

// Define the scheduleByDayAndCode function

const Days = ["Monday,Tuesday,Wednesday,Thursday,Friday,Saturday"]
const scheduleByDayAndCode = async (req, res) => {
    try {
        const { Code } = req.params;
        console.log(Code);

        const matchingSlots = {};

        // Iterate through each day of the week
        scheduleData.forEach(daySchedule => {
            const day = daySchedule["Column1"];
            console.log("Day:", day);
            if (!matchingSlots.hasOwnProperty(day) || !Array.isArray(matchingSlots[day])) {
                matchingSlots[day] = [];
            }

            Object.keys(daySchedule).forEach(timeSlot => {
                if (timeSlot !== "Column1") {
                    console.log("Time Slot:", timeSlot);
                    const details = daySchedule[timeSlot].split('/').map(detail => detail.trim());
                    const classdetails = details[0].split('-');
                    const classroom = classdetails[classdetails.length - 1];
        

                    const lastElement = details[details.length - 1];
                    const TeacherCode = lastElement.split(',');
                    console.log(TeacherCode);

                    // Check if the teacher code matches the provided code
                    for(let i = 0;i<TeacherCode.length;i++){
                        if(TeacherCode[i] == Code){
                            matchingSlots[day].push({timeSlot,classroom});

                        }
                    }
                }
            });

            console.log(); 
        });

        res.status(200).json(matchingSlots);
    } catch (error) {
        console.error('Error fetching students:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { scheduleByDayAndCode };
