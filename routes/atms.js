const express = require('express');
const router = express.Router();
const atms = require('../controllers/atms');

router.route('/calculateOrder').post(atms.calculateOrder);

module.exports = router;
