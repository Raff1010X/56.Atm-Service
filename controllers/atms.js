const atms = require('../models/atms');

exports.calculateOrder = (req, res, next) => {
    const response = atms.calculateOrder(req.body);
    res.status(200).send(response);
};