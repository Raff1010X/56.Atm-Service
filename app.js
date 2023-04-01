const express = require('express');

//** Initialize express app
const app = express();
app.use(express.json());

//** Test GET
app.get('/', (req, res) => {
    res.status(200).send("Server is ready to answer Your requests.");
});

//** Routes middlewares
app.use('/atms', require('./routes/atms'));

module.exports = app;
