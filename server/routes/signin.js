const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Adjust the path as needed


router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    // Check password

    if (password != user.password) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Here you would typically create and send a token
    // For simplicity, we're just sending a success message
    res.json({ message: 'Sign in successful', userId: user._id });

  } catch (error) {
    console.error('Sign in error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;