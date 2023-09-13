const User = require('../models/User');
const bcrypt = require('bcrypt'); // You might need bcrypt for password hashing

const authController = {
    // Other authentication methods...
  
    // Signup route
    signup: async (req, res) => {
      try {
        // Extract user data from the request body
        const { username, email, password } = req.body;
  
        // Hash the password (you should use a hashing library like bcrypt)
        const hashedPassword = await bcrypt.hash(password, 10); // Salt rounds: 10
  
        // Create a new user in the database
        const newUser = await User.create({
          username,
          email,
          password: hashedPassword, // Store the hashed password in the database
        });
  
        // Send a success response
        res.status(201).json(newUser);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
    },
  };
  
  module.exports = authController;