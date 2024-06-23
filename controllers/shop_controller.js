// controllers/userController.js

const mysql = require('mysql');
const connection = require('../db');

//const login = (req, res) => {
//  const { username, password } = req.body;
//  const sql = 'SELECT * FROM user_info WHERE (email = ? OR phone = ?) AND password = ?';
//  connection.query(sql, [username, username, password], (err, results) => {
//    if (err) {
//      console.error('Error logging in:', err);
//      res.status(500).send('Internal Server Error');
//      return;
//    }
//    if (results.length === 0) {
//      res.status(401).send('Incorrect username or password');
//      return;
//    }
//    // User credentials are correct
//    res.json({"result": { "code": 200, "message": "Success", "response": {"id": results[0]["user_id"]} }});
//  });
//};

const searchShop = (req, res) => {
  const textSearch = req.body.textSearch;
  const searchValue = `%${textSearch}%`;
  if (!textSearch || typeof textSearch !== 'string') {
    res.status(400).json({
      result: {
        code: 400,
        message: "Invalid text search value",
        response: null
      }
    });
    return;
  }

  const sql = 'SELECT * FROM shop WHERE name LIKE ?';
  connection.query(sql, [searchValue], (err, results) => {
    if (err) {
      console.error('Error fetching shops:', err);
      res.status(500).json({
        result: {
          code: 500,
          message: 'Internal Server Error',
          response: null
        }
      });
      return;
    }

    if (results.length === 0) {
      res.status(200).json({
        result: {
          code: 404,
          message: 'No shops found',
          response: null
        }
      });
      return;
    }
    res.status(200).json({
      result: {
        code: 200,
        message: 'Success',
        response: {total: results.length,data:results}
      }
    });
  });
};

const getAllShop = (req, res) => {
  connection.query('SELECT * FROM shop', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
};

// Function to handle getting a shop by ID
const getShopById = (req, res) => {
  const id = req.body.id;
  const sql = 'SELECT * FROM shop WHERE id = ?';
  connection.query(sql, [id], (err, results) => {
    if (err) {
      console.error('Error fetching shop:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('Shop not found');
      return;
    }
    res.json({"result": { "code": 200, "message": "Success", "data": results[0] }});
  });
};
// Function to handle getting a shop by ID
//const searchShop = (req, res) => {
//  const textSearch = req.body.id;
//  const sql = 'SELECT * FROM shop WHERE id = ?';
//  connection.query(sql, [id], (err, results) => {
//    if (err) {
//      console.error('Error fetching shop:', err);
//      res.status(500).send('Internal Server Error');
//      return;
//    }
//    if (results.length === 0) {
//      res.status(404).send('Shop not found');
//      return;
//    }
//    res.json({"result": { "code": 200, "message": "Success", "response": results[0] }});
//  });
//};

// Function to handle creating a new user
const createShop = (req, res) => {
  const { url, name, favorite, verified } = req.body;
  const newShop = {url, name, favorite, verified};

  const sql = 'INSERT INTO shop SET ?';
  connection.query(sql, newShop, (err, result) => {
    if (err) {
      console.error('Error creating shop:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    newShop.id = result.insertId;
    res.json({"result": { "code": 200, "message": "Success", "response": {
    "id": result.insertId
    } }});
  });
};

//// Function to handle updating a user
//const registerUser = (req, res) => {
//  const userId = req.body.id;
//  const {phone, name, email, password } = req.body;
//  const updatedUser = { phone, name, email, password };
//  const sql = 'UPDATE user_info SET ? WHERE user_id = ?';
//  connection.query(sql, [updatedUser, userId], (err, result) => {
//    if (err) {
//      console.error('Error updating user:', err);
//      res.status(500).send('Internal Server Error');
//      return;
//    }
//    if (result.affectedRows === 0) {
//      res.status(404).send('User not found');
//      return;
//    }
//    res.json({"result": { "code": 200, "message": "Success", "response": updatedUser }});
//  });
//};
//const updateInfo = (req, res) => {
//  const userId = req.body.id;
//  const {phone, name, email, url, address } = req.body;
//  const updatedUser = { phone, name, email , url, address};
//  const sql = 'UPDATE user_info SET ? WHERE user_id = ?';
//  connection.query(sql, [updatedUser, userId], (err, result) => {
//    if (err) {
//      console.error('Error updating user:', err);
//      res.status(500).send('Internal Server Error');
//      return;
//    }
//    if (result.affectedRows === 0) {
//      res.status(404).send('User not found');
//      return;
//    }
//    res.json({"result": { "code": 200, "message": "Success", "response": updatedUser }});
//  });
//};
//
//// Function to handle deleting a user
//const deleteUser = (req, res) => {
//  const userId = req.params.id;
//  const sql = 'DELETE FROM user_info WHERE user_id = ?';
//  connection.query(sql, userId, (err, result) => {
//    if (err) {
//      console.error('Error deleting user:', err);
//      res.status(500).send('Internal Server Error');
//      return;
//    }
//    if (result.affectedRows === 0) {
//      res.status(404).send('User not found');
//      return;
//    }
//    res.send('User deleted');
//  });
//};

module.exports = {

  searchShop,
  getAllShop,
  getShopById,
//  createShop,
//  deleteUser,
//  login,
//  updateInfo,
};
