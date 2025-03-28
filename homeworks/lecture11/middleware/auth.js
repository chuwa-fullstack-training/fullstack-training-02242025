const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Get token from header
  let token;
  
  if (req.header('x-auth-token')) {
    token = req.header('x-auth-token');
  } else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    token = req.headers.authorization.split(' ')[1];
  }
  
  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    
    // Add user from payload
    req.user = decoded;
    
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};