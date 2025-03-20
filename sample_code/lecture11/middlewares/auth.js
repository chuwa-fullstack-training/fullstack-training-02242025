const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  // Get token from header
  //服务器会使用接收到的 Header 和 Payload 重新计算签名，并与传输过来的签名进行比较，以确保 JWT 没有被篡改-----------------------------------------+
  const token =
    req.header('x-auth-token') ||
    req.headers?.authorization?.match(/^Bearer (.+)/)[1];

  // req.header { authorization: 'Bearer hureuiwe.bhuerer.duwwe' }

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  try {
    // Verify token
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    // Add user from payload
    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
