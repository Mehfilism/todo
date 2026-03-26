let mockDatabase = [
    { id: 1, taskName: "Connect Frontend to Backend", status: "pending" },
    { id: 2, taskName: "Push code to GitHub", status: "pending" }
];

exports.getAllTasks = async () => {
    return mockDatabase;
};

exports.insertTask = async (taskName) => {
    const newTask = {
        id: Date.now(),
        taskName: taskName,
        status: "pending"
    };
    mockDatabase.push(newTask);
    return newTask;
};

exports.removeTask = async (taskId) => {
    const initialLength = mockDatabase.length;
    mockDatabase = mockDatabase.filter(task => task.id !== taskId);
    return mockDatabase.length !== initialLength;
};
