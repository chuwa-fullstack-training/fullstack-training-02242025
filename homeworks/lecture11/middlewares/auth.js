const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    req.user = null;
    return next();
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'secretKey'); // Use .env in production
    req.user = decoded;
  } catch (err) {
    req.user = null;
  }
  next();
};

module.exports = authMiddleware;
