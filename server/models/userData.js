const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'is invalid'],
  },
  pincode: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true,
});

const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;
