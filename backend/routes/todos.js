/*
backend/routes/todos.js
- create/read/update/delete todo endpoints
*/
const express = require('express');
const router = express.Router();
const { getTodos, addTodo, updateTodo, deleteTodo } = require('../controllers/todoController');

router.get('/', getTodos);
router.post('/', addTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
