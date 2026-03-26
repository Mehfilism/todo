const db = require('../config/dbLogic');

exports.getTodos = async (req, res) => {
    try {
        const tasks = await db.getAllTasks();
        res.status(200).json(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ error: "Failed to fetch tasks" });
    }
};

exports.createTodo = async (req, res) => {
    try {
        const { taskName } = req.body; 

        if (!taskName) {
            return res.status(400).json({ error: "taskName is required" });
        }

        const newTask = await db.insertTask(taskName);
        res.status(201).json({ message: "Task created successfully", task: newTask });
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ error: "Failed to create task" });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const taskId = parseInt(req.params.id); 
        const wasDeleted = await db.removeTask(taskId);
        
        if (wasDeleted) {
            res.status(200).json({ message: `Task ${taskId} deleted` });
        } else {
            res.status(404).json({ error: "Task not found" });
        }
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ error: "Failed to delete task" });
    }
};
