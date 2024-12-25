const Medicine = require('../models/Medicine');

exports.getPaginatedMedicines = async (req, res) => {
  try {
    // Tags to shuffle medicines under
    const tags = [
      "Health Conditions",
      "All Medicine",
      "Baby Care",
      "Condoms",
      "Diabetic Care",
      "First Aid",
      "Kneecap",
      "Women's Care"
    ];

    const page = parseInt(req.params.page) || 1; // Default to page 1 if not provided
    const limit = 12; // Fixed limit of 12 items per page

    // Fetch medicines grouped by tags
    const medicinesByTag = {};
    for (const tag of tags) {
      medicinesByTag[tag] = await Medicine.find({ tags: tag }).limit(limit);
    }

    // Shuffle and interleave medicines
    const interleavedMedicines = [];
    let index = 0;
    while (interleavedMedicines.length < limit) {
      for (const tag of tags) {
        if (medicinesByTag[tag][index]) {
          interleavedMedicines.push(medicinesByTag[tag][index]);
        }
        if (interleavedMedicines.length >= limit) break; // Stop when the page limit is reached
      }
      index++;
    }

    // Get total count for pagination metadata
    const totalMedicines = await Medicine.countDocuments();

    // Respond with medicines and pagination metadata
    res.status(200).json({
      data: interleavedMedicines,
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


exports.getAllTags = async (req, res) => {
  try {
    // Aggregate to find all unique tags
    const tags = await Medicine.aggregate([
      { $unwind: "$tags" }, // Decompose tags array into individual documents
      { $group: { _id: "$tags" } }, // Group by unique tag
      { $sort: { _id: 1 } }, // Sort alphabetically
    ]);

    // Map the result to an array of strings
    const tagList = tags.map(tag => tag._id);

    res.status(200).json({
      tags: tagList,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
