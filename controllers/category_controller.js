// controllers/userController.js

const mysql = require('mysql');
const connection = require('../db');

const getShopListByCategoryId = async (req, res) => {

    var shopIds = [];
    var shops = [];
    const categoryType = parseInt(req.body.type);
    if (isNaN(categoryType)) {
        return res.status(400).json({ error: 'Invalid categoryType' });
      }

      try {
        // Truy vấn bảng category để lấy danh sách shopId
          connection.query('SELECT shopId FROM category WHERE type = ?', [categoryType], (err, resp) => {
            var list = resp.map(item => item.shopId);
            if (resp.length == 0) {
                          return res.json({"result": { "code": 200, "message": "Success", "response": {"total": 0,"response":[]} }});

            }
              connection.query('SELECT * FROM shop WHERE id IN (?)', [list], (err, response) => {
              if (response.length == 0) {
              return res.json({"result": { "code": 200, "message": "Success", "response": {"total": 0,"response":[]} }});

              } else {
              return res.json({"result": { "code": 200, "message": "Success", "response": {"total": response.length,"response": response} }});

              }
                     });
         });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
      }
}


// Function to handle creating a new user
const createCategory = (req, res) => {
  const { type, shopId } = req.body;
  const newShop = { type, shopId};

  const sql = 'INSERT INTO category SET ?';
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


module.exports = {
  getShopListByCategoryId,
  createCategory,
};
