import authService from "../services/auth.service.js";

export const signup = async (req, res) => {
  try {
    const { user, token } = await authService.signup(req.body);
    res.status(201).json({ message: "Signup successful", user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const signin = async (req, res) => {
  try {
    const { user, token } = await authService.signin(req.body);
    res.json({ message: "Signin successful", user, token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
