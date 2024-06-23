const Medicine = require('../models/Medicine');

// GET request handler to fetch all medicines
exports.getMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.status(200).json(medicines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST request handler to add a new medicine
exports.addMedicine = async (req, res) => {
  const { name, description, tags, mrp, image } = req.body;

  const newMedicine = new Medicine({
    name,
    description,
    tags,
    mrp,
    image
  });

  try {
    const savedMedicine = await newMedicine.save();
    res.status(201).json("Medicine Added Successfully!!!");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
