const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: [{
    type: String
  }],
  mrp: {
    type: Number,
    required: true
  },
  market_rate:{
    type: Number,
  },
  brand:{
    type:String,
  },
  image: {
    type: String,
    required: true
  }
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
