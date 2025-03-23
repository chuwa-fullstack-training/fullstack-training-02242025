const jwt = require('jsonwebtoken');

exports.authenticateUser = (req, res, next) => {
  const token =
    req.header('x-auth-token') ||
    req.headers?.authorization?.match(/^Bearer (.+)/)?.[1];

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'defaultSecret');
    req.user = decoded;
    next();
  } catch (err) {
    req.user = null;
    next();
  }
};
