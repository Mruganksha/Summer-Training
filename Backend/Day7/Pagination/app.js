const express = require('express');
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Pagination");

const Product = mongoose.model('Product', new mongoose.Schema({
    name: String,
    price: Number
}))

app.get('/products', async (req, res) => {
    const page = parseInt(req.query.page) || 1; //which page number
    const limit = parseInt(req.query.limit) || 10; //how many items per page

    const startIndex = (page - 1) * limit;
    const total = await Product.countDocuments();

    const products = await Product.find().skip(startIndex).limit(limit);

    res.json({
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
        data: products
    });
})

app.listen(3000);