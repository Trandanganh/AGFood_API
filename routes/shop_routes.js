const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop_controller');
// Define routes

router.get('/searchShop', shopController.searchShop);
router.get('/get_all', shopController.getAllShop);
router.get('/:id', shopController.getShopById);
//router.post('/create', shopController.createShop);

module.exports = router;
