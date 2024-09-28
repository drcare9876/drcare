const mongoose = require('mongoose');

const canopySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  bmi: {
    type: Number
  },
  bmr: {
    type: Number
  }
});

module.exports = mongoose.model('Canopy', canopySchema);
