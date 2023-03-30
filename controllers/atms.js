const atms = require('../models/atms');
const example = require('../example/example_1_request.json')

exports.calculateOrder = (req, res, next) => {
    const data = req.body || example;
    const response = atms.calculateOrder(data);
    res.status(200).send(response);
};