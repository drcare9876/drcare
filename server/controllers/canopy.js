const Canopy = require('../models/Canopy');

// Function to calculate BMI
const calculateBMI = (weight, height) => {
  return weight / ((height / 100) ** 2);
}

// Function to calculate BMR
const calculateBMR = (weight, height, age, gender) => {
  if (gender === 'Male') {
    return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else if (gender === 'Female') {
    return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  } else {
    return 0; // Handle other gender cases if necessary
  }
}

// POST API to add new canopy data
exports.createCanopy = async (req, res) => {
  const { name, mobile, pincode, age, height, weight, gender } = req.body;

  const bmi = calculateBMI(weight, height);
  const bmr = calculateBMR(weight, height, age, gender);

  try {
    const newCanopy = new Canopy({ name, mobile, pincode, age, height, weight, gender, bmi, bmr });
    await newCanopy.save();
    res.status(201).json(newCanopy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PATCH API to update canopy data
exports.updateCanopy = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  if (updateData.weight && updateData.height) {
    updateData.bmi = calculateBMI(updateData.weight, updateData.height);
  }

  if (updateData.weight && updateData.height && updateData.age && updateData.gender) {
    updateData.bmr = calculateBMR(updateData.weight, updateData.height, updateData.age, updateData.gender);
  }

  try {
    const updatedCanopy = await Canopy.findByIdAndUpdate(id, updateData, { new: true });
    res.status(200).json(updatedCanopy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET API to fetch all canopy data
exports.getCanopyDetails = async (req, res) => {
  try {
    const canopies = await Canopy.find();
    res.status(200).json(canopies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE API to delete canopy data
exports.deleteCanopy = async (req, res) => {
  const { id } = req.params;

  try {
    await Canopy.findByIdAndDelete(id);
    res.status(200).json({ message: 'Canopy data deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
