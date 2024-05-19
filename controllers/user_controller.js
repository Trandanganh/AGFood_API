// controllers/userController.js

const mysql = require('mysql');
const connection = require('../db');

const login = (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM user_info WHERE (email = ? OR phone = ?) AND password = ?';
  connection.query(sql, [username, username, password], (err, results) => {
    if (err) {
      console.error('Error logging in:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    if (results.length === 0) {
      res.status(401).send('Incorrect username or password');
      return;
    }
    // User credentials are correct
    res.json({"result": { "code": 200, "message": "Success", "response": {"id": results[0]["user_id"]} }});
  });
};

const getAllUsers = (req, res) => {
  connection.query('SELECT * FROM user_info', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
};

// Function to handle getting a user by ID
const getUserById = (req, res) => {
  const userId = req.body.id;
  const sql = 'SELECT * FROM user_info WHERE user_id = ?';
  connection.query(sql, userId, (err, results) => {
    if (err) {
      console.error('Error fetching user:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('User not found');
      return;
    }
    res.json({"result": { "code": 200, "message": "Success", "response": results[0] }});
  });
};

// Function to handle creating a new user
const createUser = (req, res) => {
  const { email } = req.body;
  const newUser = {email};

  const sql = 'INSERT INTO user_info SET ?';
  connection.query(sql, newUser, (err, result) => {
    if (err) {
      console.error('Error creating user:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    newUser.id = result.insertId;
    res.json({"result": { "code": 200, "message": "Success", "response": {
    "id": result.insertId, "email": newUser.email
    } }});

  });
};

// Function to handle updating a user
const registerUser = (req, res) => {
  const userId = req.body.id;
  const {phone, name, email, password } = req.body;
  const updatedUser = { phone, name, email, password };
  const sql = 'UPDATE user_info SET ? WHERE user_id = ?';
  connection.query(sql, [updatedUser, userId], (err, result) => {
    if (err) {
      console.error('Error updating user:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send('User not found');
      return;
    }
    res.json({"result": { "code": 200, "message": "Success", "response": updatedUser }});
  });
};
const updateInfo = (req, res) => {
  const userId = req.body.id;
  const {phone, name, email, url, address } = req.body;
  const updatedUser = { phone, name, email , url, address};
  const sql = 'UPDATE user_info SET ? WHERE user_id = ?';
  connection.query(sql, [updatedUser, userId], (err, result) => {
    if (err) {
      console.error('Error updating user:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send('User not found');
      return;
    }
    res.json({"result": { "code": 200, "message": "Success", "response": updatedUser }});
  });
};

// Function to handle deleting a user
const deleteUser = (req, res) => {
  const userId = req.params.id;
  const sql = 'DELETE FROM user_info WHERE user_id = ?';
  connection.query(sql, userId, (err, result) => {
    if (err) {
      console.error('Error deleting user:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send('User not found');
      return;
    }
    res.send('User deleted');
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  registerUser,
  deleteUser,
  login,
  updateInfo,
};
