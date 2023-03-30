const express = require('express');
const router = express.Router();
const atms = require('../controllers/atms');

router.route('/calculateOrder').post(atms.calculateOrder);
router.route('/calculateOrder').get(atms.calculateOrder);

module.exports = router;
