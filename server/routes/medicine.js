const express = require('express');
const router = express.Router();
const medicineController = require('../controllers/medicine');

// Define a GET route to fetch all medicines
router.get('/getMedicine', medicineController.getMedicines);

// Define a POST route to add a new medicine
router.post('/addMedicine', medicineController.addMedicine);

router.get('/equal-mrp-market-rate', medicineController.getMedicinesWithEqualMrpAndMarketRate);

module.exports = router;
