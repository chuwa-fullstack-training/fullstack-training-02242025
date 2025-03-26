const jwt = require("jsonwebtoken");

// Authentication middleware to protect routes
const authenticate = async (req, res, next) => {
  try {
    // Get token from headers
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Authentication invalid - No token provided" });
    }

    // Extract token from "Bearer TOKEN" format
    const token = authHeader.split(" ")[1];

    try {
      // Verify token
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || "your-secret-key"
      );

      // Add employee info to request object
      req.employee = decoded;

      // Continue with the next middleware or route handler
      next();
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Authentication invalid - Invalid token" });
    }
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res
      .status(500)
      .json({ message: "Server error during authentication" });
  }
};

// Optional authentication middleware
// If token is provided, user gets authenticated, otherwise continues as unauthenticated
const optionalAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    // No token, continue as unauthenticated
    return next();
  }

  // There is a token, try to authenticate
  authenticate(req, res, next);
};

module.exports = { authenticate, optionalAuth };
