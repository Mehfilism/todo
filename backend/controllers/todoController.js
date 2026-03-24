/*
backend/controllers/todoController.js
- todo operations
*/
const db = require('../db');

exports.getTodos = async (req, res) => {
  // account mode: get user id from token / auth header
  // query todos by user_id
};

exports.addTodo = async (req, res) => {
  // validate title
  // insert todo with user_id (or null/guest)
};

exports.updateTodo = async (req, res) => {
  // mark complete / update title
};

exports.deleteTodo = async (req, res) => {
  // delete by id + owner check
};
