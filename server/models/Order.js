const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }
});

const orderItemSchema = new mongoose.Schema({
  serialNo: { type: Number },
  name: { type: String },
  quantity: { type: Number }
});

const orderSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: String, required: true },
  address: { type: String, required: true },
  mobile: { type: String, required: true },
  altMobile: { type: String },
  email: { type: String, required: true },
  items: [itemSchema],
  orderItems: [orderItemSchema], // Updated array for user-inputted medicines
  prescriptionImg: { type: String },
  applyPrescription: { type: Boolean, default: false },
  totalAmount: { type: Number, required: true }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
