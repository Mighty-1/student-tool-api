const authService = require("../services/auth.service");

const signup = async (req, res) => {
  try {
    const user = await authService.signup(req.body);
    res.status(201).json({ message: "Signup successful", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signin = async (req, res) => {
  try {
    const { user, token } = await authService.signin(req.body);
    res.json({ message: "Signin successful", user, token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = { signup, signin };
