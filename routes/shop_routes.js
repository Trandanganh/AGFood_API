const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop_controller');
// Define routes
//router.get('/login', userController.login);
router.get('/get_all', shopController.getAllShop);
router.get('/:id', shopController.getShopById);
router.post('/create', shopController.createShop);
router.get('/searchShop', shopController.searchShop);
//router.put('/update_info', userController.updateInfo);
//router.delete('/delete', userController.deleteUser);

module.exports = router;
