// utils/authMiddleware.js
const jwt = require("jsonwebtoken");

function protect(req, res, next) {
  const authHeader = req.headers["authorization"] || req.headers["Authorization"];
  if (!authHeader) return res.status(401).json({ error: "No token provided" });

  const parts = authHeader.split(" ");
  const token = parts.length === 2 ? parts[1] : parts[0]; // accept both "Bearer <token>" and raw token

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: "Invalid token" });
  }
}

module.exports = { protect };
