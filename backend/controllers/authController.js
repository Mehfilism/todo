/*
backend/controllers/authController.js
- Implements business logic for auth routes
*/
const db = require('../db'); // eventually create db connection module

exports.signup = async (req, res) => {
  // expect { name, nickname, bio, profession, email, password }
  // hash password, insert into users table
  // respond { success: true, userId }
};

exports.login = async (req, res) => {
  // expect { email, password }
  // verify credentials, return JWT token / session data
  // respond { token, user: {id,name,...} }
};

exports.profile = async (req, res) => {
  // auth check required in production
  // send user profile fields
};
