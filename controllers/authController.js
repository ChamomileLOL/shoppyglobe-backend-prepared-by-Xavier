const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  // Dummy login logic (replace this with database check if needed)
  if (email === "xavier@example.com" && password === "123456") {
    const token = generateToken("user123"); // You can replace "user123" with any user ID
    return res.status(200).json({
      message: "User logged in successfully",
      user: { id: "user123", email },
      token
    });
  }

  res.status(401).json({ message: "Invalid credentials" });
};

module.exports = { login };
