// We import Rahul's DB functions (assuming he created dbLogic.js)
const db = require('../config/dbLogic'); 

exports.createTask = async (req, res) => {
    try {
        const { taskName } = req.body;

        // 1. Validation (Don't trust the frontend)
        if (!taskName) {
            return res.status(400).json({ error: "Task name is required" });
        }

        // 2. Call Rahul's database function
        // (You don't care how he writes the SQL, you just await the result)
        const newTask = await db.insertTask(taskName);

        // 3. Send Success Response
        res.status(201).json({ message: "Task created", data: newTask });

    } catch (error) {
        // 4. Handle Errors Gracefully
        console.error("Error creating task:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
