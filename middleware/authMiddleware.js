// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Get token from Authorization header (Bearer token)

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, 'your_secret_key');
    req.user = decoded;  // Add user info to request object
    next();  // Proceed to the next middleware/route handler
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

// Middleware to check if the user is an admin
const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied, admin role required' });
  }
  next(); // Proceed to the next middleware/route handler
};

module.exports = { verifyToken, isAdmin };
