const User = require('../models/User');

exports.signup = async (req, res) => {
  const { firstName, lastName, phone, pincode } = req.body;

  try {
    const newUser = new User({
      firstName,
      lastName,
      phone,
      pincode,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

exports.signin = async (req, res) => {
    const { phone } = req.body;
  
    try {
      const user = await User.findOne({ phone });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Redirect user or send appropriate response
      res.status(200).json({ message: 'Signin successful', user });
    } catch (error) {
      res.status(500).json({ message: 'Error signing in', error });
    }
  };