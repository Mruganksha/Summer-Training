const express = require('express');
const app = express();

const userModel = require('./userModel');

app.get('/', (req, res) => {
    res.send("hey")
});

app.listen(3000);