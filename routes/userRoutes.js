// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

// Register user
router.post('/register', userController.registerUser);

// Login user and get token
router.post('/login', userController.loginUser);

// Admin-specific route (e.g., only accessible by admin users)
router.get('/admin', verifyToken, isAdmin, (req, res) => {
  res.status(200).json({ message: 'Welcome, admin!' });
});

module.exports = router;
