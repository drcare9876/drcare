const Medicine = require('../models/Medicine');

// GET request handler to fetch paginated medicines
exports.getPaginatedMedicines = async (req, res) => {
  try {
    // Get page from URL parameter and set default limit
    const page = parseInt(req.params.page) || 1; // Default to page 1 if not provided
    const limit = 12; // Fixed limit of 12 items per page

    // Calculate the number of items to skip
    const skip = (page - 1) * limit;

    // Fetch medicines with pagination
    const medicines = await Medicine.find()
      .skip(skip)
      .limit(limit);

    // Get total count for pagination metadata
    const totalMedicines = await Medicine.countDocuments();

    // Respond with medicines and pagination metadata
    res.status(200).json({
      data: medicines,
      meta: {
        totalItems: totalMedicines,
        currentPage: page,
        totalPages: Math.ceil(totalMedicines / limit),
        itemsPerPage: limit,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// POST request handler to add a new medicine
exports.addMedicine = async (req, res) => {
  const { name, description, tags, mrp, image,market_rate,brand } = req.body;

  const newMedicine = new Medicine({
    name,
    description,
    tags,
    mrp,
    image,
    market_rate,
    brand
  });

  try {
    const savedMedicine = await newMedicine.save();
    res.status(201).json("Medicine Added Successfully!!!");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// GET request handler to fetch medicines where mrp equals market_rate
exports.getMedicinesWithEqualMrpAndMarketRate = async (req, res) => {
  try {
    const medicines = await Medicine.aggregate([
      {
        $match: { $expr: { $eq: ["$mrp", "$market_rate"] } }
      }
    ]);
    res.status(200).json(medicines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

