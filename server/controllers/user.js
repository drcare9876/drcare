const UserData = require('../models/userData');

exports.createUser = async (req, res) => {
  try {
    const { name, phone, email, pincode } = req.body;
    console.log(req.body);

    if (!name || !phone || !email || !pincode) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await UserData.findOne({ email });

    if (existingUser) {
      return res.status(200).json({ message: 'Email already exists' });
    }

    const newUser = new UserData({ name, phone, email, pincode });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
