const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');
// Define routes
router.get('/login', userController.login);
router.get('/get_all', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/create', userController.createUser);
router.put('/register', userController.registerUser);
router.put('/update_info', userController.updateInfo);
router.delete('/delete', userController.deleteUser);

module.exports = router;
