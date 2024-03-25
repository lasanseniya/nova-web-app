const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;

  // Check if token is present in headers
  let authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
  }

  // If token is not found in headers, check cookies
  if (!token && req.cookies.token) {
    token = req.cookies.token;
  }

  // If token is not found in headers or cookies, try local storage
  if (!token && window.localStorage.getItem("token")) {
    token = window.localStorage.getItem("token");
  }

  // Verify token if found
  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("Not authorized, token failed");
      }

      req.user = decoded.user;
      next();
    });
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = validateToken;
