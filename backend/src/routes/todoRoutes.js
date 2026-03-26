const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const authMiddleware = require('../middlewares/authMiddleware'); // Import the Bouncer

// We put the 'authMiddleware' in the middle. 
// The request must pass the Bouncer before it reaches the Controller.
router.get('/', authMiddleware, todoController.getTodos);
router.post('/', authMiddleware, todoController.createTodo);
router.delete('/:id', authMiddleware, todoController.deleteTodo);

module.exports = router;
