const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order');
 

router.post('/placeorder', orderController.createOrder);
//cloudinary upload
router.post('/prescription/upload',orderController.uploadPhoto);

module.exports = router;
