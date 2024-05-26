const express = require('express');
const router = express.Router();
const categoryRoutes = require('../controllers/category_controller');
// Define routes
//router.get('/login', userController.login);
//router.get('/get_all', shopController.getAllShop);
router.get('/getShopByCategory', categoryRoutes.getShopListByCategoryId);
router.post('/create', categoryRoutes.createCategory);
//router.put('/register', userController.registerUser);
//router.put('/update_info', userController.updateInfo);
//router.delete('/delete', userController.deleteUser);

module.exports = router;
