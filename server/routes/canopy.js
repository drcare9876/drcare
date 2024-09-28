const express = require('express');
const router = express.Router();
const { createCanopy, getCanopyDetails, updateCanopy, deleteCanopy } = require('../controllers/canopy');

router.post('/canopy/add', createCanopy);
router.get('/canopy/get', getCanopyDetails);
router.patch('/canopy/update/:id', updateCanopy);
router.delete('/canopy/delete/:id', deleteCanopy);

module.exports = router;
