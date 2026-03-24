/*
backend/routes/auth.js
- user signup / login APIs
*/
const express = require('express');
const router = express.Router();
const { signup, login, profile } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
// on account mode possibly fetch profile details after login
router.get('/profile', profile);

module.exports = router;
