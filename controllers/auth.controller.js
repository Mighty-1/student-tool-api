// controllers/auth.controller.js
const authService = require("../services/auth.service");

exports.signup = async (req, res) => {
  try {
    const { user, token } = await authService.signup(req.body);
    res.status(201).json({ message: "Signup successful", user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const { user, token } = await authService.signin(req.body);
    res.json({ message: "Signin successful", user, token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
