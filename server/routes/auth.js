const express = require('express');
const router = express.Router();
const  authControllers  = require('../controllers/auth');

router.post('/signup', authControllers.signup);
router.post('/signin', authControllers.signin);

module.exports = router;
